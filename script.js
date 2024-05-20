//declaring necessary variables
const book = document.querySelector(".book")
const deleteButton = document.querySelectorAll(".delete")
const dialogBox = document.querySelector(".dialogBox")
const dialogOpen= document.querySelector(".dialogOpen")
const okayButton = document.querySelector(".okay")
let bookTitle = document.querySelector("#title")
let bookAuthor= document.querySelector("#author")
let bookPages=document.querySelector("#pages")
const books = document.querySelector(".books")
const form = document.querySelector(".form")
const closeDialog= document.querySelector(".closeDialog")
let readStatus= document.querySelectorAll(".readStatus")

//this is to delete the existing book divs that we have in our html
deleteButton.forEach(button=>{
    button.addEventListener("click", function(){
        this.parentNode.remove()
})

})
closeDialog.addEventListener("click", (e)=>{
    e.preventDefault()
    dialogBox.close()
})

dialogOpen.addEventListener("click", ()=>{
    dialogBox.showModal()
})

readStatus.forEach(button=>{
    button.addEventListener("click", ()=>{
        if(button.innerText=="Read"){
            button.innerText="Unread"
        }
        else{
            button.innerText="Read"
        }
})

})

//using i to create a counter for the index of new book in the book array
let i=0
okayButton.addEventListener("click", ()=>{

    
    
    //declaring variables for headings and buttons for new book
    const title= document.createElement("h1")
    const author= document.createElement("h2")
    const pages=document.createElement("h3")
    const read = document.createElement("button")
    read.classList.add("readStatus2")
    let read1 = document.querySelector("#readStatus")
    read.innerText=read1.value
    
    const del = document.createElement("button")
  
    //assigning value to the variables above to match the user input in the form input field
    title.textContent=bookTitle.value
    author.textContent=bookAuthor.value
    pages.textContent= `${bookPages.value} pages`
    console.log(read1.value)
    del.textContent="Delete"


    if(title.textContent=='' || author.textContent=='' || pages.textContent==' pages'){
        alert('please fill all fields')
        dialogBox.open
    }
    else{

    //when okay button clicked this will create a new div with class of 'book'
    //and appned that to the books div in our html
    const newDiv= document.createElement("div")
    newDiv.classList.add('book')
    books.appendChild(newDiv)

    //appending the created headings and buttons
    newDiv.appendChild(title)
    newDiv.appendChild(author)
    newDiv.appendChild(pages)
    newDiv.appendChild(read)
    newDiv.setAttribute("data-index-number", i) //setting data-index-attribute equal to our counter
    newDiv.appendChild(del)
    del.classList.add("delete")

    //creating a new deleteButton variable as the one before does not include the newly created divs
    let deleteButton2=document.querySelectorAll(".delete")
    const number = newDiv.getAttribute("data-index-number")
    console.log(number)
    deleteButton2.forEach(button=>{
        button.addEventListener("click", function(){
            this.parentNode.remove()
            console.log(number)
            myLibrary.splice(number,1)
            console.log(myLibrary)
            i-- //because if this is not done then the index of new array items will be not in order
    })})

    //creating a new readStatus variable as the one before does not include newly created buttons in the added books
    let readStatus2= document.querySelectorAll(".readStatus2")
    readStatus2.forEach(button=>{
        button.addEventListener("click", ()=>{
            if(button.innerText=="Read"){
                button.innerText="Unread"
            }
            else{
                button.innerText="Read"
            }
        })
    })
    

    i++ //increasing index on subsequent book additions
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value)
    myLibrary.push(newBook)
    console.log(myLibrary)
    dialogBox.close()

}
form.reset() //resets the input fields after a book is added
})

class Book{
    constructor(title, author, pages){
        this.title=title
        this.author=author
        this.pages=pages
    }
}
   

const myLibrary=[]



