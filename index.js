// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from './pkg/wasm1.js';

const runWasm = async () => {
  console.log('inside runWasm');
  // Instantiate our wasm module
  const module1 = await wasmInit('./pkg/wasm1_bg.wasm');
  console.log('module1 is loaded');

  // Call the Add function export from wasm, save the result
  const addResult = module1.add(24, 24);
  console.log('addResult:', addResult);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
