const QuestionsDifficulty = ({ difficulty }: { difficulty: number }) => {
   return (
      <div className={`py-1 px-4 bg-indigo-300 text-white border-2 rounded-2xl ${difficulty <= 3 ? 'border-green-500' : difficulty <= 6 ? 'border-yellow-500' : 'border-red-500'}`}>{difficulty}/10</div>
   )
}

export default QuestionsDifficulty