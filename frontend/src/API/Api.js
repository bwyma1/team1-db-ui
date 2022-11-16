import axios from "axios";

let development = true;

let local = "http://localhost"
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

export const getUsers = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/api/getUser/`)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export async function getAsyncUsers() {
    try {
        const response = await fetch(`${apiEndPoint}/users/`);
        if(!response.ok) {
            console.log("not ok");
        }
        return await response.json()
    } catch (error) {
        throw new Error(error.message || "Could not get users");
    }
}

export const loginUser = (userNmame, password) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/login`)
        .then(x => resolve(x))
        .catch(x => {
            reject(x);
        })
})

// getUserById(1)
//      .then(x => setAccount(x))



//David----------
// export const getImage = (imageid) => new Promise((resolve, reject) => {
//     axios.get(`${apiEndPoint}/image/`)
//         .then(x => resolve(x))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         })
// });


// export const getDescription = (imageid) => new Promise((resolve, reject) => {
//     axios.get(`${apiEndPoint}/image/`)
//         .then(x => resolve(x))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         })
// });

// export const getTime = (imageid) => new Promise((resolve, reject) => {
//     axios.get(`${apiEndPoint}/image/`)
//         .then(x => resolve(x))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         })
// });
// export const getbid = (imageid) => new Promise((resolve, reject) => {
//     axios.get(`${apiEndPoint}/image/`)
//         .then(x => resolve(x))
//         .catch(x => {
//             alert(x);
//             reject(x);
//         })
// });
// //-------