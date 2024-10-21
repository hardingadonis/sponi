import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Main = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator children={undefined}></Stack.Navigator>
		</NavigationContainer>
	);
};

export default Main;
