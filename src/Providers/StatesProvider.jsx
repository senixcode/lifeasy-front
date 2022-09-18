import useStates from "../hooks/useStates"
import StatesContext from "../contexts/StatesContext"

export default function StatesProvider({ children }) {
    const states = useStates()

    return (
        <StatesContext.Provider value={states}>
            {children}
        </StatesContext.Provider>
    )
}

