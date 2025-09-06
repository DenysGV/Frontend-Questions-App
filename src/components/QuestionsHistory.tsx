import QuestionsHistoryItems from "./QuestionsHistoryItems"

const QuestionsHistory = () => {
   return (
      <div className="w-1/4">
         <div className="border-0 rounded-2xl bg-indigo-400 text-white w-fit px-4 py-1">
            Історія
         </div>
         <QuestionsHistoryItems />
      </div>
   )
}

export default QuestionsHistory