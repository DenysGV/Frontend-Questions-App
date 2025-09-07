import type { MouseEventHandler } from "react"
import QuestionsDifficulty from "./QuestionsDifficulty"
import Badge from "./UI/Badge"

const QuestionsMainTop = ({ difficulty, id, showAnswerhanddler, isClue }: { difficulty: number, id: string, showAnswerhanddler: MouseEventHandler<HTMLDivElement>, isClue: boolean }) => {
   return (
      <div className="flex justify-between">
         <Badge pointer={true} clickHandler={showAnswerhanddler}>
            {isClue ?
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.76 2 7.78 3.05 6.5 4.68L7.93 6.11C8.84 4.84 10.32 4 12 4C13.3261 4 14.5979 4.52678 15.5355 5.46447C16.4732 6.40215 17 7.67392 17 9C17 10.68 16.16 12.16 14.89 13.06L16.31 14.5C17.94 13.21 19 11.24 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2ZM3.28 4L2 5.27L5.04 8.3C5 8.53 5 8.76 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.2652 8.10536 17.5196 8.29289 17.7071C8.48043 17.8946 8.73478 18 9 18H14.73L18.73 22L20 20.72L3.28 4ZM7.23 10.5L12.73 16H10V13.58C9.34501 13.2944 8.75886 12.8716 8.28104 12.3404C7.80321 11.8091 7.44482 11.1815 7.23 10.5ZM9 20V21C9 21.2652 9.10536 21.5196 9.29289 21.7071C9.48043 21.8946 9.73478 22 10 22H14C14.2652 22 14.5196 21.8946 14.7071 21.7071C14.8946 21.5196 15 21.2652 15 21V20H9Z" fill="white" />
               </svg> :
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2ZM14.85 13.1L14 13.7V16H10V13.7L9.15 13.1C8.48767 12.6405 7.94625 12.0277 7.57189 11.3138C7.19753 10.5999 7.00133 9.8061 7 9C7 6.24 9.24 4 12 4C14.76 4 17 6.24 17 9C17 10.63 16.2 12.16 14.85 13.1Z" fill="white" />
               </svg>}
         </Badge>
         <Badge isBig={true} pointer={false}>
            <p>Питання №{id}</p>
         </Badge>
         <QuestionsDifficulty difficulty={difficulty} />
      </div>
   )
}

export default QuestionsMainTop