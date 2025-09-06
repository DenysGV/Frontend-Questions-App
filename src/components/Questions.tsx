import { useEffect, useState } from "react"
import type { IQuestion } from "../types/questionsTypes"
import QuestionsHistory from "./QuestionsHistory"
import QuestionsMain from "./QuestionsMain"
import QuestionsSearch from "./QuestionsSearch"
import { useGetAllQuestionsQuery } from "../features/api/questionsApi"

const Questions = () => {
   const { data, error, isLoading } = useGetAllQuestionsQuery()
   const [queue, setQueue] = useState<IQuestion[]>([])
   const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null)
   const [isFinished, setIsFinished] = useState<boolean>(false)

   useEffect(() => {
      if (data && !currentQuestion) {
         setCurrentQuestion(data[0])
         setQueue([data[0]])
      }
   }, [data])

   const nextHanddler = () => {
      if (data && currentQuestion) {
         if (queue.length == data.length) {
            setIsFinished(true)
            return
         }

         let indexOfCurrent: number = data.indexOf(currentQuestion)

         if (indexOfCurrent || indexOfCurrent === 0) {
            setCurrentQuestion(data[++indexOfCurrent])
            setQueue(prev => [...prev, currentQuestion])
         }
      }
   }

   const prevHandler = () => {
      if (data && currentQuestion && queue.length > 1) {
         const prevQueue = queue.slice(0, -1)

         setCurrentQuestion(prevQueue[prevQueue.length - 1])
         setQueue(prevQueue)
      }
   }

   return (
      <>
         {isLoading ?
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-400 animate-spin absolute top-1/2 left-1/2 -translate-1/2"></div> :
            <div className="max-w-6xl mx-auto my-24 flex gap-8">
               {error && <p className="text-red-500">Щось пішло не так, спробуйте ще раз</p>}
               <QuestionsSearch />

               {currentQuestion ?
                  <QuestionsMain question={currentQuestion} next={nextHanddler} prev={prevHandler} /> :
                  <div className="w-2/4 rounded-2xl h-80 p-2.5 flex items-center justify-center bg-indigo-400">
                     <p className="text-center text-2xl text-white px-5">
                        Питання ще не отримано, почекайте будьласка
                     </p>
                  </div>}

               <QuestionsHistory />
            </div>}
      </>
   )
}

export default Questions