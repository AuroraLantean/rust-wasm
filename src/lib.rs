//mod utils;
use wasm_bindgen::prelude::*;

/*
#[wasm_bindgen]
extern "C" {
  fn alert(s: &str);
}
#[wasm_bindgen]
pub fn greet_name(name: &str) {
  alert(&format!("Hello {}!", name));
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    println!("add() called");
    return a + b;
}*/

//<script type="module" src="./index.js"></script>
//<link rel="preload" href="./index.js" as="script" />

//pnpm install -g http-server && http-server .
//python3 -m http.server

#[wasm_bindgen]
pub fn calculate_tax(income: f64) -> f64 {
  let mut tax = 0.0;

  if income <= 9875.0 {
    tax = income * 0.10;
  } else if income <= 40125.0 {
    tax = 987.5 + (income - 9875.0) * 0.12;
  } else if income <= 85525.0 {
    tax = 4617.5 + (income - 40125.0) * 0.22;
  } else if income <= 163300.0 {
    tax = 14605.5 + (income - 85525.0) * 0.24;
  } else if income <= 207350.0 {
    tax = 33271.5 + (income - 163300.0) * 0.32;
  } else if income <= 518400.0 {
    tax = 47367.5 + (income - 207350.0) * 0.35;
  } else {
    tax = 156235.0 + (income - 518400.0) * 0.37;
  }
  tax
}
