"use server";

import { redirect } from "next/navigation";
import { GraphQLClientSingleton } from "@/graphql";
import { createUserMutation } from "@/graphql/mutations/create-user-mutation";
import { createAccessToken } from "@/utils/auth/create-access-token";

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

  const { customerCreate } = await graphqlClient.request(
    createUserMutation,
    variables
  );
  const { customerUserErrors, customer } = customerCreate;

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
  const { email, password } = formDataObject;

  const accessToken = await createAccessToken(
    email as string,
    password as string
  );

  if (accessToken) {
    redirect("/store");
  }
};
