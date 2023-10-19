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
    register: builder.mutation({
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

export const { useLoginMutation, useRegisterMutation } = authApi;
