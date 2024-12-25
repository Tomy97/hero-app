import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { jwtDecode } from "jwt-decode";
import { login } from "../slices/auth.slice";

interface DecodedToken {
  sub: string;
  email: string;
  iat: number;
}

export const useAuthService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.query<{ token: string }, { email: string, password: string }>({
      query: (body) => ({
        url: `${import.meta.env.VITE_URL_AUTH}`,
        method: 'POST',
        body,
      }),
      providesTags: ['Auth'],
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled
          const decodedToken = jwtDecode<DecodedToken>(data.token)
          dispatch(
            login({
              user: { email: decodedToken.email, name: decodedToken.sub },
              token: data.token
            })
          )
        } catch (error) {
          console.log(error)
        }
      }
    }),
  }),
})

export const { useLazyLoginQuery } = useAuthService