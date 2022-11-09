import Image from 'next/image'

import avatarImg from '../../../public/images/bgfranks.jpeg'

type Props = {}

export default function UserHeader({}: Props) {
  const mockData = {
    id: 1,
    name: 'Brandon',
    username: 'bgfranks',
    email: 'bgfranks.dev@gmail.com',
    avatarUrl: avatarImg,
  }

  return (
    <div className='flex items-center justify-between px-4 py-4 bg-gray'>
      <div className='flex items-center gap-3'>
        <Image
          src={mockData.avatarUrl}
          alt={mockData.name}
          width={40}
          height={40}
          className='rounded-full'
        />
        <h2 className='text-lg hover:text-light-gray cursor-pointer transition-durration tracking-wide'>
          {mockData.username}
        </h2>
      </div>
      <button className='bg-purple-500 px-2 py-[.1rem] rounded-sm text-sm hover:bg-purple-700'>
        Sign Out
      </button>
    </div>
  )
}
