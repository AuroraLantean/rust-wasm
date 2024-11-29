import init, { is_prime } from "../pkg/wasm_demo1.js";

const ll = console.log;
const targetStr = "9791";

async function wasmRun() {
	ll("inside wasmRun on is_prime()");
	await init();

	function isPrimeNumbers() {
		ll("inside isPrimeNumbers()");
		const isPrime = is_prime(targetStr);
		ll("isPrime:", isPrime);
		document.getElementById("resultIsPrime").innerText = `is_prime? ${isPrime}`;
	}
	document
		.getElementById("isPrimeButton")
		.addEventListener("click", isPrimeNumbers);
}

wasmRun();
