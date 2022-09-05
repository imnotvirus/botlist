import React, { useEffect, useState } from 'react';
import CardItem from '../../components/CardItem';
import { useBots } from '../../hooks/Bots';

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
	HeaderFilter,
	IconButton,
	InputSearch,
	Line,
	TitlePage,
} from './styles';

const Home: React.FC = () => {
	const { bots, favoriteBots, setOrderBy, getBotsFromAPI } = useBots();

	const [display, setDisplay] = useState<'CARD' | 'LIST'>('CARD');
	const [search, setSearch] = useState('');
	useEffect(() => {
		getBotsFromAPI();
	}, [getBotsFromAPI]);

	return (
		<Container>
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
									<CardItem key={bot.name} data={bot} isFavorite />
								) : (
									<ListItem key={bot.name} data={bot} isFavorite />
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
								<CardItem key={bot.name} data={bot} />
							) : (
								<ListItem key={bot.name} data={bot} />
							)
						)}
				</ContainerBots>
			)}
		</Container>
	);
};

export default Home;
