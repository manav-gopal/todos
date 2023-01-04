import newTask, { getData } from "./Func1";
import Clear from "./Clearbtn";
function Body(){
    return (
        <>
      <div className="container">
        <div id="myDIV" className="header">
          <h2> My Memory</h2>
          <form onSubmit={newTask} id="myForm">
            <input type="text" id="myInput" placeholder="Title..." />
            <button type="submit" className="addBtn">
              Add
            </button>
          </form>
        </div>

        <div className="myUL">
          <ul id="myList">
            <li>Eggs<span className="close">x</span></li>
            <li>Maggi<span className="close">x</span></li>
          </ul>
          <ul className="someBtns">
            <button className="getBtn" onClick={getData}>
              Get Previous saved list
            </button>
            <button className="clearBtn" onClick={Clear}>
              Clear All
            </button>
            <p id="numOfListRemain">0</p>
          </ul>
        </div>
      </div>
    </>
    );
}
export default Body;