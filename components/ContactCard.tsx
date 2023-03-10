
import { Contact } from '@prisma/client';
import Image from 'next/image';

interface IProps {
  contact: Contact[]
}

const ContactCard = ({ contact }: IProps) => {


  return (
    <div className='h-20 flex border border-blue-100 rounded px-5 py-5'>
      <Image src={contact.avatar} width={100} height={100} alt={contact.firstName} className='h-10 w-10 rounded-full' />
      <div className='pl-5'>
        <p>{contact.firstName + ' ' + contact.lastName}</p>
        <p>{contact.email}</p>
      </div>
    </div>
  )
}

export default ContactCard