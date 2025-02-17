import React from 'react'

function Conversation() {
  return (
    <>
        <div
            className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        `}
        >
            <div className={`avatar `}>
                <div className='w-12 rounded-full'>
                    <img src="https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg" alt='user avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>Himanshu</p>
                    <span className='text-xl'>😂</span>
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation;