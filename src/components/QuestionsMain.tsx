import QuestionsMainBottom from "./QuestionsMainBottom"
import QuestionsMainTop from "./QuestionsMainTop"

const QuestionsMain = () => {
   return (
      <div className="w-2/4 rounded-2xl h-80 p-2.5 flex flex-col justify-between bg-indigo-400">
         <QuestionsMainTop />
         <p className="text-center text-2xl text-white px-5">
            Что такое `null` и `undefined` в JavaScript?
         </p>
         <QuestionsMainBottom />
      </div>
   )
}

export default QuestionsMain