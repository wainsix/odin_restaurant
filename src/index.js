import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, nom imported
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}
console.log("LOGING");
document.body.appendChild(component());
