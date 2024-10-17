import React from 'react'
import { Button } from './Button';
export const dropDownOptions = [
    { label: 'Option1', value: 'Option1' },
    { label: 'Option2', value: 'Option2' },
    { label: 'Option3', value: 'Option3' }
]
export default function Header() {
    return (
        <div >
            <div className='relative z-[1] flex justify-center self-stretch bg-[#072C2C]'>
                <div className='container-xs mt-1 flex justify-center md:px-5 py-1'>
                    <div className='flex w-full items-center justify-between gap-5 '>
                        <div className='flex  items-center gap-4'>
                            <a href='#'>
                                <img src='images/img_call.svg' alt='Call' className='h-[16px] w-[16px]' />
                            </a>
                            <p size='headingxs' as='p' className='text-[14px] font-bold text-white'>
                                08045477087
                            </p>
                        </div>
                        <div className='flex flex-wrap gap-1'>
                            <p size='textxs' as='p' className='text-[14px] font-normal text-gray-100'>
                                Trusted company that deals in
                            </p>
                            <p size='headingxs' as='p' className='text-[14px] font-black text-teal-200'>
                                quality-made products
                            </p>
                        </div>
                        {/* <SelectBox
                            shape='square'
                            indicator={
                                <img
                                    src='images/img_chevrondownxssvgrepocom.svg'
                                    alt='Chevron-down-xs Svgrepo.com'
                                    className='h-[16px] w-[16px]'
                                />
                            }
                            name='chevrondownxssv'
                            placeholder={`Languages`}
                            options={dropDownOptions}
                            className='w-[8%] gap-4 font-bold text-white-a700 md:w-full'
                        /> */}
                    </div>
                </div>
            </div>
            <div className='flex justify-center self-stretch bg-white-700 py-1.5' >
                <div className='container-xs flex items-center justify-between gap-5  md:px-5'>
                    <div className='flex  flex-col items-start justify-center md:w-[18%]'>
                        <div className='mr-[22px] flex items-center self-stretch md:mr-0 '>
                            <img src='images/img_rutain_watermark.png' alt='Rutain' className='h-[60px] w-[42%] object-contain' />
                            <div className='relative ml-[-2px] flex flex-1 flex-col items-center'>
                                <span
                                    size='textxl'
                                    as='p'
                                    className='font-jacquesfrancois text-[20px] font-normal uppercase tracking-[6.00px] text-teal-400'
                                >
                                    RutAin
                                </span>
                                <span
                                    size='textxs'
                                    as='p'
                                    className='font-jacquesfrancois text-[8px] font-normal uppercase tracking-[4.80px] text-teal-300'
                                >
                                    PharmaCHEM
                                </span>
                            </div>
                        </div>
                        <span
                            size='texts'
                            as='p'
                            className='self-center font-judson text-[10px] font-normal uppercase tracking-[4.00px] text-gray-500'
                        >
                            Birth for Quality
                        </span>
                    </div>
                    <div className='flex gap-[18px] sm: flex-col items-center'>
                        <ul className='flex flex-wrap gap-[18px] items-center'>
                            <li>
                                <a href='#'>
                                    <span as='p' className='font-poppins text-[16px] font-medium text-gray-900'>
                                        Home
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span as='p' className='font-poppins text-[16px] font-medium text-gray-900'>
                                        Company Profile
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span as='p' className='font-poppins text-[16px] font-medium text-gray-900'>
                                        Our Products
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span as='p' className='font-poppins text-[16px] font-medium text-gray-900'>
                                        Our Blogs
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href='#'>
                                    <span as='p' className='font-poppins text-[16px] font-medium text-gray-900'>
                                        Contact Us
                                    </span>
                                </a>
                            </li>

                            <a href='#'>
                                <img src='images/img_rewind.svg' alt='Rewind' className='h-[24px] w-[24px] sm:w-full' />
                            </a>
                        </ul>
                    </div >
                    <Button
                        shape='round'
                        className='min-w-[118px] rounded-[12px] px-5 font-poppins font-medium text-black bg-[#a1eee1] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                        style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}
                    >
                        Get a Quote
                    </Button>


                </div>
            </div >
        </div >
    );
}