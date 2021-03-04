import React, { useEffect, useCallback } from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const MenuModal = ({ children, setToggleMenu }) => {
	const handleOutsideClick = useCallback(
		(e) => {
			const outsideForm = document.querySelector('.ModalContainer');
			if (e.target === outsideForm) setToggleMenu(false);
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
		padding: 56px 56px 56px 150px;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
		background-color: hsl(0, 0%, 100%);
		border-radius: 0 8px 8px 0;
	}
`;
