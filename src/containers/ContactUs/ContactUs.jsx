import React from 'react'
import {
    RESEARCH_ROUTE ,
    SUBMISSION_ROUTE
} from '../../routes';
import {Link} from 'react-router-dom'
export default function ContactUs() {
    return (
        <div className='mt-16 sm:p-8 md:p-16'>
            <div className='md:flex '>
                <div className='left-view sm:w-full md:w-3/4 lg:mx-20'>
                    <h2 className="text-3xl mb-8 ml-4">Contact Us</h2>
                    <div className='form sm:mx-5'>
                        <form className="w-full max-w-lg  ">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                    First Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                    Last Name
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    E-mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                    Message
                                </label>
                                <textarea class=" no-resize appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                <button className="shadow bg-gray-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                    Send
                                </button>
                                </div>
                                <div className="md:w-2/3"></div>
                            </div>
                        </form>
                    </div>
                    <div className="more-details mt-16 ml-4">
                        <p className='text-lg'>Or you can contact us using:</p>
                        <p className="text-gray-500">Email@gmail.com</p>
                    </div>
                </div>
                <div className='right-view sm:hidden lg:block mt-12 mx-auto'>
                    <h3>Here something about the journal and button for the submission</h3>
                    <div className='my-12 p-4'>
                        <Link to={SUBMISSION_ROUTE}>
                             <button className="shadow bg-gray-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                 Submit Now
                            </button>
                        </Link>
                        <Link to={SUBMISSION_ROUTE}>
                            <button className=" ml-4 shadow bg-transparent border-gray-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-gray-800 font-bold py-2 px-4 rounded" type="button">
                                Research
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
