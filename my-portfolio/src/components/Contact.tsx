import React from 'react';
import { CiMail } from "react-icons/ci";
import { IoMdPhonePortrait } from "react-icons/io";

const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
          <h2 className='text-5xl'>Get in touch</h2>
          <p className='text-white-600 text-[18px] pt-2'>
            Drop me a line, or send me a message, or send me a mail by submitting the form.
          </p>
          <div className='flex gap-3 items-center'>
            <CiMail size={30} /> abc@gmail.com
          </div>
          <div className='flex gap-3 items-center'>
            <IoMdPhonePortrait size={30} /> (021) 000-0000
          </div>
        </div>
        <div className='space-y-8'>
          <div className='flex flex-col gap-1'>
            <label htmlFor="name">Name</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent' id='name' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="email">Email</label>
            <input type="text" className='h-[40px] bg-transparent border border-accent' id='email' />
          </div>
          <div className='flex flex-col gap-1'>
            <label htmlFor="msg">Message</label>
            <textarea className='h-[40px] bg-transparent border border-accent' id='msg' rows={8}></textarea>
          </div>
          <button className='bg-accent p-2 px-6'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
