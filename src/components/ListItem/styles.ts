import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 60px;

	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;
export const ContainerInfo = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	background: ${({ theme }) => theme.COLORS.shape};
	box-shadow: 0px 2px 12px rgba(96, 123, 153, 0.15);
	border-radius: 7px;
`;
export const Name = styled.h3`
	font-weight: 600;
	font-size: 14px;
	line-height: 20px;
	margin-left: 10px;
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
	width: 28px;
	height: 28px;
	border-radius: 28px;
`;
export const StarContainer = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	margin-right: 20px;
`;
export const DateLabel = styled.span`
	font-weight: 400;
	font-size: 14px;
	line-height: 20px;
	text-align: right;
	color: #738192;
`;
export const Info = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;
