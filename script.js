
function createDigitColumn(id, range) {
  const col = document.getElementById(id);
  for (let i = 0; i < range; i++) {
    const span = document.createElement("span");
    span.textContent = i.toString().padStart(2, '0');
    col.appendChild(span);
  }
}

createDigitColumn("h1", 2);  // tens place for hour: 0-1
createDigitColumn("h2", 10); // units place for hour: 0-9
createDigitColumn("m1", 6);  // tens place for minute: 0-5
createDigitColumn("m2", 10); // units place for minute: 0-9
createDigitColumn("s1", 6);  // tens place for second: 0-5
createDigitColumn("s2", 10); // units place for second: 0-9

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  hours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours; // 12-hour format
  const mins = now.getMinutes();
  const secs = now.getSeconds();

  const hStr = hours.toString().padStart(2, '0');
  const mStr = mins.toString().padStart(2, '0');
  const sStr = secs.toString().padStart(2, '0');

  const digits = (hStr + mStr + sStr).split("").map(Number);

  ['h1', 'h2', 'm1', 'm2', 's1', 's2'].forEach((id, idx) => {
    const col = document.getElementById(id);
    const offset = digits[idx] * 70; // each span is 70px tall
    col.style.transform = `translateY(-${offset}px)`;
  });
}

setInterval(updateClock, 1000);
updateClock();
