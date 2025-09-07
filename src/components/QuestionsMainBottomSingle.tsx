import { Link } from "react-router-dom"
import Badge from "./UI/Badge"

const QuestionsMainBottomSingle = () => {
   return (
      <Link to={'/'} className="mx-auto">
         <Badge isBig={true} pointer={true}>На головну</Badge>
      </Link>
   )
}

export default QuestionsMainBottomSingle