import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { H2Alt, Body1, Button3, Button5, lightColors } from '../Styles';

const DeleteItem = ({ setToggleModal }) => {
	const handleOutsideClick = useCallback(
		(e) => {
			const outsideForm = document.querySelector('.Modal');
			if (e.target === outsideForm) setToggleModal(false);
		},
		[setToggleModal]
	);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Container className='Modal'>
			<div className='Delete'>
				<H2Alt>Confirm Deletion</H2Alt>
				<Body1>
					Are you sure you want to delete invoice #XM9141? This action cannot be
					undone.
				</Body1>
				<div className='Buttons'>
					<Button3 onClick={() => setToggleModal(false)}>Cancel</Button3>
					<Button5>Delete</Button5>
				</div>
			</div>
		</Container>
	);
};

export default DeleteItem;

const Container = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: -407px;
	z-index: 5;
	background-color: hsla(210, 3%, 40%, 0.6);
	.Delete {
		height: 249px;
		width: 480px;
		padding: 48px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: hsl(0, 0%, 100%);
		border-radius: 8px;
		z-index: 10;
		h2 {
			user-select: none;
		}
		p {
			height: 44px;
			width: 320px;
			margin: 13px 0 16px;
			line-height: 22px;
			color: ${lightColors.text};
			user-select: none;
		}
		.Buttons {
			display: flex;
			justify-content: flex-end;
			button:first-child {
				margin-right: 8px;
			}
		}
	}
`;
