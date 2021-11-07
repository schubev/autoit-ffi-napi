#include <node_api.h>
#include <windows.h>

#include "helpers.h"

DL_PROTOTYPE(AU3_Init);
DL_PROTOTYPE(AU3_error);
DL_PROTOTYPE(AU3_ClipGet);
DL_PROTOTYPE(AU3_ClipPut);
DL_PROTOTYPE(AU3_ControlClick);
DL_PROTOTYPE(AU3_ControlClickByHandle);
DL_PROTOTYPE(AU3_ControlDisable);
DL_PROTOTYPE(AU3_ControlDisableByHandle);
DL_PROTOTYPE(AU3_ControlEnable);
DL_PROTOTYPE(AU3_ControlEnableByHandle);
DL_PROTOTYPE(AU3_ControlFocus);
DL_PROTOTYPE(AU3_ControlFocusByHandle);
DL_PROTOTYPE(AU3_ControlGetFocus);
DL_PROTOTYPE(AU3_ControlGetFocusByHandle);
DL_PROTOTYPE(AU3_ControlGetHandle);
DL_PROTOTYPE(AU3_ControlGetPos);
DL_PROTOTYPE(AU3_ControlGetPosByHandle);
DL_PROTOTYPE(AU3_ControlGetText);
DL_PROTOTYPE(AU3_ControlGetTextByHandle);
DL_PROTOTYPE(AU3_ControlHide);
DL_PROTOTYPE(AU3_ControlHideByHandle);
DL_PROTOTYPE(AU3_ControlMove);
DL_PROTOTYPE(AU3_ControlMoveByHandle);
DL_PROTOTYPE(AU3_ControlSend);
DL_PROTOTYPE(AU3_ControlSendByHandle);
DL_PROTOTYPE(AU3_ControlSetText);
DL_PROTOTYPE(AU3_ControlSetTextByHandle);
DL_PROTOTYPE(AU3_ControlShow);
DL_PROTOTYPE(AU3_ControlShowByHandle);
DL_PROTOTYPE(AU3_IsAdmin);
DL_PROTOTYPE(AU3_MouseClick);
DL_PROTOTYPE(AU3_MouseClickDrag);
DL_PROTOTYPE(AU3_MouseDown);
DL_PROTOTYPE(AU3_MouseGetCursor);
DL_PROTOTYPE(AU3_MouseMove);
DL_PROTOTYPE(AU3_MouseUp);
DL_PROTOTYPE(AU3_MouseWheel);
DL_PROTOTYPE(AU3_Send);
DL_PROTOTYPE(AU3_WinActivate);
DL_PROTOTYPE(AU3_WinActivateByHandle);
DL_PROTOTYPE(AU3_WinActive);
DL_PROTOTYPE(AU3_WinActiveByHandle);
DL_PROTOTYPE(AU3_WinClose);
DL_PROTOTYPE(AU3_WinCloseByHandle);
DL_PROTOTYPE(AU3_WinExists);
DL_PROTOTYPE(AU3_WinExistsByHandle);
DL_PROTOTYPE(AU3_WinGetClientSize);
DL_PROTOTYPE(AU3_WinGetClientSizeByHandle);
DL_PROTOTYPE(AU3_WinGetHandle);
DL_PROTOTYPE(AU3_WinGetPos);
DL_PROTOTYPE(AU3_WinGetPosByHandle);
DL_PROTOTYPE(AU3_WinGetProcess);
DL_PROTOTYPE(AU3_WinGetProcessByHandle);
DL_PROTOTYPE(AU3_WinGetState);
DL_PROTOTYPE(AU3_WinGetStateByHandle);
DL_PROTOTYPE(AU3_WinGetText);
DL_PROTOTYPE(AU3_WinGetTextByHandle);
DL_PROTOTYPE(AU3_WinGetTitle);
DL_PROTOTYPE(AU3_WinGetTitleByHandle);
DL_PROTOTYPE(AU3_WinKill);
DL_PROTOTYPE(AU3_WinKillByHandle);
DL_PROTOTYPE(AU3_WinMenuSelectItem);
DL_PROTOTYPE(AU3_WinMenuSelectItemByHandle);
DL_PROTOTYPE(AU3_WinMinimizeAll);
DL_PROTOTYPE(AU3_WinMinimizeAllUndo);
DL_PROTOTYPE(AU3_WinMove);
DL_PROTOTYPE(AU3_WinMoveByHandle);
DL_PROTOTYPE(AU3_WinSetOnTop);
DL_PROTOTYPE(AU3_WinSetOnTopByHandle);
DL_PROTOTYPE(AU3_WinSetState);
DL_PROTOTYPE(AU3_WinSetStateByHandle);
DL_PROTOTYPE(AU3_WinSetTitle);
DL_PROTOTYPE(AU3_WinSetTitleByHandle);
DL_PROTOTYPE(AU3_WinSetTrans);
DL_PROTOTYPE(AU3_WinSetTransByHandle);
DL_PROTOTYPE(AU3_WinWait);
DL_PROTOTYPE(AU3_WinWaitByHandle);
DL_PROTOTYPE(AU3_WinWaitActive);
DL_PROTOTYPE(AU3_WinWaitActiveByHandle);
DL_PROTOTYPE(AU3_WinWaitClose);
DL_PROTOTYPE(AU3_WinWaitCloseByHandle);
DL_PROTOTYPE(AU3_WinWaitNotActive);
DL_PROTOTYPE(AU3_WinWaitNotActiveByHandle);

