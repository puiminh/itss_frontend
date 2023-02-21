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
        getLogin: (state) => {
            let savedUserinfo = JSON.parse(localStorage.getItem('userInfo')) 
            if (savedUserinfo) {
                console.log("localstorage",savedUserinfo);
                state.isLogin = true;
                state.user = savedUserinfo;
                return true
            } else {
                return state.isLogin
            }
        }
    },
    actions: {
        changeInfoUser(userinfo) {
            this.user = {
                ...this.user,
                ...userinfo, 
            }
        },
        async login(email, password) {
            try {
                //fake api
                const response = await axios.post(`/sessions`, {
                    email,
                    password
                })
                console.log(response);

                this.user = response.data.user
                this.isLogin = true

                this.saveUserInfo()
                console.log(response);
                return response;

            } catch (error) {
                console.error(error);
                return false;
            }
        },
        async signUp(userdata) {
            try {
                const response = await axios.post('/users', {
                    user: userdata
                })
                this.user = response.data.user
                this.isLogin = true

                this.saveUserInfo()
                console.log(response);
                return response
            } catch (error) {
                console.error(error);
                return false
            }
        },

        async update(user_id, userdata) {
            try {
                const response = await axios.put('/users/'+user_id, {
                    ...userdata
                })
                this.user = response.data.user
                this.isLogin = true

                this.saveUserInfo()
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
            console.log("remove localstorage: ");
            localStorage.removeItem("userInfo")
        },
        saveUserInfo() {
            console.log("save localstorage: ", this.user);
            localStorage.setItem("userInfo",JSON.stringify(this.user))
        }
    }

})