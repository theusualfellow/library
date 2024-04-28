const book = document.querySelector(".book")
const deleteButton = document.querySelectorAll(".delete")
const dialogBox = document.querySelector(".dialogBox")
const dialogOpen= document.querySelector(".dialogOpen")
const okayButton = document.querySelector(".okay")
let bookTitle = document.querySelector("#title")
let bookAuthor= document.querySelector("#author")
let pages=document.querySelector("#pages")

const books = document.querySelector(".books")

deleteButton.forEach(button=>{
    button.addEventListener("click", function(){
        this.parentNode.remove()
})

})

dialogOpen.addEventListener("click", ()=>{
    dialogBox.showModal()
})

okayButton.addEventListener("click", ()=>{
    const newDiv= document.createElement("div")
newDiv.classList.add('book')
    books.appendChild(newDiv)
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