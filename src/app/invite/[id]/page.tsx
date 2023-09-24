'use client'
import { NextTemplateHome } from '../../../components/templates/NextTemplateHome'
import { items } from '../../../data'

export default function Invite({ params }: { params: { id: string } }) {
  return <NextTemplateHome idWhoInvited={params.id} items={items} />
}
