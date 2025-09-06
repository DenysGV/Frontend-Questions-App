import Badge from "./UI/Badge"

const QuestionsMainBottom = () => {
   return (
      <div className="flex justify-between">
         <Badge isBig={true} pointer={true}>
            <svg width="12" height="28" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M1.843 11.289L7.5 5.63198L8.914 7.04598L3.964 11.996L8.914 16.946L7.5 18.36L1.843 12.703C1.65553 12.5155 1.55022 12.2611 1.55022 11.996C1.55022 11.7308 1.65553 11.4765 1.843 11.289Z" fill="white" />
            </svg>
            Попереднє
         </Badge>
         <Badge isBig={true} pointer={true}>
            Наступне
            <svg width="12" height="28" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" clip-rule="evenodd" d="M10.157 12.711L4.5 18.368L3.086 16.954L8.036 12.004L3.086 7.054L4.5 5.64L10.157 11.297C10.3445 11.4845 10.4498 11.7388 10.4498 12.004C10.4498 12.2692 10.3445 12.5235 10.157 12.711Z" fill="white" />
            </svg>
         </Badge>
      </div>
   )
}

export default QuestionsMainBottom