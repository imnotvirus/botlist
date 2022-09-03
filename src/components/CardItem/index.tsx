import React from 'react';
import { useNavigate } from 'react-router-dom';
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
	const navigate = useNavigate();
	const handleNavigateToDetail = () => {
		navigate({
			pathname: `/bot/${data.shortName}`,
		});
	};
	return (
		<Container>
			<StarContainer
				onClick={() => {
					handleFavorite(data);
				}}
			>
				{isFavorite ? <Star /> : <StarOutline />}
			</StarContainer>
			<ContainerInfo onClick={handleNavigateToDetail}>
				<Avatar src={`https://robohash.org/${data.name}`} />
				<Name>{data.name}</Name>
				<Type>{data.type}</Type>
			</ContainerInfo>
		</Container>
	);
};

export default CardItem;
