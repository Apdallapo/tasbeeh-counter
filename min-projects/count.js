let count = parseInt(localStorage.getItem("count")) || 0;
let countL = parseInt(localStorage.getItem("countL")) || 0;
const max = 33;
const button = document.getElementById("button");
const current = document.getElementById("current");
const names = document.getElementById("names");
const light = document.getElementById("light");
const rest = document.getElementById("rest");
const number = document.getElementById("number");
number.textContent = count;
current.textContent = countL;
button.addEventListener("click", () => {
  if(count >=99) {
    count = 1;
  } else{
    count++;
  } 
  updatUL();
  addCount();
  saveData();
});
rest.addEventListener("click", () => {
  count = 0;
  countL = 0;
   updatUL();
  saveData();
});
delet.addEventListener("click", () => {
  count--;
  countL--;
  if(count < 0 || countL < 0){
    count = 0;
      countL = 0;
    alert('the number of count should be greater than 0')
  }else{
    count = count;
    countL = countL;

  }
  updatUL();
    saveData();
 
});

light.addEventListener("click", () => {
  document.body.classList.toggle("light");
  
});
const dikr = [
  { name: "subxanalah", max: 33 },
  { name: "alxamdulilah", max: 33 },
  { name: "allahu akbar", max: 33 },
  { name: "fineshed" },
];

function updatUL() {
  number.textContent = count;
  current.textContent = `${countL} / ${max}`;
  let name;
  count <= 99;
  if (count <= 33) {
    name = dikr[0].name;
  } else if (count <= 66) {
    name = dikr[1].name;
  } else if (count <= 99) {
    name = dikr[2].name;
  }  else if (count >= 99) {
   count = 1;
  }
 
  document.getElementById("names").innerHTML = name;
}
updatUL();

function saveData() {
  localStorage.setItem("count", count);
  localStorage.setItem("countL", countL);
}

function addCount() {
  if (countL < max) {
    countL++;
  } else {
    countL = 1;
  }
saveData();
  document.getElementById("current").innerText = `${countL} / ${max}`;
}





