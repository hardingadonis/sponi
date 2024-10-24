const RootNavigation = {
	HOME: 'home',
	ACCOUNT: 'account',
	CATEGORY: 'category',
	TRANSACTION: 'transaction',
	OVERVIEW: 'overview',
	SETTING: 'setting',
};

const AccountNavigation = {
	ACCOUNT_CASH: 'account_cash',
	ACCOUNT_BANK: 'account_bank',
};

const CategoryNavigation = {
	CATEGORY_INCOME: 'category_income',
	CATEGORY_EXPENSE: 'category_expense',
};

const TransactionNavigation = {
	TRANSACTION_INCOME: 'transaction_income',
	TRANSACTION_EXPENSE: 'transaction_expense',
	TRANSACTION_TRANSFER: 'transaction_transfer',
};

const NavigationId = {
	...RootNavigation,
	...AccountNavigation,
	...CategoryNavigation,
	...TransactionNavigation,
};

export default NavigationId;
