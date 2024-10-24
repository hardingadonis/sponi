import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationId from '@/navigation/NavigationId';
import CommonBottomTabContent from '@/navigation/common/CommonBottomTabContent';
import CommonSetIcon from '@/navigation/common/CommonSetIcon';
import TransactionIncomeScreen from '@/screens/transactions/CategoryIncomeScreen';
import TransactionExpenseScreen from '@/screens/transactions/TransactionExpenseScreen';
import TransactionTransferScreen from '@/screens/transactions/TransactionTransferScreen';

const RNTab = createBottomTabNavigator();

const TransactionNavigator = () => {
	return (
		<RNTab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <CommonBottomTabContent {...props} />}
		>
			<RNTab.Screen
				name={NavigationId.TRANSACTION_INCOME}
				component={TransactionIncomeScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'trending-up',
							size,
							color,
						});
					},
					tabBarLabel: 'Income',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.TRANSACTION_EXPENSE}
				component={TransactionExpenseScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'trending-down',
							size,
							color,
						});
					},
					tabBarLabel: 'Expense',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.TRANSACTION_TRANSFER}
				component={TransactionTransferScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'repeat',
							size,
							color,
						});
					},
					tabBarLabel: 'Transfer',
				}}
			/>
		</RNTab.Navigator>
	);
};

export default TransactionNavigator;
