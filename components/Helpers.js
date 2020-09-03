export const ip = "10.229.33.173";
export const port = "81";
export function isEmpty() {
    var args = arguments;
    for (let index = 0; index < arguments.length; index++) {
        if (args[index] == null || args[index].replace(/\s/g, '') == '')
            return true;
    }
    return false;
}