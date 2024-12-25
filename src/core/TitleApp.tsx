import { Typography } from '@mui/material'
import type { FC } from 'react'

interface TitleAppProps {
  isBlackTitle?: boolean
}

export const TitleApp: FC<TitleAppProps> = ({ isBlackTitle }) => {
  return (
		<Typography variant="h5" component="span" fontWeight="bold">
			<Typography variant="h5" component="span" fontWeight="bold" color={isBlackTitle ? '#000' : '#fff'}>
				Super
			</Typography>
			<Typography
				variant="h5"
				component="span"
				color='primary'
				fontWeight="bold"
			>
				Hero.
			</Typography>
		</Typography>
	)
}
