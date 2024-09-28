export interface Category {
	id: number;
	name: string;
	description: string;
	type: 'income' | 'expense';
	icon: string;
	color: string;
	createAt: Date;
	updateAt: Date;
}
