import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../Styles';

import Logo from '../images/logo.svg';
import Moon from '../images/icon-moon.svg';
import Sun from '../images/icon-sun.svg';

const Nav = () => {
	const [darkMode, setDarkMode] = useState(false);

	return (
		<NavContainer>
			<div className='LogoContainer'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='Settings'>
				{darkMode ? (
					<img src={Sun} alt='Dark Mode' onClick={() => setDarkMode(false)} />
				) : (
					<img src={Moon} alt='Dark Mode' onClick={() => setDarkMode(true)} />
				)}
				<hr />
				<img
					src={process.env.PUBLIC_URL + '/images/image-avatar.jpg'}
					alt='Profile'
				/>
			</div>
		</NavContainer>
	);
};

export default Nav;

const NavContainer = styled.nav`
	height: 100vh;
	width: 103px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 0px 20px 20px 0px;
	background-color: ${colors.altBackground};
	z-index: 10;
	.LogoContainer {
		height: 103px;
		width: 103px;
		position: relative;
		overflow: hidden;
		border-radius: 0px 20px 20px 0px;
		background-color: ${colors.background};

		img {
			height: 37.71px;
			width: 40px;
			position: absolute;
			top: 30%;
			left: 30%;
		}
	}
	.LogoContainer::before {
		position: absolute;
		content: '';
		height: 51.5px;
		width: 103px;
		bottom: 0px;
		left: 0px;
		border-top-left-radius: 20px;
		background-color: ${colors.hoverBackground};
	}
	.Settings {
		height: 141px;
		width: 103px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		img:first-child {
			height: 20px;
			width: 20px;
			cursor: pointer;
		}
		hr {
			height: 1px;
			width: 100%;
			background-color: ${colors.accent};
		}
		img:last-child {
			height: 40px;
			width: 40px;
			border-radius: 50%;
		}
	}
`;
