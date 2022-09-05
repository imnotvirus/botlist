import { fireEvent, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import BotsProvider, { BotsContextProps } from '../../hooks/Bots';
import Home from '../../pages/Home';
import theme from '../../styles/theme';

// jest.mock('react-router-dom', () => ({
// 	...jest.requireActual('react-router-dom'),
// 	useNavigate: jest.fn(),
// }));
const MockBotProviderValues: BotsContextProps = {
	bots: [
		{
			name: 'Billy Hargrove',
			type: 'router',
			created: '2020-01-01T14:35:44.510Z',
			shortName: 'billy_hargrove',
		},
		{
			name: 'Dustin Henderson',
			type: 'builder',
			created: '2020-03-21T14:35:44.510Z',
			shortName: 'billy_hargrove',
		},
	],
	favoriteBots: [],
	getBotsFromAPI: jest.fn(() => Promise.resolve()),
	handleFavorite: jest.fn(),
	orderBy: 'name',
	setOrderBy: jest.fn(),
};

describe('Home', () => {
	it('show name page', () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<BotsProvider>
					<Home />
				</BotsProvider>
			</ThemeProvider>
		);

		expect(getByText('My chatbots')).toBeTruthy();
	});
	it('show bot name', async () => {
		const { findByText, debug } = render(
			<ThemeProvider theme={theme}>
				<BotsProvider>
					<Home />
				</BotsProvider>
			</ThemeProvider>
		);
		fireEvent.mouseMove(await findByText('My chatbots'));
		const name = await findByText('Dustin');

		expect(name).toBeTruthy();
		console.log(debug());
	});
});
