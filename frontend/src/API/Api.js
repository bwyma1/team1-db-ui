import axios from "axios";
import { user } from "../Models";

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
    axios.get(`${apiEndPoint}/users/`)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const getAuctions = () => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/auctions/`)
    .then (x => resolve(x.data))
    .catch(x =>{
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

export async function getAsyncAuctions() {
    try {
        const response = await fetch(`${apiEndPoint}/auctions/`);
        if(!response.ok) {
            console.log("not ok");
        }
        return await response.json()
    } catch (error) {
        throw new Error(error.message || "Could not get users");
    }
}

export const addAuction = (auction) => new Promise((resolve, reject) => {
    axios.post(`${apiEndPoint}/auctions/`, auction)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const addUser = (user) => new Promise((resolve, reject) => {
    axios.post(`${apiEndPoint}/users/`, user)
        .then(x => resolve(x))
        .catch(x => {
            console.log("failed promise")
            alert(x);
            reject(x);
        })
});

export const loginUser2 = (userName, password) => new Promise((resolve, reject) => {
    axios.post(`${apiEndPoint}/login/`, { Email: userName, Password: password } )
        .then(x => resolve(x.data.info[0]))
        .catch(x => {
            reject(x);
            console.log("failed to login")
            return false;
        })
})

export const loginUser = async (userName, password) => {
    try {
        const resp = await axios.post(`${apiEndPoint}/login/`, { Email: userName, Password: password } );
        // console.log(resp.data.info[0]);
        //let ret = new user(resp.data.info[0].Email, resp.data.info[0].DisplayName, resp.data.info[0].Bio, resp.data.info[0].ProfilePicture, resp.data.info[0].Tags, resp.data.info[0].Password);
        return await resp.data.info[0];
    } catch (err) {
        // Handle Error Here
        console.error("async didnt work");
        return null;
    }
};

// getUserById(1)
//      .then(x => setAccount(x))


//David------------
export const updateAuctionbyId = (id, auction) => new Promise((resolve, reject) => {
    axios.put(`${apiEndPoint}/auctions/${id}`, auction, apiConfig)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const getAuctionbyId = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/auctions/${id}`)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const getCommentbyId = (id) => new Promise((resolve, reject) => {
    axios.get(`${apiEndPoint}/comments/${id}`)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

export const postCommentbyId = (comment) => new Promise((resolve, reject) => {
    axios.post(`${apiEndPoint}/comments/`, comment, apiConfig)
        .then(x => resolve(x))
        .catch(x => {
            alert(x);
            reject(x);
        })
});

//David-------------