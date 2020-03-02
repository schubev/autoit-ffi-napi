import { lib } from '../../lowlevel';
export async function controlGetPosByHandle(window, control, rectangle) {
    return new Promise(resolve => {
        lib.AU3_ControlGetPosByHandle.async(window, control, rectangle, resolve);
    });
}
