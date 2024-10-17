import { Button } from "../Component/Button"

export const Home = () => {
    return (
        <>
            <div className="h-[120vh]">
                <div className=" relative h-full" >
                    <img
                        src="images/img_three_hexagons.png"
                        alt="Threehexagons"
                        className="absolute z-[0] w-full h-[100%] top-0 "
                    />
                    <div className="absolute left-[10%] mt-[20%] w-[45%] px-5">
                        <div className="flex flex-col">
                            <div className="absolute  flex flex-col items-start gap-[18px]">

                                <p
                                    className='relative bg-gradient11 bg-clip-text font-poppins text-[20px] font-normal text-transparent  bg-gradient-to-r from-[#25BEB2] to-[#D0F7F0] '         >
                                    Welcome to
                                    <img
                                        src="images/img_three_hexagons.svg"
                                        alt="Threehexagons"
                                        className="absolute right-[-25px] top-[-10px] z-[2] h-[20px] w-[20px] md:ml-0"
                                    />
                                </p>
                                <h1
                                    className='bg-gradient12 bg-clip-text font-poppins text-[28px] font-semibold  md:text-[52px] sm:text-[38px] text-transparent  bg-gradient-to-r from-[#25BEB2] to-[#D0F7F0]'

                                >
                                    Rutain Pharma Chem
                                </h1>
                                <h2
                                    className='u-[40%] font-poppins text-[22px] font-bold leading-[27px] text-gray-100 md:w—full'

                                >
                                    Connect with one of the top sellers of Pharmaceutical Chemicals from Gujarat.
                                </h2>
                                <Button
                                    shape='round'
                                    className='min-w-[118px] rounded-[12px] px-5 font-poppins font-medium text-black bg-[#a1eee1] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                                    style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}
                                >
                                    Find More
                                </Button>


                            </div >
                        </div >
                    </div >
                </div >
            </div>
            <div className="flex justify-between gap-10">
                <div className="relative  w-[50%]">
                    <div className="absolute">
                        <div className="relative">
                            <img src="images/Vector1.png" alt="image" className="" />
                            <div className=' absolute top-36 left-40 mx-auto '  >
                                <p className='font-poppins ml-6 text-[52px] font-black text-transparent bg-clip-text  bg-gradient-to-b from-[#072C2C] to-[#179292]'>
                                    2018
                                </p>
                                <p className='font-inter ml-1 text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#072C2C] to-[#179292]'>
                                    Year of Establishment
                                </p>
                            </div>
                        </div >
                    </div>
                    <div className="absolute top-12 left-[165px]">
                        <div className="relative">
                            <img src="images/Vector2.png" alt="image" className="" />
                            <div className=' absolute top-52 left-48 mx-auto '  >
                                <p className='font-poppins ml-9 text-[52px] font-black text-transparent bg-clip-text  bg-gradient-to-b from-[#A70D3B] to-[#FF9DBA]'>
                                    10%
                                </p>
                                <p className='font-inter ml-5 text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#A70D3B] to-[#FF9DBA]'>
                                    Export Percentage
                                </p>
                            </div>
                        </div >
                    </div>
                    <div className="absolute top-40">
                        <div className="relative">
                            <img src="images/Vector3.png" alt="image" className="" />
                            <div className=' absolute top-52 left-40 mx-auto '  >
                                <p className='font-poppins ml-14 text-[52px] font-black text-transparent bg-clip-text  bg-gradient-to-b from-[#A70D3B] to-[#B72E57]'>
                                    15
                                </p>
                                <p className='font-inter ml-5 text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#A70D3B] to-[#B72E57]'>
                                    No of Employees
                                </p>
                            </div>
                        </div >
                    </div>
                    <div className="absolute top-[280px] left-[165px]">
                        <div className="relative">
                            <img src="images/Vector4.png" alt="image" className="" />
                            <div className=' absolute top-52 left-40 mx-auto '  >
                                <p className='font-poppins ml-20 text-[52px] font-black text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    02
                                </p>
                                <p className='font-inter ml-9 w-[80%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    No of Production Units
                                </p>
                            </div>
                        </div >
                    </div>
                </div>
                <div className="w-[40%] text-center py-24 pr-20 font-poppins">
                    <p className="relative max-w-fit text-[48px]  font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] mx-auto">About <img src="images/img_three_hexagons.svg" alt="image" className="absolute top-[-10px] right-[-20px]" /></p>
                    <p className="text-[22px] mb-3 font-semibold  text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA]">Rutain Pharma Chem</p>
                    <p>Rutain Pharma Chem is committed to providing high-quality medicinal products that meet statutory and regulatory requirements, assuring product purity and safety. We specialize in developing and producing innovative and generic FDFs and APIs such as Sodium Hypochlorite, Pharmaceutical Raw Material, Pharma Chemicals, Methyl Benzothaizine Isopropyl Ester, Cis-Tosylate, CIS-Bromobenzoate, Calcium Hypochlorite Powder, etc. We are also well-equipped with the skills and resources to take an API from basic formulation to commercial-scale manufacture while adhering to all statutory inspections and rules and participating in the development, marketing, and manufacturing. Our company continually updates its knowledge and identifies technologically challenging specialized and sophisticated APIs and FDFs.</p>
                    <Button shape='round'
                        className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-black bg-[#a1eee1] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                        style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}>   Read More</Button>
                </div>
            </div>
            <div className="relative h-[120vh] bg-[#072C2C] ">
                <img src="images/bgLeaf.png" alt="image" className="absolute top-0 left-0" />
                <img src="images/bgLeaf2.png" alt="image" className="absolute bottom-0 right-0" />
                <h1 className="text-[48px] w-[18%] text-center top-[39%] left-[41.5%] absolute text-transparent bg-clip-text  bg-gradient-to-r from-[#D0F7F0] to-[#25BEB2]">The Sustainable Initiatives</h1>
                <div className="relative h-[85%] ">
                    <div className="absolute left-[40%] ">
                        <img src="images/Vector5.png" alt="image" className="" />
                        <div className=' absolute top-14 left-[80px] mx-auto text-center'  >
                            <img src="images/recycle.svg" alt="image" className="w-6 h-6 mx-auto" />
                            <p className='font-poppins w-[100%]  text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                5545<br />  KL / Annum
                            </p>
                            {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                </p> */}
                            <p className='font-inter mt-2 w-[100%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                Water Recycled<br />
                                <p className="my-2">Through STP Plant</p>
                            </p>
                        </div>
                    </div >
                    <div className="absolute left-[25%] top-[20%]">
                        <img src="images/Vector5.png" alt="image" className="" />
                        <div className=' absolute top-14 left-[75px] mx-auto text-center'  >
                            <img src="images/dustbin.svg" alt="image" className="w-6 h-6 mx-auto" />
                            <p className='font-poppins w-[100%] text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                5566<br />  mt / Annum
                            </p>
                            {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                </p> */}
                            <p className='font-inter mt-2 w-[100%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                Water Recycled
                            </p>
                        </div>
                    </div >
                    <div className="absolute top-[58%] left-[25%]">
                        <img src="images/Vector5.png" alt="image" className="" />
                        <div className=' absolute top-14 left-[95px] mx-auto text-center'  >
                            <img src="images/cloud.svg" alt="image" className="w-6 h-6 mx-auto" />
                            <p className='font-poppins w-[100%] text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                0 %
                            </p>
                            {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                </p> */}
                            <p className='font-inter leading-[1.5]  w-[100%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                Direct Water Load
                                <br />
                                On 8500 Mt<br />
                                Production
                            </p>
                        </div>
                    </div >
                    <div className="absolute top-[78%] left-[40%]">
                        <img src="images/Vector5.png" alt="image" className="" />
                        <div className=' absolute top-14 left-0 mx-auto text-center'  >
                            <img src="images/SaveWater.svg" alt="image" className="w-6 h-6 mx-auto" />
                            <p className='font-poppins w-[100%] text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                5569 <br /> MT / Annum
                            </p>
                            {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                </p> */}
                            <p className='font-inter mx-auto leading-[1.5]  w-[47%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                Waste Converted To Energy Through Co-Processing
                            </p>
                        </div>
                    </div >
                    <div className="absolute top-[58%] left-[55%]">
                        <img src="images/Vector5.png" alt="image" className="" />
                        <div className=' absolute top-14 left-0 mx-auto text-center'  >
                            <img src="images/leaf.svg" alt="image" className="w-6 h-6 mx-auto" />
                            <p className='font-poppins leading-[1.3] w-[100%] text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                21 <br /> MLD/ Annum
                            </p>
                            {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                </p> */}
                            <p className='font-inter mx-auto leading-[1.5]  w-[55%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                Recycling of Treated Vadodara Municipal Cooperation Sewage water
                            </p>
                        </div>
                    </div >
                </div>
                <div className="absolute top-[17%] left-[55%]">
                    <img src="images/Vector5.png" alt="image" className="" />
                    <div className=' absolute top-14 left-0 mx-auto text-center '  >
                        <img src="images/fuel.svg" alt="image" className="w-6 h-6 mx-auto" />
                        <p className='font-poppins leading-[1.3] w-[100%] text-[28px] font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                            23 %
                        </p>
                        {/* <p className='font-poppins ml-20 text-[20px]  text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                                    KL/ Annhum
                                    </p> */}
                        <p className='font-inter mx-auto leading-[1.5]  w-[40%] text-center text-[16px] font-normal font-medium text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]'>
                            Reduction In Carbon Emission Using Renewable Fuel
                        </p>
                    </div>
                </div>
            </div >
            <div className="">
                <div className="mx-auto w-fit mt-20 mb-10">
                    <h1 className="relative text-[48px] font-black font-poppins text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA]">Our Products
                        <img src="images/img_three_hexagons.svg" alt="image" className="absolute top-[5px] right-[-20px]" />
                    </h1>
                </div>
                        {/* <img src="images/bgLeaf3.png" alt="image" className="absolute top-[-75px] z-4 right-0" /> */}
                <div className="flex justify-between px-10 z-[10]">
                    <img src="images/product1.png" alt="image" className="" />
                    <img src="images/product2.png" alt="image" className="" />
                    <img src="images/product3.png" alt="image" className="" />
                </div>
            </div>
            <div>
                <div className="mx-auto w-fit mt-20 mb-10">
                    <h1 className="relative text-[48px] font-black font-poppins text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA]">Why choose Us
                        <img src="images/img_three_hexagons.svg" alt="image" className="absolute top-[5px] right-[-20px]" />
                    </h1>
                </div>
                <div className="flex px-10 gap-40 justify-between" >
                    <div className="w-[35%] pl-10 text-center">
                        <h1 className=" text-[48px] my-5 font-black  font-poppins text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">Our Vision
                        </h1>
                        <p className="font-poppins leading-[1.7] text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">
                            To address the requirements of business associates by manufacturing and developing products following regulatory regulations.To address the requirements of business associates by manufacturing and developing products following regulatory regulations.
                        </p>
                        <Button shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-white bg-[#176E6A] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                            style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}>
                            Know More
                        </Button>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <img src="images/choose1.png" alt="image" className="" />
                    </div>
                </div>
                <div className="flex px-10 gap-40 justify-between mt-10" >
                    <div className="w-[50%] flex justify-start">
                        <img src="images/choose2.png" alt="image" className="" />
                    </div>
                    <div className="w-[35%] text-center pr-10">
                        <h1 className=" text-[48px] my-5 font-black  font-poppins text-transparent bg-clip-text  bg-gradient-to-b from-[#E91F64] to-[#FFA2CB]">Our Mission
                        </h1>
                        <p className="font-poppins leading-[1.7] text-transparent bg-clip-text  bg-gradient-to-b from-[#FFA2CB] to-[#FFA2CB]">
                            To be known as the most reliable partner for delivering high-quality products.To address the requirements of business associates by manufacturing and developing products following regulatory regulations.
                        </p>
                        <Button
                            shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-white bg-[#E91F64]'
                            style={{ boxShadow: '0 6px 30px rgba(233, 31, 100, 0.5)' }} // Inline shadow
                        >
                            Know More
                        </Button>

                    </div>
                </div>
                <div className="flex px-10 gap-40 justify-between" >
                    <div className="w-[35%] pl-10 text-center">
                        <h1 className=" text-[48px] my-5 font-black  font-poppins text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">Our Team
                        </h1>
                        <p className="font-poppins leading-[1.7] text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">
                            We have met our goals in product development, technical help for commercial production, managing pharmaceutical product supply We have met our goals in product development, technical help for commercial production, managing pharmaceutical product supply
                        </p>
                        <Button shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-white bg-[#176E6A] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                            style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}>
                            Know More
                        </Button>
                    </div>
                    <div className="w-[50%] flex justify-end">
                        <img src="images/choose3.png" alt="image" className="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-auto w-fit mt-20 mb-10">
                    <h1 className="relative text-[48px] font-black font-poppins text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA]">Blogs
                        <img src="images/img_three_hexagons.svg" alt="image" className="absolute top-[5px] right-[-20px]" />
                    </h1>
                </div>
                <div className="flex gap-10 justify-center">

                    <div className="w-[23%] mb-10 relative" style={{ boxShadow: '5px 5px 5px rgba(233, 31, 100, 0.5)' }}>
                        <img src="images/blog.png" alt="image" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                    Read More <img src="images/upArrow.svg" alt="image" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%] mb-10 relative" style={{ boxShadow: '5px 5px 5px rgba(233, 31, 100, 0.5)' }}>
                        <img src="images/blog.png" alt="image" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                    Read More <img src="images/upArrow.svg" alt="image" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[23%] mb-10 relative" style={{ boxShadow: '5px 5px 5px rgba(233, 31, 100, 0.5)' }}>
                        <img src="images/blog.png" alt="image" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                    Read More <img src="images/upArrow.svg" alt="image" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div
    className="flex justify-between p-2 shadow-inner-dark-white my-10"
    // style={{
    //     boxShadow: 'inset 0 0 30px rgba(255, 255, 255, 0.8)', // Full dark white inner shadow
    // }}
>
    <img src="images/footer1.png" alt="image" className="" />
    <img src="images/footer2.png" alt="image" className="" />
    <img src="images/footer3.png" alt="image" className="" />
    <img src="images/footer4.png" alt="image" className="" />
    <img src="images/footer5.png" alt="image" className="" />
</div>

        </>
    )
}