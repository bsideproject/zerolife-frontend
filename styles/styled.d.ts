import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			white: string;
			gray2: string;
			gray5: string;
			gray10: string;
			gray20: string;
			gray30: string;
			gray40: string;
			gray50: string;
			gray60: string;
			gray70: string;
			gray80: string;
			gray90: string;
			primary: string;
			primary10: string;
			primary20: string;
			primary30: string;
			primary40: string;
			secondary: string;
			secondary10: string;
			secondary20: string;
			alert: string;
		};
		fonts: {
			pageHeading: string;
			heading: string;
			subHeading: string;
			body: string;
			caption: string;
		};
	}
}