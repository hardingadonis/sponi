import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import * as Application from 'expo-application';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Caption, Drawer, Text, Title } from 'react-native-paper';

import NavigiationId from '@/navigation/NavigationId';
import CommonSetIcon from '@/navigation/common/CommonSetIcon';

const RootDrawerContent = ({ navigation }: DrawerContentComponentProps) => {
	const [active, setActive] = useState(NavigiationId.HOME);
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
			<Caption style={styles.sloganText}>
				Keeping your money is our pleasure!
			</Caption>
			<Drawer.Section>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.HOME,
							iconName: 'home',
							size: size,
							color: color,
						})
					}
					label="Home"
					active={active == NavigiationId.HOME}
					onPress={() => {
						setActive(NavigiationId.HOME);
						navigation.navigate(NavigiationId.HOME);
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.ACCOUNT,
							iconName: 'wallet',
							size: size,
							color: color,
						})
					}
					label="Accounts"
					active={active == NavigiationId.ACCOUNT}
					onPress={() => {
						setActive(NavigiationId.ACCOUNT);
						navigation.navigate(NavigiationId.ACCOUNT);
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.CATEGORY,
							iconName: 'pricetags',
							size: size,
							color: color,
						})
					}
					label="Categories"
					active={active == NavigiationId.CATEGORY}
					onPress={() => {
						setActive(NavigiationId.CATEGORY);
						navigation.navigate(NavigiationId.CATEGORY);
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.TRANSACTION,
							iconName: 'cash',
							size: size,
							color: color,
						})
					}
					label="Transactions"
					active={active == NavigiationId.TRANSACTION}
					onPress={() => {
						setActive(NavigiationId.TRANSACTION);
						navigation.navigate(NavigiationId.TRANSACTION);
					}}
				/>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.OVERVIEW,
							iconName: 'bar-chart',
							size: size,
							color: color,
						})
					}
					label="Overview"
					active={active == NavigiationId.OVERVIEW}
					onPress={() => {
						setActive(NavigiationId.OVERVIEW);
						navigation.navigate(NavigiationId.OVERVIEW);
					}}
				/>
			</Drawer.Section>
			<Drawer.Section>
				<Drawer.Item
					icon={({ color, size }) =>
						CommonSetIcon({
							isFocus: active == NavigiationId.SETTING,
							iconName: 'settings',
							size: size,
							color: color,
						})
					}
					label="Settings"
					active={active == NavigiationId.SETTING}
					onPress={() => {
						setActive(NavigiationId.SETTING);
						navigation.navigate(NavigiationId.SETTING);
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
	sloganText: { marginTop: 7, marginLeft: 15, marginBottom: 10 },
	annotation: {
		marginHorizontal: 24,
		marginVertical: 6,
	},
});

export default RootDrawerContent;
