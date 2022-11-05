import axios from "axios";

let development = true;

let local = "localhost"
let server = "ec2-3-17-29-116.us-east-2.compute.amazonaws.com"
let apiEndPoint = (development ? local : server) + ":8000";
const apiConfig = {
    headers: {
        Authorization: 'someName'
    }
};

export const getUserById = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/user/${id}`, apiConfig)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const getUsers = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/user/`)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const loginUser = (userNmame, password) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/login`)
        .then(x => resolve(x))
        .catch(x => {
            reject(x);
        })
})

// getUserById(1)
//      .then(x => setAccount(x))