import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeChange } from '../actions/themeActions';
import styled from 'styled-components';
import { colors } from '../Styles';

const Logo = require('../images/logo.svg') as string;
const Moon = require('../images/icon-moon.svg') as string;
const Sun = require('../images/icon-sun.svg') as string;

interface ColorProps {
	themeChange: {
		theme: boolean;
	};
}

const Nav = () => {
	const dispatch = useDispatch();

	const colortheme = useSelector((state: ColorProps) => state.themeChange);
	const { theme } = colortheme;

	return (
		<NavContainer>
			<div className='LogoContainer'>
				<img src={Logo} alt='Logo' />
			</div>
			<div className='Settings'>
				{theme ? (
					<img src={Sun} alt='Sun' onClick={() => dispatch(themeChange())} />
				) : (
					<img src={Moon} alt='Moon' onClick={() => dispatch(themeChange())} />
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
	position: fixed;
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
		height: auto;
		width: 103px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		svg {
			margin: 0 0 20px -5px;
			cursor: pointer;
			path:first-child {
				transition: fill 0.5s ease;
				&:hover {
					fill: hsl(0, 0%, 100%);
				}
			}
		}
		hr {
			height: 1px;
			width: 100%;
			/* background-color: ${colors.accent}; */
		}
		img:last-child {
			width: 40px;
			margin: 20px 0;
			border-radius: 50%;
		}
	}
`;
