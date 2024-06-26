import { VStack, Image, Text, Center, Heading } from 'native-base'
import BackgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'

export function Signin() {
    return (
        <VStack flex={1} bg={'gray.700'}>
            <Image
                source={BackgroundImg}
                alt='Pessoas treinando'
                resizeMode='contain'
                position={'absolute'}
            />
            <Center my={24}>
                <LogoSvg />
                <Text color='gray.100' fontSize='sm' >
                    Treine sua mente e o seu corpo
                </Text>
            </Center>
            <Heading color='gray.100'>
                Acesse sua conta
            </Heading>
        </VStack >
    )
}