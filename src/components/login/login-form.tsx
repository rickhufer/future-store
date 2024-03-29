"use client";

import { handleLogin } from "@/actions";

export const LoginForm = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(event.target as HTMLFormElement);
    event.preventDefault();

    await handleLogin(formData);
  };

  return (
    <div className='mx-auto mb-0 mt-20 block max-w-lg'>
      <h1 className='mb-12 text-3xl font-bold text-white'>Login</h1>
      <form
        onSubmit={handleSubmit}
        className='flex grid-cols-2 grid-rows-6 flex-col gap-4 gap-y-8 text-white'
      >
        <input
          className='col-span-1 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='text'
          name='email'
          placeholder='email'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
        />
        <input
          className='col-span-1 border-0 border-b border-pink-400 bg-gray-900 bg-transparent px-4 py-2 text-xl font-light focus:border-b-2 focus:outline-none'
          type='password'
          name='password'
          placeholder='password'
        />
        <input
          className='col-span-2 cursor-pointer rounded-3xl border border-pink-400 bg-transparent p-4 font-bold uppercase'
          type='submit'
          name='submit'
          value='Login'
        />
      </form>
    </div>
  );
};
