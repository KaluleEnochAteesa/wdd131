// Get references to the input, button, and list elements
const chapterInput = document.getElementById('chapterInput');
const addChapterButton = document.getElementById('addChapterButton');
const chapterList = document.getElementById('chapterList');

// Function to add a new chapter to the list
function addChapter() {
    const chapter = chapterInput.value;
    if (chapter) {
        const li = document.createElement('li');
        li.innerHTML = `${chapter} <button class="deleteButton">❌</button>`;
        chapterList.appendChild(li);
        chapterInput.value = '';
    }
}

// Function to delete a chapter from the list
function deleteChapter(event) {
    if (event.target.classList.contains('deleteButton')) {
        const li = event.target.parentElement;
        chapterList.removeChild(li);
    }
}

// Event listeners for adding and deleting chapters
addChapterButton.addEventListener('click', addChapter);
chapterList.addEventListener('click', deleteChapter);
