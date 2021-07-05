import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Card } from "../card";
import { CardItem } from "../card/Card";

import styles from "./Column.module.scss";

export type ColumnItem = {
	title: string;
	id: string;
	cards: CardItem[];
};
export type ColumnProps = ColumnItem & {};

export const Column: React.FC<ColumnProps> = (props) => {
	const { title, id, cards } = props;

	return (
		<div className={styles.Column}>
			<header className={styles.Header}>{title}</header>
			<Droppable droppableId={id}>
				{({ droppableProps, innerRef, placeholder }) => (
					<div className={styles.Stack} ref={innerRef} {...droppableProps}>
						{cards.map((card, index) => (
							<Card
								key={index}
								index={index}
								id={card.id}
								value={card.value}
								onChange={() => void 0}
							/>
						))}
						{placeholder}
					</div>
				)}
			</Droppable>
		</div>
	);
};
