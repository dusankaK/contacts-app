import axios from 'axios'

export default class ContactService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getAll() {
        return axios.get('contacts')
    }

    addContact(contact) {
        return axios.post('contacts', contact)
    }

    get(id) {
        return axios.get(`contacts/${id}`)
    }

    delete(id) {
        return axios.delete(`contacts/${id}`)
    }

    edit(contact) {
        return axios.put(`contacts/${contact.id}`, contact)
    }
}

export const contactservice = new ContactService(); 
