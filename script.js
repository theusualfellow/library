const book = document.querySelector(".book")
const deleteButton = document.querySelectorAll(".delete")
const dialogBox = document.querySelector(".dialogBox")
const dialogOpen= document.querySelector(".dialogOpen")

deleteButton.forEach(button=>{
    button.addEventListener("click", function(){
        this.parentNode.remove()
})

})

dialogOpen.addEventListener("click", ()=>{
    dialogBox.showModal()
})












/* let bookInfo= document.querySelector(".bookInfo")

function Book(title, author, pages){
    this.title=title
    this.author=author
    this.pages=pages
}

const myLibrary=[]

for (let i=0; i<2; i++){
let bookName = prompt('enter book name')
let author= prompt('enter author')
let pages= prompt('enter length')

let newBook = new Book(bookName, author, pages)
myLibrary.push(newBook)
console.log(newBook)
console.log(newBook.title)
}
for(let i=0; i<myLibrary.length; i++){
    bookInfo.append(myLibrary[i].title)
}

 */