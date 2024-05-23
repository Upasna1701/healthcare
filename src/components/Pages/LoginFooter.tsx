import loginimg from '../../assets/images/loginimage.png'
import mobloginimg from '../../assets/images/mobilelogin-image.png'

const LoginFooter = () => {
    return(
        <div className='absolute bottom-0 w-[100%]'>
            <img src={loginimg} className='w-[100%] hidden lg:block'/>
            <img src={mobloginimg} className='w-[100%] block lg:hidden'/>
            <div className="bg-[#376C88] py-[16px] text-white text-center ">
                <p className='mx-auto lg:max-w-[35%]' >By clicking “Sign in with Google” or “Continue with email” you agree to our <a href="#" className='underline underline-offset-4'>Terms of Use</a> and <a href="#" className='underline underline-offset-4'>Privacy policy.</a></p>
            </div>
        </div>
    )
}

export default LoginFooter;