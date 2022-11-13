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
    }
}

renderList()


*/ Ingresa un nuevo item al final del array */

pushBtn.addEventListener("click", function(){
    
    if (myItems.includes(itemsInput.value)) {
            alert('Item already added')
        } else  {
        myItems.push(itemsInput.value)
        itemsInput.value = ""
        renderList() 
        }
})

/* Ingresa un nuevo item al incio del array 


unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

/* Saca el primer item del  array */ 

popBtn.addEventListener("click", function() {
    myItems.pop()
    renderList()
})

*/ Saca el ultimo item del array */

shiftBtn.addEventListener("click", function() {
    myItems.shift()
    renderList()
})