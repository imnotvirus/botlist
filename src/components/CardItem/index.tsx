import IBot from '../../@types/Bot';
import Star from '../../assets/Star';
import StarOutline from '../../assets/StarOutline';
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
const CardItem = ({ data, isFavorite }: CardItemProps) => {
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
