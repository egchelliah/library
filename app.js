let pop1 = document.getElementById('pop1')
let closeAddBook = document.getElementById('closex')

closeAddBook.addEventListener('click', () => {
    pop1.style.display='none'
    resetForm()
})

// Add a book
const addBookButton = document.getElementById("add_book")

addBookButton.addEventListener('click', () => {

    event.preventDefault()
    pop1.style.display='block'

})


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

let newBookModal = document.getElementById('addBookModal')

// Page Elements
const form = document.getElementById('addBookForm')
const submitBook = document.getElementById("submit")
const libraryTable = document.getElementById("libraryTable")
const tableBody = document.getElementById("table_body")
const removeItem = document.getElementById("removeBook")

function clearTable(){
    tableBody.innerHTML = ""
}

// removeItem.addEventListener('click', ()=>{
//     let index = removeItem.dataset.bookName
//     console.log('The book to be removed is ' + index)

//     // myLibrary = myLibrary.filter(item => item.title !== 'index')

// })


function addToArray(){
    event.preventDefault()
    let title = document.getElementById("title").value
    let author = document.getElementById("author").value
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked

    let newBook = new Book(title,author,pages,read)
    myLibrary.push(newBook)
    console.log(myLibrary)

    resetForm();
    pop1.style.display='none'


    loopBooks();
    // addToTable(newBook)
}

function loopBooks(){
    
    clearTable()

    for (i=0; i<myLibrary.length; i++){
        let newRow = document.createElement("tr")
        tableBody.append(newRow)
    
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
        newRow.append(readCell)
        let checkDiv = document.createElement('div')
        checkDiv.className="form-check form-switch"
        readCell.append(checkDiv)
        let listCheck = document.createElement('input')
        listCheck.className='form-check-input'
        listCheck.role='switch'
        listCheck.type='checkbox'
        listCheck.id='readCheck'

        if (myLibrary[i].read === true){
            listCheck.checked=true
        } else listCheck.checked=false

        checkDiv.append(listCheck)


        // Create remove button
        let removeBook = document.createElement("button")
        removeBook.className='btn btn-outline-danger'
        removeBook.innerHTML='<i class="far fa-trash-alt"></i>'
        removeBook.id='removeBook'
        removeBook.type='button'
        removeBook.dataset.bookNumber = i
        removeBook.addEventListener('click', () => {
            console.log('The book you clicked was index ' + removeBook.dataset.bookNumber + ' in the array')
            modifyArray(removeBook.dataset.bookNumber)
        })
        newRow.append(removeBook)
    }
}

function modifyArray(index){
    myLibrary.splice(index,1)
    loopBooks()
}


function resetForm(){

    form.reset()

}

onsubmit = (event) => { 
    addToArray()
};
