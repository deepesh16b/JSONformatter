const input = document.querySelector(".input");
const output = document.querySelector(".output");
const prettify = document.querySelector(".prettify");
const minify = document.querySelector(".minify");

prettify.addEventListener("click", () => {
  try {
    let formatted = JSON.stringify(JSON.parse(input.value), null, 4);

    let line = 1;
    const totalLines = formatted.match(/\n/g).length;
    const padLength = 5 + Math.floor(totalLines / 10);

    formatted = formatted.replace(/^/gm, () =>
      String(line++).padEnd(padLength)
    );

    output.value = formatted;
  } catch (err) {
    output.value = err.message;
  }
});

minify.addEventListener("click", () => {
  try {
    let formatted = JSON.stringify(JSON.parse(input.value));
    output.value = formatted;
  } catch (err) {
    output.value = err.message;
  }
});
