<template>
<div class="flex px-8 gap-8">
	<div v-if="getLogin" class="flex flex-col items-center w-60 h-full text-gray-700 bg-white px-7">
		<div class="fixed">
			<div class="profile_progress_wrap rounded-md grayBG px-4 py-5 shadow-md">
				<div class="avatar flex w-52 items-center gap-3 px-3">
					<img class="inline-block h-8 w-8 rounded-full ring-2 ring-white shadow-md" 
						:src="getUser.avatar" alt=""/>
					<div class="flex gap-1 relative">
						<!-- <img class="h-7 w-7 fire" src="../../assets/icons8-fire-48.png" alt=""> -->
						<!-- <p class="font-bold text-sm pt-1">
							<Transition appear @before-enter="beforeCounting" @enter="enterCounting">
								<span class="font-bold text-base"></span> 
							</Transition> 
							days
						</p> -->
						<!-- <Celebrate v-if="tweenedDone" class="absolute h-20 w-20 left-24 -top-3"></Celebrate> -->
						<p class="font-bold text-lg pt-1">
							{{ getUser.first_name }} {{ getUser.last_name }}
						</p>
					</div>
				</div>
				<div class="some_bar py-4 px-2">
					<!-- <ProgressBar key="1" name="English Cooking" progress="78" color="red"></ProgressBar>
					<ProgressBar key="2" name="2000 Basic Words" progress="33" color="green"></ProgressBar>
					<ProgressBar key="3" name="English Animal" progress="28" color="blue"></ProgressBar> -->

					<ProgressBar 
						v-for="(i,index) in getAllProgress.slice(0,3)" 
						key="4"
						:name="i.course.title"
						:progress="i.progress * 100"
                        :color="index%4"
                    ></ProgressBar>
				</div>
				<div class="px-2 justify-center text-center">
					<RouterLink to="/progress" class="font-bold text-md text-gray-800 hover:underline">My progress</RouterLink>
					<span class="font-black oswald"> > </span>
				</div>
			</div>
			<TripButton class="mt-5 mx-auto" @dragover.prevent @dragenter.prevent @drop="drop"></TripButton>			
		</div>

	</div>
	<div :class="['grayBG rounded-md pt-8 pb-8 flex justify-center', getLogin ? 'minWH' : 'w-full px-12']">
		<slot></slot>
	</div>
</div>
</template>

<style scoped>

.minWH {
	width: calc(100vw - 21.5rem);
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
import { mapState } from 'pinia';
import { useUserStore } from '../../stores/user';
import { useCourseCollectionStore } from '../../stores/course';



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
	computed: {
		...mapState(useUserStore, ['getLogin','getUser']),
		...mapState(useCourseCollectionStore, ['getCourse','getCourseCollection','getAllProgress']),
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
		const courseStore = useCourseCollectionStore();
		courseStore.getAllProgressAction().then(() => {

		})
	}
}

</script>

<!-- 					onComplete: ()=>{
						setTimeout(() => { 						
							this.tweenedDone = false
						}, 3000);					
					} 
-->