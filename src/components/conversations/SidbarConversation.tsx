import Image from 'next/image'

import { StaticImageData } from 'next/image'

type Props = {
  id: number
  users: string[]
  userImg: StaticImageData
  messages: string[]
}

export default function SidbarConversation({
  id,
  users,
  userImg,
  messages,
}: Props) {
  const lastMessageIndex = messages.length - 1
  const lastUserIndex = users.length - 1

  return (
    <div className='flex items-center cursor-pointer py-5 border-b border-gray'>
      <Image
        src={userImg}
        width={40}
        height={40}
        className='rounded-full'
        alt='placeholder'
      />
      <div className='ml-5'>
        <h3 className='text-lg'>
          {lastUserIndex === 0
            ? `${users[0]}`
            : `${users[0]} & ${lastUserIndex} more`}
        </h3>
        <p className='text-sm text-light-gray'>{messages[lastMessageIndex]}</p>
      </div>
    </div>
  )
}
