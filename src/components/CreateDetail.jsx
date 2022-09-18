import { useEffect } from 'react'
import TYPE from '../consts/type.const'
import useCreated from '../hooks/useCreated'
import useUpdate from '../hooks/useUpdate'
import { isNotEmptyObject } from '../lib/isNotEmptyObject'

function CreateDetail() {
    const { moreInfo, toogleMoreInfo, created } = useCreated()
    const { dataUpdate, updated } = useUpdate()

    const onSubmit = (event) => {
        if (isNotEmptyObject(dataUpdate)) return updated(dataUpdate.id, event)
        return created(event)
    }

    return (
        <div className='create-details'>
            <div className='header-details'>
                <h2>Create </h2>
            </div>

            <form className='form__container' onSubmit={onSubmit}>
                <select defaultValue={dataUpdate?.type || ""} name='type'>
                    <option value="" disabled>Type</option>
                    <option value="EGRESS">{TYPE.EGRESS}</option>
                    <option value="INCOME">{TYPE.INCOME}</option>
                </select>
                <input defaultValue={dataUpdate?.name || ""} name='name' placeholder='Name' />
                {moreInfo && (<input value={dataUpdate?.alias || ""} name='alias' placeholder='Alias' />)}
                <select defaultValue={dataUpdate?.level || ""} name='level' >
                    <option value="" disabled>Level</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <input defaultValue={dataUpdate?.amount || ""} type="number" name='amount' placeholder='Amount' />
                {moreInfo && (
                    <>
                        <input defaultValue={dataUpdate?.quantity || ""} type="number" name='quantity' placeholder='Quantity' />
                        <textarea defaultValue={dataUpdate?.description || ""} type="number" name='description' placeholder='Description' rows={3} />
                        <input defaultValue={dataUpdate?.alert || ""} type="datetime-local" name='alert' placeholder='Alert' />
                        <input defaultValue={dataUpdate?.date || ""} type="datetime-local" name='date' placeholder='Date' />
                    </>
                )}
                <span style={{ "textDecoration": "underline" }} onClick={toogleMoreInfo}>
                    {moreInfo ? 'Less info' : 'More info'}
                </span>
                <button type='submit'>
                    {isNotEmptyObject(dataUpdate) ? 'Edit' : 'Save'}
                </button>
            </form>

        </div>
    )
}

export default CreateDetail
