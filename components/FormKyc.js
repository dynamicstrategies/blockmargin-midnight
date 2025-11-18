// pages/index.js
import React from "react";
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'

class KycForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        return (
            <div className="">
                <div className="divide-y divide-gray-900/10">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 py-10 md:grid-cols-3">
                        <div className="px-4 sm:px-0">
                            <h2 className="text-base/7 font-semibold text-gray-900">Company</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                Company KYC form
                            </p>
                        </div>

                        <form className="bg-white shadow-xs outline outline-gray-900/5 sm:rounded-xl md:col-span-2">
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="companyname" className="block text-sm/6 font-medium text-gray-900">
                                            Company Name
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                {/*<div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div>*/}
                                                <input
                                                    id="companyname"
                                                    name="companyname"
                                                    type="text"
                                                    placeholder=""
                                                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-4">
                                        <label htmlFor="companyaddress" className="block text-sm/6 font-medium text-gray-900">
                                            Company Address
                                        </label>
                                        <div className="mt-2">
                                          <textarea
                                              id="companyaddress"
                                              name="companyaddress"
                                              rows={3}
                                              className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                              defaultValue={''}
                                          />
                                        </div>
                                        <p className="mt-3 text-sm/6 text-gray-600">Enter the full company address</p>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="vatnumber" className="block text-sm/6 font-medium text-gray-900">
                                            Company VAT Tax Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                <input
                                                    id="vatnumber"
                                                    name="vatnumber"
                                                    type="text"
                                                    placeholder=""
                                                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="dunsnumber" className="block text-sm/6 font-medium text-gray-900">
                                            Company DUNS Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                <input
                                                    id="dunsnumber"
                                                    name="dunsnumber"
                                                    type="text"
                                                    placeholder=""
                                                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="leinumber" className="block text-sm/6 font-medium text-gray-900">
                                            Company Legal Entity Identifier (LEI)
                                        </label>
                                        <div className="mt-2">
                                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                                <input
                                                    id="leinumber"
                                                    name="leinumber"
                                                    type="text"
                                                    placeholder=""
                                                    className="block min-w-0 grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                />
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-span-full">
                                        <label htmlFor="certincorporation" className="block text-sm/6 font-medium text-gray-900">
                                            Certificate of Incorporation
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                                <div className="mt-4 flex text-sm/6 text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs/5 text-gray-600">PDF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="boardresolution" className="block text-sm/6 font-medium text-gray-900">
                                            Board Resolution
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                                                <div className="mt-4 flex text-sm/6 text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs/5 text-gray-600">PDF up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                                <button type="button" className="text-sm/6 font-semibold text-gray-900">
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    
                </div>
            </div>
            


        );
    }
}

export default KycForm;