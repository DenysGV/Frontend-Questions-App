import { useEffect, useState } from "react"
import type { IQuestion } from "../types/questionsTypes"
import QuestionsHistory from "./QuestionsHistory"
import QuestionsMain from "./QuestionsMain"
import QuestionsSearch from "./QuestionsSearch"
import { useGetAllQuestionsQuery, useGetQuestionByIdQuery } from "../features/api/questionsApi"
import useLocalStorage from "../hooks/useLocalStorage"
import { useParams } from "react-router-dom"
import Badge from "./UI/Badge"

const Questions = () => {
   const { questionId } = useParams()
   const { data, error, isLoading } = useGetAllQuestionsQuery()

   const {
      data: dataSingleQuestion,
      error: errorSingleQuestion,
      isLoading: loadingSingleQuestion
   } = useGetQuestionByIdQuery(`${questionId}`, {
      skip: !questionId,
   });

   const [shaffledQuestions, setShaffledQuestions] = useLocalStorage<IQuestion[] | null>('shaffle', null)
   const [queue, setQueue] = useLocalStorage<IQuestion[]>('queue', [])
   const [history, setHistory] = useLocalStorage<IQuestion[]>('history', [])
   const [currentQuestion, setCurrentQuestion] = useState<IQuestion | null>(null)

   const [isFinished, setIsFinished] = useState<boolean>(false)

   useEffect(() => {
      if (data && !shaffledQuestions) {
         let currentIndex: number = data.length
         let randomIndex: number
         let shaffledData: IQuestion[] = [...data]

         while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [shaffledData[currentIndex], shaffledData[randomIndex]] = [shaffledData[randomIndex], shaffledData[currentIndex]]
         }

         setShaffledQuestions(shaffledData)
      }
   }, [data, shaffledQuestions])

   useEffect(() => {
      if (questionId && dataSingleQuestion && questionId == dataSingleQuestion.id) {
         setCurrentQuestion(dataSingleQuestion);
         setHistory((prev) => [...prev, dataSingleQuestion]);
      }

      if (!questionId) {
         if (shaffledQuestions) {
            const newCurrent = queue.length ? queue[queue.length - 1] : shaffledQuestions[0];
            setCurrentQuestion(newCurrent);
            if (!queue.length) {
               setQueue([newCurrent]);
            }
            setHistory((prev) => [...prev, newCurrent]);
         }
      }
   }, [shaffledQuestions, dataSingleQuestion, questionId])

   const nextHanddler = () => {
      if (shaffledQuestions && currentQuestion) {
         if (queue.length == shaffledQuestions.length) {
            return setIsFinished(true)
         }

         const currentIndex = shaffledQuestions.findIndex(q => q.id === currentQuestion.id);

         if (currentIndex !== -1) {
            const tempCurrentQuestion: IQuestion = shaffledQuestions[currentIndex + 1];
            setCurrentQuestion(tempCurrentQuestion);
            setQueue(prev => [...prev, tempCurrentQuestion]);
            setHistory(prev => [...prev, tempCurrentQuestion]);
         }
      }
   }

   const prevHandler = () => {
      if (shaffledQuestions && currentQuestion && queue.length > 1) {
         const prevQueue = queue.slice(0, -1)
         const tempCurrentQuestion: IQuestion = queue.length == 1 ? shaffledQuestions[0] : prevQueue[prevQueue.length - 1]

         setCurrentQuestion(tempCurrentQuestion)
         setQueue(prevQueue)
         setHistory(prev => [...prev, tempCurrentQuestion]);
      }
   }

   const finishHandler = () => {
      setQueue([])
      setShaffledQuestions(null)
      setIsFinished(false)
   }

   return (
      <>
         {isLoading || loadingSingleQuestion ?
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-indigo-400 animate-spin absolute top-1/2 left-1/2 -translate-1/2"></div> :
            <div className="px-4">
               <div className="max-w-6xl mx-auto my-5 xl:my-24 flex flex-col lg:flex lg:flex-row gap-8">
                  {(error || errorSingleQuestion) && <p className="text-red-500">Щось пішло не так, спробуйте ще раз</p>}
                  <QuestionsSearch questions={data || []} />

                  {isFinished ?
                     <div className="w-full lg:w-2/4 rounded-2xl h-80 p-2.5 flex flex-col justify-center items-center gap-5 bg-indigo-400">
                        <p></p>
                        <Badge isBig={true} pointer={true} clickHandler={finishHandler}>Почати спочатку</Badge>
                     </div> : currentQuestion ?
                        <QuestionsMain question={currentQuestion} next={nextHanddler} prev={prevHandler} isSingle={!!questionId} /> :
                        <div className="w-2/4 rounded-2xl h-80 p-2.5 flex items-center justify-center bg-indigo-400">
                           <p className="text-center text-2xl text-white px-5">
                              Питання ще не отримано, почекайте будьласка
                           </p>
                        </div>}

                  <QuestionsHistory questions={history} />
               </div>
            </div>}
      </>
   )
}

export default Questions