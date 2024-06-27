import { ListElement } from "./ListElement";

const Completed = (props) => {
    return (<>
        {!props.lists.length ? (
            <p style={{ width: "full", textAlign: "center", color: 'aliceblue', padding: '10px 0' }}>No completed task found</p>
        ) : (
            props.lists.filter(item => item.complete).map((item) => {
                return (
                    <ListElement
                        key={item.id}
                        lists={props.lists}
                        setLists={props.setLists}
                        item={item}
                    />
                );
            })
        )}
    </>
    )
}
export default Completed;