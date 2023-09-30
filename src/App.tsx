import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';

import Home from './pages/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';


// TODOL create a router file
const router = createBrowserRouter([
	{ path: '/', element: <Home /> },
	{ path: '/signin', element: <SignIn /> },
	{ path: '/signup', element: <SignUp /> }
]);

function App() {
	const [theme, ] = useState<DefaultTheme>(light);

  return (
    <ThemeProvider theme={theme}>
			<GlobalStyle />
			<RouterProvider router={router} />
		</ThemeProvider>
  )
}

export default App;
