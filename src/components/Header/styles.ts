import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${({ theme }) => theme.COLORS.primary};
`;
