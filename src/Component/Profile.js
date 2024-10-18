import { Button } from "./Button"

const Profile = () => {
    return (
        <div>
            <img src="images/cto1.png" alt="rutain pharma" />
            <h2>DR. Ipsum</h2>
            <h4>CTO</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            <Button shape='round'
                className='min-w-[118px] mx-auto mt-5 rounded-[12px] px-5 font-poppins font-medium text-white bg-[#176E6A] shadow-[0_6px_30px_rgba(105,223,208,0.6)]'
                style={{ boxShadow: '0 6px 30px rgba(105, 223, 208, 0.6)' }}>
                Know More
            </Button>
        </div>
    )
}
export default Profile  