import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationId from '@/navigation/NavigationId';
import CommonBottomTabContent from '@/navigation/common/CommonBottomTabContent';
import CategoryExpenseScreen from '@/screens/categories/CategoryExpenseScreen';
import CategoryIncomeScreen from '@/screens/categories/CategoryIncomeScreen';

const RNTab = createBottomTabNavigator();

const CategoryNavigator = () => {
	return (
		<RNTab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <CommonBottomTabContent {...props} />}
		>
			<RNTab.Screen
				name={NavigationId.CATEGORY_INCOME}
				component={CategoryIncomeScreen}
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
				name={NavigationId.CATEGORY_EXPENSE}
				component={CategoryExpenseScreen}
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
		</RNTab.Navigator>
	);
};

export default CategoryNavigator;
