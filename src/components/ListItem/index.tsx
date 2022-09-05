import React from 'react';
import IBot from '../../@types/Bot';
import Star from '../../assets/Star';
import StarOutline from '../../assets/StarOutline';
import {
	Avatar,
	Container,
	ContainerInfo,
	DateLabel,
	Info,
	Name,
	StarContainer,
} from './styles';

interface CardProps {
	data: IBot;
	isFavorite?: boolean;
	handleFavorite: (arg0: IBot) => void;
}
const ListItem: React.FC<CardProps> = ({
	data,
	isFavorite,
	handleFavorite,
}) => {
	return (
		<Container>
			<StarContainer
				onClick={() => {
					handleFavorite(data);
				}}
			>
				{isFavorite ? <Star /> : <StarOutline />}
			</StarContainer>
			<ContainerInfo to={`/bot/${data.shortName}`}>
				<Info>
					<Avatar src={`https://robohash.org/${data.name}`} />
					<Name>{data.name}</Name>
				</Info>
				<DateLabel>{`Created at ${new Date(
					data.created
				).toLocaleDateString()}`}</DateLabel>
			</ContainerInfo>
		</Container>
	);
};

export default ListItem;
