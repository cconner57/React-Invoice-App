import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {
	H2Alt,
	Body1,
	Button3,
	Button5,
	lightColors,
	darkColors,
} from '../Styles';
import { ThemeProps, DeleteProps } from '../Interfaces';

const DeleteItem = ({
	setToggleModal,
	history,
	colortheme,
}: DeleteProps & ThemeProps) => {
	const handleOutsideClick = useCallback(
		(e) => {
			const outsideForm = document.querySelector('.Modal');
			if (e.target === outsideForm) setToggleModal(false);
		},
		[setToggleModal]
	);

	const onDeleteHandler = () => {
		history.push('/');
	};

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Container className='Modal' colortheme={colortheme}>
			<div className='Delete'>
				<H2Alt>Confirm Deletion</H2Alt>
				<Body1>
					Are you sure you want to delete invoice #XM9141? This action cannot be
					undone.
				</Body1>
				<div className='Buttons'>
					<Button3
						colortheme={colortheme}
						onClick={() => setToggleModal(false)}>
						Cancel
					</Button3>
					<Button5 onClick={onDeleteHandler}>Delete</Button5>
				</div>
			</div>
		</Container>
	);
};

export default DeleteItem;

const Container = styled.div<ThemeProps>`
	height: 100vh;
	width: 100vw;
	position: absolute;
	z-index: 5;
	backdrop-filter: blur(2px);
	-webkit-backdrop-filter: blur(2px);
	background-color: hsla(210, 3%, 40%, 0.6);
	.Delete {
		height: 249px;
		width: 480px;
		padding: 48px;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background-color: ${({ colortheme }) =>
			colortheme
				? `${darkColors.altBackground}`
				: `${lightColors.accentBackground}`};
		border-radius: 8px;
		z-index: 10;
		h2 {
			user-select: none;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.text}` : `${lightColors.text}`};
		}
		p {
			height: 44px;
			width: 280px;
			margin: 13px 0 16px;
			line-height: 22px;
			user-select: none;
			color: ${({ colortheme }) =>
				colortheme ? `${darkColors.altText}` : `${lightColors.altText}`};
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
