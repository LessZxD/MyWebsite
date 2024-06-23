import React from 'react';

function Contact() {
  return (
    <div className="relative flex h-[calc(100vh-80px)] flex-col justify-center overflow-hidden bg-white py-2 sm:py-4">
      <div className="bg-[#363636] max-w-4xl mx-auto w-full h-auto">
        <div className="grid grid-cols-6 h-full">
          <div className="bg-[#363636] p-4 col-span-2">
            <h2 className="mb-4 font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-2">Contact Info</h2>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] py-2 border-b border-blue-700">
              Location Address
              <span className="font-normal text-xs text-blue-300 block">Tangerang, Banten, Indonesia</span>
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] py-2 border-b border-blue-700">
              Phone Number
              <span className="font-normal text-xs text-blue-300 block">+31 633 960 680</span>
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] py-2 border-b border-blue-700">
              Email Address
              <span className="font-normal text-xs text-blue-300 block">gameeko12@gmail.com</span>
            </p>
            <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] py-2 border-b border-blue-700">
              Web Address
              <span className="font-normal text-xs text-blue-300 block">zigzagexampl.com</span>
            </p>
          </div>
          <div className="bg-[#363636] p-6 col-span-4">
            <h2 className="mb-6 font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#E70FAA] to-[#13B0F5] before:block before:absolute before:bg-sky-300 before:content[''] relative before:w-20 before:h-1 before:-skew-y-3 before:-bottom-2">Get in Touch</h2>
            <div className="grid gap-3 mb-3 grid-cols-2">
              <div className="flex flex-col">
                <input className="py-2 bg-white rounded-full px-4 placeholder:text-xs" aria-placeholder="Your Name" placeholder="Your Name" ></input>
              </div>
              <div className="flex flex-col">
                <input className="py-2 bg-white rounded-full px-4 placeholder:text-xs" aria-placeholder="Your Last Name" placeholder="Your Last Name" ></input>
              </div>
            </div>
            <div className="grid gap-3 mb-3 grid-cols-2">
              <div className="flex flex-col">
                <input className="py-2 bg-white rounded-full px-4 placeholder:text-xs" aria-placeholder="Email Address" placeholder="Email Address" ></input>
              </div>
              <div className="flex flex-col">
                <input className="py-2 bg-white rounded-full px-4 placeholder:text-xs" aria-placeholder="Subject" placeholder="Subject" ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="w-full rounded-2xl placeholder:text-xs px-4 py-2" placeholder="Your message here" name="" id="" rows="4"></textarea>
            </div>
            <div className="flex justify-center">
              <button className="rounded-full bg-blue-900 text-white font-bold py-2 px-6 min-w-40 hover:bg-blue-800 transition-all">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
