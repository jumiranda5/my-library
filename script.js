let myLibrary = [];

addBookToLibrary();
displayData();

function Book(author, title, pages, isRead) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    myLibrary.push(new Book("Author One", "Title 1", 249, true));
    myLibrary.push(new Book("Author Two", "Title 2", 120, true));
    myLibrary.push(new Book("Author Three", "Title 3", 532, false));
}

function displayData() {

    const table = document.getElementById("data");

    // Include books on html table rows
    for (let i = 0; i < myLibrary.length; i++) {

        // Create an empty <tr> element and add it to the last position of the table:
        const row = table.insertRow(-1);

        // Insert cells:
        var authorCell = row.insertCell(0);
        var titleCell = row.insertCell(1);
        var pagesCell = row.insertCell(2);
        var checkboxCell = row.insertCell(3);

        // Add content to the new cells:
        authorCell.innerHTML = myLibrary[i].author;
        titleCell.innerHTML = myLibrary[i].title;
        pagesCell.innerHTML = myLibrary[i].pages;
        checkboxCell.innerHTML = myLibrary[i].isRead;
        
    }
}