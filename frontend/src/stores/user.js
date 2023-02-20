import axios from "axios";
import { defineStore } from "pinia";

export const userStore = defineStore('user', {
    state: ()=> {
        return {
            user: {
                user_id: 0,
                username: 'testuser',
                role: 0,
                first_name: 'Minh',
                last_name: 'Bui',
                email: 'testuser@gmail.com'
            },
            isLogin: false
        }
    },
    getters: {
        getUser: (state) => state.user,
        isAdmin: (state) => state.user.role == 0 ? true : false,
    },
    actions: {
        changeInfoUser(userinfo) {
            this.user = {
                ...this.user,
                ...userinfo, 
            }
        },
        async login(username, password) {
            try {
                //fake api
                this.user = await axios.get(`/users?${'username='+username + '&password='+ password}`, {
                    username,
                    password
                })
            } catch (error) {
                console.log(error);
            }
        }
    }

})