import init, { calculate_tax, add } from "./pkg/wasm_demo1.js";

const ll = console.log

async function wasmRun() {
	ll("inside wasmRun()")
	await init();

	function calculateTax() {
		ll("inside calculateTax()")
		const income = parseFloat(document.getElementById("income").value);
		ll("income:", income)

		const tax = calculate_tax(income);
		ll("tax:", tax)
		document.getElementById("result").innerText = `Tax: $${tax.toFixed(2)}`;
	}
	document.getElementById("calculateButton").addEventListener("click", calculateTax);
	
	function addNumbers() {
		ll("inside addNumbers()")
		const sum = add(13, 24);
		ll("sum:", sum)
		document.getElementById("resultSum").innerText = `Sum: $${sum.toFixed(2)}`;
	}
	document.getElementById("addNumbersButton").addEventListener("click", addNumbers);
}

wasmRun();
