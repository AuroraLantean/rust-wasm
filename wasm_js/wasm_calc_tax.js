import init, { calculate_tax } from "../pkg/wasm_demo1.js";

const ll = console.log;

async function wasmRun() {
	ll("inside wasmRun on calculateTax()");
	await init();

	function calculateTax() {
		ll("inside calculateTax()");
		const income = Number.parseFloat(document.getElementById("income").value);
		ll("income:", income);

		const tax = calculate_tax(income);
		ll("tax:", tax);
		document.getElementById("result").innerText = `Tax: $${tax.toFixed(2)}`;
	}
	document
		.getElementById("calculateButton")
		.addEventListener("click", calculateTax);
}

wasmRun();
