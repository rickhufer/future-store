"use client";

export default function Error({ error, reset }: ErrorPageProps) {
  // console.log("Error: ", error);

  return (
    <div className='p-20 text-center text-white'>
      <h1>🥹</h1>
      <p>Ha ocurrido un error</p>
      <button
        className='mt-6 cursor-pointer rounded-sm bg-red-300 p-2 text-xs'
        onClick={reset}
      >
        Presiona para intentar de nuevo
      </button>
    </div>
  );
}
