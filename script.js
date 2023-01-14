let myLibrary = [];


// Page elements
const table = document.getElementById("data");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const finishedInput = document.getElementById("finished");
const formSubmitButton = document.getElementById("submit");


// Buttons listeners
formSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    addBookToTable();
    clearFormInputs();
});


function Book(author, title, pages, isFinished) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isFinished = isFinished;
}


function addBookToLibrary() {

    let author = authorInput.value;
    let title = titleInput.value;
    let pages = pagesInput.value;
    let isFinished = finishedInput.checked;

    myLibrary.push(new Book(author, title, pages, isFinished));

}


function addBookToTable() {

    // Create an empty <tr> element and add it to the last position of the table:
    const row = table.insertRow(-1);

    // Insert cells:
    const authorCell = row.insertCell(0);
    const titleCell = row.insertCell(1);
    const pagesCell = row.insertCell(2);
    const checkboxCell = row.insertCell(3);

    // Add content to the new cells:
    authorCell.innerHTML = myLibrary[myLibrary.length -1].author;
    titleCell.innerHTML = myLibrary[myLibrary.length -1].title;
    pagesCell.innerHTML = myLibrary[myLibrary.length -1].pages;
    checkboxCell.innerHTML = myLibrary[myLibrary.length -1].isFinished;

}


function clearFormInputs() {
    authorInput.value = "";
    titleInput.value = "";
    pagesInput.value = "";
    finishedInput.checked = false;
}
