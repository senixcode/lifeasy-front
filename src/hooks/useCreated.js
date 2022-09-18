import { useContext, useState } from "react"
import { useMutation } from "react-query"
import Detail from "../api/Detail"
import StatesContext from "../contexts/StatesContext"
import { formData } from "../lib/formData"

export default function useCreated(){
    const {setData, setDataUpdate} = useContext(StatesContext)
    const [moreInfo, setMoreInfo] = useState(false)
    const mutation = useMutation(data => new Detail().CreateOne(data))
    const created = (event) => {
        const data = formData(event)
        if(data) {
            mutation.mutate(data)
            setData(after => {
                const details = [...after] 
                details.push(data)
                return details
            })
            setDataUpdate({})
        } 
    }
    const toogleMoreInfo = () => setMoreInfo(!moreInfo)
    return {moreInfo, toogleMoreInfo, created }
}