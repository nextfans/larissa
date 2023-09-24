/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseToastOptions, ToastId } from '@chakra-ui/react'
import { AxiosError } from 'axios'
import { translateErrorCode } from './translateErrorCode'

export interface TryCatchTestProps {
  toast?: (options?: UseToastOptions | undefined) => ToastId
  testFunction: any
  toastInformation?: {
    success: UseToastOptions
    error: UseToastOptions
  }
  isToastSuccess?: boolean
  isToastError?: boolean
}
export async function TryCatchTest({
  toast,
  testFunction,
  toastInformation = {
    success: {
      title: 'Ação realizada com sucesso!',
      description: 'Sua ação foi concluída com êxito!',
      duration: 9000,
      isClosable: true,
    },
    error: {
      title: 'Erro!',
      duration: 9000,
      isClosable: true,
    },
  },
  isToastSuccess = true,
  isToastError = true,
}: TryCatchTestProps) {
  try {
    const response = await testFunction
    if (isToastSuccess && toast) {
      toast({
        title: toastInformation.success.title,
        description:
          response?.data?.message || toastInformation.success.description,
        status: 'success',
        duration: toastInformation.success.duration,
        isClosable: toastInformation.success.isClosable,
      })
    }
    return response
  } catch (error) {
    console.error(error)
    let description = (error as Error).message
    if (error instanceof AxiosError && error?.response?.data?.message) {
      description = error?.response?.data?.message
    }
    if (isToastError && toast) {
      toast({
        title: toastInformation.error.title,
        description: translateErrorCode(description),
        status: 'error',
        duration: toastInformation.error.duration,
        isClosable: toastInformation.error.isClosable,
      })
    }
  }
}
