import { useEffect, useState } from "react"
import type { IQuestion } from "../types/questionsTypes"
import QuestionsSearchInput from "./QuestionsSearchInput"
import QuestionsSearchResult from "./QuestionsSearchResult"

const QuestionsSearch = ({ questions }: { questions: IQuestion[] }) => {
   const [filter, setFilter] = useState<string>('')
   const [filtredQuestions, setFiltredQuestions] = useState<IQuestion[]>([])

   useEffect(() => {
      if (filter) {
         setFiltredQuestions(questions.filter((item: IQuestion) => item.title.toLowerCase().includes(filter) || item.id.includes(filter)).slice(0, 5))
      }
   }, [filter, questions])

   return (
      <div className="w-full lg:w-1/4">
         <QuestionsSearchInput setFilter={setFilter} />
         <QuestionsSearchResult questions={filtredQuestions} />
      </div>
   )
}

export default QuestionsSearch