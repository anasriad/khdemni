import { apiSlice } from "./apiSlice"

interface loginData {
  email: string;
  password: string;
}
// getting data of the user from the backend
const UserApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: loginData) => ({
        url: `/users/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const { useLoginMutation } = UserApiSlice;
