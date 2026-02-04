const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const result = document.getElementById("result");
const question = document.getElementById("question");
let name = document.getElementById("name");

noBtn.addEventListener("mouseover", () => {
  const moveX = Math.random() * 300 - 150;
  const moveY = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

yesBtn.addEventListener("click", () => {
  // Hide everything except result
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  question.style.display = "none";
  name.style.display = "none";
  
  // Show only hidden div
  result.style.display = "block";
});
