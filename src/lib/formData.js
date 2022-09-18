import { isNotEmptyObject } from "./isNotEmptyObject";

export const formData = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    let data = {}
    for (let [key, value] of formData) {
        if (key === 'level') value = +value
        if (key === 'amount') value = +value
        data = { ...data, [key]: value }
    }
    return isNotEmptyObject(data)
}

export const formDataClear = (event) => {
    const formData = new FormData(event.target);
    for (let [key, value] of formData) {
        formData.set(key, "")
    }
}