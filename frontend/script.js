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

function handleEditor(element, e) {
    if (e.type === "keydown") {
        if (e.key === "Backspace" || e.key === "Delete") {
            if(element.innerText.trim() === "" || element.innerText.trim() === "\n"){
                e.preventDefault();
                element.innerHTML = "";
            }
        }
    }
    if (element.innerText.trim() === "") {
        element.classList.add("empty");
    } else {
        element.classList.remove("empty");
    }
}

editor.addEventListener("input", (e) => handleEditor(editor, e));
editor.addEventListener("keydown", (e) => handleEditor(editor, e));
editor2.addEventListener("input", (e) => handleEditor(editor2, e));
editor2.addEventListener("keydown", (e) => handleEditor(editor2, e));

const sidebar = document.getElementById("sidebar");
const togglebtn = document.getElementById("togglebtn");

togglebtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    togglebtn.classList.toggle("open");
    togglebtn.innerHTML = sidebar.classList.contains("open") ? "&#9664;" : "&#9654;"; 
});

const addBookBtn = document.getElementById("addBook");
const bookListDiv = document.getElementById("bookList");

addBookBtn.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value.trim();

    if (title === "") return;

    books.push({title, chapters: []});

    const bookItem = document.createElement("p");
    bookItem.innerHTML = title;
    bookListDiv.appendChild(bookItem);

    document.getElementById("bookTitle").value = "";
})

function switchScreen(screenID) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));

    document.getElementById(screenID).classList.toggle("active");
}

const EditorBtn = document.getElementById("edittester");
const HomeBtn = document.getElementById("hometester");

EditorBtn.addEventListener("click", () => switchScreen("editorScreen"));
HomeBtn.addEventListener("click", () => switchScreen("homeScreen"));