import React from "react";
import Body from "./Body";

function App() {

  setInterval(function () {
    // To Delete The LI tag from Unorder List....
  
    var myToDoList = document.getElementsByTagName("li");
    var close = document.getElementsByClassName("close");
    var mylist = document.getElementById("myList");
    for (var i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var Line = this.parentElement;
        mylist.removeChild(Line);
        console.log(myToDoList.length);
      };
    }
    //for counting compleated tasks---------------->


    var c = 0;
    var d = 0;
    for (i = 0; i < myToDoList.length; i++) {
      if (myToDoList[i].className === "checked") {
        d++;
      }
      c++;
    }
    document.getElementById("numOfListRemain").innerHTML = "Task Left : " + (c - d);
  
    //==========X=========X===========X========>
  
    // Cheaked mark
    var list = document.querySelector("ul");
    list.addEventListener(
      "click",
      function (ev) {
        if (ev.target.tagName === "LI") {
          ev.target.classList.toggle("checked");
          console.log("Checked");
        }
      },
      false
    );
  }, 1000);
  

  return (
    <Body />
  );
}

export default App;
