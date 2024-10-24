import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '@/navigation/DrawerContent';
import AccountScreen from '@/screens/AccountScreen';
import CategoryScreen from '@/screens/CategoryScreen';
import HomeScreen from '@/screens/HomeScreen';
import OverviewScreen from '@/screens/OverviewScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import TransactionScreen from '@/screens/TransactionScreen';

const RNDrawer = createDrawerNavigator();

const RootNavigator = () => {
	return (
		<RNDrawer.Navigator
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName="HomeScreen"
			screenOptions={{ title: 'false' }}
		>
			<RNDrawer.Screen
				name="HomeScreen"
				component={HomeScreen}
				options={{ title: 'Home' }}
			/>
			<RNDrawer.Screen
				name="AccountScreen"
				component={AccountScreen}
				options={{ title: 'Accounts' }}
			/>
			<RNDrawer.Screen
				name="CategoryScreen"
				component={CategoryScreen}
				options={{ title: 'Categories' }}
			/>
			<RNDrawer.Screen
				name="TransactionScreen"
				component={TransactionScreen}
				options={{ title: 'Transactions' }}
			/>
			<RNDrawer.Screen
				name="OverviewScreen"
				component={OverviewScreen}
				options={{ title: 'Overview' }}
			/>
			<RNDrawer.Screen
				name="SettingsScreen"
				component={SettingsScreen}
				options={{ title: 'Settings' }}
			/>
		</RNDrawer.Navigator>
	);
};

export default RootNavigator;
