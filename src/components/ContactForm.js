import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
export default function ContactForm() {
  const [state, handleSubmit] = useForm("xdorblpj");
  if (state.succeeded) {
      return <p>Danke!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className='w-full flex flex-col px-10 pb-10 md:mt-10 md:px-[20%]'>
      <label htmlFor="email">
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Email Adresse'
        className='formInput'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Deine Nachricht'
        className='formInput'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='button1'>
        Abschicken
      </button>
      <div>
        <span>Außerdem erreichen sie uns über die Telefonnummer +4915752595165</span>
      </div>
    </form>
  );
}