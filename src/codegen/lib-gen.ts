import { FunctionDef, Return, Param } from './function-defs'

function tsTypeOfReturnType(returnType: Return): 'void' | 'number' {
  switch (returnType) {
    case Return.Void:
      return 'void'
    case Return.Int:
    case Return.IntStatus:
    case Return.IntCursor:
    case Return.IntDiscard:
    case Return.IntWindowState:
    case Return.Hwnd:
      return 'number'
  }
}

function tsTypeOfParamType(paramType: Param): 'number' | 'Buffer' {
  switch (paramType) {
    case Param.Int:
    case Param.IntBool:
    case Param.IntSetWindowState:
    case Param.IntSendMode:
    case Param.Hwnd:
    case Param.OutWstrSize:
      return 'number'
    case Param.InWstr:
    case Param.InWstrCommand:
    case Param.InWstrCommandExtra:
    case Param.InWstrDescription:
    case Param.InWstrMouseButton:
    case Param.InWstrMouseScrollDirection:
    case Param.OutWstr:
    case Param.OutPoint:
    case Param.OutRectangle:
      return 'Buffer'
  }
}

function libFunctionType(name: string, functionDef: FunctionDef): string {
  const returnType = tsTypeOfReturnType(functionDef.return)
  const params = functionDef.params.map(
    ({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`,
  )
  params.push(`callback: (error: any, result: ${returnType}) => void`)
  return `${name}: { async(${params.join(', ')}): void }`
}

function libPromisifiedFunctionType(
  name: string,
  functionDef: FunctionDef,
): string {
  const returnType = tsTypeOfReturnType(functionDef.return)
  const params = functionDef.params.map(
    ({ key, type }) => `${key}: ${tsTypeOfParamType(type)}`,
  )
  return `${name}(${params.join(', ')}): Promise<${returnType}>`
}

export function generatePromisifiedLibInterface(
  functions: Record<string, FunctionDef>,
): string {
  const definitions = []
  for (const functionName in functions) {
    definitions.push(
      libPromisifiedFunctionType(functionName, functions[functionName]),
    )
  }
  return `export interface PromisifiedAutoitLib {
    ${definitions.join('\n')}
  }`
}

export function generateLibInterface(
  functions: Record<string, FunctionDef>,
): string {
  const definitions = []
  for (const functionName in functions) {
    definitions.push(libFunctionType(functionName, functions[functionName]))
  }
  return `export interface AutoitLib {
    ${definitions.join('\n')}
  }`
}

export function generateEntrypoint(functionNames: string[]): string {
  const prototypes = functionNames.map(
    functionName => `DL_PROTOTYPE(${functionName});`,
  )
  const exports = functionNames.map(
    functionName => `DL_EXPORT(${functionName}),`,
  )
  return `#include <windows.h>
    #include <node_api.h>

    #include "helpers.h"

    ${prototypes.join('\n')}

    struct named_export {
      const char* name;
      napi_callback callback;
    };

    static const struct named_export named_exports[${exports.length}] = {
      ${exports.join('\n')}
    };

    napi_value dl_init(napi_env env, napi_value exports) {
      napi_status status;
      napi_value callback;
      for (
        const struct named_export *cur = named_exports,
                                  *end = cur + ${exports.length};
        cur < end;
        cur++
      ) {
        status = napi_create_function(env, cur->name, NAPI_AUTO_LENGTH, cur->callback, NULL, &callback);
        if (status != napi_ok) {
          napi_throw_error(env, cur->name, "Failed to instantiate callback.");
          break;
        }
        status = napi_set_named_property(env, exports, cur->name, callback);
        if (status != napi_ok) {
          napi_throw_error(env, cur->name, "Failed to set named export.");
          break;
        }
      }
      return exports;
    }

    NAPI_MODULE(NODE_GYP_MODULE_NAME, dl_init)
    `
}
