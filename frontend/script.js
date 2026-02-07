const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    const book = document.getElementById("bookTitle").value;
    const chapter = document.getElementById("bookChapter").value;
    const content = document.getElementById("bookContent").value;

    console.log("Book: ", book);
    console.log("Chapter: ", chapter);
    console.log("Content: ", content);
});