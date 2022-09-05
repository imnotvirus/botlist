import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 40px 60px;
	flex-direction: column;
	max-width: 1366px;
	margin: 44px auto auto;
	background-color: ${({ theme }) => theme.COLORS.background};
`;
export const FloatAddButton = styled.button`
	position: fixed;
	bottom: 16px;
	right: 32px;
	width: 56px;
	height: 56px;
	border: none;
	background: ${({ theme }) => theme.COLORS.button};
	border-radius: 28px;
	color: #fff;
	font-size: 32px;
	z-index: 2;
	box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		background: ${({ theme }) => theme.COLORS.buttonHover};
	}
`;
export const ContainerBots = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 24px;
	margin: 16px 0;
`;
export const FavoriteTitle = styled.h2`
	font-weight: 700;
	font-size: 32px;
	line-height: 40px;
	color: ${({ theme }) => theme.COLORS.text_50};
`;
export const TitlePage = styled.h1`
	font-weight: 800;
	font-size: 32px;
	line-height: 40px;

	color: ${({ theme }) => theme.COLORS.text_200};
`;
export const Line = styled.div`
	width: 100%;
	height: 1px;
	background: ${({ theme }) => theme.COLORS.border};
	margin: 24px 0;
`;
export const HeaderFilter = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 850px) {
		flex-direction: column;
		gap: 8px;
	}
`;
export const ContainerFilter = styled.div`
	display: flex;
	gap: 8px;
	@media (max-width: 850px) {
		flex-direction: column;
	}
`;
export const ButtonOrder = styled.button`
	width: 100%;
	height: 40px;
	max-width: 129px;
	border-radius: 8px;
	border: none;
	background: ${({ theme }) => theme.COLORS.button};
	color: ${({ theme }) => theme.COLORS.shape};
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	cursor: pointer;
	transition: 0.5s;
	&:hover {
		background: ${({ theme }) => theme.COLORS.buttonHover};
	}
	@media (max-width: 850px) {
		max-width: none;
	}
`;
export const InputSearch = styled.input`
	width: 100%;
	max-width: 312px;
	height: 40px;
	border-radius: 8px;
	border: ${({ theme }) => theme.COLORS.border} 1px solid;
	font-weight: 600;
	font-size: 14px;
	line-height: 22px;
	display: flex;
	align-items: center;
	outline: none;
	padding: 8px;
	font-size: 14px;
	color: ${({ theme }) => theme.COLORS.text};
	::placeholder,
	::-webkit-input-placeholder {
		color: ${({ theme }) => theme.COLORS.lightGray};
	}
	:-ms-input-placeholder {
		color: ${({ theme }) => theme.COLORS.lightGray};
	}
	@media (max-width: 850px) {
		max-width: none;
	}
`;

export const IconButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
`;
export const ContainerButtonsDisplay = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 850px) {
		justify-content: center;
	}
`;
