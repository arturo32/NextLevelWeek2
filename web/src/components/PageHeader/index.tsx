import React from 'react';
import { Link } from 'react-router-dom';

import barckIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css'

interface PageHeaderProps{
	text: string;
	description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
	return (
		<header className="page-header">
			<div className="top-bar-container">
				<Link to="/">
					<img src={barckIcon} alt="Voltar"/>
				</Link>
				<img src={logoImg} alt="Proffy"/>
			</div>

			<div className="header-content">
				<strong>{props.text}</strong>
				{ props.description && <p>{ props.description }</p>}
				{props.children}
			</div>
		</header>
	);
}

export default PageHeader;
