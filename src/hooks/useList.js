
import { useContext, useEffect } from "react"
import { useQuery } from "react-query"
import Detail from "../api/Detail"
import StatesContext from "../contexts/StatesContext"

export default function useList() {

    const { data, setData } = useContext(StatesContext)
    const { data: details, isLoading, status, error } = useQuery('repoData', () => new Detail().All())

    useEffect(() => {
        if (details?.length > 0) setData(details)
    }, [details])

    return {
        data,
        isLoading,
        status,
        error
    }
}