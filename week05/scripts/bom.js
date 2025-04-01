const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

const getChapterList = () => {
  localStorage.getItem("chapters");
};

const displayList = (item) => {
  let li = document.createElement("li");
  let deleteButton = document.createElement("button");

  li.textContent = item;
  deleteButton.textContent = "❌";
  deleteButton.classList.add("delete");
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
};

const setChapterList = () => {
  return localStorage.setItem("chapters", JSON.stringify(chaptersArray));
};

const deleteChapter = (chapter) => {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter((item) => item !== chapter);
  setChapterList();
};

const chaptersArray = getChapterList() || [];
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    input.style.borderColor = "red";
    return input.focus();
  }

  input.style.borderColor = "black";

  displayList(input.value);
  chaptersArray.push(input.value);
  setChapterList();

  input.value = "";
  input.focus();
});
