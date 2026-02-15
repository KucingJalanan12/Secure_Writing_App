let books = []
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    const book = document.getElementById("bookTitle").value;
    const chapter = document.getElementById("chapterTitle").value;
    const content = document.getElementById("chapterContent").innerText.trim();

    books.push({
        book,
        chapter,
        content
    });

    console.log("Books array: ", books);
});