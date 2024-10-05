// selecting popup-box,popup-overlay and button
var popupbox = document.querySelector(".popup-box");
var popupoverlay = document.querySelector(".popup-overlay");
var addbutton = document.getElementById("add-popup-button");

addbutton.addEventListener("click", function () {
  popupbox.style.display = "block";
  popupoverlay.style.display = "block";
});

// selecting cancel button
var canclebutton = document.getElementById("cancel-popup");
canclebutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// selecting add-book,container,book-title-input,book-author-input and book-description
var container = document.querySelector(".container");
var booktitleinput = document.querySelector(".book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description");
var addbook = document.getElementById("add-book");

addbook.addEventListener("click", function (event) {
  event.preventDefault();
  var div = document.createElement("div");
  div.setAttribute("class", "book-container");
  div.innerHTML = `<h2>${booktitleinput.value}</h2>
                   <h5>${bookauthorinput.value}</h5>
                   <p>${bookdescriptioninput.value}</p>
                   <button onclick="deletebook(event)">Delete</button>`;
  container.append(div);
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

// selecting delete button
function deletebook(event){
    event.target.parentElement.remove()
}
