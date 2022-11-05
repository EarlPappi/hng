import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Contact() {
    // take use input
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [firstError, setFirstError] = useState(false);
    const [lastError, setLastError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);


    console.log(setMessage)

    const [isError, setIsError] = useState(false);
    const emailIncludes = email?.trim().includes("@") && email?.trim().includes(".");
    // const [messsage, setMessage] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(first.trim().length === 0){
            setFirstError(true);
        }else if(last.trim().length === 0){
            setLastError(true)
        }else if(!emailIncludes){
            setEmailError(true)
        }else if (message.trim().length === 0) {
            setIsError(true);
            return
        } else {
            setIsError(false);
        }

        navigate('/');

    };

    return (
        <div className='w-11/12 md:w-3/5 mx-auto my-8 mb-16'>
            <form action="" onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold '>Contact Me</h1>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>

                <div className='flex flex-col md:flex-row mt-2 md:gap-4 md:my-3'>
                    <div className='my-2 md:my-4 w-full md:w-1/2'>
                        <label className='block font-semibold' htmlFor="first_name">First Name</label>
                        <input required className='border border-slate-300 p-2 rounded-xl w-full my-2' type="text" id='first_name' placeholder='Enter your first name' onChange={(e) => {
                            setFirst(e.target.value);
                            console.log(first)
                        }} />
                    </div>

                    <div className='my-2 md:my-4 w-full md:w-1/2'>
                        <label className='block font-semibold' htmlFor="last_name">Last Name</label>
                        <input required className='border border-slate-300 p-2 rounded-xl w-full my-2' type="text" id='last_name' placeholder='Enter your last name' onChange={(e) => {
                            setLast(e.target.value)
                        }} />
                    </div>
                </div>

                <div className='my-2 md:my-4'>
                    <label className='block font-semibold' htmlFor="email">Email</label>
                    <input required className='border border-slate-300 p-2 rounded-xl w-full my-2' type="email" id='email' placeholder='yourname@email.com' onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </div>

                <div className='my-2 md:my-4'>
                    <label className='block font-semibold' htmlFor="message">Message</label>
                    <textarea placeholder="Send me a message and I'll reply you as soon as possible..." className='border border-slate-300 p-2 rounded-xl w-full my-2' style={{
                        boxShadow: isError ? '0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC' : '',
                        resize: 'none'
                    }} name="message" id="" cols="30" rows="10" onChange={(e) => {
                        setMessage(e.target.value)
                    }}></textarea>
                    {isError && <span className='text-[#F83F23] font-semibold'>Please enter a message</span>}
                </div>

                <div className='flex gap-2 my-6'>
                    <input required type="checkbox" className='border-slate-300 md:w-5 md:h-5 rounded-xl' />
                    <span>You agree to providing your data to Earl who may contact you.</span>
                </div>

                <button id='btn_submit' className='bg-[#1570EF] hover:bg-[#175CD3] focus:bg-[#1570EF]  w-full p-3 rounded-xl text-white font-bold'>Send Message</button>


            </form>
        </div>
    )
}

export default Contact;