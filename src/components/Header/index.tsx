import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo';
import { Container } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<Link to="/">
				<Logo />
			</Link>
		</Container>
	);
};

export default Header;
