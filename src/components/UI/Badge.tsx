import type { MouseEventHandler } from "react"

const Badge = ({ children, isBig, pointer, clickHandler }: { children: React.ReactNode, isBig?: boolean, pointer: boolean, clickHandler?: MouseEventHandler<HTMLDivElement> }) => {
   return (
      <div onClick={clickHandler ? clickHandler : () => { }} className={`border-0 rounded-full bg-indigo-300 flex items-center justify-center ${pointer ? 'cursor-pointer' : ''} text-white ${isBig ? 'px-4 py-0.5 flex gap-1 items-center' : 'w-9 h-9'}`}>{children}</div>
   )
}

export default Badge