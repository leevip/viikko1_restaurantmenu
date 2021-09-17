import "./styles.css";

document.getElementById("add-comment").addEventListener("click", addItem);
document
  .getElementById("remove-comments")
  .addEventListener("click", removeItems);

function addItem() {
  var comment = document.getElementById("comment").value;
  var text = document.createTextNode(comment);
  var node = document.createElement("LI");
  node.appendChild(text);
  document.getElementById("comment-list").appendChild(node);
}

function removeItems() {
  if (window.confirm("Do you wish to delete all comments?") === true) {
    var comments = document.getElementById("comment-list");
    var list = comments.getElementsByTagName("LI");
    while (list.length > 0) {
      comments.removeChild(list.item(0));
    }
  }
}
