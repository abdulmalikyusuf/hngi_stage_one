import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { string, object, boolean } from "yup"


const schema = object().shape({
	first_name: string().required("Please enter your first name"),
	last_name: string().required("Please enter your last name"),
	email: string().email("Please enter a valid email address").required("Please enter your email address"),
	message: string().required("Please enter a message"),
    consent: boolean().required()
})
const name = "Abdulmalik Yusuf"


function Contact() {
    const { handleSubmit, register, watch, formState: { errors, isValid }} = useForm({ mode: "onBlur", defaultValues: null, resolver: yupResolver(schema)})

    const {first_name, last_name, email, message, consent } = errors

    return (
        <main className="max-w-[720px] mx-auto">
            <div>
                <h1 className="font-semibold text-[36px] leading-[44px] text-custom-gray-900 tracking-[-0.02em]">Contact Me</h1>
                <p className="mt-5 text-xl leading-[30px] text-custom-gray-600">Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form className="mt-12 space-y6 grid grid-cols-2 gap-6">
                <div className="col-span-full md:col-span-1">
                    <label className="text-sm mb-[6px] block">First Name</label>
                    <input type="text" id="first_name" required={first_name?.message} {...register("first_name")} placeholder="Enter your first name" className="form__field"/>
                    {first_name?.message ?
                    <p className="mt-[6px] text-[#F83F23] text-sm">{first_name.message}</p>:
                    <p className="mt-[6px] text-custom-gray-600 text-sm">Your first name here.</p>}
                </div>
                <div className="col-span-full md:col-span-1">
                    <label className="text-sm mb-[6px] block">Last Name</label>
                    <input type="text" id="last_name" required={last_name?.message} {...register("last_name")} placeholder="Enter your last name" className="form__field"/>
                    {last_name?.message ?
                    <p className="mt-[6px] text-[#F83F23] text-sm">{last_name.message}</p>:
                    <p className="mt-[6px] text-custom-gray-600 text-sm">Your last name here.</p>}
                </div>
                <div className="col-span-full">
                    <label className="text-sm mb-[6px] block">Email</label>
                    <input type="text" id="email" {...register("email")}required={email?.message} placeholder="yourname@email.com" className="form__field"/>
                    {email?.message ?
                    <p className="mt-[6px] text-[#F83F23] text-sm">{email.message}</p>:
                    <p className="mt-[6px] text-custom-gray-600 text-sm">Your email address here.</p>}
                </div>
                <div className="col-span-full">
                    <label className="text-sm mb-[6px] block">Message</label>
                    <textarea rows={5} id="message" {...register("message")} required={message?.message} placeholder="Send me a message and I'll reply you as soon as possible..." className="form__field message__field"/>
                    {message?.message ?
                    <p className="mt-[6px] text-[#F83F23] text-sm">{message.message}</p>:
                    <p className="mt-[6px] text-custom-gray-600 text-sm">Your message here.</p>}
                </div>
                <div className="col-span-full flex items-center space-x-3">
                    <input type="checkbox" {...register("consent")} className="checkbox__field h-5 w-5 border border-custom-gray-300 rounded-[6px]"/>
                    <p className="text-custom-gray-600">You agree to providing your data to {name} who may contact you.</p> 
                </div>
                <div className="col-span-full">
                    <button type="submit" id="btn__submit" disabled={!isValid} className="submit__btn">Submit</button>
                </div>
            </form>
        </main>
    )
}

export default Contact