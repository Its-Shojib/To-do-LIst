let count = 0;

document.getElementById("btn-add").addEventListener("click", function () {
    let inputFeild = document.getElementById("task-input");
    let inputValue = inputFeild.value;

    let tr = document.createElement("tr");
    tr.innerHTML = `
    <tr>
    <td>${count+=1}</td>
    <td>${inputValue}</td>
    <td>
    <button class="done-btn bg-blue-500 text-white px-3 py-2 rounded-lg">Done</button>
    <button class="delete-btn bg-red-500 text-white px-3 py-2 rounded-lg">Delete</button>
    </td>
    </tr>`;
    let container = document.getElementById("container");
    container.appendChild(tr);
    inputFeild.value = '';
});

let doneBtns = document.querySelectorAll("done-btn");