'use client'
import { useRouter } from 'next/navigation'
import { CallApi } from '../../lib/CallApi'
import { useAuth } from '../../contexts/AuthContext'
import { useEffect, useState } from 'react'
import { WebProfileInfo } from '../../@types/User'
import { NextTemplateWebProfileInfo } from '../../components/templates/NextTemplateWebProfileInfo'

export default function Profile({ params }: { params: { uid: string } }) {
  const { user } = useAuth()
  const router = useRouter()
  const [webProfileInfo, setWebProfileInfo] = useState<WebProfileInfo | null>(
    null,
  )
  const uid = params.uid

  useEffect(() => {
    async function fetchProfileInfo() {
      try {
        const { data } = await CallApi({
          method: 'GET',
          params: { uid },
          url: 'users/webProfileInfo',
          user,
        })
        setWebProfileInfo(data)
      } catch (error) {
        router.push('/not-found')
      }
    }

    if (uid) {
      fetchProfileInfo()
    }
  }, [uid, user, router])

  return <NextTemplateWebProfileInfo webProfileInfo={webProfileInfo} />
}
