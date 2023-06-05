import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RegisterBody, RegisterResponse } from "../models/profile";
import { AuthenticationRequest, AuthenticationResponse, User } from "../models";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/",
  }),
  endpoints: (builder) => ({
    registration: builder.mutation<RegisterResponse, RegisterBody>({
      query: (body) => ({
        url: "account",
        body,
        method: "POST",
      }),
    }),
    authorization: builder.mutation<
      AuthenticationResponse,
      AuthenticationRequest
    >({
      query: (body) => ({
        url: "login",
        body,
        method: "POST",
      }),
    }),
    getProfile: builder.query<User, null>({
      query: () => ({
        url: "profile",
        method: "GET",
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }),
    }),
  }),
});

export const {
  useRegistrationMutation,
  useAuthorizationMutation,
  useLazyGetProfileQuery,
} = AuthApi;
