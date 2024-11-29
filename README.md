# rust-wasm

Follow the Wasm-pack quick start:
https://rustwasm.github.io/docs/wasm-pack/quickstart.html

Install Rust
https://www.rust-lang.org/tools/install

Install Wasm-pack
https://rustwasm.github.io/wasm-pack/installer/

Install a HTML server or Python3
```
pnpm install -g http-server
http-server .
```


Compile Rust file into WASM
```
wasm-pack build --target web
```
Run the HTML server:
`python3 -m http.server` OR `http-server .`

[Note] Sometimes the browser does not refresh the new js files. So you must delete the cache or re-open the browser!

## About

[**📚 Read this template tutorial! 📚**][template-docs]

This template is designed for compiling Rust libraries into WebAssembly and
publishing the resulting package to NPM.

Be sure to check out [other `wasm-pack` tutorials online][tutorials] for other
templates and usages of `wasm-pack`.

[tutorials]: https://rustwasm.github.io/docs/wasm-pack/tutorials/index.html
[template-docs]: https://rustwasm.github.io/docs/wasm-pack/tutorials/npm-browser-packages/index.html

## 🚴 Usage

### 🐑 Use `cargo generate` to Clone this Template

[Learn more about `cargo generate` here.](https://github.com/ashleygwilliams/cargo-generate)

```
cargo generate --git https://github.com/rustwasm/wasm-pack-template.git --name my-project
cd my-project
```
OR
```
wasm-pack new hello-wasm
```

### 🛠️ Build with `wasm-pack build`

```
wasm-pack build --target web.
```
This tool generates files in a pkg dir

### 🔬 Test in Headless Browsers with `wasm-pack test`

```
wasm-pack test --headless --firefox
```


### 🎁 Publish to NPM with `wasm-pack publish`

```
wasm-pack publish
```
You may need to login to the registry you want to publish to. You can login using `wasm-pack login`.

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* `LICENSE-APACHE` and `LICENSE-MIT`: most Rust projects are licensed this way, so these are included for you
