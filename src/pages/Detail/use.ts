import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
interface Information {
	shortName: string;
	description: string;
	image: string;
	updated: string;
	culture: string;
	analytics: Analytics;
	name: string;
	type: string;
	created: string;
}

interface Analytics {
	user: User;
	message: Message;
}

interface Message {
	received: number;
	sent: number;
}

interface User {
	total: number;
	actived: number;
}
export const useDetail = () => {
	const params = useParams();
	const [info, setInfo] = useState<Information>();
	const getInfo = useCallback(async () => {
		if (params.shortName) {
			try {
				const { data } = await api.get(`/${params.shortName}/details`);
				setInfo(data);
			} catch (error) {
				console.log(error);
			}
		}
	}, [params.shortName]);

	useEffect(() => {
		getInfo();
	}, [getInfo]);
	return {
		info,
	};
};
