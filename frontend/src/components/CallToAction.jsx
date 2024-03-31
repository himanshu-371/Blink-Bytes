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
            <img src="https://latitudetechnolabs.com/wp-content/uploads/2022/05/ReactJS-logo.png.webp" />
        </div>
    </div>
  )
}