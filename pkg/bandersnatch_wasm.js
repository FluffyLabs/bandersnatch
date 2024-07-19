let imports = {};
let wasm;
/**
* @returns {boolean}
*/
module.exports.verify_safrole = function() {
    const ret = wasm.verify_safrole();
    return ret !== 0;
};

const path = require('path').join(__dirname, 'bandersnatch_wasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

