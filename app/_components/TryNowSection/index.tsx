'use client'
import { FaCopy } from "react-icons/fa";
import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {useContentCreators} from "@/app/_providers/ContentCreatorsProvider";

export const TryNowSection = () => {
    const { contentCreators, isLoading, error, apiUrl } = useContentCreators();
    const [copied, setCopied] = useState(false);
    const textToCopy = apiUrl;

    const tuttodev = contentCreators.find(c => c.name === 'tuttodev');

    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (error) return <p>Error</p>;

    return (
        <div className='flex justify-center items-center'>
            <div>
                <h3 className={'text-3xl text-center mb-4'}>Pruébala</h3>
                <div className="relative flex items-center border border-gray-400 rounded-full max-w-lg">
                    <div className="bg-black text-white px-4 py-2 rounded-l-full">
                        api.creadoresapi.com
                    </div>

                    <div className="flex items-center bg-white px-4 py-2 flex-grow rounded-full">
                        <input
                          type="text"
                          value="/v1/content-creator"
                          readOnly
                          className="focus:outline-none border-none text-black flex-grow"
                        />
                        <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                            <button className="text-gray-700 hover:text-blue-500 relative">
                                <FaCopy/>
                            </button>
                        </CopyToClipboard>
                    </div>

                    {copied && (
                      <div
                        className="absolute -right-10 z-10 top-1 mt-8 mr-12 bg-white border border-gray-400 rounded p-1 shadow-lg">
                          <span className="text-green-500">¡Melo!</span>
                      </div>
                    )}
                </div>

                <div className={'mt-4'}>
                    {!isLoading ? (
                      <div className="w-full max-w-lg p-2 bg-gray-100 border border-gray-400 rounded-lg">
                        <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                          {JSON.stringify(tuttodev, null, 2)}
                        </pre>
                      </div>
                    ) : <div>Cargando...</div>}
                </div>

            </div>
        </div>
    )
}