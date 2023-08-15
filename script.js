let count = 0;

document.getElementById("btn-add").addEventListener("click", function () {
  let inputFeild = document.getElementById("task-input");
  let inputValue = inputFeild.value;

  let tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${(count += 1)}</td>
    <td>${inputValue}</td>
    <td>
    <button class="done-btn bg-blue-500 text-white px-3 py-2 rounded-lg">Done</button>
    <button class="delete-btn bg-red-500 text-white px-3 py-2 rounded-lg">Delete</button>
    </td>`;
    tr.classList.add("removee");
  let container = document.getElementById("container");
  container.appendChild(tr);
  inputFeild.value = '';


let doneBtns = document.querySelectorAll(".done-btn");
  for (let btn of doneBtns) {
    btn.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.style.textDecoration =
        "line-through";
    });
  }
let deleteBtns = document.querySelectorAll(".delete-btn");
for(let btn of deleteBtns){
  btn.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.style.display =
      "none";
      count -= 1; 
    });
}
document.querySelector("#btn-clearAll").addEventListener("click", function (e) {
let removee = document.querySelectorAll(".removee");
for(let remove of removee){
  remove.style.display = "none";
}
  count = 0;
});

});