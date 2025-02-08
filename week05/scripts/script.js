const chapterInput = document.getElementById('chapterInput');
const addChapterButton = document.getElementById('addChapterButton');
const chapterList = document.getElementById('chapterList');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

addChapterButton.addEventListener('click', () => {
    if (chapterInput.value != '') {
        displayList(chapterInput.value);
        chaptersArray.push(chapterInput.value);
        setChapterList();
        chapterInput.value = '';
        chapterInput.focus();
    }
});

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('deleteButton');
    li.append(deleteButton);
    chapterList.append(li);

    deleteButton.addEventListener('click', function () {
        chapterList.removeChild(li);
        deleteChapter(li.textContent);
        chapterInput.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}
