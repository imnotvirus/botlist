import React, { createContext, useCallback, useContext, useState } from 'react';
import IBot from '../@types/Bot';
import { api } from '../services/api';

export interface BotsContextProps {
	bots: IBot[];
	favoriteBots: IBot[];
	handleFavorite: (data: IBot) => void;
	orderBy: 'name' | 'date';
	setOrderBy: React.Dispatch<React.SetStateAction<'name' | 'date'>>;
	getBotsFromAPI: () => Promise<void>;
}
export const BotsContext = createContext({} as BotsContextProps);

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

	const getFavorites = useCallback((): IBot[] => {
		const data = localStorage.getItem('@BLIP:favorites');
		if (data) {
			return JSON.parse(data);
		}
		return [];
	}, []);
	const getBotsFromAPI = useCallback(async () => {
		try {
			const response = await api.get<IBot[]>(
				`bots?Skip=0&Filters[orderBy]=${orderBy}`
			);
			const ArrayBot = response.data.map((item: IBot) => ({
				...item,
				shortName: item.name.replace(' ', '_').toLowerCase(),
			}));

			const localFavs = getFavorites();
			const data = ArrayBot.filter(
				(item) => !localFavs.some((fav) => fav.name === item.name)
			);
			setBots(data);
		} catch (error) {
			console.log(error);
		}
	}, [getFavorites, orderBy]);

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

	return (
		<BotsContext.Provider
			value={{
				bots,
				favoriteBots,
				handleFavorite,
				orderBy,
				setOrderBy,
				getBotsFromAPI,
			}}
		>
			{children}
		</BotsContext.Provider>
	);
};

export const useBots = () => {
	return useContext(BotsContext);
};
export default BotsProvider;
