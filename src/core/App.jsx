import { QueryClient, QueryClientProvider } from 'react-query'
import Container from '../components/Container'
import StatesProvider from '../Providers/StatesProvider'

const queryClient = new QueryClient()

const App = () => (
    <StatesProvider>
        <QueryClientProvider client={queryClient}>
            <Container
            ></Container>
        </QueryClientProvider>
    </StatesProvider>
)

export default App