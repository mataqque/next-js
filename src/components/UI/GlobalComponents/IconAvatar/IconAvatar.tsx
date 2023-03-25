import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

const randomWarmColor = () => {
	return 'hsla(' + Math.random() * 360 + ', 100%, 50%, 1)';
};
const getInitialLetters = (name: string) => {
	return name.substring(0, 2);
};

interface IIconAvatarProps {
	name: string;
	photo: string;
}

export const IconAvatar = (props: IIconAvatarProps) => {
	const { name, photo } = props;
	const bgcolor = randomWarmColor();
	const initialLetters = getInitialLetters(name);
	return (
		<Stack direction='row' spacing={3}>
			<Avatar sx={{ bgcolor: bgcolor }} alt={name} src={photo}>
				{initialLetters}
			</Avatar>
		</Stack>
	);
};
