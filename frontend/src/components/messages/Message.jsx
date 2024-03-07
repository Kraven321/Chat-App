import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
    <div className='chat-image avatar'>
    <div className='w-10 rounded-full'>
    <img src="https://api.lorem.space/image/face?hash=33791" alt="TailwindCSS chat bubble" />
    </div>
    </div>
    <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is upp?</div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message
