import React, { useState } from "react";

export interface TodoItemType {
	id: string,
	title: string,
	completed: boolean,
}
type ItemType = {
	todo: TodoItemType;
}
// export type TodoItemType = Todo;
const Item: React.FC<ItemType> = ({ todo }) => {
	const [onEdit, setOnEdit] = useState(false);
	const toggleEdit = () => {
		setOnEdit(!onEdit);
	}
	return (
		<div className="wrapper" onClick={toggleEdit}>
			{ !onEdit ?
				<h3>{ todo.title }</h3>
				:
				<input type="text" value={ todo.title } />
			}
		</div>
	);
}
export default Item;