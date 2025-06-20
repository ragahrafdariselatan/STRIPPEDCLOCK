
function createDigitColumn(id, digits) {
  const col = document.getElementById(id);
  digits.forEach(d => {
    const span = document.createElement("span");
    span.textContent = d;
    col.appendChild(span);
  });
}

// Digit setup for clock (6 boxes: h1, h2, m1, m2, s1, s2)
createDigitColumn("h1", [0, 1]);           // Hour tens: only 0–1
createDigitColumn("h2", [0,1,2,3,4,5,6,7,8,9]); // Hour units: 0–9
createDigitColumn("m1", [0,1,2,3,4,5]);    // Minute tens: 0–5
createDigitColumn("m2", [0,1,2,3,4,5,6,7,8,9]); // Minute units: 0–9
createDigitColumn("s1", [0,1,2,3,4,5]);    // Second tens: 0–5
createDigitColumn("s2", [0,1,2,3,4,5,6,7,8,9]); // Second units: 0–9

function updateClock() {
  const now = new Date();
  let h = now.getHours() % 12 || 12;
  const m = now.getMinutes();
  const s = now.getSeconds();

  const digits = [
    Math.floor(h / 10),
    h % 10,
    Math.floor(m / 10),
    m % 10,
    Math.floor(s / 10),
    s % 10
  ];

  const ids = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];

  ids.forEach((id, i) => {
    const col = document.getElementById(id);
    const offset = digits[i] * 70;
    col.style.transform = `translateY(-${offset}px)`;
  });
}

setInterval(updateClock, 1000);
updateClock();
