import React from 'react'
import { Box, Image } from 'native-base'

const Storys = ({data}) => {
	return (
		<Box flex={1} marginBottom={4} padding={2} borderRadius={4}>
			<Box padding={0.5} borderRadius={32} bg={{linearGradient: {colors: ["lightBlue.300", "violet.800"]}}}>
				<Image source={{uri: data.avatarURL}} width={16} height={16} borderRadius={32} alt='Avatar URL' />
			</Box>
		</Box>
	)
}

export default Storys