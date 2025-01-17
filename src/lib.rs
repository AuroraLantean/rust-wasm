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
}*/

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
  //println!("add() called");
  return a + b;
}

#[wasm_bindgen]
pub fn sub(a: i32, b: i32) -> i32 {
  //println!("add() called");
  return a - b;
}

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

#[wasm_bindgen]
pub fn is_prime(s: &str) -> bool {
  if let Ok(s128) = s.parse::<u128>() {
    return is_prime_u128(s128);
  }
  false
}
fn is_prime_u128(num: u128) -> bool {
  if num == 0 || num == 1 {
    return false;
  }

  let mut i = 2;

  while i * i <= num {
    if num % i == 0 {
      return false;
    }

    i += 1;
  }
  true
}
