import React from "react";
import { Box, Image, Heading, Text, Icon } from 'native-base';
import { Feather } from "@expo/vector-icons";

const Feed = ({data}) => {
	return (
		<Box flex={1} flexDirection="column" marginBottom={4} backgroundColor="#FFF" padding={2} borderRadius={4}>
			<Box>
				<Image source={{uri: data.avatarURL}} alt="Post Feed" w="100%" h={120} />
			</Box>
			<Box marginY={3}>
				<Heading paddingBottom={2} size="sm">Aprendendo a usar Native Base</Heading>
				<Text numberOfLines={2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
			</Box>
			<Box marginY={1} flexDir="row" backgroundColor="rgba(226, 232, 240, 0.4)" alignSelf="flex-start" borderRadius={6} paddingX={3} paddingY={1}>
				<Icon as={Feather} name="user" size={5} color="#000" marginRight={2} />
				<Text numberOfLines={1}>{data.fullName}</Text>
			</Box>
		</Box>
	)
}

export default Feed