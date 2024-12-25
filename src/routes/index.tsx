import { createBrowserRouter } from 'react-router-dom'
import { LoginViews } from '../features/auth/views/LoginViews'
import { Home } from '../features/home/views/Home'
import { Layouts } from '../layouts/Layouts'

export const routes = createBrowserRouter(
	[
		{
			path: '/',
			element: <LoginViews />,
		},
		{
			path: '/',
			element: <Layouts />,
			children: [
				{
					path: '/home',
					element: <Home />,
				},
			],
		},
	],
	{
		future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    },
	},
)