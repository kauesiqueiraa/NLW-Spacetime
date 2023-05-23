import Image from 'next/image'
import Link from 'next/link'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
import { cookies } from 'next/headers'

import { api } from '@/lib/api'

import { ChevronLeft, Edit } from 'lucide-react'
import { EmptyMemories } from '@/components/EmptyMemories'

dayjs.locale(ptBr)

interface MemoryProps {
  id: string
  coverUrl: string
  content: string
  isPublic: boolean
  createdAt: string
}

export default async function MemoryDetails({
  params,
}: {
  params: { id: string }
}) {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get(`/memories/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memory: MemoryProps = response.data

  return (
    <div className="space-y-4 p-8">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-gray-200 hover:text-gray-100"
      >
        <ChevronLeft className="h-4 w-4" />
        voltar à timeline
      </Link>

      <time className="-ml-8 flex items-center gap-3 text-sm text-gray-200 before:h-px before:w-5 before:bg-gray-200">
        {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
      </time>

      <Image
        src={memory.coverUrl}
        alt=""
        width={592}
        height={280}
        className="aspect-video w-full rounded-lg object-cover"
      />

      <p className="text-lg leading-relaxed text-gray-100">{memory.content}</p>

      <div className="flex items-center gap-4">
        {/* <DeleteIcon /> */}
        <button className="flex items-center gap-2 rounded bg-purple-500 px-5 py-2 text-xs font-bold text-gray-500 transition-colors hover:bg-purple-300">
          <Edit />
          <span>Editar</span>
        </button>
      </div>
    </div>
  )
}
