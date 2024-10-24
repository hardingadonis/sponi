import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationId from '@/navigation/NavigationId';
import CommonBottomTabContent from '@/navigation/common/CommonBottomTabContent';
import AccountBankScreen from '@/screens/accounts/AccountBankScreen';
import AccountCashScreen from '@/screens/accounts/AccountCashScreen';

const RNTab = createBottomTabNavigator();

const AccountNavigator = () => {
	return (
		<RNTab.Navigator
			screenOptions={{ headerShown: false }}
			tabBar={(props) => <CommonBottomTabContent {...props} />}
		>
			<RNTab.Screen
				name={NavigationId.ACCOUNT_CASH}
				component={AccountCashScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return (
							<Ionicons
								name={!focused ? 'wallet-outline' : 'wallet'}
								size={size}
								color={color}
							/>
						);
					},
					tabBarLabel: 'Cash',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.ACCOUNT_BANK}
				component={AccountBankScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return (
							<Ionicons
								name={!focused ? 'card-outline' : 'card'}
								size={size}
								color={color}
							/>
						);
					},
					tabBarLabel: 'Bank',
				}}
			/>
		</RNTab.Navigator>
	);
};

export default AccountNavigator;
