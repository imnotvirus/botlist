import React from 'react';
import IBot from '../../@types/Bot';
import { ReactComponent as Star } from '../../assets/Star.svg';
import { ReactComponent as StarOutline } from '../../assets/StarOutline.svg';
import { useBots } from '../../hooks/Bots';
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
}
const ListItem: React.FC<CardProps> = ({ data, isFavorite }) => {
	const { handleFavorite } = useBots();

	return (
		<Container>
			<StarContainer
				onClick={() => {
					handleFavorite(data);
				}}
			>
				{isFavorite ? <Star /> : <StarOutline />}
			</StarContainer>
			<ContainerInfo>
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
