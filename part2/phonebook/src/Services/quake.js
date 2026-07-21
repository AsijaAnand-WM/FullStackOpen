import axios from 'axios'
const URL = 'http://localhost:3001/persons'

const afetchd = () => (
    axios
        .get(URL)
        .then(res => res.data)
)

const apostd = (name, number) => (
    axios
        .post(URL, {
            name,
            number
        })
        .then(res => res.data)
)

const adeld = (id) => (
    axios
        .delete(`${URL}/${id}`)
)

export default { afetchd, apostd, adeld }
