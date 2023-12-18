import Image from 'next/image'
import ContactIcon from './ContactIcon'
import {ContactInfo} from "../constants"
import MobileSvg from './MobileSvg'
import Clock from './Clock'
import Location from './Location'
import LogoImage from './LogoImage'


function TopHeader() {
  return (
    <div className='md:flex items-center justify-center h-auto pb-2  '>
        {/* logo */}
        <div className="logo">
         <LogoImage size={40}/>
        </div>
        {/* top contact info */}
        <div className="contact flex items-center gap-5">
            <div className="mobile">
                <div className="flex items-center gap-5 ">
                    <ContactIcon>
                        <div className="w-12 flex items-center justify-center">
                            <MobileSvg/>
                        </div>
                        <div >
                           <p className='font-semibold'>
                             {ContactInfo.mobileNumber}
                           </p>
                            <p >اتصل بنا</p>
                        </div>
                        
                        
                    </ContactIcon>
                    <ContactIcon>
                        <div className="w-12 flex items-center justify-center">
                        <Clock/>
                        </div>
                        
                        <div >
                           <p className='font-semibold'>
                             {ContactInfo.workingTime}
                           </p>
                            <p >اوقات العمل</p>
                        </div>
                    </ContactIcon>
                    <ContactIcon>
                        <div className="w-12 flex items-center justify-center">
                            <Location/>
                        </div>
                        
                         <div >
                            <p className='font-semibold'>
                            {ContactInfo.address.city} 
                            &nbsp; &nbsp;    
                            {ContactInfo.address.country}
                            </p>
                            <p >العنوان</p>
                        </div>
                    </ContactIcon>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopHeader