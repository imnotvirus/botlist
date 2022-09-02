import React, { useEffect, useState } from 'react';
import { api } from './services/api';

interface Bot {
	name: string;
	type: string;
	created: string;
}

const App: React.FC = () => {
	const [bots, setBots] = useState<Bot[]>([]);
	useEffect(() => {
		(async () => {
			try {
				const response = await api.get(
					'bots?Skip=0&Take=4&Filters[orderBy]=name'
				);
				setBots(response.data);
			} catch (error) {
				alert('Error');
			}
		})();
	}, []);
	return (
		<div>
			<ul>
				{bots.map((bot) => (
					<li key={bot.name}>{bot.name}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
