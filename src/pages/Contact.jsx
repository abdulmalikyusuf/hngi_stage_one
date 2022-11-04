import React from 'react'

function Contact() {
    const name = "Abdulmalik Yusuf"
    return (
        <main className="max-w-[720px] mx-auto">
            <div>
                <h1 className="font-semibold text-[36px] leading-[44px] text-custom-gray-900 tracking-[-0.02em]">Contact Me</h1>
                <p className="mt-5 text-xl leading-[30px] text-custom-gray-600">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form className="mt-12 space-y6 grid grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1">
                    <label className="text-sm mb-[6px] block">First Name</label>
                    <input type="text" id="first_name" placeholder="Enter your first name" className="input__field"/>
                </div>
                <div className="col-span-full md:col-span-1">
                    <label className="text-sm mb-[6px] block">Last Name</label>
                    <input type="text" id="last_name" placeholder="Enter your last name" className="input__field"/>
                </div>
                <div className="col-span-full">
                    <label className="text-sm mb-[6px] block">Email</label>
                    <input type="text" id="email" placeholder="yourname@email.com" className="input__field"/>
                </div>
                <div className="col-span-full">
                    <label className="text-sm mb-[6px] block">Message</label>
                    <textarea rows={5} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="input__field"/>
                </div>
                <div className="col-span-full flex items-center space-x-3">
                    <input type="checkbox" className="h-5 w-5 border border-custom-gray-300 rounded-[6px]"/>
                    <p className="text-custom-gray-600">You agree to providing your data to {name} who may contact you.</p> 
                </div>
                <div className="col-span-full">
                    <button type="submit" id="btn__submit" className="submit__btn">Submit</button>
                </div>
            </form>
        </main>
    )
}

export default Contact