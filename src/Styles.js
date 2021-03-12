import styled from 'styled-components';

export const colors = {
	white: 'hsl(0,0%,100%)',
	red: 'hsl(0,80%,63%)',
	pink: 'hsl(0,100%,80%)',
	paidText: 'hsl(160,67%,52%)',
	pendingText: 'hsl(34, 100%, 50%)',
	background: 'hsl(252,94%,67%)',
	hoverBackground: 'hsl(252, 100%, 73%)',
	altBackground: 'hsl(231, 20%, 27%)',
};

export const lightColors = {
	text: 'hsl(231, 28%, 7%)',
	altText: 'hsl(231, 20%, 61%)',
	background: 'hsl(248, 27%, 98%)',
	altBackground: 'hsl(231, 67%, 99%)',
	accentBackground: 'hsl(0, 0%, 100%)',
	secondaryBackground: 'hsl(231, 20%, 27%)',
	paidBackground: 'hsla(160,67%,52%, .06)',
	pendingBackground: 'hsla(34, 100%, 50%, .06)',
	draftText: 'hsl(231,20%,27%)',
	draftBackground: 'hsla(231, 20%, 27%, .06)',
	btn3Text: 'hsl(231, 36%, 63%)',
	btn3Background: 'hsl(231, 67%, 95%)',
	btn3Hover: 'hsl(231, 73%, 85%)',
	altHover: 'hsl(231, 36%, 63%)',
	hoverBackground: 'hsl(231, 73%, 93%)',
	accent: 'hsl(231,20%,61%)',
	shadow: 'hsla(232, 38%, 35%, 0.8)',
};

export const darkColors = {
	text: 'hsl(0,0%,100%)',
	altText: 'hsl(231, 75%, 93%)',
	background: 'hsl(231, 30%, 11%)',
	altBackground: 'hsl(233, 30%, 21%)',
	accentBackground: 'hsl(233, 31%, 17%)',
	secondaryBackground: 'hsl(231, 28%, 7%)',
	paidBackground: 'hsla(160,67%,52%, .06)',
	pendingBackground: 'hsla(34, 100%, 50%, .06)',
	draftText: 'hsl(231,75%,93%)',
	draftBackground: 'hsla(231, 75%, 93%, .06)',
	hoverBackground: 'hsl(0, 0%, 100%)',
	btn3Text: 'hsl(231, 75%, 93%)',
	btn3Background: 'hsl(233, 30%, 30%)',
	btn3Hover: 'hsl(0, 0%, 100%)',
	btn4Background: 'hsl(233,31%,17%)',
	accent: 'hsl(231,75%,93%)',
	shadow: 'hsla(232, 38%, 75%, 0.8)',
};

export const Button1 = styled.button`
	height: 48px;
	width: 150px;
	color: ${colors.white};
	background-color: ${colors.background};
	transition: background-color 0.25s ease;
	&:hover {
		background-color: ${colors.hoverBackground};
	}
`;

export const Button2 = styled.button`
	height: 48px;
	width: auto;
	padding: 0 24px;
	color: ${colors.white};
	background-color: ${colors.background};
	transition: background-color 0.25s ease;
	&:hover {
		background-color: ${colors.hoverBackground};
	}
`;

export const Button3 = styled.button`
	height: 48px;
	width: auto;
	padding: 0 24px;
	transition: background-color 0.25s ease;
	color: ${({ colortheme }) =>
		colortheme ? `${darkColors.btn3Text}` : `${lightColors.btn3Text}`};
	background-color: ${({ colortheme }) =>
		colortheme ? darkColors.btn3Background : lightColors.btn3Background};
	&:hover {
		background-color: ${({ colortheme }) =>
			colortheme ? darkColors.btn3Hover : lightColors.btn3Hover};
	}
`;

export const Button4 = styled.button`
	height: 48px;
	width: auto;
	padding: 0 24px;
	color: ${({ darkMode }) => (darkMode ? darkColors.text : colors.accent)};
	background-color: hsl(231, 20%, 27%);
	transition: background-color 0.25s ease;
	&:hover {
		background-color: ${({ darkMode }) =>
			darkMode ? darkColors.btn4Background : lightColors.darkText};
	}
`;

export const Button5 = styled.button`
	height: 48px;
	width: 89px;
	color: ${colors.white};
	background-color: ${colors.red};
	transition: background-color 0.25s ease;
	&:hover {
		background-color: ${colors.pink};
	}
`;

export const Button6 = styled.button`
	height: 48px;
	width: 100%;
	color: ${lightColors.hoverText};
	background-color: ${lightColors.background};
	transition: background-color 0.25s ease;
	&:hover {
		background-color: ${lightColors.hoverBackground};
	}
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const H1 = styled.h1`
	font-weight: 700;
	font-size: 32px;
	line-height: 36px;
	letter-spacing: -1px;
	transition: color 0.05s ease;
`;

export const H2 = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 22px;
	letter-spacing: -0.63px;
	transition: color 0.05s ease;
`;

export const H2Alt = styled.h2`
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	letter-spacing: -0.5px;
	transition: color 0.05s ease;
`;

export const H3 = styled.h3`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.8px;
	transition: color 0.05s ease;
`;

export const H3Alt = styled.h3`
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: -0.25px;
	transition: color 0.05s ease;
`;

export const Body1 = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: -0.25px;
	transition: color 0.05s ease;
`;

export const Body2 = styled.p`
	font-weight: 500;
	font-size: 11px;
	line-height: 18px;
	letter-spacing: -0.23px;
	transition: color 0.05s ease;
`;

export const Body3 = styled.p`
	font-weight: 700;
	font-size: 15px;
	line-height: 20px;
	letter-spacing: -0.31px;
	transition: color 0.05s ease;
`;

export const Warning = styled.p`
	display: inline-block;
	margin: 10px 10px 0 0;
	font-weight: 600;
	font-size: 0.9rem;
	line-height: 15px;
	letter-spacing: -0.21px;
	color: hsl(0, 0%, 100%);
	padding: 0.75rem 1.75rem;
	font-family: 'Poppins', sans-serif;
	border-radius: 10px;
	border: 2px solid hsl(0, 80%, 63%);
	background-color: hsl(0, 60%, 50%);
	user-select: none;
`;
