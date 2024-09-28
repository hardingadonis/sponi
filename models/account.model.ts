export interface Account {
	id: number;
	name: string;
	type: 'cash' | 'bank';
	balance: number;
	icon: string;
	color: string;
	createAt: Date;
	updateAt: Date;
	deleteAt: Date;
}
