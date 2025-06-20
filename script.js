
function createDigitColumn(id) {
  const col = document.getElementById(id);
  for (let i = 0; i <= 9; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    col.appendChild(span);
  }
}

['h1', 'h2', 'm1', 'm2', 's1', 's2'].forEach(createDigitColumn);

function updateClock() {
  const now = new Date();
  const time = now.toTimeString().split(" ")[0].replace(/:/g, "");
  const digits = time.split("").map(Number);

  ['h1', 'h2', 'm1', 'm2', 's1', 's2'].forEach((id, idx) => {
    const col = document.getElementById(id);
    const offset = digits[idx] * 70;
    col.style.transform = `translateY(-${offset}px)`;
  });
}

setInterval(updateClock, 1000);
updateClock();
