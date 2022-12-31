let img1 = document.getElementById("img1");
let inputField = document.getElementById("input-field");
let userName = document.getElementById("Uname");
let inputList = document.getElementById("inputList");
let listContainer = document.getElementById("listContainer");
let img2 = document.getElementById("img2");
let span = document.getElementById("notAdded");

inputField.addEventListener("change", () => {


let notAdded = () => {
    if(listContainer.hasChildNodes() == false){
        img2.style.display = "inline";
        span.style.display = "inline";
    }
    else{
        img2.style.display = "none" ;
        span.style.display = "none"; 
    }
};
notAdded ();

let all = document.createElement("button");
all.textContent = "All Task";
all.id = "AllTasks";

let pending = document.createElement("button");
pending.textContent = "Pending Task";
pending.id = "PendingTasks";


let completed = document.createElement("button");
completed.textContent = "Completed Task";
completed.id = "CompletedTasks";

let notAddedBtn = () => {
    if(listContainer.hasChildNodes() == true){
        document.body.appendChild(all);

        document.body.appendChild(pending);
        
        document.body.appendChild(completed);
    }
    else if(listContainer.hasChildNodes() == false){
        all.remove();
        pending.remove();
        completed.remove();
    }
};
notAdded();
notAddedBtn();

let value = inputField.value;

img1.remove();
inputField.remove();
inputList.style.display = "inline";

userName.innerHTML = `Hi,${value}`;




inputList.addEventListener("change", () => {
    let list = document.createElement("div");
    list.className = "list";
    listContainer.appendChild(list);
    notAdded();
    notAddedBtn();

    let checkbox = document.createElement("input");
checkbox.className = "checkbox";
checkbox.type = "checkbox";
checkbox.id = Math.random().toFixed(3);
list.appendChild(checkbox);

    let listValue = document.createElement("label");
    listValue.className = "label";
    listValue.innerHTML = inputList.value;
    listValue.setAttribute("for", checkbox.id);
list.appendChild(listValue);
checkbox.addEventListener("click", () => {

    if(checkbox.checked == true){
        listValue.style.textDecoration = "line-through";
    }
    else{
        listValue.style.textDecoration = "none";
    }
});
all.addEventListener("click", () => {
    if(checkbox.checked == false || checkbox.checked == true ){
        list.style.display = "block";
      }

});
pending.addEventListener("click", () => {
  if(checkbox.checked == false){
    list.style.display = "block";
  }
  else{
    list.style.display = "none";
  }
});
completed.addEventListener("click", () => {
    if(checkbox.checked == true){
        list.style.display = "block";
      }
      else{
        list.style.display = "none";
      }
});

let threeDotBtn = document.createElement("button");
threeDotBtn.textContent = "...";
threeDotBtn.className = "dotBtn";
list.appendChild(threeDotBtn);

threeDotBtn.addEventListener("click", () => {
    threeDotBtn.style.display = "none";
    let btnContainer = document.createElement("div");
    btnContainer.className = "btnContainer";
    list.appendChild(btnContainer);


let cross = document.createElement("button");
cross.textContent = "X";
cross.className = "cross";
btnContainer.appendChild(cross);

cross.addEventListener("click", () => {
    threeDotBtn.style.display = "inline";
    btnContainer.remove();



});
let deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete Task";
deleteBtn.className = "DeleteBtn";
btnContainer.appendChild(deleteBtn);

deleteBtn.addEventListener("click", () => {
    list.remove();
    notAdded();
    notAddedBtn();
});

let editBtn = document.createElement("button");
editBtn.textContent = "Edit Task";
editBtn.className = "EditBtn";
btnContainer.appendChild(editBtn);

editBtn.addEventListener("click", () => {
    btnContainer.remove();
    threeDotBtn.style.display = "inline"
    let editContainer = document.createElement("div");
    editContainer.className = "editContainer";
    document.body.appendChild(editContainer);

editContainer.appendChild(cross);

cross.addEventListener("click", () => {
    editContainer.remove();
})

cross.style.cssText = `position: absolute; top: 5px; left: 250px;`;

let editInput = document.createElement("input");
editInput.placeholder = "Change A Task";
editInput.id = "editInput";
editContainer.appendChild(editInput);

editInput.value = listValue.innerHTML;

let editTask = document.createElement("button");
editTask.textContent = "Edit Task";
editTask.className = "EditBtn";
editContainer.appendChild(editTask);
editTask.style.cssText = `position: absolute; top: 100px; left: 195px;`;


editTask.addEventListener("click", () => {
    listValue.innerHTML = editInput.value;
    editContainer.remove();
})

editInput.addEventListener("change", () => {
    if(editInput.value == ""){
        editTask.disabled = true;
        editTask.style.opacity = "0.5";
        editTask.style.cursor = "auto";
    }
    else{
        editTask.disabled = false;
        editTask.style.opacity = "1";
        editTask.style.cursor = "pointer";
    }
})
deleteBtn.style.cssText = `position: absolute; top: 100px; left: 110px;`;
editContainer.appendChild(deleteBtn);

deleteBtn.addEventListener("click", () => editContainer.remove());
})

});
inputList.value = "";
});

});