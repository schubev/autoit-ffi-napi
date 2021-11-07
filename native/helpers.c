#include <node_api.h>

#include "helpers.h"

void doctolib_throw_param_napi_error(napi_env env, const char *param_name) {
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

void doctolib_throw_param_alloc_error(napi_env env, const char *param_name) {
  napi_status status;
  status = napi_throw_error(env, param_name, "Failed to allocate.");
  if (status != napi_ok)
    napi_fatal_error(__FUNCTION__, NAPI_AUTO_LENGTH, "Failed to throw.",
                     NAPI_AUTO_LENGTH);
}
