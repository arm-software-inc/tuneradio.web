import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';

import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { PlayerProvider } from './contexts/PlayerContext';
import Tag from './pages/Tag/Tag';
import { getStationsByCategory } from './services/station';

const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/signin', element: <SignIn /> },
	{ path: '/signup', element: <SignUp /> },
	{ path: '/tag/:name', element: <Tag />, loader: async ({ params }) => {
		return { name: params.name, stations: await getStationsByCategory(params.name ?? '')} }
	}
]);

function App() {
	const [theme, ] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
			<PlayerProvider>
				<GlobalStyle />
				<RouterProvider router={router} />
			</PlayerProvider>
		</ThemeProvider>
  )
}

export default App;
