import { handleCloseBtn, toggleComplete } from "../utils";

export const ListElement = (props) => {
    return (
        <li
            className={props.item.complete ? "checked" : ""}
            style={{ textDecoration: props.item.complete ? "line-through" : "none" }}
        >
            <div className="content" id={props.item.id} onClick={(e) => toggleComplete(e, props.lists, props.setLists)}>{props.item.content}</div>
            <div className="close"><div id={props.item.id} onClick={(e) => {handleCloseBtn(e, props.lists, props.setLists)}}>+</div></div>
        </li>
    );
}