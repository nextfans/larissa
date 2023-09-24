'use client'
import Image from 'next/image'
import {
  Alert,
  AlertIcon,
  Box,
  Center,
  Container,
  Text,
} from '@chakra-ui/react'
import { NextLayout } from '../../../components/templates/NextLayout'
import { useAuth } from '../../../contexts/AuthContext'
import { NextUpload } from '../../../components/organisms/NextUpload'

export default function Selfie() {
  const { user } = useAuth()
  // TODO: caso o usuario tiver enviado um foto mostrar a foto e a mensagem aguarde a validação
  // se tiver sido rejeitada a foto  a mensagem e o porque deve aparecer

  return (
    <NextLayout>
      {user && !user?.isProfileVerified && !user.verificationImageUrl && (
        <Box>
          <Alert status="error" justifyContent={'center'}>
            <AlertIcon />
            <Text fontWeight={'medium'}>
              Para garantir a qualidade e segurança de nossa comunidade, é
              essencial que os perfis sejam verificados.
            </Text>
          </Alert>
          <Container>
            <Center p={4}>
              <Box>
                <Text fontSize={'sm'}>
                  Por gentileza, envie uma selfie sua segurando um documento de
                  identificação. Essa etapa é importante para confirmar sua
                  identidade e garantir a segurança no app.
                </Text>
                <Box pt={4}>
                  <NextUpload id={user.uid} directoryName={'selfie'} />
                </Box>
              </Box>
              <Image
                src="/images/illustrations/undraw_certificate_re_yadi.svg"
                alt="NeXTIME Logo"
                width={150}
                height={181}
              />
            </Center>
          </Container>
        </Box>
      )}
      {user && user.isProfileVerified && (
        <Box>
          <Alert status="success" justifyContent={'center'}>
            <AlertIcon />
            <Box>
              <Text fontWeight={'medium'}>
                Parabéns! 🎉 Seu perfil foi verificado com sucesso, e agora você
                pode desfrutar das funcionalidades disponíveis para usuários
                verificados em nosso aplicativo. Aproveite e divirta-se! ✅
              </Text>
            </Box>
          </Alert>
        </Box>
      )}
      {user && user.verificationImageUrl && (
        <Box>
          <Alert status="info" justifyContent={'center'}>
            <AlertIcon />
            <Box>
              <Text fontWeight={'medium'}>
                Obrigado por enviar sua imagem de perfil. Para garantir a
                segurança e autenticidade de nossos usuários, precisamos
                verificar a imagem antes de aprová-la. Por favor, aguarde
                enquanto fazemos a verificação. Isso pode levar alguns minutos,
                mas você pode prosseguir com o uso do nosso aplicativo
                normalmente.
              </Text>
            </Box>
          </Alert>
        </Box>
      )}
    </NextLayout>
  )
}
