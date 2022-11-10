import ConversationList from '../conversations/ConversationList'
import SidebarFooter from './SidebarFooter'
import UserHeader from './UserHeader'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <div className='bg-dark-gray h-screen w-[23%] fixed'>
      <UserHeader />
      <ConversationList />
      <SidebarFooter />
    </div>
  )
}
