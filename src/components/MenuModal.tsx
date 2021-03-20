import React, { useEffect, useCallback } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { colors } from '../Styles';

interface MenuProps {
	children: object;
	setToggleMenu: Function;
}

const MenuModal = ({ children, setToggleMenu }: MenuProps) => {
	const handleOutsideClick = useCallback(
		(e) => {
			if (!document.querySelector('.Modal').contains(e.target))
				setToggleMenu(false);
		},
		[setToggleMenu]
	);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return ReactDom.createPortal(
		<Container className='ModalContainer'>
			<div className='Modal'>{children}</div>
		</Container>,
		document.getElementById('menu')
	);
};

export default MenuModal;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	content: '';
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	background-color: hsla(210, 3%, 40%, 0.6);
	.Modal {
		height: 100vh;
		width: 50vw;
		padding: 40px 0px 0px 150px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
		background-color: ${colors.white};
		border-radius: 0 8px 8px 0;
	}
`;
