import { Transaction } from "@/models/transaction.model";

export interface ExpenseTransaction extends Transaction {
	categoryId: number;
}
