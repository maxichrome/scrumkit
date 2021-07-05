import { IColumn } from "../components/column/Column";

export const initialData: IColumn[] = [
	{
		id: "first",
		title: "What needs to change",
		cards: [{ value: "I didn't get free snacks", id: "card-01-01" }],
	},
	{
		id: "second",
		title: "What went well",
		cards: [
			{
				value: "I brought my own snacks and shared 'em with the whole crew :)",
				id: "card-02-01",
			},
		],
	},
];
