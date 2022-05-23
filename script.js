let fruitsUl = document.getElementById("fruitsUl");

const fruits = ["Banana", "orange", "Apple", "Pinapple", "Passion fruit"];

function displayFruits() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(innerFruits());
    }, 2000);
  });
}

const innerFruits = function () {
  fruits.forEach(innerText);
  console.log(text);
};
function innerText(item, index) {
  let list = document.createElement("li");
  fruitsUl.appendChild(list);
  list.innerText = item;
  console.log(item);
}

async function asyncFruits() {
  console.log("calling function");
  const result = await displayFruits();
  console.log("Finish");
}
asyncFruits();
