import { useEffect, useState, type Dispatch, type SetStateAction } from "react"

export default function useLocalStorage<T>(key: string, initialValue: T): [T, Dispatch<SetStateAction<T>>] {
   const [storedValue, setStoredValue] = useState<T>(() => {
      try {
         const item = window.localStorage.getItem(key)
         return item ? JSON.parse(item) : initialValue
      } catch (error) {
         return initialValue
      }
   })

   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
   }, [storedValue])

   return [storedValue, setStoredValue]
}