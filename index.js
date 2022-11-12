const myEmojis = []

const name = document.getElementById("list-name")

const emojiContainer = document.getElementById("emoji-container")

const emojiInput = document.getElementById("emoji-input")

const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")

const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()


*/ Ingresa un nuevo item al final del array */

pushBtn.addEventListener("click", function(){
    
    if (myEmojis.includes(emojiInput.value)) {
            alert('Item already added')
        } else  {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis() 
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
    myEmojis.pop()
    renderEmojis()
})

*/ Saca el ultimo item del array */

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})