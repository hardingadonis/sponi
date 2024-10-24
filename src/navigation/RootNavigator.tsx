import {
	DrawerContentComponentProps,
	createDrawerNavigator,
} from '@react-navigation/drawer';

import NavigationId from '@/navigation/NavigationId';
import RootDrawerContent from '@/navigation/RootDrawerContent';
import AccountScreen from '@/screens/AccountScreen';
import CategoryScreen from '@/screens/CategoryScreen';
import HomeScreen from '@/screens/HomeScreen';
import OverviewScreen from '@/screens/OverviewScreen';
import SettingScreen from '@/screens/SettingScreen';
import TransactionScreen from '@/screens/TransactionScreen';

const RNDrawer = createDrawerNavigator();

const setDrawerContent = (props: DrawerContentComponentProps) => {
	return <RootDrawerContent {...props} />;
};

const RootNavigator = () => {
	return (
		<RNDrawer.Navigator
			drawerContent={setDrawerContent}
			initialRouteName="HomeScreen"
			screenOptions={{ title: 'false' }}
		>
			<RNDrawer.Screen
				name={NavigationId.HOME}
				component={HomeScreen}
				options={{ title: 'Home' }}
			/>
			<RNDrawer.Screen
				name={NavigationId.ACCOUNT}
				component={AccountScreen}
				options={{ title: 'Accounts' }}
			/>
			<RNDrawer.Screen
				name={NavigationId.CATEGORY}
				component={CategoryScreen}
				options={{ title: 'Categories' }}
			/>
			<RNDrawer.Screen
				name={NavigationId.TRANSACTION}
				component={TransactionScreen}
				options={{ title: 'Transactions' }}
			/>
			<RNDrawer.Screen
				name={NavigationId.OVERVIEW}
				component={OverviewScreen}
				options={{ title: 'Overview' }}
			/>
			<RNDrawer.Screen
				name={NavigationId.SETTING}
				component={SettingScreen}
				options={{ title: 'Settings' }}
			/>
		</RNDrawer.Navigator>
	);
};

export default RootNavigator;
