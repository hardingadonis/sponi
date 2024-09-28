export interface Transaction {
	id: number;
	sourceAccountId: number;
	amount: number;
	description: string;
	type: string;
	createAt: Date;
}
