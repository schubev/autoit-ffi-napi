#include <node_api.h>
#include <windows.h>

#include "helpers.h"

void dl_throw_param_napi_error(napi_env env, const char *param_name) {
  const napi_extended_error_info *error;
  napi_status status;
  status = napi_get_last_error_info(env, &error);
  if (status == napi_ok)
    status = napi_throw_error(env, param_name, error->error_message);
  else
    status = napi_throw_error(env, param_name, "Could not get error message.");
  if (status != napi_ok)
    napi_fatal_error(__FUNCTION__, NAPI_AUTO_LENGTH, "Failed to throw.",
                     NAPI_AUTO_LENGTH);
};

void dl_throw_param_alloc_error(napi_env env, const char *param_name) {
  napi_status status;
  status = napi_throw_error(env, param_name, "Failed to allocate.");
  if (status != napi_ok)
    napi_fatal_error(__FUNCTION__, NAPI_AUTO_LENGTH, "Failed to throw.",
                     NAPI_AUTO_LENGTH);
}

#define NAPI_TRY(Call)                                                         \
  status = Call;                                                               \
  if (status != napi_ok)                                                       \
    return status;

#define NAPI_TRY_SET_INT32_PROPERTY(Object, Struct, Name)                      \
  NAPI_TRY(napi_create_int32(env, Struct->Name, &property));                   \
  NAPI_TRY(napi_set_named_property(env, Object, #Name, property));

napi_status dl_create_rectangle(napi_env env, const RECT *rectangle,
                                napi_value *result) {
  napi_status status;
  napi_value property;
  napi_value object;
  NAPI_TRY(napi_create_object(env, &object));
  NAPI_TRY_SET_INT32_PROPERTY(object, rectangle, left);
  NAPI_TRY_SET_INT32_PROPERTY(object, rectangle, top);
  NAPI_TRY_SET_INT32_PROPERTY(object, rectangle, right);
  NAPI_TRY_SET_INT32_PROPERTY(object, rectangle, bottom);
  *result = object;
  return napi_ok;
};

napi_status dl_create_point(napi_env env, const POINT *point,
                            napi_value *result) {
  napi_status status;
  napi_value property;
  napi_value object;
  NAPI_TRY(napi_create_object(env, &object));
  NAPI_TRY_SET_INT32_PROPERTY(object, point, x);
  NAPI_TRY_SET_INT32_PROPERTY(object, point, y);
  *result = object;
  return napi_ok;
};
