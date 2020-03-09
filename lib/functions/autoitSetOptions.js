"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_utils_1 = require("../wrap-utils");
const lowlevel_1 = require("../lowlevel");
function autoitSetOption(key, value) {
    const keyBuffer = wrap_utils_1.inWstrOfString(key);
    return new Promise(resolve => {
        lowlevel_1.lib.AU3_AutoItSetOption(keyBuffer, value, resolve);
    });
}
async function autoitSetOptions(options) {
    const previousOptions = {};
    for (const optionKey in options) {
        let finalValue;
        switch (optionKey) {
            case 'TrayMenuMode':
            case 'GuiResizeMode': {
                const values = options[optionKey];
                if (values === undefined)
                    continue;
                finalValue = values.reduce((a, b) => a | b, 0);
                break;
            }
            case 'GuiDataSeparatorChar': {
                const value = options[optionKey];
                if (value === undefined || value === '')
                    continue;
                const intValue = value.charCodeAt(0);
                if (intValue > 0x7fff)
                    continue;
                finalValue = intValue;
                break;
            }
            case 'CaretCoordMode':
            case 'ExpandEnvStrings':
            case 'ExpandVarStrings':
            case 'GuiCloseOnEsc':
            case 'GuiOnEventMode':
            case 'GuiEventOptions':
            case 'MouseClickDelay':
            case 'MouseClickDownDelay':
            case 'MouseClickDragDelay':
            case 'MouseCoordMode':
            case 'MustDeclareVars':
            case 'PixelCoordMode':
            case 'SendAttachMode':
            case 'SendCapslockMode':
            case 'SendKeyDelay':
            case 'SendKeyDownDelay':
            case 'TcpTimeout':
            case 'TrayAutoPause':
            case 'TrayIconDebug':
            case 'TrayIconHide':
            case 'TrayOnEventMode':
            case 'WinDetectHiddenText':
            case 'WinSearchChildren':
            case 'WinTextMatchMode':
            case 'WinTitleMatchMode':
            case 'WinWaitDelay': {
                const value = options[optionKey];
                if (value === undefined)
                    continue;
                finalValue = value;
                break;
            }
            default:
                continue;
        }
        const previousValue = await autoitSetOption(optionKey, finalValue);
        // TODO: Check error status
        switch (optionKey) {
            case 'TrayMenuMode':
            case 'GuiResizeMode': {
                // TODO: Decompose option value
                previousOptions[optionKey] = [previousValue];
                break;
            }
            case 'GuiDataSeparatorChar': {
                previousOptions[optionKey] = String.fromCodePoint(previousValue);
                break;
            }
            case 'CaretCoordMode':
            case 'ExpandEnvStrings':
            case 'ExpandVarStrings':
            case 'GuiCloseOnEsc':
            case 'GuiOnEventMode':
            case 'GuiEventOptions':
            case 'MouseClickDelay':
            case 'MouseClickDownDelay':
            case 'MouseClickDragDelay':
            case 'MouseCoordMode':
            case 'MustDeclareVars':
            case 'PixelCoordMode':
            case 'SendAttachMode':
            case 'SendCapslockMode':
            case 'SendKeyDelay':
            case 'SendKeyDownDelay':
            case 'TcpTimeout':
            case 'TrayAutoPause':
            case 'TrayIconDebug':
            case 'TrayIconHide':
            case 'TrayOnEventMode':
            case 'WinDetectHiddenText':
            case 'WinSearchChildren':
            case 'WinTextMatchMode':
            case 'WinTitleMatchMode':
            case 'WinWaitDelay': {
                // TODO: Figure out why I cannot assign number to this
                previousOptions[optionKey] = previousValue;
                break;
            }
        }
    }
    return previousOptions;
}
exports.autoitSetOptions = autoitSetOptions;
