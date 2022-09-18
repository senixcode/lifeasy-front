import { useContext } from 'react';
import StatesContext from '../contexts/StatesContext';
import StatesProvider from '../Providers/StatesProvider';
import CreateDetail from './CreateDetail'
import ListDetail from './ListDetails'

export default function Container() {
    const { isShowCreate } = useContext(StatesContext)
    return (
        <div className='app__container'>
            {isShowCreate && (<CreateDetail />)}
            <ListDetail />
        </div>
    )
}