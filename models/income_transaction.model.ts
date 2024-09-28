import { Transaction } from "@/models/transaction.model";

export interface IncomeTransaction extends Transaction {
	categoryId: number;
}
