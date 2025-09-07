import type { IQuestion } from "../types/questionsTypes"
import QuestionsItem from "./QuestionsItem"

const QuestionsSearchResult = ({ questions }: { questions: IQuestion[] }) => {
   return (
      <div className="mt-2.5">
         {questions.map((item, index) => (
            <QuestionsItem {...item} key={`${item.id}:${index}`} />
         ))}
      </div>
   )
}

export default QuestionsSearchResult