import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  // baseQuery: fetchBaseQuery({
  //   baseUrl: "https://connections-api.herokuapp.com/contacts",
  // }),
  baseQuery: axiosBaseQuery({
    baseUrl: "/contacts",
  }),
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    fetchContacts: builder.query({
      query: () => ({ url: `` }),
      providesTags: ["Contact"],
    }),

    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `/`,
        method: "post",
        data: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
    changeContact: builder.mutation({
      query: ({ name, number, id }) => ({
        url: `/${id}`,
        method: "PATCH",
        data: { name, number },
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useChangeContactMutation,
} = contactsApi;

// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://62b70279491a19c97aed0b08.mockapi.io/contacts/contacts",
//   }),
//   tagTypes: ["Contact"],
//   endpoints: (builder) => ({
//     fetchContacts: builder.query({
//       query: () => ``,
//       providesTags: ["Contact"],
//     }),

//     deleteContact: builder.mutation({
//       query: (contactId) => ({
//         url: `${contactId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contact"],
//     }),
//     addContact: builder.mutation({
//       query: ({ name, number }) => ({
//         url: ``,
//         method: "POST",
//         body: { name, number },
//       }),
//       invalidatesTags: ["Contact"],
//     }),
//     changeContact: builder.mutation({
//       query: ({ name, number, id }) => ({
//         url: `${id}`,
//         method: "PUT",
//         body: { name, number },
//       }),
//       invalidatesTags: ["Contact"],
//     }),
//   }),
// });

// export const {
//   useFetchContactsQuery,
//   useDeleteContactMutation,
//   useAddContactMutation,
//   useChangeContactMutation,
// } = contactsApi;
