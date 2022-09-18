import { useContext } from "react"
import { useMutation } from "react-query"
import Detail from "../api/Detail"
import StatesContext from "../contexts/StatesContext"

export default function useDelete(){
    const {setData} = useContext(StatesContext)
    const mutationDelete = useMutation(id => new Detail().DeleteOne(id))
    const onDelete = (id) => {
        setData( after  => after.filter(detail => detail.id !== id ))
        id && mutationDelete.mutate(id)
    } 
    
    return {onDelete}
}