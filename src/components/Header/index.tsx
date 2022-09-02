import React from 'react';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<Logo />
		</Container>
	);
};

export default Header;
