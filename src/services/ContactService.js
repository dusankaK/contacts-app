import axios from 'axios'

export default class ContactService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
        axios.defaults.headers.common = {'Authorization': `Bearer ${localStorage.getItem('token')}`}
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

    login(credentials) {
        return axios.post('login', credentials)
    }
}

export const contactservice = new ContactService(); 
