import React from 'react';
import styled, { keyframes } from 'styled-components';

const Loader = () => {
	return <Spinner>Loading...</Spinner>;
};

export default Loader;

const load = keyframes`
	0% {
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	100% {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
`;

const Spinner = styled.div`
	font-size: 10px;
	margin: 50px auto;
	text-indent: -9999em;
	width: 11em;
	height: 11em;
	border-radius: 50%;
	background: $primary;
	background: -moz-linear-gradient(
		left,
		$primary 10%,
		rgba(255, 255, 255, 0) 42%
	);
	background: -webkit-linear-gradient(
		left,
		$primary 10%,
		rgba(255, 255, 255, 0) 42%
	);
	background: -o-linear-gradient(
		left,
		$primary 10%,
		rgba(255, 255, 255, 0) 42%
	);
	background: -ms-linear-gradient(
		left,
		$primary 10%,
		rgba(255, 255, 255, 0) 42%
	);
	background: linear-gradient(
		to right,
		$primary 10%,
		rgba(255, 255, 255, 0) 42%
	);
	position: relative;
	-webkit-animation: ${load} 1.4s infinite linear;
	animation: ${load} 1.4s infinite linear;
	-webkit-transform: translateZ(0);
	-ms-transform: translateZ(0);
	transform: translateZ(0);
	&:before {
		width: 50%;
		height: 50%;
		background: $primary;
		border-radius: 100% 0 0 0;
		position: absolute;
		top: 0;
		left: 0;
		content: '';
	}
	&:after {
		background: hsl(120, 3%, 94%);
		width: 75%;
		height: 75%;
		border-radius: 50%;
		content: '';
		margin: auto;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
`;
