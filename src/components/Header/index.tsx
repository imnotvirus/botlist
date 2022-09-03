import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
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
