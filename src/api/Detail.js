import instance from "./config"

class Detail {
    #ROUTES_ENPOINT_DETAILS
    constructor() {
        this.instance = instance
        this.detail = '/details'
        this.#ROUTES_ENPOINT_DETAILS = {
            serevalCreate: `${this.detail}/several`,
            update: (id) => `${this.detail}/${id}`,
            delete: (id) => `${this.detail}/${id}`,
        }
    }

     async All() {
        const response = await this.instance.get(this.detail)
        return response.data
    }

    async CreateOne(data) {
        const response = await this.instance.post(this.detail, data)
        return response.data
    }

    async CreateMany(data) {
        const response = await this.instance.post(this.#ROUTES_ENPOINT_DETAILS.serevalCreate, data)
        return response.data
    }

    async UpdateOne(id, data) {
        try {
            const response = await this.instance.put(this.#ROUTES_ENPOINT_DETAILS.update(id), data)
            return response.data
        } catch (error) {
            console.log("UpdateOne",error);
            return new Error(400)
        }
    }

    async DeleteOne(id){
        const response = await this.instance.delete(this.#ROUTES_ENPOINT_DETAILS.delete(id))
        return response.data
    }
}

export default Detail