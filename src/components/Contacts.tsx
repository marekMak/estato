import React from 'react'
import Title from './Title'
import { LiaBalanceScaleSolid } from 'react-icons/lia'

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className='w-full h-full pb-10'>
        <Title mainHeader="Contact" subHeader="With Us" secondHeader="Ready to Make a Move? Let’s Build Your" lastHeader="Future Together" />

            <div className="w-full flex justify-center">
                <form className="w-full max-w-lg px-10 flex flex-col justify-center">
                    <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2" >
                                Your name
                            </label>
                            <input className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"/>
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2" >
                                Your email
                            </label>
                            <input className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"/>
                        </div>
                        <div className="w-full px-3">
                            <label className="block tracking-wide text-gray-700 text-xs font-medium mb-2" >
                                Message
                            </label>
                            <textarea placeholder='Message' className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none">
                            </textarea>
                        </div>
                    </div>
                    <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">Send Message</button>
                </form>
            </div>
    </div>
  )
}

export default Contacts