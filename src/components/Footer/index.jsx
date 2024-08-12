import './index.scss';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import CustomAlert from '../CustomAlert';
AOS.init();

const Footer = () => {
    const refForm = useRef();
    const [isDisabled, setIsDisabled] = useState(false);
    const [alert, setAlert] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsDisabled(true);
        emailjs
            .sendForm('service_zibsm3m', 'template_ebugnxe', refForm.current, 'EIZ5W28_Zxwvclt97')
            .then(
                () => {
                    setAlert({ message: 'Message successfully sent!', type: 'success' });
                },
                () => {
                    setAlert({ message: 'Failed to send the message, please try again', type: 'error' });
                }
            )
            .finally(() => {
                setIsDisabled(false);
                setTimeout(() => setAlert(null), 3000); // Hide alert after 3 seconds
            });
    }

    return (
        <>
            {/* Show the alert at the top */}
            {alert && <CustomAlert message={alert.message} type={alert.type} />}

            <div className="pt-[10.5rem] pb-[8rem]" data-aos="fade-up" id='contact-section'
                data-aos-easing="linear"
                data-aos-duration="1500">

                <div className='mb-32 text-center'>
                    <p className="text-sm">Say Hello and</p>
                    <h1 className="text-center text-4xl font-bold">Get in Touch</h1>
                </div>

                <div className="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
                    <div>
                        <h1 className="text-gray-800 text-3xl font-extrabold">Let's Connect!</h1>
                        <p className="text-sm text-gray-500 mt-4">
                            Interested in building, improving, or launching a software project? I'd love to hear about your ideas and help you bring them to life. Reach out today!
                        </p>

                        <div className="mt-12">
                            <h2 className="text-gray-800 text-base font-bold">Email</h2>
                            <ul className="mt-4 flex flex-col gap-3">
                                <li className="flex items-center ">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width={24} height={24} fill="none" stroke="#1877f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <path d="m22 6-10 7L2 6" />
                                        </svg>
                                    </div>
                                    <a href="#!" className="text-[#007bff] text-sm ml-4" onClick={(e) => e.preventDefault()}>
                                        <small className="block">Mail</small>
                                        <strong>Figueroaj102289@gmail.com </strong>
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width={24} height={24} fill="none" stroke="#1877f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    </div>
                                    <a href="#!" className="text-[#007bff] text-sm ml-4" onClick={(e) => e.preventDefault()}>
                                        <small className="block">Phone No.</small>
                                        <strong>+63 962 0669 336</strong>
                                    </a>
                                </li>

                                <li className="flex items-center">
                                    <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <svg width={24} height={24} fill="none" stroke="#1877f2" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                        </svg>
                                    </div>
                                    <a href="https://www.facebook.com/jaysonxxii" target='_blank' rel='noreferrer' className="text-[#007bff] text-sm ml-4">
                                        <small className="block">Facebook</small>
                                        <strong>facebook.com/jaysonxxii</strong>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <form className="ml-auo space-y-4" ref={refForm} onSubmit={sendEmail}>
                        <input type='text' placeholder='Name'
                            className="w-full text-gray-800 dark:text-red-600  rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-transparent"
                            name="name"
                            required
                        />

                        <input type='email' placeholder='Email'
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-transparent"
                            name="email"
                            required
                        />

                        <input type='text' placeholder='Subject'
                            className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500 bg-transparent"
                            name="subject"
                            required
                        />
                        <textarea placeholder='Message' rows="6"
                            className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500 bg-transparent"
                            name="message"
                            required
                        ></textarea>
                        <button type='submit'
                            className="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6 "
                            disabled={isDisabled}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Footer;
