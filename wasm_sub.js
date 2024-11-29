import init, { sub } from "./pkg/wasm_demo1.js";

const ll = console.log

async function wasmRun() {
	ll("inside wasmRun on sub()")
	await init();
	
	function substractNumbers() {
		ll("inside substractNumbers()")
		const out = sub(13, 24);
		ll("out:", out)
		document.getElementById("resultSub").innerText = `Diff: $${out.toFixed(2)}`;
	}
	document.getElementById("subNumbersButton").addEventListener("click", substractNumbers);
}

wasmRun();
