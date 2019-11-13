import axios from 'axios'

var data

axios.get('http://localhost:3000/api/daftarRequest')
         .then(response => (this.data = response))

export const state = () => ({
    all: data    
})