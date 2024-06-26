import React from 'react';

function Contact() {
  return (
    <div className="relative flex h-[calc(100vh-200px)] flex-col justify-center overflow-hidden bg-white py-2 sm:py-4">
      <div className="bg-white max-w-4xl mx-auto w-full h-auto shadow-lg">
        <div className="grid grid-cols-6 h-full">
          <div className="bg-white p-4 col-span-2">
            <h2 className="mb-4 font-bold text-xl text-black relative before:block before:absolute before:bg-black before:content[''] before:w-20 before:h-1 before:-skew-y-3 before:-bottom-2">Contact Info</h2>
            <p className="font-bold text-black py-2 border-b border-gray-300">
              Location Address
              <span className="font-normal text-xs text-gray-600 block">Tangerang, Banten, Indonesia</span>
            </p>
            <p className="font-bold text-black py-2 border-b border-gray-300">
              Phone Number
              <span className="font-normal text-xs text-gray-600 block">+31 633 960 680</span>
            </p>
            <p className="font-bold text-black py-2 border-b border-gray-300">
              Email Address
              <span className="font-normal text-xs text-gray-600 block">gameeko12@gmail.com</span>
            </p>
            <p className="font-bold text-black py-2 border-b border-gray-300">
              Web Address
              <span className="font-normal text-xs text-gray-600 block">zigzagexampl.com</span>
            </p>
          </div>
          <div className="bg-white p-6 col-span-4">
            <h2 className="mb-6 font-bold text-3xl text-black relative before:block before:absolute before:bg-black before:content[''] before:w-20 before:h-1 before:-skew-y-3 before:-bottom-2">Get in Touch</h2>
            <div className="grid gap-3 mb-3 grid-cols-2">
              <div className="flex flex-col">
                <input className="py-2 bg-gray-100 rounded-full px-4 placeholder:text-xs" aria-placeholder="Your Name" placeholder="Your Name" ></input>
              </div>
              <div className="flex flex-col">
                <input className="py-2 bg-gray-100 rounded-full px-4 placeholder:text-xs" aria-placeholder="Your Last Name" placeholder="Your Last Name" ></input>
              </div>
            </div>
            <div className="grid gap-3 mb-3 grid-cols-2">
              <div className="flex flex-col">
                <input className="py-2 bg-gray-100 rounded-full px-4 placeholder:text-xs" aria-placeholder="Email Address" placeholder="Email Address" ></input>
              </div>
              <div className="flex flex-col">
                <input className="py-2 bg-gray-100 rounded-full px-4 placeholder:text-xs" aria-placeholder="Subject" placeholder="Subject" ></input>
              </div>
            </div>
            <div className="mb-3">
              <textarea className="w-full bg-gray-100 rounded-2xl placeholder:text-xs px-4 py-2" placeholder="Your message here" name="" id="" rows="4"></textarea>
            </div>
            <div className="flex justify-center">
              <button className="rounded-full bg-black text-white font-bold py-2 px-6 min-w-40 hover:bg-gray-800 transition-all">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
