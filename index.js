import init, { calculate_tax } from "./pkg/tax_calculator_wasm.js";

const ll = console.log

async function wasmRun() {
	ll("inside wasmRun()")
	await init();

	function calculateTax() {
		ll("inside calculateTax()")
		const income = parseFloat(document.getElementById("income").value);
		
		const tax = calculate_tax(income);
		
		document.getElementById("result").innerText = `Tax: $${tax.toFixed(2)}`;

		//console.log("add:", add(13, 24))
	  //document.body.textContent = `Hello World! addResult: ${addResult}`;
	}

	document.getElementById("calculateButton").addEventListener("click", calculateTax); // Add event listener to button
}

wasmRun();
