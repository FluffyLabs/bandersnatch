let wasm;
export function __wbg_set_wasm(val) {
    wasm = val;
}

/**
* @returns {boolean}
*/
export function verify_safrole() {
    const ret = wasm.verify_safrole();
    return ret !== 0;
}

