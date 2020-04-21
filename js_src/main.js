
document.querySelector('button').addEventListener('click', async function() {
  const rust = await import('../rust_dist/rust_wasm_starter');
  rust.say_hello();
});


