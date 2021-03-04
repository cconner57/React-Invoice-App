import styled from 'styled-components';

export const colors = {
	white: 'hsl(0,0%,100%)',
	red: 'hsl(0,80%,63%)',
	pink: 'hsl(0,100%,80%)',
	background: 'hsl(252,94%,67%)',
	hoverBackground: 'hsl(252, 100%, 73%)',
	altBackground: 'hsl(231, 20%, 27%)',
	accent: 'hsl(231,20%,61%)',
};

export const lightColors = {
	text: 'hsl(231,36%,63%)',
	background: 'hsl(231, 67%, 99%)',
	hoverText: 'hsl(231, 36%, 63%)',
	hoverBackground: 'hsl(231, 73%, 93%)',
	darkText: 'hsl(231, 28%, 7%)',
};

export const darkColors = {
	text: 'hsl(231,75%,93%)',
	background: 'hsl(233, 30%, 21%)',
	hoverBackground: 'hsl(0, 0%, 100%)',
	btn4Background: 'hsl(233,31%,17%)',
};

export const Button1 = styled.button`
	height: 48px;
	width: 150px;
	color: ${colors.white};
	background-color: ${colors.background};
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
	&:hover {
		background-color: ${colors.hoverBackground};
	}
`;

export const Button3 = styled.button`
	height: 48px;
	width: auto;
	padding: 0 24px;
	color: ${({ darkMode }) => (darkMode ? darkColors.text : lightColors.text)};
	background-color: ${({ darkMode }) =>
		darkMode ? darkColors.background : lightColors.background};
	&:hover {
		background-color: ${({ darkMode }) =>
			darkMode ? darkColors.hoverBackground : lightColors.hoverBackground};
	}
`;

export const Button4 = styled.button`
	height: 48px;
	width: auto;
	padding: 0 24px;
	color: ${({ darkMode }) => (darkMode ? darkColors.text : colors.accent)};
	background-color: hsl(231, 20%,27%);
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
	&:hover {
		background-color: ${colors.pink};
	}
`;

export const Button6 = styled.button`
	height: 48px;
	width: 100%;
	color: ${lightColors.hoverText};
	background-color: ${lightColors.background};
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
`;

export const H2 = styled.h2`
	font-weight: 700;
	font-size: 20px;
	line-height: 22px;
	letter-spacing: -0.63px;
`;

export const H2Alt = styled.h2`
	font-weight: 700;
	font-size: 24px;
	line-height: 32px;
	letter-spacing: -0.5px;
`;

export const H3 = styled.h3`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	letter-spacing: -0.8px;
`;

export const H3Alt = styled.h3`
	font-weight: 700;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: -0.25px;
`;

export const Body1 = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	letter-spacing: -0.25px;
`;

export const Body2 = styled.p`
	font-weight: 500;
	font-size: 11px;
	line-height: 18px;
	letter-spacing: -0.23px;
`;

export const Body3 = styled.p`
	font-weight: 700;
	font-size: 15px;
	line-height: 20px;
	letter-spacing: -0.31px;
`;
