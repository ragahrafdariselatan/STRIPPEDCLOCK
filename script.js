
function createDigitColumn(id, digits) {
  const col = document.getElementById(id);
  digits.forEach((d) => {
    const span = document.createElement("span");
    span.textContent = d;
    col.appendChild(span);
  });
}

// Setup visible digit boxes for hours (12 boxes), minutes (16), and seconds (16)
createDigitColumn("h1", [0, 1]);
createDigitColumn("h2", [0,1,2,3,4,5,6,7,8,9]);
createDigitColumn("m1", [0,1,2,3,4,5]);
createDigitColumn("m2", [0,1,2,3,4,5,6,7,8,9]);
createDigitColumn("s1", [0,1,2,3,4,5]);
createDigitColumn("s2", [0,1,2,3,4,5,6,7,8,9]);

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
    s % 10,
  ];

  const ids = ['h1', 'h2', 'm1', 'm2', 's1', 's2'];
  const heights = {
    h1: 70,
    h2: 70,
    m1: 70,
    m2: 70,
    s1: 70,
    s2: 70,
  };

  ids.forEach((id, i) => {
    const col = document.getElementById(id);
    const offset = digits[i] * heights[id];
    col.style.transform = `translateY(-${offset}px)`;
  });
}

setInterval(updateClock, 1000);
updateClock();
