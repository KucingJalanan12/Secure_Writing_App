let books = []
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    const book = document.getElementById("bookTitle").value;
    const chapter = document.getElementById("chapterTitle").innerText.trim();
    const content = document.getElementById("chapterContent").innerText.trim();

    books.push({
        book,
        chapter,
        content
    });

    console.log("Books array: ", books);
});

const editor = document.getElementById("chapterContent");
const editor2 = document.getElementById("chapterTitle");

function handleEmpty(element) {
    if (element.innerText.trim() === "") {
        element.classList.add("empty");
    } else {
        element.classList.remove("empty");
    }
}
function handleEnter(element, e) {
    if (e.key === "Backspace" || e.key === "Delete") {
        if(element.innerText.trim() === "" || element.innerText.trim() === "\n"){
            e.preventDefault();
            element.innerHTML = "";
        }
    }
}

editor.addEventListener("input", () => handleEmpty(editor));
editor.addEventListener("keydown", (e) => handleEnter(editor, e));
editor2.addEventListener("input", () => handleEmpty(editor2));
editor2.addEventListener("keydown", (e) => handleEnter(editor2, e));