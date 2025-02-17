import React from 'react'

const Message = () => {
  return (
    <div className={`chat chat-end`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS chat bubble component' src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"/>
            </div>
        </div>
        <div className={`chat-bubble text-white pb-2`}>Himanshu kaise ho</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:30</div>
    </div>
  )
}

export default Message