import React from "react";
import { Draggable } from "react-beautiful-dnd";

import styles from "./Card.module.scss";

export type ICard = {
	id: string;
	value: string;
};
export type CardProps = ICard & {
	index: number;
	onChange: (value: string) => void;
};

export const Card: React.FC<CardProps> = (props) => {
	const { value, id, index, onChange } = props;

	// const [editValue, setEditValue] = React.useState(value);
	// const [editing, setEditing] = React.useState(false);

	// React.useEffect(() => {
	//   if (!editing) {
	//     return onChange(editValue);
	//   }
	// }, [editing, editValue, onChange]);

	return (
		<Draggable draggableId={id} index={index}>
			{({ draggableProps, dragHandleProps, innerRef }) => (
				<div
					ref={innerRef}
					{...draggableProps}
					{...dragHandleProps}
					className={styles.Card}
					// onClick={() => setEditing(true)}
					// onBlur={() => setEditing(false)}
				>
					{value}
					{/* {editing ? (
            <form onSubmit={() => setEditing(false)}>
              <input
                className={styles.ContentInput}
                // value={editValue}
                // onChange={(event) => setEditValue(event.target.value)}
                autoFocus
              />
              <button type="submit" className={styles.CardButton}>
                CHECK_MARK
              </button>
              <button className={styles.CardButton}>CANCEL</button>
            </form>
          ) : ( */}
					{/* )} */}
				</div>
			)}
		</Draggable>
	);
};
