import { Button } from "../Component/Button"

const CompanyProfile = () => {
    return (
        <div>
            <div className="w-full relative h-[90vh]">
                <img src='images/companyBanner.png' alt="rutain pharma" className="w-full h-[100%] " />
                <div className="top-[40%] left-[35%] w-[30%] text-center absolute text-[52px] font-poppins font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#25BEB2] to-[#A1EEE1]">
                    Company Profile
                </div>
            </div>
            <div className="w-[55%] mx-auto text-center py-24  font-poppins">
                <p className="font-poppins relative max-w-fit text-[48px] mb-5 font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] mx-auto">About Us<img src="images/img_three_hexagons.svg" alt="rutain-pharma" className="absolute top-[-10px] right-[-20px]" /></p>
                <p>We are <span className="font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#072C2C] to-[#179292]">Rutain Pharma Chem,</span> a Pharmaceutical Chemicals manufacturing firm from <span className="font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#072C2C] to-[#179292]">Ankleshwar, Gujarat, India,</span> that formulates and exports a wide variety of Pharmaceutical Chemicals meeting industry safety regulations and norms. We offer quality tested and assured <span className="font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#072C2C] to-[#179292]">Caustic Soda Lye, Methyl Benzothaizine Isopropyl Ester, Calcium Hypochlorite, CIS-Bromobenzoate, etc.,</span> complying to special needs of buyers from the healthcare and associated industries. These chemicals are processed, purified, tested and packed under expert supervision only. We also have a good reputation of dispatching chemicals across the market in a safe manner, with unmatched flexibility and speed. </p>
            </div>
            <div className="w-[80%] mx-auto mb-20">

                <div className="w-[55%] mx-auto text-center  font-poppins">
                    <p className="font-poppins relative max-w-fit text-[48px]  font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] mx-auto">Key Facts<img src="images/img_three_hexagons.svg" alt="rutain-pharma" className="absolute top-[-10px] right-[-20px]" /></p>
                    <p className="text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] font-bold text-[22px]">Of Rutain Pharma Chem</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>Nature of Business</p>
                    <p>Manufacturer, Supplier, Trader</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>GST No.</p>
                    <p>24ABBFR0333F1ZS</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>Location</p>
                    <p>Ankleshwar, Gujarat</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>Year of Establishment</p>
                    <p>2018</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>No. of Employees</p>
                    <p>15</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>No. of Production Units</p>
                    <p>02</p>
                </div>
                <div className="flex justify-between text-[#606060] border-b-2 py-5">
                    <p>No. of Production Units</p>
                    <p>By Rail, Road & Ship</p>
                </div>
                <div className="flex justify-between text-[#606060] py-5">
                    <p>Modes of Payment</p>
                    <p>Online Payments (NEFT, RTGS, IMPS), Wallet & UPI, Cheque/DD</p>
                </div>
            </div>
            <div>
                <div className="w-[55%] mx-auto text-center  font-poppins">
                    <p className="relative max-w-fit font-poppins text-[48px]  font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] mx-auto">From CEO’s Desk<img src="images/img_three_hexagons.svg" alt="rutain-pharma" className="absolute top-[-10px] right-[-20px]" /></p>
                </div>
                <div className="mt-5 mb-20">
                    <div className="h-[70vh] w-[80%] mx-auto flex gap-3 rounded-xl">
                        <div className="h-full w-[12%] relative rounded-[50px]">   
                            <img src="images/slide1.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <p className="absolute text-[32px] bottom-[30%] right-[-50%] w-[200%] font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983] -rotate-90">Our Commitment</p>
                        </div>
                        <div className="h-full w-[12%] relative rounded-[50px]">   
                            <img src="images/slide2.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <p className="absolute text-[32px] bottom-[30%] right-[-50%] w-[200%] font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983] -rotate-90">Our Experties</p>
                        </div>
                        <div className="h-full w-[12%] relative rounded-[50px]">   
                            <img src="images/slide3.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <p className="absolute text-[32px] bottom-[37%] right-[-70%] w-[250%] font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983] -rotate-90">Inovation and Research</p>
                        </div>
                        <div className="h-full w-[40%] relative rounded-[50px]">   
                            <img src="images/slide4.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <div className="w-[90%] mx-auto absolute bottom-[10%] left-[10%]">
                                <p className="text-[24px] mb-3 font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983]">Quality Assurance</p>
                                <p className=" font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum sem at felis tincidunt, ac auctor tortor lacinia. Phasellus sit amet neque vitae orci dictum varius</p>
                            </div>
                        </div>
                        <div className="h-full w-[12%] relative rounded-[50px]">   
                            <img src="images/slide5.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <p className="absolute text-[32px] bottom-[40%] right-[-75%] w-[270%] font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983] -rotate-90">Client - centirc approach</p>
                        </div>
                        <div className="h-full w-[12%] relative rounded-[50px]">   
                            <img src="images/slide6.jpeg" alt="rutain pharma" className=" h-[100%] w-[100%] object-cover rounded-[50px]"/>
                            <div className="absolute inset-0 bg-black opacity-50 rounded-[50px]"></div>
                            <p className="absolute text-[32px] bottom-[30%] right-[-50%] w-[200%] font-bold text-transparent bg-clip-text  bg-gradient-to-r from-[#A1EEE1] to-[#188983] -rotate-90">Sustainability</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <div className="flex justify-center flex-col">
                    <p className="font-poppins relative max-w-fit text-[48px]  font-extrabold text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] mx-auto">Meet Our Team<img src="images/img_three_hexagons.svg" alt="rutain-pharma" className="absolute top-[-10px] right-[-20px]" /></p>
                    <p className="text-transparent bg-clip-text  bg-gradient-to-r from-[#175856] to-[#32BEBA] font-bold text-[22px] mx-auto">Our core team</p>
                </div>
                <div className="flex w-[80%] mt-10 mx-auto gap-20 justify-between" >
                    <div className="w-[30%] flex ">
                        <img src="images/ceoImage.png" alt="rutain-pharma" className="" />
                    </div>
                    <div className="w-[60%] ">
                        <h1 className=" text-[36px]  font-black  font-inter text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">Mr Chintan
                        </h1>
                        <h1 className=" text-[18px] border-b-2 py-3 font-semibold  font-inter text-[#175856] ">Founder & CEO
                        </h1>
                        <p className="font-poppins leading-[1.7] mt-5 text-[#072C2C] ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum sem at felis tincidunt, ac auctor tortor lacinia. Phasellus sit amet neque vitae orci dictum varius nec et justo. Cras ut lectus et lorem malesuada varius. Duis vitae purus magna. Nulla vitae quam id justo vehicula posuere non a nulla. Nam sed dui non odio tempus eleifend vel eget neque. Phasellus vulputate, nisi et facilisis bibendum, ipsum eros efficitur nisi, nec rutrum dolor felis quis est. Nam volutpat, lorem ac vulputate interdum, metus libero fermentum mauris, ac blandit velit lorem in ligula.
                        </p>
                    </div>
                </div>
                <div className="flex w-[80%] mx-auto my-10 justify-between">
                    <div className="text-center w-[30%] ">
                        <img src="images/cto1.png" alt="rutain pharma" />
                        <h2 className="text-[36px] mt-3 font-inter font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">DR. Ipsum</h2>
                        <h4 className="text-[#175856] font-semibold mt-2 mx-5 border-b-2 pb-3">CTO</h4>
                        <p className="mt-3 w-[70%] text-[#072C2C] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins  font-medium text-[#55021A] bg-[#FECCE3] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                            style={{ boxShadow: '0 6px 30px rgba(233, 31, 100, 0.5)' }} >
                            Know More
                        </Button>
                    </div>
                    <div className="text-center w-[30%]">
                        <img src="images/cto2.png" alt="rutain pharma" />
                        <h2 className="text-[36px] mt-3 font-inter font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">DR. Ipsum</h2>
                        <h4 className="text-[#175856] font-semibold mt-2 mx-5 border-b-2 pb-3">CTO</h4>
                        <p className="mt-3 w-[70%] text-[#072C2C] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-white bg-[#176E6A] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                            style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}>
                            Know More
                        </Button>
                    </div>
                    <div className="text-center w-[30%]">
                        <img src="images/cto3.png" alt="rutain pharma" />
                        <h2 className="text-[36px] mt-3 font-inter font-bold text-transparent bg-clip-text  bg-gradient-to-b from-[#175856] to-[#32BEBA]">DR. Ipsum</h2>
                        <h4 className="text-[#175856] font-semibold mt-2 mx-5 border-b-2 pb-3">CTO</h4>
                        <p className="mt-3 w-[70%] text-[#072C2C] mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                        <Button shape='round'
                            className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins  font-medium text-[#55021A] bg-[#FECCE3] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                            style={{ boxShadow: '0 6px 30px rgba(233, 31, 100, 0.5)' }} >
                            Know More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanyProfile