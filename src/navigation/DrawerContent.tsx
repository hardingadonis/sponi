import { Ionicons } from '@expo/vector-icons';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as Application from 'expo-application';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Drawer, Text, Title } from 'react-native-paper';

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
	const [active, setActive] = useState('home');
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
						<Ionicons
							name={active == 'home' ? 'home' : 'home-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Home"
					active={active == 'home'}
					onPress={() => {
						setActive('home');
						navigation.navigate('HomeScreen');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons
							name={active == 'accounts' ? 'wallet' : 'wallet-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Accounts"
					active={active == 'accounts'}
					onPress={() => {
						setActive('accounts');
						navigation.navigate('AccountScreen');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons
							name={active == 'categories' ? 'pricetags' : 'pricetags-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Categories"
					active={active == 'categories'}
					onPress={() => {
						setActive('categories');
						navigation.navigate('CategoryScreen');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons
							name={active == 'transactions' ? 'cash' : 'cash-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Transactions"
					active={active == 'transactions'}
					onPress={() => {
						setActive('transactions');
						navigation.navigate('TransactionScreen');
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons
							name={active == 'overview' ? 'bar-chart' : 'bar-chart-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Overview"
					active={active == 'overview'}
					onPress={() => {
						setActive('overview');
						navigation.navigate('OverviewScreen');
					}}
				/>
			</Drawer.Section>
			<Drawer.Section>
				<Drawer.Item
					icon={({ color, size }) => (
						<Ionicons
							name={active == 'settings' ? 'settings' : 'settings-outline'}
							size={size}
							color={color}
						/>
					)}
					label="Settings"
					active={active == 'settings'}
					onPress={() => {
						setActive('settings');
						navigation.navigate('SettingsScreen');
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
