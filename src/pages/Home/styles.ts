import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 40px 60px;
	flex-direction: column;
	margin-top: 44px;

	background-color: ${({ theme }) => theme.COLORS.background};
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
export const Line = styled.hr`
	border: 1px solid #d2dfe6;
	margin: 24px 0;
`;
export const HeaderFilter = styled.div`
	display: flex;
	justify-content: space-between;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ContainerFilter = styled.div`
	display: flex;
	gap: 8px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ButtonOrder = styled.button`
	width: 100%;
	height: 100%;
	max-width: 129px;
	max-height: 40px;
	border-radius: 8px;
	border: none;
	background: #2cc3d5;
	color: #f8f8fb;
	font-weight: 700;
	font-size: 14px;
	line-height: 20px;
	cursor: pointer;
`;
export const InputSearch = styled.input`
	width: 100%;
	max-width: 312px;
	height: 40px;
	border-radius: 8px;
	border: #d2dfe6 1px solid;
	font-weight: 600;
	font-size: 14px;
	line-height: 22px;
	display: flex;
	align-items: center;
	outline: none;
	padding: 8px;
	font-size: 14px;
	color: #333;
`;

export const IconButton = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
`;
