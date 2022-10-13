const axios = require('axios');
 
export function signup (nameValue, emailValue, passwordValue, addressValue, zipcodeValue) {
    return axios.post('http://localhost:8080/api/user', JSON.stringify(
        {
            "name": nameValue,
            "email": emailValue,
            "password": passwordValue,
            "address": addressValue,
            "zip_code": zipcodeValue
        }
    ))
}
