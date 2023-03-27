// const deleteBtn = document.querySelectorAll('.del');
const restockItem = document.querySelectorAll('span.notCompleted');
const restockComplete = document.querySelectorAll('span.completed');
// const restockCheckbox = document.querySelectorAll('.restockCheckbox');
// const restockSpan = document.querySelectorAll('.restockSpan');
// const restockRow = document.querySelector('.restockRow');
// const tableRowData = document.querySelectorAll('#restockTable tr.restockRow * restockSpan');
// const restockTableCells = document.querySelector('.restockRow .restockSpan');


// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// });

Array.from(restockItem).forEach((el)=>{
    el.addEventListener('click', markRestockComplete)
});

Array.from(restockComplete).forEach((el)=>{
    el.addEventListener('click', markRestockIncomplete)
});

// const restockCheckboxArray = Array.from(restockCheckbox);
//     restockCheckboxArray.forEach((el)=>{
//     el.addEventListener('change', checkTheBox)
//     });

// Array.from(restockCheckbox).forEach((el)=>{
//     el.addEventListener('change', checkTheBox)
//     });
//     async function checkTheBox(e) {
//         if(e.target.checked) {
//             localStorage.setItem('checked')
//             // restockTableCells.classList.remove('notCompleted')
//             // restockTableCells.classList.add('completed')
//             console.log("Checkbox is checked...");
//         } else {
//             for (const span of tableRowData) {
//                 span.classList.add('notCompleted')
//             }
//             for (const span of tableRowData) {
//                 span.classList.remove('notCompleted')
//             }
//             console.log("Checkbox is not checked...");
//         }
//     };

// markRestockComplete

// Array.from(restockComplete).forEach((el)=>{
//     el.addEventListener('indeterminate', markRestockIncomplete)
// });

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         });
//         const data = await response.json()
//         console.log(data);
//         location.reload();
//     }catch(err){
//         console.log(err);
//     }
// };

async function markRestockComplete(){
    const restockText = this.parentNode.childNodes[1].innerText
    try{
        const response = await fetch('restock/markRestockComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': restockText
            })
        })
        const data = await response.json()
        console.log(data);
        location.reload();

    }catch(err){
        console.log(err);
    }
};

async function markRestockIncomplete(){
    const restockText = this.parentNode.parentNode.childNodes.childNodes[1].innerText
    try{
        const response = await fetch('restock/markRestockIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'itemFromJS': restockText
            })
        });
        const data = await response.json()
        console.log(data);
        location.reload();

    }catch(err){
        console.log(err);
    }
};


