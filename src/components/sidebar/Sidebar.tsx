import UserHeader from './UserHeader'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='bg-dark-gray h-screen w-[23%]'>
      <UserHeader />
    </div>
  )
}
