import { useState } from 'react';
import Head from 'next/head';
import { PrismaClient, Contact, Prisma } from '@prisma/client';
import { InferGetServerSidePropsType } from "next";
import AddContactForm from 'components/AddContactForm';
import ContactCard from 'components/ContactCard';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const contacts: Contact[] = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts
    }
  };
}


export default function Index({ initialContacts }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [contacts, setContacts] = useState<Contact[]>(initialContacts);

  async function saveContact(contact) {
    const response = await fetch('/api/contacts', {
      method: 'POST',
      body: JSON.stringify(contact)
    });
    if (!response.ok) {
      throw new Error('Failed to save contact');
    }
    return await response.json();
  }

  return (
    <>
      <Head>
        <title>Contacts App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="flex">
        <section className="w-1/3 bg-gray-800 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-white">Add a Contact</h2>
          </div>
          <AddContactForm onSubmit={
            async (data) => {
              try {
                await saveContact(data)
                setContacts([...contacts, data])
              }
              catch (err) {
                console.log(err)
              }
            }
          } />
        </section>
        <section className="w-2/3 h-screen p-8">
          <div className="mb-3">
            <h2 className="text-3xl text-gray-700">Contacts</h2>
          </div>
          {contacts.map((c) => (
            <div className="mb-3" key={c.id}>
              <ContactCard contact={c} />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}