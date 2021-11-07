#pragma once

// Helpers for addon entry point

#define DL_PROTOTYPE(Name) napi_value dl_##Name(napi_env, napi_callback_info)

#define DL_EXPORT(Name)                                                        \
  { #Name, dl_##Name }

// Helpers for Autoit function definitions

void dl_throw_param_napi_error(napi_env env, const char *param_name);
void dl_throw_alloc_napi_error(napi_env env, const char *param_name);
napi_status dl_create_rectangle(napi_env env, const LPRECT rectangle,
                                napi_value *result);
napi_status dl_create_point(napi_env env, LPPOINT point, napi_value *result);

#define DL_PARAMS_0                                                            \
  napi_status status;                                                          \
  napi_value result = NULL;

#define DL_PARAMS(ParamCount)                                                  \
  DL_PARAMS_0;                                                                 \
  size_t argc = ParamCount;                                                    \
  napi_value argv[ParamCount];                                                 \
  napi_value thisArg;                                                          \
  void *data;                                                                  \
  status = napi_get_cb_info(env, cbinfo, &argc, argv, &thisArg, &data);        \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, "Arguments list");                          \
    return NULL;                                                               \
  }

#define DL_ALLOC_INT_PARAM(Name, Index)                                        \
  int32_t Name;                                                                \
  status = napi_get_value_int32(env, argv[Index], &Name);                      \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##Clean;                                                          \
  }

#define DL_FREE_INT_PARAM(Name) Name##Clean:;

#define DL_ALLOC_HWND_PARAM(Name, Index)                                       \
  HWND Name;                                                                   \
  status = napi_get_value_int32(env, argv[Index], (int32_t *)&Name);           \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##Clean;                                                          \
  }

#define DL_FREE_HWND_PARAM(Name) Name##Clean:;

#define DL_ALLOC_INWSTR_PARAM(Name, Index)                                     \
  size_t Name##Size;                                                           \
  char16_t *Name;                                                              \
  status =                                                                     \
      napi_get_value_string_utf16(env, argv[Index], NULL, 0, &Name##Size);     \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##CleanSize;                                                      \
  }                                                                            \
  Name = malloc(sizeof(char16_t) * (1 + Name##Size));                          \
  if (Name == NULL) {                                                          \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##CleanAlloc;                                                     \
  }                                                                            \
  status = napi_get_value_string_utf16(env, argv[Index], Name, Name##Size,     \
                                       &Name##Size);                           \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##CleanCopy;                                                      \
  }                                                                            \
  Name[Name##Size] = 0;

#define DL_FREE_INWSTR_PARAM(Name)                                             \
  Name##CleanCopy : free(Name);                                                \
  Name##CleanAlloc:;                                                           \
  Name##CleanSize:;

#define DL_ALLOC_BOOL_PARAM(Name, Index)                                       \
  bool Name;                                                                   \
  status = napi_get_value_bool(env, argv[Index], &Name);                       \
  if (status != napi_ok) {                                                     \
    dl_throw_param_napi_error(env, #Name);                                     \
    goto Name##Clean;                                                          \
  }

#define DL_FREE_BOOL_PARAM(Name) Name##Clean:;

#define DL_OUTPUT_VOID(Call)                                                   \
  Call;                                                                        \
  result = NULL;

#define DL_OUTPUT_INT(Call)                                                    \
  int out = Call;                                                              \
  status = napi_create_int32(env, out, &result);                               \
  if (status != napi_ok)                                                       \
    dl_throw_param_napi_error(env, "out");

#define DL_OUTPUT_HWND(Call)                                                   \
  HWND out = Call;                                                             \
  status = napi_create_int32(env, (int32_t)out, &result);                      \
  if (status != napi_ok)                                                       \
    dl_throw_param_napi_error(env, "out");

#define DL_OUTPUT_INT_STATUS(Call, FunName)                                    \
  int out = Call;                                                              \
  result = NULL;                                                               \
  if (status != 1)                                                             \
    napi_throw_error(env, "Status",                                            \
                     "The call to " #FunName " reported failure.");

#define DL_OUTPUT_WSTR(Call, Name)                                             \
  size_t Name##AllocSize = sizeof(char16_t) * (1 + Name##Size);                \
  char16_t *Name = malloc(Name##AllocSize);                                    \
  if (Name == NULL) {                                                          \
    dl_throw_alloc_napi_error(env, #Name);                                     \
    goto Name##CleanAlloc;                                                     \
  }                                                                            \
  memset(Name, 0, Name##AllocSize);                                            \
  Call;                                                                        \
  status = napi_create_string_utf16(env, Name, Name##Size, &result);           \
  if (status != napi_ok)                                                       \
    dl_throw_param_napi_error(env, #Name);                                     \
  free(Name);                                                                  \
  Name##CleanAlloc:;

#define DL_OUTPUT_RECTANGLE(Call, Name, FunName)                               \
  RECT Name##Data;                                                             \
  RECT *Name = &Name##Data;                                                    \
  DL_OUTPUT_INT_STATUS(Call, FunName);                                         \
  status = dl_create_rectangle(env, Name, &result);                            \
  if (status != napi_ok)                                                       \
    dl_throw_param_napi_error(env, #Name);

#define DL_OUTPUT_POINT(Call, Name, FunName)                                   \
  POINT Name##Data;                                                            \
  POINT *Name = &Name##Data;                                                   \
  DL_OUTPUT_INT_STATUS(Call, FunName);                                         \
  status = dl_create_point(env, Name, &result);                                \
  if (status != napi_ok)                                                       \
    dl_throw_param_napi_error(env, #Name);

#define DL_RETURN return result;
