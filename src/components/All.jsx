import { ListElement } from "./ListElement";

const All = (props) => {
    return (<>

        {/* To Show The Active Task Items */}
        {!props.lists.length ? (
            <p style={{ width: "full", textAlign: "center", color: 'aliceblue', padding: '10px 0' }}>No task found</p>
        ) : (
            props.lists.filter(item => !item.complete).map((item) => {
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

        {/* To Show The Completed Items */}

        {props.lists.filter(item => item.complete).map((item) => {
            return (
                <ListElement
                    key={item.id}
                    lists={props.lists}
                    setLists={props.setLists}
                    item={item}
                />
            );
        })}
    </>
    )
}
export default All;