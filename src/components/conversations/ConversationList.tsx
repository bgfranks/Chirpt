import SidbarConversation from './SidbarConversation'
import avatarImg from '../../../public/images/bgfranks.jpeg'

type Props = {}

export default function ConversationList({}: Props) {
  const mockData = [
    {
      id: 1,
      users: ['Kris Gibson'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 2,
      users: ['Sammy Wandy'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 3,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 4,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 5,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 6,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 7,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 8,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 9,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is also a test'],
    },
    {
      id: 10,
      users: ['Emily Coleslaw', 'Kaycee Craig'],
      userImg: avatarImg,
      messages: ['this is a test', 'this is the last message'],
    },
  ]

  return (
    <div className='mx-4 relative overflow-y-scroll h-[80%] scroll-smooth'>
      {mockData.map((convo) => (
        <SidbarConversation
          key={convo.id}
          users={convo.users}
          userImg={convo.userImg}
          messages={convo.messages}
          id={convo.id}
        />
      ))}
    </div>
  )
}
