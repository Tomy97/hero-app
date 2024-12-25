import type { FC } from 'react'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export const Layouts: FC = () => {
	return (
		<>
			<Header />
			<Container maxWidth="xl">
				<Outlet />
			</Container>
		</>
	)
}
