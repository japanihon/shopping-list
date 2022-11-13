const myItems = []

const name = document.getElementById("list-name")

const listContainer = document.getElementById("list-container")

const itemsInput = document.getElementById("items-input")

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")

const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderList() {
    listContainer.innerHTML = ""
    for (let i = 0; i < myItems.length; i++) {
        const list = document.createElement('li')
        list.textContent = myItems[i]
        listContainer.appendChild(list)
          list.addEventListener('click', function(){
         list.style.textDecoration = "line-through";
         list.style.textDecorationThickness = "3px";
    })
    list.addEventListener('dblclick', function(){
        listContainer.removeChild(list);
    })
    }
}

renderList()


pushBtn.addEventListener("click", function(){
    
    if (myItems.includes(itemsInput.value)) {
            alert('Item already added')
        } else  {
        myItems.push(itemsInput.value)
        itemsInput.value = ""
        renderList() 
        }
})
