"use client";

import { useState } from "react";
import { handleCreateUser } from "@/actions";

export function NewAccountForm() {
  const [errors, setErrors] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    await handleCreateUser(formData);
  };

  return (
    <div className='mx-auto mb-0 mt-20 block max-w-lg'>
      <h1 className='mb-12 text-3xl font-bold text-white'>New Account</h1>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-2 grid-rows-6 gap-4 gap-y-8 text-white'
      >
        <input
          className='col-span-1 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='text'
          name='firstName'
          placeholder='Name'
          disabled={loading}
        />
        <input
          className='col-span-1 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='text'
          name='lastName'
          placeholder='Lastname'
          disabled={loading}
        />
        <input
          className='col-span-2 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='text'
          name='email'
          placeholder='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          disabled={loading}
        />
        <input
          className='col-span-2 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='text'
          name='phone'
          placeholder='phone number'
          pattern='^[0-9]*$'
          disabled={loading}
        />
        <input
          className='col-span-2 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='password'
          name='password'
          placeholder='password'
          disabled={loading}
        />
        <input
          className='col-span-2 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='password'
          name='password_confirmation'
          placeholder='re-type password'
          disabled={loading}
        />
        <button
          className='col-span-2 cursor-pointer rounded-3xl border border-pink-400 bg-transparent p-4 font-bold uppercase'
          // onClick={handleSubmit}
          type='submit'
          name='submit'
          disabled={loading}
        >
          Crear cuenta
        </button>
      </form>
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => {
            return (
              <p key={index} className='mt-4 font-light text-red-500'>
                {error}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
