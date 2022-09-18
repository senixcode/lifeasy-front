import { useContext } from "react"
import { useMutation } from "react-query"
import Detail from "../api/Detail"
import { formData, formDataClear } from "../lib/formData"
import StatesContext from "../contexts/StatesContext"

export default function useUpdate(){
    const {toogleIsShowCreate, dataUpdate, setDataUpdate, setData} = useContext(StatesContext)
    const mutation = useMutation(({id, data}) => new Detail().UpdateOne(id, data))
    const updated = (id, event) => {
        const data = formData(event)
        if(data) {
            mutation.mutate(({id, data}))
            setData(after => {
                const details = [...after] 
                return details.map(detail => {
                    if(detail.id === id ){
                        return {
                            ...detail,
                            ...data
                        }
                    }
                    return detail
                })
            })
        }
        setDataUpdate({})
        toogleIsShowCreate()
    }

    const onEdit = (detail) => {
        if (!document.querySelector('form')) toogleIsShowCreate()
        setDataUpdate(detail)
    }

    return {dataUpdate, onEdit, updated }
}