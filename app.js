// Array of books
let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {

    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
  
}
// Page Elements
const form = document.getElementById('addBookForm')

form.style.visibility="hidden"
const submitBook = document.getElementById("submit")
const libraryTable = document.getElementById("libraryTable")
const addBookButton = document.getElementById("add_book")


// Add a book
addBookButton.addEventListener('click', () => {

    event.preventDefault()

    if (form.style.visibility==='hidden') {
        form.style.visibility = 'visible'
    } else {
        form.style.visibility = 'hidden'
    }

})

// Close add book modal


function addToArray(){
    event.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    // let read = readValue()
    let read = document.getElementById("read").checked
    alert(title + " " + author + " " + pages + " " + read)

    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    console.log(myLibrary)
    resetForm();
    loopBooks();
    // addToTable(newBook)
}

// function addToTable(newBook) {
//      // Create new table row
//      let newRow = document.createElement("tr")
//      libraryTable.append(newRow)
 
//      // Create and add title
//      let titleCell = document.createElement("td")
//      titleCell.innerHTML=newBook.title
//      newRow.append(titleCell)
 
//      // Create and add author
//      let authorCell = document.createElement("td")
//      authorCell.innerHTML=newBook.author
//      newRow.append(authorCell)
 
//      // Create and add author
//      let pagesCell = document.createElement("td")
//      pagesCell.innerHTML=newBook.pages
//      newRow.append(pagesCell)
// }

function loopBooks(){
    for (i=(myLibrary.length-1); i<myLibrary.length; i++){
        let newRow = document.createElement("tr")
        libraryTable.append(newRow)
    
        // Create and add title
        let titleCell = document.createElement("td")
        titleCell.innerHTML=myLibrary[i].title
        newRow.append(titleCell)
    
        // Create and add author
        let authorCell = document.createElement("td")
        authorCell.innerHTML=myLibrary[i].author
        newRow.append(authorCell)
    
        // Create and add pages
        let pagesCell = document.createElement("td")
        pagesCell.innerHTML=myLibrary[i].pages
        newRow.append(pagesCell)

        // Create and add read status
        let readCell = document.createElement("td")

        if (myLibrary[i].read === true){

            readCell.innerHTML="Read"

        } else readCell.innerHTML = "Not Read"

        newRow.append(readCell)
    }
}


function resetForm(){

    form.reset()
    form.style.visibility="hidden"

}

// Submit book
submitBook.addEventListener('click', () => {

    addToArray();
})
