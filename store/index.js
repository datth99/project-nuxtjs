import axios from "axios"

export const state = () => ({
    users: []
})

export const getters = {

}

export const actions = {
    // list User
    async getUsers({ commit }) {
        try {
            const users = await axios.get("http://localhost:3000/users");
            commit('SET_USERS', users.data);
        } catch (error) {
            console.log(error)
        }
    },
    // add User
    async addUser({ commit }, newUser) {
        try {
            await axios.post('http://localhost:3000/users/', newUser)
            commit('ADD_USER', newUser)
        } catch (error) {
            console.log(error)
        }
    },
    // delete User 
    async deleteUser({ commit }, idUser) {
        try {
            await axios.delete(`http://localhost:3000/users/${idUser}`)
            commit('DELETE_USER', idUser)
        } catch (error) {
            console.log(error)
        }
    }
}

export const mutations = {
    SET_USERS(state, users) {
        state.users = users
    },
    ADD_USER(state, newUser) {
        state.users.unshift(newUser)
    },
    DELETE_USER(state, idUser) {
        state.users = state.users.filter(user => user.id !== idUser)
    }
}