import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationId from '@/navigation/NavigationId';
import CommonBottomTabContent from '@/navigation/common/CommonBottomTabContent';
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
						return (
							<Ionicons
								name={!focused ? 'trending-up-outline' : 'trending-up'}
								size={size}
								color={color}
							/>
						);
					},
					tabBarLabel: 'Income',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.TRANSACTION_EXPENSE}
				component={TransactionExpenseScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return (
							<Ionicons
								name={!focused ? 'trending-down-outline' : 'trending-down'}
								size={size}
								color={color}
							/>
						);
					},
					tabBarLabel: 'Expense',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.TRANSACTION_TRANSFER}
				component={TransactionTransferScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return (
							<Ionicons
								name={!focused ? 'repeat-outline' : 'repeat'}
								size={size}
								color={color}
							/>
						);
					},
					tabBarLabel: 'Transfer',
				}}
			/>
		</RNTab.Navigator>
	);
};

export default TransactionNavigator;
