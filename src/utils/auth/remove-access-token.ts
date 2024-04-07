import { cookies } from "next/headers";

export const removeAccessToken = () => {
  const cookiesStore = cookies();
  cookiesStore.delete("accessToken");
};
