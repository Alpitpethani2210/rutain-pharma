import { useNavigate } from "react-router-dom"
import { Button } from "../Component/Button"

const Blogs = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className="w-full relative h-[90vh] bg-[#072C2C]">
                <img src='images/blogBg1.png' alt="rutain pharma" className="absolute top-0 left-0 " />
                <img src='images/blogBg2.png' alt="rutain pharma" className="absolute bottom-0 right-0" />
                <div className="top-[40%] left-[40%] w-[20%] text-center absolute text-[52px] font-poppins font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#25BEB2] to-[#A1EEE1]">
                    Our Blogs
                </div>
            </div>
            <div className="my-10">
                <div className="w-[70%] mx-auto  relative" style={{ boxShadow: '5px 5px 0px rgba(105, 223, 208, 0.6)' }} >
                    <img src="images/blog1.png" alt="rutain-pharma" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-90 "></div>
                    <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                        <p className="font-inter text-[20px] text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]">
                            Rutain delivers 50 million at-home patient visits since ...
                        </p>
                        <p className="font-inter text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]">
                            Cera delivers 50 million at-home patient visits since 50 million at-home patient visits since 50 million at-home patient visits since
                        </p>
                        <div className="flex gap-5 items-center">
                            <Button
                                shape="round"
                                className={`min-w-[118px]   rounded-[12px] px-5 font-poppins font-medium text-black ${'bg-[#A1EEE1]'
                                    } shadow-[0_6px_30px_rgba(105,223,208,0.6)]`}
                                style={{
                                    boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)'

                                }}
                            >
                                Read More
                            </Button>
                            <p className="text-white">5 minutes read</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap w-[70%] mx-auto gap-x-5 mt-10">
                    <div className="w-[49%] h-[10%] overflow-hidden mb-10 relative" style={{ boxShadow: '5px 5px 0px rgba(233, 31, 100, 0.5)' }}>
                        <img src="images/blog.png" alt="rutain-pharma" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-[20px] text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 cursor-pointer underline text-transparent bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]" onClick={() => navigate('/blog-details')}>
                                    Read More <img src="images/upArrow.svg" alt="rutain-pharma" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49%] mb-10 h-[66%] overflow-hidden relative" style={{ boxShadow: '5px 5px 0px rgba(105, 223, 208, 0.6)' }}>
                        <img src="images/blog3.png" alt="rutain-pharma" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-[20px] text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]]">
                                    Read More <img src="images/upArrow.svg" alt="rutain-pharma" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49%] mb-10  h-[66%] overflow-hidden relative" style={{ boxShadow: '5px 5px 0px rgba(105, 223, 208, 0.6)' }}>
                        <img src="images/blog4.png" alt="rutain-pharma" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-[20px] text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#3AC7B9] to-[#A2E1DF]">
                                    Read More <img src="images/upArrow.svg" alt="rutain-pharma" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-[49%] mb-10 h-[66%] overflow-hidden relative" style={{ boxShadow: '5px 5px 0px rgba(233, 31, 100, 0.5)' }}>
                        <img src="images/blog5.png" alt="rutain-pharma" className="w-full h-auto" />
                        <div className="absolute inset-0 bg-black opacity-70"></div> {/* Dark overlay */}
                        <p className="absolute right-4 top-3 text-[#fff]">30th Sep, 2024</p>
                        <div className="absolute bottom-0 z-10 px-10 py-3"> {/* Add z-index for text visibility */}
                            <p className="font-inter text-[20px] text-transparent my-1 bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                Rutain delivers 50 million at...
                            </p>
                            <div className="flex gap-5">
                                <p className="flex gap-1 underline text-transparent bg-clip-text bg-gradient-to-r from-[#DE5996] to-[#FECCE3]">
                                    Read More <img src="images/upArrow.svg" alt="rutain-pharma" className="w-4" />
                                </p>
                                <p className="text-white">5 minutes read</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    shape="round"
                    className={`min-w-[118px] mx-auto  rounded-[12px] px-5 font-poppins font-medium text-black ${'bg-[#A1EEE1]'
                        } shadow-[0_6px_30px_rgba(105,223,208,0.6)]`}
                    style={{
                        boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)'

                    }}
                >
                    Read More
                </Button>
            </div>
        </div>
    )
}
export default Blogs