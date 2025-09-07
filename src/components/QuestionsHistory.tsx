import type { IQuestion } from "../types/questionsTypes"
import QuestionsHistoryItems from "./QuestionsHistoryItems"

const QuestionsHistory = ({ questions }: { questions: IQuestion[] }) => {

   return (
      <div className="w-full lg:w-1/4">
         <div className="border-0 rounded-2xl bg-indigo-400 text-white w-fit px-4 py-1">
            Історія
         </div>
         <QuestionsHistoryItems questions={questions} />
      </div>
   )
}

export default QuestionsHistory