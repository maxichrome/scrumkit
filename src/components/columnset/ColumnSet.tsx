import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Column } from "../column";
import { IColumn } from "../column/Column";
import { initialData } from "../../data/initial-columns";

import styles from "./ColumnSet.module.scss";

export type ColumnSetProps = {};

export const ColumnSet: React.FC<ColumnSetProps> = (props) => {
	const {} = props;

	const [columns, setColumns] = React.useState<IColumn[]>(initialData);

	const onDragEnd = React.useCallback((dropEvent: DropResult) => {
		if (!dropEvent.destination) return;

		if (
			dropEvent.destination.droppableId === dropEvent.source.droppableId &&
			dropEvent.destination.index === dropEvent.source.index
		)
			return;

		// TODO: add data reorder logic
	}, []);

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<div className={styles.ColumnSet}>
				{columns.map((column, columnIndex) => (
					<Column
						key={columnIndex}
						id={column.id}
						title={column.title}
						cards={column.cards}
					/>
				))}
			</div>
		</DragDropContext>
	);
};