struct named_export {
  const char *name;
  napi_callback callback;
};

static const struct named_export named_exports[83] = {
    DL_EXPORT(AU3_Init),
    DL_EXPORT(AU3_error),
    DL_EXPORT(AU3_ClipGet),
    DL_EXPORT(AU3_ClipPut),
    DL_EXPORT(AU3_ControlClick),
    DL_EXPORT(AU3_ControlClickByHandle),
    DL_EXPORT(AU3_ControlDisable),
    DL_EXPORT(AU3_ControlDisableByHandle),
    DL_EXPORT(AU3_ControlEnable),
    DL_EXPORT(AU3_ControlEnableByHandle),
    DL_EXPORT(AU3_ControlFocus),
    DL_EXPORT(AU3_ControlFocusByHandle),
    DL_EXPORT(AU3_ControlGetFocus),
    DL_EXPORT(AU3_ControlGetFocusByHandle),
    DL_EXPORT(AU3_ControlGetHandle),
    DL_EXPORT(AU3_ControlGetPos),
    DL_EXPORT(AU3_ControlGetPosByHandle),
    DL_EXPORT(AU3_ControlGetText),
    DL_EXPORT(AU3_ControlGetTextByHandle),
    DL_EXPORT(AU3_ControlHide),
    DL_EXPORT(AU3_ControlHideByHandle),
    DL_EXPORT(AU3_ControlMove),
    DL_EXPORT(AU3_ControlMoveByHandle),
    DL_EXPORT(AU3_ControlSend),
    DL_EXPORT(AU3_ControlSendByHandle),
    DL_EXPORT(AU3_ControlSetText),
    DL_EXPORT(AU3_ControlSetTextByHandle),
    DL_EXPORT(AU3_ControlShow),
    DL_EXPORT(AU3_ControlShowByHandle),
    DL_EXPORT(AU3_IsAdmin),
    DL_EXPORT(AU3_MouseClick),
    DL_EXPORT(AU3_MouseClickDrag),
    DL_EXPORT(AU3_MouseDown),
    DL_EXPORT(AU3_MouseGetCursor),
    DL_EXPORT(AU3_MouseMove),
    DL_EXPORT(AU3_MouseUp),
    DL_EXPORT(AU3_MouseWheel),
    DL_EXPORT(AU3_Send),
    DL_EXPORT(AU3_WinActivate),
    DL_EXPORT(AU3_WinActivateByHandle),
    DL_EXPORT(AU3_WinActive),
    DL_EXPORT(AU3_WinActiveByHandle),
    DL_EXPORT(AU3_WinClose),
    DL_EXPORT(AU3_WinCloseByHandle),
    DL_EXPORT(AU3_WinExists),
    DL_EXPORT(AU3_WinExistsByHandle),
    DL_EXPORT(AU3_WinGetClientSize),
    DL_EXPORT(AU3_WinGetClientSizeByHandle),
    DL_EXPORT(AU3_WinGetHandle),
    DL_EXPORT(AU3_WinGetPos),
    DL_EXPORT(AU3_WinGetPosByHandle),
    DL_EXPORT(AU3_WinGetProcess),
    DL_EXPORT(AU3_WinGetProcessByHandle),
    DL_EXPORT(AU3_WinGetState),
    DL_EXPORT(AU3_WinGetStateByHandle),
    DL_EXPORT(AU3_WinGetText),
    DL_EXPORT(AU3_WinGetTextByHandle),
    DL_EXPORT(AU3_WinGetTitle),
    DL_EXPORT(AU3_WinGetTitleByHandle),
    DL_EXPORT(AU3_WinKill),
    DL_EXPORT(AU3_WinKillByHandle),
    DL_EXPORT(AU3_WinMenuSelectItem),
    DL_EXPORT(AU3_WinMenuSelectItemByHandle),
    DL_EXPORT(AU3_WinMinimizeAll),
    DL_EXPORT(AU3_WinMinimizeAllUndo),
    DL_EXPORT(AU3_WinMove),
    DL_EXPORT(AU3_WinMoveByHandle),
    DL_EXPORT(AU3_WinSetOnTop),
    DL_EXPORT(AU3_WinSetOnTopByHandle),
    DL_EXPORT(AU3_WinSetState),
    DL_EXPORT(AU3_WinSetStateByHandle),
    DL_EXPORT(AU3_WinSetTitle),
    DL_EXPORT(AU3_WinSetTitleByHandle),
    DL_EXPORT(AU3_WinSetTrans),
    DL_EXPORT(AU3_WinSetTransByHandle),
    DL_EXPORT(AU3_WinWait),
    DL_EXPORT(AU3_WinWaitByHandle),
    DL_EXPORT(AU3_WinWaitActive),
    DL_EXPORT(AU3_WinWaitActiveByHandle),
    DL_EXPORT(AU3_WinWaitClose),
    DL_EXPORT(AU3_WinWaitCloseByHandle),
    DL_EXPORT(AU3_WinWaitNotActive),
    DL_EXPORT(AU3_WinWaitNotActiveByHandle),
};

napi_value dl_init(napi_env env, napi_value exports) {
  napi_status status;
  napi_value callback;
  for (const struct named_export *cur = named_exports, *end = cur + 83;
       cur < end; cur++) {
    status = napi_create_function(env, cur->name, NAPI_AUTO_LENGTH,
                                  cur->callback, NULL, &callback);
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
