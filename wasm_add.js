import init, { add } from "./pkg/wasm_demo1.js";

const ll = console.log

async function wasmRun() {
	ll("inside wasmRun on add()")
	await init();
	
	function addNumbers() {
		ll("inside addNumbers()")
		const sum = add(13, 24);
		ll("sum:", sum)
		document.getElementById("resultSum").innerText = `Sum: $${sum.toFixed(2)}`;
	}
	document.getElementById("addNumbersButton").addEventListener("click", addNumbers);
}

wasmRun();
