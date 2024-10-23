import { Ionicons } from '@expo/vector-icons';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import * as Application from 'expo-application';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Drawer, Text, Title } from 'react-native-paper';

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
					icon={({ color, size }) => (
						<Ionicons name="home-outline" size={size} color={color} />
					)}
					label="Home"
					active={active == 'home'}
					onPress={() => {
						setActive('home');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="wallet-outline" size={size} color={color} />
					)}
					label="Accounts"
					active={active == 'accounts'}
					onPress={() => {
						setActive('accounts');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="pricetags-outline" size={size} color={color} />
					)}
					label="Categories"
					active={active == 'categories'}
					onPress={() => {
						setActive('categories');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="cash-outline" size={size} color={color} />
					)}
					label="Transactions"
					active={active == 'transactions'}
					onPress={() => {
						setActive('transactions');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="bar-chart-outline" size={size} color={color} />
					)}
					label="Overview"
					active={active == 'overview'}
					onPress={() => {
						setActive('overview');
					}}
				/>
			</Drawer.Section>
			<Drawer.Section>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons name="settings-outline" size={size} color={color} />
					)}
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
