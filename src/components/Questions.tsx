import QuestionsHistory from "./QuestionsHistory"
import QuestionsMain from "./QuestionsMain"
import QuestionsSearch from "./QuestionsSearch"

const Questions = () => {
   return (
      <div className="max-w-6xl mx-auto my-24 flex gap-8">
         <QuestionsSearch />
         <QuestionsMain />
         <QuestionsHistory />
      </div>
   )
}

export default Questions