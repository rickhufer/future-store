"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { GraphQLClientSingleton } from "@/graphql";
import { createCartMutation } from "@/graphql/mutations/create-cart-mutation";
import { createUserMutation } from "@/graphql/mutations/create-user-mutation";
import { createAccessToken } from "@/utils/auth/create-access-token";
import { validateAccessToken } from "@/utils/auth/validate-access-token";

interface CustomerCreateResponse {
  customerCreate: {
    customer: {
      firstName: string;
      email: string;
    };
  };
}

export const handleCreateUser = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  delete formDataObject["password_confirmation"];
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const variables = {
    input: {
      ...formDataObject,
      phone: "+51" + formDataObject.phone,
    },
  };

  const { customerCreate }: CustomerCreateResponse =
    await graphqlClient.request(createUserMutation, variables);
  const { customer } = customerCreate;
  if (customer?.firstName) {
    await createAccessToken(
      formDataObject.email as string,
      formDataObject.password as string
    );
    redirect("/store");
  }
};

export const handleLogin = async (formData: FormData) => {
  const formDataObject = Object.fromEntries(formData);
  const accesToken = await createAccessToken(
    formDataObject.email as string,
    formDataObject.password as string
  );
  if (accesToken) {
    redirect("/store");
  }
};

export const removeAccessToken = () => {
  const cookiesStore = cookies();
  cookiesStore.delete("accessToken");
  redirect("/login");
};

export const handleCreateCart = async (items: CartItem[]) => {
  const cookiesStore = cookies();
  const accesToken = cookiesStore.get("accessToken")?.value as string;

  if (!accesToken) redirect("/login");

  const graphqlClient = GraphQLClientSingleton.getInstance().getClient();
  const customer = await validateAccessToken();
  const variables = {
    input: {
      buyerIdentity: {
        customerAccessToken: accesToken,
        email: customer?.email,
      },
      lines: items.map((item) => ({
        merchandiseId: item.merchandiseId,
        quantity: item.quantity,
      })),
    },
  };

  const {
    cartCreate,
  }: {
    cartCreate?: {
      cart?: {
        checkoutUrl: string;
      };
    };
  } = await graphqlClient.request(createCartMutation, variables);

  return cartCreate?.cart?.checkoutUrl;
};
