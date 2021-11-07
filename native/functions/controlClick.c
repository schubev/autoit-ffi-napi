// This file is generated by src/codegen/function-gen.ts.
#include <node_api.h>

#include "AutoItX3_DLL.h"

#include "helpers.h"

napi_value dl_AU3_ControlClick(napi_env env, napi_callback_info cbinfo) {
  DL_PARAMS(7);
  DL_ALLOC_INWSTR_PARAM(windowDescription, 0);
  DL_ALLOC_INWSTR_PARAM(windowText, 1);
  DL_ALLOC_INWSTR_PARAM(controlDescription, 2);
  DL_ALLOC_INWSTR_PARAM(button, 3);
  DL_ALLOC_INT_PARAM(numClicks, 4);
  DL_ALLOC_INT_PARAM(nX, 5);
  DL_ALLOC_INT_PARAM(nY, 6);
  DL_OUTPUT_INT_STATUS(AU3_ControlClick(windowDescription, windowText,
                                        controlDescription, button, numClicks,
                                        nX, nY),
                       AU3_ControlClick);
  DL_FREE_INT_PARAM(nY);
  DL_FREE_INT_PARAM(nX);
  DL_FREE_INT_PARAM(numClicks);
  DL_FREE_INWSTR_PARAM(button);
  DL_FREE_INWSTR_PARAM(controlDescription);
  DL_FREE_INWSTR_PARAM(windowText);
  DL_FREE_INWSTR_PARAM(windowDescription);
  DL_RETURN;
}