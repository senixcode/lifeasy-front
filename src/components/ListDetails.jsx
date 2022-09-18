import { useContext } from 'react'
import TYPE from '../consts/type.const'
import useDelete from '../hooks/useDelete'
import StatesContext from '../contexts/StatesContext'
import useList from '../hooks/useList'
import useUpdate from '../hooks/useUpdate'
import { convertDate } from '../lib/convertDate'

function ListDetail() {

    const { data, isLoading, status, error } = useList()
    const { isShowCreate, toogleIsShowCreate } = useContext(StatesContext)
    const { onEdit } = useUpdate()
    const { onDelete } = useDelete()


    if (isLoading) return (<p>Loading...</p>)

    if (error) return 'An error has occurred: ' + error.message

    return (
        <div className='details'>
            <div className='header-details'>
                <h2>Report</h2>
                {isShowCreate ? (<button onClick={toogleIsShowCreate}>Hide Create</button>) : (<button onClick={toogleIsShowCreate}>Show Create</button>)}
            </div>
            {
                status === 'success' && (
                    <table>
                        <thead>
                            <tr>
                                {
                                    ['', 'Type', 'Name', 'Alias', 'Level', 'Amount', 'Quantity', 'Description', 'Alert', 'Date'].map(colum => (
                                        <th key={colum}>{colum}</th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((detail) => (
                                    <tr key={detail.id}>
                                        <td >
                                            <div style={{ "display": "flex", columnGap: "1rem", textDecoration: "underline" }}>
                                                <span style={{ cursor: 'pointer' }} onClick={() => onDelete(detail.id)}>Delete</span>
                                                <span style={{ cursor: 'pointer' }} onClick={() => onEdit(detail)}>Edit</span>
                                            </div>
                                        </td>
                                        <td> {TYPE[detail.type]} </td>
                                        <td> {detail.name} </td>
                                        <td> {detail.alias} </td>
                                        <td> {detail.level} </td>
                                        <td> {detail.amount} </td>
                                        <td> {detail.quantity} </td>
                                        <td> {detail.description} </td>
                                        <td> {convertDate(detail.alert)}  </td>
                                        <td> {convertDate(detail.date)} </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                )
            }
        </div>
    )
}

export default ListDetail
