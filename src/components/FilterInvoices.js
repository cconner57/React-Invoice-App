import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { darkColors, lightColors } from '../Styles';

const FilterInvoices = ({ colorTheme, setToggleFilter, filter, setFilter }) => {
	const handleOutsideClick = useCallback(
		(e) => {
			if (!document.querySelector('.Checkboxes')?.contains(e.target))
				setToggleFilter(false);
		},
		[setToggleFilter]
	);

	useEffect(() => {
		window.addEventListener('click', handleOutsideClick);
		return () => {
			window.removeEventListener('click', handleOutsideClick);
		};
	}, [handleOutsideClick]);

	return (
		<Checkboxes className='Checkboxes' colortheme={colorTheme}>
			<label htmlFor='draft' className='CheckboxLabel'>
				<input
					type='checkbox'
					id='draft'
					onChange={(e) =>
						e.target.checked ? setFilter('draft') : setFilter(undefined)
					}
					checked={filter === 'draft' ? true : false}
				/>
				Draft
			</label>
			<label htmlFor='pending' className='CheckboxLabel'>
				<input
					type='checkbox'
					id='pending'
					onChange={(e) =>
						e.target.checked ? setFilter('pending') : setFilter(undefined)
					}
					checked={filter === 'pending' ? true : false}
				/>
				Pending
			</label>
			<label htmlFor='paid' className='CheckboxLabel'>
				<input
					type='checkbox'
					id='paid'
					onChange={(e) =>
						e.target.checked ? setFilter('paid') : setFilter(undefined)
					}
					checked={filter === 'paid' ? true : false}
				/>
				Paid
			</label>
		</Checkboxes>
	);
};

export default FilterInvoices;

const Checkboxes = styled.div`
	height: 128px;
	width: 192px;
	padding: 20px 0;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: absolute;
	top: 55px;
	left: -40px;
	border-radius: 8px;
	background-color: ${({ colortheme }) =>
		colortheme
			? `${darkColors.accentBackground}`
			: `${lightColors.accentBackground}`};
	box-shadow: ${({ colortheme }) =>
		colortheme
			? `0px 10px 20px hsla(232, 37.7%, 65%, 0.25)`
			: `0px 10px 20px hsla(232, 37.7%, 45%, 0.25)`};
	label {
		margin-left: 24px;
		user-select: none;
		cursor: pointer;
		color: ${({ colortheme }) =>
			colortheme ? `${darkColors.text}` : `${lightColors.darkText}`};
		input {
			margin-right: 13px;
			user-select: none;
			cursor: pointer;
		}
	}
`;
