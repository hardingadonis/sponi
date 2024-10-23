import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '@/navigation/DrawerContent';
import HomeScreen from '@/screens/HomeScreen';

const RNDrawer = createDrawerNavigator();

const RootNavigator = () => {
	return (
		<RNDrawer.Navigator drawerContent={() => <DrawerContent />}>
			<RNDrawer.Screen name="Home" component={HomeScreen} />
		</RNDrawer.Navigator>
	);
};

export default RootNavigator;
