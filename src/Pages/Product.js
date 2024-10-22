import { Button } from "../Component/Button"
import ProductList from "../Component/ProductList"
import { productData } from "../jsondata"

const Product = () => {
    return (
        <div>
            <div className="w-full relative h-[90vh]">
                <img src='images/productBanner.png' alt="rutain pharma" className="w-full h-[100%] " />
                <div className="top-[40%] left-[40%] w-[20%] text-center absolute text-[52px] font-poppins font-black text-transparent bg-clip-text  bg-gradient-to-r from-[#25BEB2] to-[#A1EEE1]">
                    Our Products
                </div>
            </div>
            <div className="relative h-[100vh] bg-[#072C2C]">
                <img src="images/bgLeaf.png" alt="rutain-pharma" className="absolute top-0 left-0 z-[5]" />
                <img src="images/bgLeaf2.png" alt="rutain-pharma" className="absolute bottom-0 right-0 z-[5]" />

                <div className="flex w-[80%] mx-auto items-center h-full z-[10] justify-between bg-[#072C2C]">
                    <div className="w-[50%] relative z-[20]">
                        <h1 className="text-[48px] my-5 font-black font-poppins text-transparent bg-clip-text bg-gradient-to-r from-[#D0F7F0] to-[#25BEB2]">
                            API Intermediates
                        </h1>
                        <p className="font-poppins leading-[1.7] text-[#F1FCF9] bg-clip-text bg-gradient-to-r from-[#D0F7F0] to-[#25BEB2]">
                            Pharmaceutical Chemicals we offer are demanded in the industries of pharmaceutical. They are helpful for the diagnosis, prevention, and treatment of diseases. They have the attributes for restoring, modifying, and correcting several organic functions. They are used in pharmaceutical industry for the formation of several types of medicines. Pharmaceutical chemicals are widely used by humans for rapid food production. They are special types of chemicals, which help in formulation of drugs. Offered compounds are accessible with disinfectant efficiency as well as good residual performance. They are used to make drugs for pain, allergy, and other conditions.
                        </p>
                        <Button
                            shape="round"
                            className="min-w-[118px] mt-5 rounded-[12px] px-5 font-poppins font-medium text-[#072C2C] bg-[#A1EEE1] shadow-[0_6px_30px_rgba(105,223,208,0.6)]"
                            style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}
                        >
                            See More
                        </Button>
                    </div>
                    <div className="w-[50%] flex justify-end relative z-[20]">
                        <img src="images/product1.png" alt="rutain-pharma" className="z-[20]" />
                    </div>
                </div>
            </div>
            <div>
                <ProductList/>
            </div>
        </div>
    )
}
export default Product