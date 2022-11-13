const myItems = []

const name = document.getElementById("list-name")

const listContainer = document.getElementById("list-container")

const itemsInput = document.getElementById("items-input")

const addBtn = document.getElementById("add-btn")

const deleteBtn = document.getElementById("delete-btn")


function renderList() {
    listContainer.innerHTML = ""
    for (let i = 0; i < myItems.length; i++) {
        const list = document.createElement('li')
        list.classList.add('list-styling');
        list.textContent = myItems[i]
        listContainer.append(list)
    }
}

renderList()


addBtn.addEventListener("click", function(){
    
    if (myItems.includes(itemsInput.value)) {
            alert('Item already added')
        } else  {
        myItems.push(itemsInput.value)
        itemsInput.value = ""
        listContainer.innerHTML = "" 
        renderList()
        }
})

deleteBtn.addEventListener("click", function() {
    myItems.pop()
    renderList() 
})


