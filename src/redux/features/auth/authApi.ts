import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    Login: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/sign-in`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
    signup: builder.mutation({
      query: ({ data }) => ({
        url: `/auth/register`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
