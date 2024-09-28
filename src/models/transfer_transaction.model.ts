import { Transaction } from '@/models/transaction.model';

export interface TransferTransaction extends Transaction {
	targetAccountId: number;
}
