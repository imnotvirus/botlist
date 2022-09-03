import styled from 'styled-components';

export const Container = styled.div`
	width: 188px;
	height: 192px;

	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	background: ${({ theme }) => theme.COLORS.shape};
	box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
	border-radius: 7px;
	transition: 0.5s;
	&:hover {
		background: ${({ theme }) => theme.COLORS.lightGray};
	}
`;
export const Name = styled.h3`
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.text_200};
`;
export const Type = styled.span`
	font-weight: 400;
	font-size: 12px;
	line-height: 22px;
	text-align: center;
	color: ${({ theme }) => theme.COLORS.text_100};
`;
export const Avatar = styled.img`
	width: 56px;
	height: 56px;
	border-radius: 28px;
`;
export const StarContainer = styled.button`
	position: absolute;
	top: 8px;
	left: 8px;
	background: transparent;
	border: none;
	cursor: pointer;
`;
export const ContainerInfo = styled.button`
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	background: transparent;
	border: none;
`;
