import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ActiveUserImg from '../../assets/ActiveUsers.png';
import BalloonImg from '../../assets/Balloon.png';
import ReceivedMessageImg from '../../assets/ReceivedMessage.png';
import SendedMessageImg from '../../assets/SendedMessage.png';
import { api } from '../../services/api';
import { Line } from '../Home/styles';
import {
	AccountStatus,
	Banner,
	BotAvatar,
	BotName,
	Box,
	BoxesInformation,
	BoxLabel,
	BoxValue,
	Button,
	Column,
	Container,
	ContainerInformation,
	ContainerInformationHeader,
	ContainerTextInformationHeader,
	Count,
	CountLabel,
	CreatedAtBot,
	FirstLineBox,
	Footer,
	Header,
	IdBot,
	LabelStatus,
	Row,
	SecondLineBox,
	TextContainer,
} from './styles';
interface Information {
	shortName: string;
	description: string;
	image: string;
	updated: string;
	culture: string;
	analytics: Analytics;
	name: string;
	type: string;
	created: string;
}

interface Analytics {
	user: User;
	message: Message;
}

interface Message {
	received: number;
	sent: number;
}

interface User {
	total: number;
	actived: number;
}
const Detail: React.FC = () => {
	const params = useParams();
	const [info, setInfo] = useState<Information>();
	const getInfo = useCallback(async () => {
		try {
			const { data } = await api.get(`/${params.shortName}/detail`);
			setInfo(data);
		} catch (error) {
			console.log(error);
		}
	}, [params.shortName]);

	useEffect(() => {
		getInfo();
	}, [getInfo]);

	return (
		<Container>
			<Header>
				<ContainerInformationHeader>
					<BotAvatar src="https://picsum.photos/200/300" alt="" />
					<ContainerTextInformationHeader>
						<BotName>{info && info.name ? info.name : 'Botname'}</BotName>
						<IdBot>
							id: {info && info.shortName ? info.shortName : 'Botname'}botname
						</IdBot>
					</ContainerTextInformationHeader>
				</ContainerInformationHeader>
				<CreatedAtBot>
					created at{' '}
					{info &&
						info.created &&
						new Date(info.created).toLocaleDateString('pt-BR')}
				</CreatedAtBot>
			</Header>
			<Line />
			<ContainerInformation>
				<BoxesInformation>
					<FirstLineBox>
						<Box>
							<Column>
								<BoxLabel>Region and idiom</BoxLabel>
								<BoxValue>EUA - English (EN)</BoxValue>
							</Column>
							<Column>
								<BoxLabel>Timezone</BoxLabel>
								<BoxValue>(UTC - 03:00) Brasília</BoxValue>
							</Column>
						</Box>
						<Box justifyCenter>
							<Row>
								<BotAvatar src={ActiveUserImg} alt="active user" />
								<Column mr={10}>
									<Count>1.000</Count>
									<CountLabel>Usuários ativos</CountLabel>
								</Column>
							</Row>
						</Box>
					</FirstLineBox>
					<SecondLineBox>
						<Box justifyCenter>
							<Row>
								<BotAvatar src={ReceivedMessageImg} alt="received message" />
								<Column mr={10}>
									<Count>1.000</Count>
									<CountLabel>Mensagens recebidas</CountLabel>
								</Column>
							</Row>
						</Box>
						<Box justifyCenter>
							<Row>
								<BotAvatar src={SendedMessageImg} alt="sended message" />
								<Column mr={10}>
									<Count>1.000</Count>
									<CountLabel>Mensagens enviadas</CountLabel>
								</Column>
							</Row>
						</Box>
					</SecondLineBox>
				</BoxesInformation>
				<Banner>
					<img src={BalloonImg} alt="balloon" />
					<TextContainer>
						<LabelStatus>Status account</LabelStatus>
						<AccountStatus>Free</AccountStatus>
					</TextContainer>
					<Button>Update account</Button>
				</Banner>
			</ContainerInformation>
			<Line />
			<Footer>
				<span>
					©2019, BLiP Todos os direitos reservados |{' '}
					<strong>Termos de Uso</strong>
				</span>
			</Footer>
		</Container>
	);
};

export default Detail;
