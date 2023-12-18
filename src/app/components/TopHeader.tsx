import Image from 'next/image'
import ContactIcon from './ContactIcon'
import {ContactInfo} from "../constants"
import MobileSvg from './MobileSvg'
import Clock from './Clock'
import Location from './Location'


function TopHeader() {
  return (
    <div className='hidden md:flex items-center justify-between'>
        {/* logo */}
        <div className="logo">
            <Image
             priority={true}
             src="/logo.png"
             alt="logo"
             width={100}
             height={100}
             className='w-auto h-auto'
             />
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
                           <p className="font-bold">
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
                           <p className="font-bold">
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
                            <p className="font-bold">
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