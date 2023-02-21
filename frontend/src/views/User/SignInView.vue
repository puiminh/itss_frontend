

<template>
	<div class="flex justify-center items-center relative">
		<div :class="[isSignUp ? 'right-panel-active' : ''] + ' container'" id="container">
	<div :class="' form-container sign-up-container'">
		<form @submit.prevent	="signUpMethod">
			<h1 class="">Create Account</h1>
			<!-- <input v-model="userdata.username" type="text" placeholder="Username" required/> -->
			<input v-model="userdata.email" type="email" placeholder="Email" required/>
			<input v-model="userdata.password" type="password" placeholder="Password" required/>
			<input v-model="userdata.password_confirmation" type="password" placeholder="Password Confirm" required/>
			<input v-model="userdata.first_name" type="text" placeholder="First Name" required/>
			<input v-model="userdata.last_name" type="text" placeholder="Last Name" required/>
            <!-- <Datepicker class="mt-1" v-model="birthday" :enable-time-picker="false"/> -->
			<button type="submit" class="mt-4">Sign Up</button>

			<p ref="signupnotfound" class="mt-2 !text-sm text-red-600 dark:text-red-500 !font-normal hidden">
				<span class="!font-medium">
					Error!
				</span > Something went wrong...
			</p>
		</form>
	</div>
	<div class="form-container sign-in-container">
		<form @submit.prevent="signInMethod">
			<h1>Sign in</h1>
			<div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
				<a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
			</div>
			<span>or use your account</span>
			<input type="email" placeholder="Email" v-model="userdata.email" required/>
			<input type="password" placeholder="Password" v-model="userdata.password"  required/>
			<a href="#">Forgot your password?</a>
			<button type="submit">Sign In</button>


			<p ref="loginnotfound" class="mt-2 !text-sm text-red-600 dark:text-red-500 !font-normal hidden">
				<span class="!font-medium">
					Error!
				</span> Check your input.
			</p>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button @click="switchForm" class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button @click="switchForm" class="ghost" id="signUp">Sign Up</button>
			</div>
		</div>
	</div>
		</div>
	</div>

</template>


<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import axios from 'axios';
import { mapActions } from 'pinia';
import { useUserStore } from '../../stores/user';
import { openModal, closeModal } from 'jenesius-vue-modal';

export default {
	data() {
		return {
			isSignUp: false,
			userdata: {
				username: '',
				password: '',
				password_confirmation: '',
				first_name: '',
				last_name: '',
				email: ''
			}

		}
	},
	methods: {
		...mapActions(useUserStore, ['signUp', 'login']),
		switchForm() {
			this.isSignUp = !this.isSignUp
		},
		async signInMethod() {
			// console.log(this);
			const response = await this.login(this.userdata.email, this.userdata.password)

			console.log("res from signin view", response);

			if (response) {
				closeModal();
				this.$router.push('/')
			} else {
				this.$refs.loginnotfound.classList.remove('hidden');
				setTimeout(() => {
					this.$refs.loginnotfound.classList.add('hidden');		
				}, 2000);
			}
			// console.log(response);

		}, 
		async signUpMethod() {
			// console.log(this);
			const response = await this.signUp(this.userdata);
			console.log("res from signin view", response);

			if (response) {
				closeModal();
				this.$router.push('/')
			} else {
				this.$refs.signupnotfound.classList.remove('hidden');
				setTimeout(() => {
					this.$refs.signupnotfound.classList.add('hidden');		
				}, 2000);
			}
			// console.log(response);
		}
	}
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');


.dp__theme_light {
    --dp-background-color: #eee;
}

* {
	box-sizing: border-box;
}


h1 {
	font-weight: bold;
	margin: 0;
}

h2 {
	text-align: center;
}

p {
	font-weight: 100;
	line-height: 20px;
	letter-spacing: 0.5px;
	margin: 20px 0 30px;
}

span {
	font-size: 12px;
}

a {
	color: #333;
	font-size: 14px;
	text-decoration: none;
	margin: 15px 0;
}

button {
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
}

button:active {
	transform: scale(0.95);
}

button:focus {
	outline: none;
}

button.ghost {
	background-color: transparent;
	border-color: #FFFFFF;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
}

input {
	background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

.dp__main {
    width: 100%;
}

.container {
	background-color: #fff;
	border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
    margin: 0 auto;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
}

.sign-in-container {
	left: 0;
	width: 50%;
	z-index: 2;
}

.container.right-panel-active .sign-in-container {
	transform: translateX(100%);
}

.sign-up-container {
	left: 0;
	width: 50%;
	opacity: 0;
	z-index: 1;
}

.container.right-panel-active .sign-up-container {
	transform: translateX(100%);
	opacity: 1;
	z-index: 5;
	animation: show 0.6s;
}

@keyframes show {
	0%, 49.99% {
		opacity: 0;
		z-index: 1;
	}
	
	50%, 100% {
		opacity: 1;
		z-index: 5;
	}
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.container.right-panel-active .overlay-container{
	transform: translateX(-100%);
}

.overlay {
	background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  	transform: translateX(50%);
}

.overlay-panel {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;
}

.overlay-left {
	transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
	transform: translateX(0);
}

.overlay-right {
	right: 0;
	transform: translateX(0);
}

.container.right-panel-active .overlay-right {
	transform: translateX(20%);
}

.social-container {
	margin: 20px 0;
}

.social-container a {
	border: 1px solid #DDDDDD;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
}

</style>