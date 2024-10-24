import { Ionicons } from '@expo/vector-icons';

type Props = {
	isFocus: boolean;
	iconName: string;
	size: number;
	color: string;
};

const CommonSetIcon = ({ isFocus, iconName, size, color }: Props) => {
	return (
		<Ionicons
			name={isFocus ? (iconName as any) : (`${iconName}-outline` as any)}
			size={size}
			color={color}
		/>
	);
};

export default CommonSetIcon;
