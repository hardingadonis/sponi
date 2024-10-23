import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import * as Application from 'expo-application';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
	Avatar,
	Caption,
	Drawer,
	Paragraph,
	Switch,
	Text,
	Title,
	TouchableRipple,
} from 'react-native-paper';

const DrawerContent = () => {
	const [active, setActive] = useState('');
	const [appName, setAppName] = useState('');
	const [appVersion, setAppVersion] = useState('');

	useEffect(() => {
		const fetchAppInfo = async () => {
			const name = (await Application.applicationName) as string;
			const version = (await Application.nativeApplicationVersion) as string;
			setAppName(name);
			setAppVersion(version);
		};

		fetchAppInfo();
	}, []);

	return (
		<DrawerContentScrollView style={styles.drawerContent}>
			<View style={styles.titleSection}>
				<Avatar.Image source={require('@/assets/images/icon.png')} size={50} />
				<Title style={styles.titleText}>sponi</Title>
			</View>
			<Drawer.Section style={styles.drawerSection}>
				<Drawer.Item
					icon="home"
					label="Home"
					active={active == 'home'}
					onPress={() => {
						setActive('home');
					}}
				/>
				<Drawer.Item
					icon="car"
					label="Accounts"
					active={active == 'accounts'}
					onPress={() => {
						setActive('accounts');
					}}
				/>
				<Drawer.Item
					icon="laptop"
					label="Categories"
					active={active == 'categories'}
					onPress={() => {
						setActive('categories');
					}}
				/>
				<Drawer.Item
					icon="laptop"
					label="Transactions"
					active={active == 'transactions'}
					onPress={() => {
						setActive('transactions');
					}}
				/>
				<Drawer.Item
					icon="laptop"
					label="Overview"
					active={active == 'overview'}
					onPress={() => {
						setActive('overview');
					}}
				/>
			</Drawer.Section>
			<Drawer.Section>
				<Drawer.Item
					icon="account"
					label="Settings"
					active={active == 'settings'}
					onPress={() => {
						setActive('settings');
					}}
				/>
			</Drawer.Section>
			<Text variant="bodySmall" style={styles.annotation}>
				{appName} - v{appVersion}
			</Text>
		</DrawerContentScrollView>
	);
};

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	titleSection: {
		marginTop: 15,
		marginLeft: 15,
		flexDirection: 'row',
		alignItems: 'center',
	},
	titleText: {
		fontWeight: 'bold',
		marginLeft: 12,
	},
	drawerSection: {
		marginTop: 15,
	},
	annotation: {
		marginHorizontal: 24,
		marginVertical: 6,
	},
});

export default DrawerContent;
