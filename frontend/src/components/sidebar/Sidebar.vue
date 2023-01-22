<template>
<div class="flex">
	<div class="flex flex-col items-center w-60 h-full overflow-hidden text-gray-700 bg-white mx-7">
		<div class="fixed">
			<div class="profile_progress_wrap rounded-3xl grayBG px-4 py-5 shadow-sm">
				<div class="avatar flex w-52 items-center gap-3 px-3">
					<img class="inline-block h-8 w-8 rounded-full ring-2 ring-white shadow-md" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
					<div class="flex gap-1 relative">
						<img class="h-7 w-7 fire" src="../../assets/icons8-fire-48.png" alt="">
						<p class="font-bold text-sm pt-1">
							<Transition appear @before-enter="beforeCounting" @enter="enterCounting">
								<span class="font-bold text-base"></span> 
							</Transition> 
							days
						</p>
						<!-- <Celebrate v-if="tweenedDone" class="absolute h-20 w-20 left-24 -top-3"></Celebrate> -->
					</div>
				</div>
				<div class="some_bar py-4 px-2">
					<ProgressBar key="1" name="English Cooking" progress="78" color="red"></ProgressBar>
					<ProgressBar key="2" name="2000 Basic Words" progress="33" color="green"></ProgressBar>
					<ProgressBar key="3" name="English Animal" progress="28" color="blue"></ProgressBar>
				</div>
				<div class="px-2 justify-center text-center">
					<span class="font-bold text-md text-gray-800">My progress</span>
					<span class="font-black oswald"> > </span>
				</div>
			</div>
			<TripButton class="mt-5 mx-auto" @dragover.prevent @dragenter.prevent @drop="drop"></TripButton>			
		</div>

	</div>
	<div class="grayBG rounded-tl-3xl minWH shadow-md">
		<slot></slot>
	</div>
</div>
</template>

<style scoped>

.minWH {
	width: calc(100vw - 300px);
	min-height: calc(100vh - 100px);
}


</style>

<script>
import gsap from 'gsap';
import ProgressBar from '../progress/ProgressBar.vue';
import Celebrate from '../celebrate/Celebrate.vue'
import BookmarkButton from '../button/BookmarkButton.vue';
import TripButton from '../button/TripButton.vue';
import { useToast } from "vue-toastification";
import {openModal} from "jenesius-vue-modal";


export default {
	components: {
    ProgressBar,
    Celebrate,
    BookmarkButton,
	TripButton
},
	data() {
		const toast = useToast()
		return {
			toast,
		}
	},
	methods: {

		openModalMethod() {
			openModal(TripButton)
		}
		,
		beforeCounting(el) {
            el.innerText = '0';
        },
        enterCounting(el, done) {
            gsap.to(el, 
            { 
              innerText: 30, 
              duration: 2,
              delay: 0.5,
              snap: {
                    innerText:1
              }, 
			  onComplete: ()=>{ //make the firepop
				gsap.to(".fire", {
					duration: 0.3,
					scale: 1.4,
					ease: "ease-in"
				});
				gsap.to(".fire", {
					duration: 0.2,
					scale: 1,
					ease: "ease-out",
					delay: 0.3,
				});

			  }
            });
        },
        drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("id");
            console.log(ev.dataTransfer, data);
			this.toast.success("My toast content", {
				timeout: 2000
			});
        }
	}, 
	mounted() {
	}
}

</script>

<!-- 					onComplete: ()=>{
						setTimeout(() => { 						
							this.tweenedDone = false
						}, 3000);					
					} 
-->