"use client";

import { removeAccessToken } from "@/actions";

export function LogoutButton() {
  const handleLogout = () => {
    removeAccessToken();
  };

  return (
    <button className='rounded-lg bg-pink-600 p-4' onClick={handleLogout}>
      Cerrar sesión
    </button>
  );
}
