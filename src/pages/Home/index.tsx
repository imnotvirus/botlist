import React from 'react';
import CardItem from '../../components/CardItem';

import CardIcon from '../../assets/CardIcon';
import ListIcon from '../../assets/ListIcon';
import ListItem from '../../components/ListItem';
import {
	ButtonOrder,
	Container,
	ContainerBots,
	ContainerButtonsDisplay,
	ContainerFilter,
	FavoriteTitle,
	FloatAddButton,
	HeaderFilter,
	IconButton,
	InputSearch,
	Line,
	TitlePage,
} from './styles';
import { useHome } from './use';

const Home: React.FC = () => {
	const {
		search,
		setSearch,
		setOrderBy,
		handleFavorite,
		display,
		setDisplay,
		favoriteBots,
		bots,
	} = useHome();

	return (
		<Container>
			<FloatAddButton>+</FloatAddButton>
			<HeaderFilter>
				<TitlePage>My chatbots</TitlePage>
				<ContainerFilter>
					<InputSearch
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder="Search Bots"
					/>
					<ButtonOrder
						onClick={() => {
							setOrderBy('name');
						}}
					>
						Order by name
					</ButtonOrder>
					<ButtonOrder
						onClick={() => {
							setOrderBy('date');
						}}
					>
						Order by Creation
					</ButtonOrder>
					<ContainerButtonsDisplay>
						<IconButton onClick={() => setDisplay('CARD')}>
							<CardIcon color={display === 'CARD' ? '#6e7b91' : '#d2dfe6'} />
						</IconButton>
						<IconButton onClick={() => setDisplay('LIST')}>
							<ListIcon color={display === 'LIST' ? '#6e7b91' : '#d2dfe6'} />
						</IconButton>
					</ContainerButtonsDisplay>
				</ContainerFilter>
			</HeaderFilter>
			{favoriteBots.length > 0 && (
				<>
					<FavoriteTitle>Favorites</FavoriteTitle>
					<ContainerBots>
						{favoriteBots
							.filter((item) =>
								item.name.toLowerCase().includes(search.toLowerCase())
							)
							.map((bot) =>
								display === 'CARD' ? (
									<CardItem
										handleFavorite={handleFavorite}
										key={bot.name}
										data={bot}
										isFavorite
									/>
								) : (
									<ListItem
										handleFavorite={handleFavorite}
										key={bot.name}
										data={bot}
										isFavorite
									/>
								)
							)}
					</ContainerBots>
					<Line />
				</>
			)}
			{bots.length > 0 && (
				<ContainerBots>
					{bots
						.filter((item) =>
							item.name.toLowerCase().includes(search.toLowerCase())
						)
						.map((bot) =>
							display === 'CARD' ? (
								<CardItem
									handleFavorite={handleFavorite}
									key={bot.name}
									data={bot}
								/>
							) : (
								<ListItem
									handleFavorite={handleFavorite}
									key={bot.name}
									data={bot}
								/>
							)
						)}
				</ContainerBots>
			)}
		</Container>
	);
};

export default Home;
