import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';
import IBot from '../@types/Bot';
import { api } from '../services/api';

interface BotsContestProps {
	bots: IBot[];
	favoriteBots: IBot[];
	handleFavorite: (data: IBot) => void;
	orderBy: 'name' | 'date';
	setOrderBy: React.Dispatch<React.SetStateAction<'name' | 'date'>>;
}
const BotsContext = createContext({} as BotsContestProps);

interface BotsProviderProps {
	children: React.ReactNode;
}
const BotsProvider: React.FC<BotsProviderProps> = ({ children }) => {
	const [bots, setBots] = useState<IBot[]>([]);
	const [orderBy, setOrderBy] = useState<'name' | 'date'>('name');
	const [favoriteBots, setFavoriteBots] = useState<IBot[]>(() => {
		const localData = localStorage.getItem('@BLIP:favorites');
		if (localData) {
			return JSON.parse(localData);
		}
		return [];
	});

	const getBotsFromAPI = useCallback(async () => {
		try {
			const response = await api.get<IBot[]>(
				`bots?Skip=0&Filters[orderBy]=${orderBy}`
			);
			const ArrayBot = response.data.map((item: IBot) => ({
				...item,
				shortName: item.name.replace(' ', '_').toLowerCase(),
			}));
			return ArrayBot;
		} catch (error) {
			console.log(error);
		}
	}, [orderBy]);

	const getFavorites = () => {
		const data = localStorage.getItem('@BLIP:favorites');
		if (data) {
			setFavoriteBots(JSON.parse(data));
		}
	};

	const handleFavorite = (data: IBot) => {
		if (favoriteBots.some((item) => item.name === data.name)) {
			const arrayData = favoriteBots.filter((item) => item.name !== data.name);
			setFavoriteBots(arrayData);
			localStorage.setItem('@BLIP:favorites', JSON.stringify(arrayData));
		} else {
			const arrayData = [...favoriteBots, data];
			setFavoriteBots(arrayData);
			localStorage.setItem('@BLIP:favorites', JSON.stringify(arrayData));
		}
	};

	useEffect(() => {
		(async () => {
			try {
				const response = await getBotsFromAPI();
				if (response) {
					getFavorites();
					const data = response.filter(
						(item) =>
							!favoriteBots.some((favorite) => favorite.name === item.name)
					);
					setBots(data);
				}
			} catch (error) {
				console.log(error);
			}
		})();
	}, [favoriteBots, getBotsFromAPI]);

	return (
		<BotsContext.Provider
			value={{ bots, favoriteBots, handleFavorite, orderBy, setOrderBy }}
		>
			{children}
		</BotsContext.Provider>
	);
};

export const useBots = () => {
	return useContext(BotsContext);
};
export default BotsProvider;
