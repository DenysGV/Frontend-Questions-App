import type { IQuestion } from "../types/questionsTypes"
import QuestionsItem from "./QuestionsItem"

const QuestionsHistoryItems = ({ questions }: { questions: IQuestion[] }) => {
   console.log(questions);

   return (
      <div>
         {[...questions].slice(-5).reverse().map((item, index) => (
            <QuestionsItem {...item} key={`${item.id}:${index}`} />
         ))}
      </div>
   )
}

export default QuestionsHistoryItems