import { Transaction } from "./transaction.model";

export interface TransferDetail extends Transaction {
	id: number;
	targetAccountId: number;
}
