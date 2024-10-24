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

const NavigationId = {
	...RootNavigation,
	...AccountNavigation,
};

export default NavigationId;
