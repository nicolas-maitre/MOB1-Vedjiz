export function isEmpty() {
    var args = arguments;
    for (let index = 0; index < arguments.length; index++) {
        if (args[index] == null || args[index].replace(/\s/g, '') == '')
            return true;
    }
    return false;
}