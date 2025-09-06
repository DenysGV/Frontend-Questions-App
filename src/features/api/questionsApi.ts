import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IQuestion } from "../../types/questionsTypes";

export const questionsApi = createApi({
   reducerPath: 'questions',
   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
   tagTypes: ['Questions'],
   endpoints: (builder) => ({
      getAllQuestions: builder.query<IQuestion[], void>({
         query: () => '/questions',
         providesTags: ['Questions'],
      }),
      getQuestionById: builder.query<IQuestion, number>({
         query: (id) => `/questions/${id}`
      })
   })
})

export const { useGetAllQuestionsQuery, useGetQuestionByIdQuery } = questionsApi