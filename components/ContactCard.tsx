
import { Contact } from '@prisma/client';
import Image from 'next/image';

interface IProps {
  contact: Contact[]
}

const ContactCard = ({ contact }: IProps) => {


  return (
    <div className='h-20 flex border border-blue-100 rounded px-10 py-5'>
      <Image src={contact.avatar} width={10} height={10} alt={contact.firstName} className='' />
      <div>
        <p>IME prezime</p>
        <p>email</p>
      </div>
    </div>
  )
}

export default ContactCard