import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                This Project is made using ReactJS
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout the Github repo of this Project here
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://github.com/himanshu-371/Blink-Bytes" target='_blank' rel='noopener noreferrer'>
                    Blink Bytes
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/blinkbytes-d5712.appspot.com/o/1711906761954-ReactJS-logo.png?alt=media&token=2cc6a319-88c4-4605-be69-8e2ec006c9f4"/>
        </div>
    </div>
  )
}