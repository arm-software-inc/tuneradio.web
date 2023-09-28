import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme{
		title: string;

		colors: {
			purple: string;
			yellow: string;
			white: string;
			black: string;
			offWhite: string;
			lightGray: string;
		}
	}
}
