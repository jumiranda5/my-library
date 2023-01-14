let myLibrary = [];


// Page elements
const table = document.getElementById("data");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const finishedInput = document.getElementById("finished");
const form = document.getElementById("form");
const formSubmitButton = document.getElementById("submit");
const formCancelButton = document.getElementById("cancel");
const addBookButton = document.getElementById("add-book");


toggleTableVisibility(true);


// Buttons listeners
formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    addBookRow();
    clearFormInputs();
    toggleTableVisibility(true);
    form.classList.add('hidden');
});


addBookButton.addEventListener("click", () => {
    toggleTableVisibility(false);
    form.classList.remove('hidden');
});

formCancelButton.addEventListener("click", () => {
    toggleTableVisibility(true);
    form.classList.add('hidden');
})


// Book Constructor
function Book(author, title, pages, isFinished) {
    if (myLibrary.length === 0) {
        this.id = 0;
    }
    else {
        this.id = myLibrary[myLibrary.length - 1].id + 1;
    }
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isFinished = isFinished;
}

Book.prototype.toggleFinished = function() {
    if (this.isFinished) {
        this.isFinished = false;
    }
    else {
        this.isFinished = true;
    }
}


// Display table if not empty 
function toggleTableVisibility(isVisible) {
    if (isVisible && myLibrary.length > 0) table.classList.remove('hidden');
    else table.classList.add('hidden');
}


function addBookToLibrary() {

    let author = authorInput.value;
    let title = titleInput.value;
    let pages = pagesInput.value;
    let isFinished = finishedInput.checked;

    myLibrary.push(new Book(author, title, pages, isFinished));

}


function addBookRow() {

    //get table body:
    const tableBody = table.getElementsByTagName('tbody')[0];

    // Create an empty <tr> element and add it to the last position of the table:
    const row = tableBody.insertRow(-1);

    // Insert cells:
    const authorCell = row.insertCell(0);
    const titleCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const checkboxCell = row.insertCell(3);
    const removeButtonCell = row.insertCell(4);

    // Last book index
    const index = myLibrary.length -1;
    const bookId = myLibrary[index].id;

    // Checkbox value
    let checked;
    if (myLibrary[index].isFinished === true) checked = "checked";
    else checked = "";

    // Add content to the new cells:
    authorCell.innerHTML = myLibrary[index].author;
    titleCell.innerHTML = myLibrary[index].title;
    pagesCell.innerHTML = myLibrary[index].pages;
    checkboxCell.innerHTML = 
        `<input type="checkbox" value="${bookId}" onChange="toggleFinished(this)" ${checked} class="form-check-input">`;

    // Insert button to remove book
    removeButtonCell.innerHTML = 
        `<button type="button" onclick="removeBook(this)" data-book-id="${bookId}" class="btn btn-outline-danger">Remove</button>`;

    // Align cells text center vertical => align-middle from bootstrap 5
    authorCell.classList.add("align-middle");
    titleCell.classList.add("align-middle");
    pagesCell.classList.add("align-middle");
    checkboxCell.classList.add("align-middle");
}


function clearFormInputs() {
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    finishedInput.checked = false;
}


function removeBook(removeButton) {

    // Remove book from myLibrary list => find array index using book id
    const bookId = parseInt(removeButton.getAttribute("data-book-id"));
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    myLibrary.splice(bookIndex, 1);

    // Remove book from table
    const rowIndex = removeButton.parentNode.parentNode.rowIndex;
    table.deleteRow(rowIndex);

}


function toggleFinished(ckb) {
    const bookId = parseInt(ckb.value);
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    myLibrary[bookIndex].toggleFinished();
}