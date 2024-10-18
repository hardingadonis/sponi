import { PaperProvider } from 'react-native-paper';

import Main from '@/Main';

const App = () => {
	return (
		<PaperProvider>
			<Main />
		</PaperProvider>
	);
};

export default App;
