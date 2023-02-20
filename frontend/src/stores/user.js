import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: ()=> {
        return {
            user: null,
            // user: {
            //     user_id: 0,
            //     username: 'testuser',
            //     role: 0,
            //     first_name: 'Minh',
            //     last_name: 'Bui',
            //     email: 'testuser@gmail.com'
            // },
            isLogin: false
        }
    },
    getters: {
        getUser: (state) => state.user,
        isAdmin: (state) => state.user.role == 0 ? true : false,
        getLogin: (state) => state.isLogin
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
                const response = await axios.get(`/users?${'username='+username + '&password='+ password}`, {
                    username,
                    password
                })
                console.log(response);

                this.user = response.data[0]
                this.isLogin = true

                console.log(this);
                return response;

            } catch (error) {
                console.error(error);
                return false;
            }
        },
        async signUp(userdata) {
            try {
                const response = await axios.post('/users', {
                    id: Date.now(),
                    user_id: Date.now(),
                    ...userdata
                })
                this.user = response.data
                console.log(response);
                return response
            } catch (error) {
                console.error(error);
                return false

            }

        },
        signOut() {
            this.isLogin = false;
            this.user = null;
        }
    }

})