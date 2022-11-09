type Props = {}

// icons
import { AiOutlinePlus } from 'react-icons/ai'

export default function SidebarFooter({}: Props) {
  return (
    <div className='fixed bottom-0 flex items-center bg-gray w-[23%] gap-3 pl-4 py-5 cursor-pointer hover:bg-blue-500 transition-durration'>
      <AiOutlinePlus className='text-2xl' />
      <p>Start a new conversation</p>
    </div>
  )
}
