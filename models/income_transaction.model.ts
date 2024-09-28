import { Transaction } from "./transaction.model";

export interface IncomeDetail extends Transaction {
	id: number;
	categoryId: number;
}
