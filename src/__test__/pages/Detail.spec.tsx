import { fireEvent, render, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Detail from '../../pages/Detail';
import { api } from '../../services/api';
import theme from '../../styles/theme';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({
		shortName: 'billy_hargrove',
	}),
}));

const dataObject = {
	shortName: 'billy_hargrove',
	description: 'Interpretado por: Dacre Montgomery.',
	image: 'data:',
	updated: '2020-01-02T14:35:44.510Z',
	culture: 'pt-BR',
	analytics: {
		user: {
			total: 100,
			actived: 2,
		},
		message: {
			received: 10000,
			sent: 10001,
		},
	},
	name: 'Billy Hargrove',
	type: 'router',
	created: '2020-01-01T14:35:44.510Z',
};

jest.mock('../../services/api');
const mockedAPI = api as jest.Mocked<typeof api>;

describe('Detail', () => {
	mockedAPI.get.mockResolvedValue({ data: dataObject });

	it('call api with correct url', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const name = await findByText('Billy Hargrove');
		fireEvent.click(name);
		await waitFor(() =>
			expect(mockedAPI.get).toHaveBeenCalledWith('/billy_hargrove/details')
		);
	});
	it('show Bot name', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const name = await findByText('Billy Hargrove');
		expect(name).toBeTruthy();
	});
	it('show received messages count', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const label = await findByText('Mensagens recebidas');
		const count = label.previousElementSibling?.innerHTML;
		expect(label).toBeTruthy();
		expect(`${count} ${label.innerHTML}`).toBe('10.000 Mensagens recebidas');
	});
	it('show sent messages count', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const label = await findByText('Mensagens enviadas');
		const count = label.previousElementSibling?.innerHTML;
		expect(`${count} ${label.innerHTML}`).toBe('10.001 Mensagens enviadas');
	});
	it('show the count of active users', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const label = await findByText('Usuários ativos');
		const count = label.previousElementSibling?.innerHTML;
		expect(`${count} ${label.innerHTML}`).toBe('2 Usuários ativos');
	});
	it('show the created at', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const label = await findByText('created at 01/01/2020');

		expect(label).toBeTruthy();
	});
	it('show the id', async () => {
		const { findByText } = render(
			<ThemeProvider theme={theme}>
				<Detail />
			</ThemeProvider>
		);
		const label = await findByText('id: billy_hargrove');

		expect(label).toBeTruthy();
	});
});
