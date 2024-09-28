import { Transaction } from "./transaction.model";

export interface ExpenseDetail extends Transaction {
	id: number;
	categoryId: number;
}
