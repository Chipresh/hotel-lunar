import React, { useState } from 'react'

const Mail = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const handleLogin = () => {

    }
    return (
        <div>

            <div className='lg:flex lg:flex-col items-center gap-6 my-12'>
                <h2 className='text-[16px] text-font-bold'>We’ll love to hear your feedback. Kindly send us a mail</h2>

                <form className='lg:flex lg:flex-col gap-6'>
                    <div>
                        <input placeholder='Your name' value={name} onChange={(e) => setName(e.target.value)} className='lg:w-[400px] lg:h-[40px]  bg-gray-200 placeholder-purple-400 outline-none px-3 placeholder:font-extrabold' />
                    </div>
                    <div>
                        <input placeholder='Your email' value={email} onChange={(e) => setEmail(e.target.value)} className='lg:w-[400px] lg:h-[40px] bg-gray-200 placeholder-purple-400 outline-none px-3 placeholder:font-extrabold' />
                    </div>
                    <div>
                        <input placeholder='Your message' value={message} onChange={(e) => setMessage(e.target.value)} className='lg:w-[400px] lg:h-[80px] bg-gray-200 placeholder-purple-400 outline-none px-3 placeholder:font-extrabold' />
                    </div>
                    <button onClick={handleLogin} className='bg-purple-700  w-[400px] h-10 text-white text-[16px] font-bold'>Send message</button>
                </form>
            </div>

        </div>
    )
}

export default Mail;