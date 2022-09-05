import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import IBot from '../../@types/Bot';
import ListItem from '../../components/ListItem';
import theme from '../../styles/theme';
const data: IBot = {
	name: 'Dustin Henderson',
	type: 'builder',
	created: '2020-03-21T14:35:44.510Z',
	shortName: 'dustin_henderson',
};
describe('ListItem', () => {
	it('should be rendered name', () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ListItem data={data} isFavorite />
				</BrowserRouter>
			</ThemeProvider>
		);

		const name = getByText('Dustin Henderson');

		expect(name).toBeTruthy();
	});
	it('should be rendered created at', () => {
		const { getByText } = render(
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ListItem data={data} isFavorite />
				</BrowserRouter>
			</ThemeProvider>
		);

		const date = getByText('Created at 21/03/2020');

		expect(date).toBeTruthy();
	});
	it('should be rendered avatar', () => {
		const { getByRole } = render(
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<ListItem data={data} isFavorite />
				</BrowserRouter>
			</ThemeProvider>
		);

		const img = getByRole('img');
		const name = encodeURI(data.name);

		expect(img).toHaveProperty('src', `https://robohash.org/${name}`);
	});
});
