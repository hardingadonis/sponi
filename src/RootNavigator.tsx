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
		>
			<RNDrawer.Screen name="HomeScreen" component={HomeScreen} />
			<RNDrawer.Screen name="AccountScreen" component={AccountScreen} />
			<RNDrawer.Screen name="CategoryScreen" component={CategoryScreen} />
			<RNDrawer.Screen name="TransactionScreen" component={TransactionScreen} />
			<RNDrawer.Screen name="OverviewScreen" component={OverviewScreen} />
			<RNDrawer.Screen name="SettingsScreen" component={SettingsScreen} />
		</RNDrawer.Navigator>
	);
};

export default RootNavigator;
