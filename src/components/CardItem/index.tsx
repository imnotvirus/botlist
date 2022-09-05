import React from 'react';
import IBot from '../../@types/Bot';
import { ReactComponent as Star } from '../../assets/Star.svg';
import { ReactComponent as StarOutline } from '../../assets/StarOutline.svg';
import { useBots } from '../../hooks/Bots';
import {
	Avatar,
	Container,
	ContainerInfo,
	Name,
	StarContainer,
	Type,
} from './styles';

interface CardItemProps {
	data: IBot;
	isFavorite?: boolean;
}
const CardItem: React.FC<CardItemProps> = ({ data, isFavorite }) => {
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
			<ContainerInfo to={`/bot/${data.shortName}`}>
				<Avatar src={`https://robohash.org/${data.name}`} />
				<Name>{data.name}</Name>
				<Type>{data.type}</Type>
			</ContainerInfo>
		</Container>
	);
};

export default CardItem;
