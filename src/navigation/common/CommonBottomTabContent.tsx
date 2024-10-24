import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { BottomNavigation } from 'react-native-paper';

const CommonBottomTabContent = ({
	navigation,
	state,
	descriptors,
	insets,
}: BottomTabBarProps) => {
	return (
		<BottomNavigation.Bar
			navigationState={state}
			safeAreaInsets={insets}
			onTabPress={({ route, preventDefault }) => {
				const event = navigation.emit({
					type: 'tabPress',
					target: route.key,
					canPreventDefault: true,
				});

				if (event.defaultPrevented) {
					preventDefault();
				} else {
					navigation.navigate(route.name, route.params);
				}
			}}
			renderIcon={({ route, focused, color }) =>
				descriptors[route.key]!.options.tabBarIcon?.({
					focused,
					color,
					size: 24,
				}) || null
			}
			getLabelText={({ route }) => {
				const label = descriptors[route.key]!.options.tabBarLabel;
				return typeof label === 'string' ? label : undefined;
			}}
		></BottomNavigation.Bar>
	);
};

export const setTabBar = (props: BottomTabBarProps) => {
	return <CommonBottomTabContent {...props} />;
};
