import { useState } from 'react';
import { PrimaryButton } from './components/Buttons/PrimaryButton';
import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';

function App() {
	const [theme, ] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
			<GlobalStyle />
      <PrimaryButton>Teste</PrimaryButton>
		</ThemeProvider>
  )
}

export default App;
