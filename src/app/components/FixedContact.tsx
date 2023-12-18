import React from 'react'
import { FixedContactList } from '../constants'
import Link from 'next/link'

function FixedContact() {
  return (
	<div className='fixed left-8 bottom-8 z-50 bg-green-600 shadow-lg'>
     
     <ul>
        {FixedContactList.map(contact => {
          return <li key={contact.name} className='bg-white w-10 h-10 flex justify-center items-center'>
            <Link href={contact.link}>
            {contact.icon}
            </Link>
          </li>
        })}
     </ul>
		
	</div>
  )
}

export default FixedContact