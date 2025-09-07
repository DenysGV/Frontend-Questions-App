import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

export interface IQuestion {
   id: string,
   title: string,
   answer: string,
   difficulty: number,
}

export interface IQuestionSingle {
   question: IQuestion | null,
   error: FetchBaseQueryError | SerializedError | undefined | boolean,
   isLoading: boolean
}