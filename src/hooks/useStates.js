import { useState } from "react"

export default function useStates() {
    const [isShowCreate, setIsShowCreate] = useState(false)
    const [data, setData] = useState([])
    const [dataUpdate, setDataUpdate] = useState({})
    const toogleIsShowCreate = () => {
        setIsShowCreate(!isShowCreate)
    } 

    return {
        data, 
        setData,
        isShowCreate, 
        setIsShowCreate,
        toogleIsShowCreate,
        dataUpdate, 
        setDataUpdate
    }
}