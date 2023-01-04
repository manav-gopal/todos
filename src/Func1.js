function newTask(event) {
  //Saving data in Local Storage

  var inputValue = document.getElementById("myInput").value;
  ////// local storage /////

  if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", "[]");
  }
  var old_data = JSON.parse(localStorage.getItem("data"));
  old_data.push(inputValue);
  localStorage.setItem("data", JSON.stringify(old_data));

  //Putting User Input In List

  if (inputValue === "") {
    alert("please enter some text below");
    return;
  }
  var newList = document.createElement("li");
  var text = document.createTextNode(inputValue);
  newList.appendChild(text);
  document.getElementById("myList").appendChild(newList);
  document.getElementById("myInput").value = "";

  //adding close button /////////

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("x");
  span.className = "close";
  span.appendChild(txt);
  newList.appendChild(span);

  // var old_data = JSON.parse(localStorage.getItem("data"));
  // old_data.push(inputValue);

  event.preventDefault();
}

function getData() {
  if (localStorage.getItem("data") !== null) {
    var old_data = JSON.parse(localStorage.getItem("data"));
    var len = old_data.length;
    var get = JSON.parse(localStorage.getItem("data"));
    var items = "";
    for (var i = 0; i < len; i++) {
      items +="<li>" + get[i] + "<span class = close>" + "x" + "</span>" + "</li>";
    }
    document.getElementById("myList").innerHTML = items;
  }
}

export default newTask;
export { getData };
