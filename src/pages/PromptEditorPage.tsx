import { Button, Textarea } from 'flowbite-react'
import { useEffect, useState } from 'react'
import { CopyBlock } from 'react-code-blocks';

const PromptEditorPage = () => {
    const [role, setRole] = useState("");
    const [action, setAction] = useState('');
    const [context, setContext] = useState('')
    const [expectation, setExpectation] = useState('');
    const [prompt, setPrompt] = useState('');

    useEffect(() => {
        setPrompt(`${role}\n\n${action}\n\n${context}\n\n${expectation}
            `)
    }, [role, action, context, expectation])
    const rowSize = 3

    const handleReset = () => { setRole(""); setAction(""); setContext(""); setExpectation(""); }

    return (
        <div className='container mx-6 mt-4'>
            <h1 className='ml-6'>Prompt Editor - Using RACE</h1>
            <div className='grid grid-flow-col grid-cols-2 gap-4'>
                <div className='col-span-1'>
                    <div className='mx-8 pt-8'>
                        <label htmlFor="role" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Role:</label>
                        <p className='block mb-2 italic text-sm'>Specify the character you want AI to play. Should it be an expert social media marketer and an email copywriter?</p>
                        <Textarea id="role" placeholder="Enter role information.." value={role} onChange={(event) => setRole(event.target.value)} required rows={rowSize} className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='mx-8 pt-8'>
                        <label htmlFor="action" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Action:</label>
                        <p className='block mb-2 italic text-sm'>This is the basic instruction or the job you need to be done.</p>
                        <Textarea id="action" placeholder="Enter action information.." value={action} onChange={(event) => setAction(event.target.value)} required rows={rowSize} className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='mx-8 pt-8'>
                        <label htmlFor="context" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Context:</label>
                        <p className='block mb-2 italic text-sm'>Usually there is background information you need to provide for AI to fulfill the instruction</p>
                        <Textarea id="context" placeholder="Enter context information.." value={context} onChange={(event) => setContext(event.target.value)} required rows={rowSize} className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                    <div className='mx-8 pt-8'>
                        <label htmlFor="expectation" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Expection:</label>
                        <p className='block mb-2 italic text-sm'>Describe the outcome you need</p>
                        <Textarea id="expectation" placeholder="Enter expectation information.." value={expectation} onChange={(event) => setExpectation(event.target.value)} required rows={rowSize} className='block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    </div>
                </div>
                <div className='col-span-1'>
                    <p className='mb-2 mt-6 text-lg font-medium'>Prompt:</p>
                    <div className='w-[90%] h-[60%] bg-white'>
                        <CopyBlock
                            text={prompt}
                            language={'text'}
                            showLineNumbers={false}
                            wrapLongLines
                        />
                    </div>
                    <Button onClick={handleReset} size='sm' className='mt-8' color='light'>Clear</Button>
                </div>
            </div>

        </div >

    )
}

export default PromptEditorPage