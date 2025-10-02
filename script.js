/* ================================
   PART 2: Functions, Scope & Logic
   ================================ */

// Example of local vs global scope
let globalCount = 0;

function incrementCounter(step) {
  // local scope variable
  let localStep = step || 1;
  globalCount += localStep;
  return globalCount;
}

// Example reusable function to toggle classes
function toggleClass(elementId, className) {
  const el = document.getElementById(elementId);
  el.classList.toggle(className);
}

/* ================================
   PART 3: Combining CSS + JS
   ================================ */

// Animate box on button click
document.getElementById("animateBtn").addEventListener("click", () => {
  console.log("Box animation triggered!");
  toggleClass("box", "active");
  console.log("Counter:", incrementCounter(2)); // shows function w/ return
});

// Flip card
document.getElementById("flipBtn").addEventListener("click", () => {
  toggleClass("card", "flipped");
});

// Modal open/close
document.getElementById("toggleModalBtn").addEventListener("click", () => {
  toggleClass("modal", "show");
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  toggleClass("modal", "show");
});
