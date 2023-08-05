const counter = document.getElementById("counterValue");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decrementBtn = document.getElementById("decrementBtn");

let count = 0;

function updateCounter() {
  counter.textContent = count;
}

function increment() {
  count++;
  updateCounter();
}

function decrement() {
  if (count > 0) {
    count--;
    updateCounter();
  }
}

function reset() {
  count = 0;
  updateCounter();
}

incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);
