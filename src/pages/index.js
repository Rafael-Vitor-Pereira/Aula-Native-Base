import React from 'react'
import { Box, HStack, Pressable, Icon, Avatar, FlatList } from 'native-base'
import { Feather } from '@expo/vector-icons'
import data from '../components/dados'
import Storys from '../components/Storys'
import Feed from '../components/Feed'

const index = () => {
	return (
		<Box flex={1} backgroundColor="#F8F8F8" flexDirection="column">
			<HStack padding={4} w="100%" alignItems="center" justifyContent="space-between" safeArea>
				<Box>
					<Pressable>
						<Icon as={Feather} name='menu' size={7}	color="#000" />
					</Pressable>
				</Box>
				<Box rounded="md" flexDir="row" alignItems="center">
					<Pressable>
					<Icon as={Feather} name='bell' size={7}	color="#000" marginRight={4} />
					</Pressable>
					<Pressable>
						<Avatar source={{uri: "https://www.oficinadanet.com.br/imagens/post/19396/facebookfotoperfil.jpg"}} height={12} width={12} />
					</Pressable>
				</Box>
			</HStack>
			<Box paddingX={4}>
				<FlatList horizontal={true} data={data} renderItem={({item}) => <Storys data={item} />} showsHorizontalScrollIndicator={false} />
			</Box>
			<Box paddingX={4}>
				<FlatList data={data} renderItem={({item}) => <Feed data={item} />} showsVerticalScrollIndicator={false} />
			</Box>
		</Box>
	)
}

export default index