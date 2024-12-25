import type { FC } from 'react'
import { useState } from 'react'
import { Box, Button, Card, CardActions, CardContent, Container, Grid2 as Grid, TextField} from '@mui/material'
import { TitleApp } from '../../../core/TitleApp'
import { useLazyLoginQuery } from '../redux/services/auth.service'
import { useNavigate } from 'react-router-dom'

export const LoginViews: FC = () => {
	const [values, setValues] = useState<{
		email: string
		password: string
	}>({
		email: '',
		password: '',
	})
	const navigate = useNavigate()

	const [trigger] = useLazyLoginQuery()

	const onLogin = async () => {
		const data =  await trigger({
			email: values.email,
			password: values.password
		}).unwrap()
		
		if (data) {
			navigate('/home')
		}
	}
	return (
		<Container maxWidth="xl">
			<Grid container justifyContent="center">
				<Card
					sx={{
						width: 400,
						padding: '20px',
					}}
				>
					<CardContent>
						<Box
							display="flex"
							justifyContent="center"
							alignItems="center"
							padding={5}
						>
							<TitleApp isBlackTitle />
						</Box>
						<Grid container>
							<Grid size={12} marginBottom={3}>
								<TextField
									label="Email"
									type='email'
									color="primary"
									sx={{ color: '#ffff' }}
									fullWidth
									onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
										setValues({ ...values, email: target.value })
									}
								/>
							</Grid>
							<Grid size={12}>
								<TextField
									label="Password"
									color="primary"
									type='password'
									sx={{ color: '#ffff' }}
									fullWidth
									onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
										setValues({ ...values, password: target.value })
									}
								/>
							</Grid>
						</Grid>
					</CardContent>
					<CardActions sx={{ justifyContent: 'end' }}>
						<Grid container>
							<Button variant="contained" color="primary" onClick={onLogin}>
								Login
							</Button>
						</Grid>
					</CardActions>
				</Card>
			</Grid>
		</Container>
	)
}
