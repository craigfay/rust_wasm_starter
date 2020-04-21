# About
* This repository is a starting place for front-end web applications that use WebAssembly.
The example here uses a single-function WASM library written in Rust. We can use npm scripts to compile and create bindings for the library.
* We'll import the WASM library from our front-end Javascript, and attach our Rust function as a button click event listener.

# Structure
* `rust_src`: Our Rust library that will be compiled to WebAssembly.
* `target`: Where our rust lib (once compiled to WASM) will be output.
* `rust_dist`: Where our WASM bindings will be output.
* `js_src`: Our frontend Javascript source code.
* `js_dist`: Where our transpiled Javascript will be output by Webpack.
* `static`: Where we keep files that don't need to be compiled.

# Commands
* `./setup.sh`: Configure Rust Environment.
* `npm install`: Install NodeJS dependencies.
* `npm run build`: Compile Rust Library, Generate Bindings, Transpile Javascript.
* `npm run serve`: Serve our pre-built front-end code.

# Todo
There's a few things that could use tidying up:
* Re-organize directories such that only front-end code is served with `npm run serve`.
* Consolidate `target` and `./rust_dist`.
* Containerize the repository to simplify dependencies.

