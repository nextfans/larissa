import api from './api'
import { TryCatchTest, TryCatchTestProps } from './TryCatchTest'
import { UseToastOptions, ToastId } from '@chakra-ui/react'
import { User } from '../@types/User'

export interface CallAPIProps {
  toast?: (options?: UseToastOptions | undefined) => ToastId
  method: string
  url: string
  data?: Record<string, unknown> | null
  headers?: Record<string, unknown>
  params?: Record<string, unknown> | null
  toastInformation?: TryCatchTestProps['toastInformation']
  user: User | null
  isToastSuccess?: boolean
  isToastError?: boolean
}

export async function CallApi({
  toast,
  method,
  url,
  data = null,
  headers = {},
  params = null,
  toastInformation,
  user,
  isToastSuccess,
  isToastError,
}: CallAPIProps) {
  const testFunction = api.request({
    method,
    url,
    data,
    headers: {
      Authorization: user?.accessToken,
      ...headers,
    },
    params,
  })
  const response = TryCatchTest({
    toast,
    testFunction,
    toastInformation,
    isToastSuccess,
    isToastError,
  })
  return response
}
