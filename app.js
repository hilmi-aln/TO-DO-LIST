let task = document.getElementById("get-task");
let submit = document.querySelector("button");
let deleteButton = document.querySelectorAll("button")[1];
let mainList = document.querySelector(".main");
// let counter = 0;
// var counter = 0;
function add() { 
    for (let i = 0; i < 1; i++) {
        mainList.innerHTML += `<input type="checkbox" name="task" id="task"><label for="task">${task.value}</label><br>`;  
    }
    // counter++; 
    // console.log(counter);
    return mainList.innerHTML;
};

submit.addEventListener("click",add);

function removeBox() {
    let boxes = document.getElementsByName("task");
    let texts = document.querySelectorAll("label");
    let brs = Array.from (document.getElementsByTagName("br"));
    for (let c = 0; c < boxes.length; c++) {
        let box = boxes[c];
        let txt = texts[c];
        let br = brs[c];
        if (box.checked) {
            box.remove();
            txt.remove();
            br.remove();
        }
    }
};
deleteButton.addEventListener("click", removeBox);
