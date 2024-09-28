export interface Transaction {
	id: number;
	sourceAccountId: number;
	amount: number;
	description: string;
	type: 'income'| 'expense' | 'transfer';
	createAt: Date;
}
