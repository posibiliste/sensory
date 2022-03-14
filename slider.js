const slideValue = document.querySelector("#q1");
const inputSlider = document.querySelector("#q1in");
inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = (value*100/6) + "%";
  slideValue.classList.add("show");
});
inputSlider.onblur = (()=>{
  slideValue.classList.remove("show");
});


//question 2
const slideValue2 = document.querySelector("#q2");
const inputSlider2 = document.querySelector("#q2in");
inputSlider2.oninput = (()=>{
  let value = inputSlider2.value;
  slideValue2.textContent = value;
  slideValue2.style.left = (value*100/6) + "%";
  slideValue2.classList.add("show");
});
inputSlider2.onblur = (()=>{
  slideValue2.classList.remove("show");
});
