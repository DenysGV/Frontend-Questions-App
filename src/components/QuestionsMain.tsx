import { useState, type MouseEventHandler } from "react"
import type { IQuestion } from "../types/questionsTypes"
import QuestionsMainBottom from "./QuestionsMainBottom"
import QuestionsMainTop from "./QuestionsMainTop"
import QuestionsMainBottomSingle from "./QuestionsMainBottomSingle"

const QuestionsMain = ({ question, next, prev, isSingle }: { question: IQuestion, next: MouseEventHandler<HTMLDivElement>, prev: MouseEventHandler<HTMLDivElement>, isSingle: boolean }) => {
   const [isClue, setIsClue] = useState<boolean>(false)

   const showAnswerhanddler = () => {
      setIsClue(prev => !prev)
   }

   return (
      <div className="w-full lg:w-2/4 rounded-2xl h-96 p-2.5 flex flex-col justify-between bg-indigo-400">
         <QuestionsMainTop isClue={isClue} id={question.id} difficulty={question.difficulty} showAnswerhanddler={showAnswerhanddler} />
         <div>
            <p className="text-center text-base md:text-2xl text-white px-5">
               {question.title}
            </p>
            <p className={`text-center pt-3 text-[10px] md:text-base text-white px-2 ${isClue ? 'opacity-100 h-full select-auto' : 'opacity-0 h-0 select-none'} transition-all delay-300`}>
               {question.answer}
            </p>
         </div>
         {!isSingle && <QuestionsMainBottom next={next} prev={prev} />}
         {isSingle && <QuestionsMainBottomSingle />}
      </div>
   )
}

export default QuestionsMain