import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 40px 60px;
	flex-direction: column;
	max-width: 1366px;
	margin: 44px auto auto;
	background-color: ${({ theme }) => theme.COLORS.background};
`;
export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
`;
export const BotAvatar = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 50%;
`;
export const ContainerInformationHeader = styled.div`
	display: flex;
`;
export const ContainerTextInformationHeader = styled.div`
	margin-left: 8px;
	display: flex;
	flex-direction: column;
`;

interface BoxProps {
	justifyCenter?: boolean;
}
export const Box = styled.div<BoxProps>`
	background: #fff;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	padding: 32px 40px;
	border-radius: 7px;
	gap: 8px;
	${({ justifyCenter }) =>
		justifyCenter &&
		css`
			justify-content: center;
		`}
	box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
`;
export const BoxesInformation = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-gap: 20px;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
`;
export const ContainerInformation = styled.div`
	display: grid;
	grid-template-columns: 1fr 310px;
	grid-gap: 10px;
	justify-content: center;
	align-items: center;
	@media (max-width: 1365px) {
		display: flex;
		flex-direction: column;
	}
`;
export const FirstLineBox = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	height: 212px;
	grid-gap: 22px;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		height: auto;
	}
`;
export const SecondLineBox = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	height: 212px;
	grid-gap: 22px;
	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		height: auto;
	}
`;
type ColumnProps = {
	mr?: number;
	ml?: number;
};
export const Column = styled.div<ColumnProps>`
	display: flex;
	flex-direction: column;
	${({ ml }) =>
		ml &&
		css`
			margin-left: ${(props: ColumnProps) => props.ml}px;
		`}
	${({ mr }) =>
		mr &&
		css`
			margin-left: ${(props: ColumnProps) => props.mr}px;
		`}
`;
export const Row = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
export const BotName = styled.h2`
	font-size: 24px;
	line-height: 150%;
	color: #56616e;
	font-weight: 700;
	margin-bottom: -5px;
`;
export const IdBot = styled.span`
	font-size: 14px;
	line-height: 150%;
	color: #8ca0b3;
`;
export const CreatedAtBot = styled.span`
	font-size: 14px;
	line-height: 120%;
	font-weight: 400;
	color: #8ca0b3;
`;
export const BoxLabel = styled.span`
	font-size: 12px;
	line-height: 16px;
	color: #52636c;
`;
export const BoxValue = styled.span`
	font-size: 12px;
	font-weight: 600;
	line-height: 16px;
	color: #52636c;
`;
export const Count = styled.h3`
	font-size: 24px;
	font-weight: 800;
	line-height: 100%;
	color: #52636c;
`;
export const CountLabel = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	color: #52636c;
`;
export const Footer = styled.footer`
	display: flex;
	justify-content: center;
	& > span {
		font-size: 12px;
		line-height: 22px;
		color: #738192;
	}
`;
export const Banner = styled.section`
	display: flex;
	flex-direction: column;
	padding: 24px 10px;
	height: 100%;
	align-items: center;
	justify-content: center;
	& > img {
		margin-bottom: 26px;
	}
`;
export const Button = styled.button`
	border: none;
	padding: 10px 16px;
	border-radius: 8px;
	background: #2cc3d5;
	color: #fff;
	font-size: 14px;
	font-weight: 700;
	line-height: 20px;
	transition: 0.5s;
	cursor: pointer;
	&:hover {
		background: #2194a2;
	}
`;
export const TextContainer = styled.div`
	margin: 24px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const LabelStatus = styled.span`
	font-size: 16px;
	line-height: 24px;
	color: #8ca0b3;
`;
export const AccountStatus = styled.h3`
	font-size: 24px;
	line-height: 150%;
	color: #56616e;
	font-weight: 700;
`;
