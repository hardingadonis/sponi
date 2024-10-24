import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NavigationId from '@/navigation/NavigationId';
import { setTabBar } from '@/navigation/common/CommonBottomTabContent';
import CommonSetIcon from '@/navigation/common/CommonSetIcon';
import AccountBankScreen from '@/screens/accounts/AccountBankScreen';
import AccountCashScreen from '@/screens/accounts/AccountCashScreen';

const RNTab = createBottomTabNavigator();

const AccountNavigator = () => {
	return (
		<RNTab.Navigator screenOptions={{ headerShown: false }} tabBar={setTabBar}>
			<RNTab.Screen
				name={NavigationId.ACCOUNT_CASH}
				component={AccountCashScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'wallet',
							size,
							color,
						});
					},
					tabBarLabel: 'Cash',
				}}
			/>
			<RNTab.Screen
				name={NavigationId.ACCOUNT_BANK}
				component={AccountBankScreen}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return CommonSetIcon({
							isFocus: focused,
							iconName: 'card',
							size,
							color,
						});
					},
					tabBarLabel: 'Bank',
				}}
			/>
		</RNTab.Navigator>
	);
};

export default AccountNavigator;
