// Array of books
let myLibrary = [];

// Constructor
function Book(name, author, pages, read) {

    this.name = name
    this.author = author
    this.pages = pages
}

function addBookToLibrary() {
  
}
// Page Elements
const form = document.getElementById('addBookForm')

form.style.visibility="hidden"
const submitBook = document.getElementById("submit")
const libraryTable = document.getElementById("libraryTable")
const addBookButton = document.getElementById("add_book")



addBookButton.addEventListener('click', () => {

    event.preventDefault()

    if (form.style.visibility==='hidden') {
        form.style.visibility = 'visible'
    } else {
        form.style.visibility = 'hidden'
    }

})



submitBook.addEventListener('click', () => {
    event.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    // let read = document.getElementById("read").value
    alert(title + " " + author + " " + pages)

    let newBook = new Book(title,author,pages)
    myLibrary.push(newBook)
    console.log(myLibrary)

    let newRow = document.createElement("tr")
    libraryTable.append(newRow)

    let tr1 = document.createElement("td")
    tr1.innerHTML=newBook.name
    newRow.append(tr1)


    form.reset()
    form.style.visibility="hidden"

})
console.log(myLibrary)
