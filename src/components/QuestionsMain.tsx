import { useState, type MouseEventHandler } from "react"
import type { IQuestion } from "../types/questionsTypes"
import QuestionsMainBottom from "./QuestionsMainBottom"
import QuestionsMainTop from "./QuestionsMainTop"

const QuestionsMain = ({ question, next, prev }: { question: IQuestion, next: MouseEventHandler<HTMLDivElement>, prev: MouseEventHandler<HTMLDivElement> }) => {
   const [isClue, setIsClue] = useState<boolean>(false)

   const showAnswerhanddler = () => {
      setIsClue(prev => !prev)
   }

   return (
      <div className="w-2/4 rounded-2xl h-80 p-2.5 flex flex-col justify-between bg-indigo-400">
         <QuestionsMainTop isClue={isClue} difficulty={question.difficulty} showAnswerhanddler={showAnswerhanddler} />
         <div>
            <p className="text-center text-2xl text-white px-5">
               {question.title}
            </p>
            <p className={`text-center text-base text-white px-2 ${isClue ? 'opacity-100 h-full select-auto' : 'opacity-0 h-0 select-none'} transition-all delay-300`}>
               {question.answer}
            </p>
         </div>
         <QuestionsMainBottom next={next} prev={prev} />
      </div>
   )
}

export default QuestionsMain