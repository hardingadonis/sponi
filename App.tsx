import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';

import Main from '@/Main';

const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<Main />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default App;
