<template>
<div class="flex">
	<div class="fixed flex flex-col items-center w-60 h-full overflow-hidden text-gray-700 bg-white mx-7">
		<div class="profile_progress_wrap rounded-3xl grayBG px-4 py-4">
			<div class="avatar flex w-52 items-center gap-5 px-2">
				<img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
				<div class="flex gap-1 relative">
					<img class="h-7 w-7 fire" src="../../assets/icons8-fire-48.png" alt="">
					<p class="font-semibold text-sm pt-1">
						<Transition appear @before-enter="beforeCounting" @enter="enterCounting">
							<span class="font-semibold text-base"></span> 
						</Transition> 
				        days
					</p>
					<!-- <Celebrate v-if="tweenedDone" class="absolute h-20 w-20 left-24 -top-3"></Celebrate> -->
				</div>
			</div>
			<div class="some_bar py-4">
				<ProgressBar key="1" name="English Cooking" progress="78" color="red"></ProgressBar>
				<ProgressBar key="2" name="2000 Basic Words" progress="33" color="green"></ProgressBar>
				<ProgressBar key="3" name="English Animal" progress="28" color="blue"></ProgressBar>
			</div>
			<div class="px-2 justify-center text-center">
				<span class="font-bold text-md text-gray-800">My progress</span>
				<span class="font-black oswald"> > </span>
			</div>
		</div>
		<div class="w-full">
			<div class="flex flex-row items-center justify-between  w-full mt-3 grayBG px-6 py-4 rounded-2xl"  @dragover.prevent @dragenter.prevent @drop="drop">
				
				<RouterLink to="/bookmark">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="0 0 496 496" xml:space="preserve">
						<path style="fill:#0EE0B8;" d="M404,0H92C78.4,0,64,12.8,64,26.4v320L222.4,496H404c13.6,0,28-12.8,28-26.4V26.4  C432,12.8,417.6,0,404,0z"/>
						<path style="fill:#FFD400;" d="M404,0H92C78.4,0,64,12.8,64,26.4v320L222.4,496H404c13.6,0,28-12.8,28-26.4V26.4  C432,12.8,417.6,0,404,0z"/>
						<path style="fill:#FFC200;" d="M432,384V26.4C432,12.8,417.6,0,404,0H92C78.4,0,66.4,11.2,66.4,24"/>
						<path style="fill:#FFB000;" d="M432,384V26.4C432,12.8,417.6,0,404,0H208"/>
						<path style="fill:#FFC200;" d="M200,352v119.2c0,1.6,1.6,3.2,1.6,4.8l19.2,18.4c1.6,0,3.2,1.6,4.8,1.6h125.6l-148-144H200z"/>
						<path style="fill:#FFB000;" d="M200,351.2v120c0,1.6,1.6,3.2,1.6,4.8l19.2,18.4c1.6,0,3.2,1.6,4.8,1.6h64l-72.8-120.8L200,351.2z"/>
						<path style="fill:#FFFFFF;" d="M222.4,496h1.6V370.4c0-13.6-12-26.4-25.6-26.4L64,345.6L222.4,496z"/>
						<polyline style="fill:#FFF7D7;" points="64,345.6 222.4,496 224,496 224,368 "/>
						<path style="fill:#F9E385;" d="M80,345.6L80,345.6V26.4C80,12.8,89.6,0,102.4,0H92C78.4,0,64,12.8,64,26.4v320L80,345.6L80,345.6z"/>
						<path style="fill:#FFB000;" d="M342.4,204.8c-1.6-4-4.8-7.2-9.6-8l-44.8-6.4l-20-40.8c-1.6-4-5.6-6.4-10.4-6.4  c-4,0-8.8,2.4-10.4,6.4l-20,40.8l-44.8,6.4c-4,0.8-8,4-9.6,8s0,8.8,3.2,12l32.8,32l-8,44.8c-0.8,4,0.8,8.8,4.8,11.2  c3.2,2.4,8,3.2,12,0.8l40-20.8l40,20.8c1.6,0.8,3.2,1.6,5.6,1.6s4.8-0.8,6.4-2.4c3.2-2.4,5.6-7.2,4.8-11.2l-8-44.8l32.8-32  C342.4,213.6,344,208.8,342.4,204.8z"/>
						<path style="fill:#FFFFFF;" d="M332.8,189.6c-1.6-4-4.8-7.2-9.6-8l-44.8-6.4l-20-40.8c-2.4-4-6.4-6.4-10.4-6.4s-8,2.4-10.4,6.4  l-20,40.8l-44.8,6.4c-4,0.8-8,4-9.6,8s0,8.8,3.2,12l32.8,32l-8,44.8c-0.8,4,0.8,8.8,4.8,11.2c3.2,2.4,8,3.2,12,0.8l40-20.8l40,20.8  c1.6,0.8,3.2,1.6,5.6,1.6s4.8-0.8,6.4-2.4c3.2-2.4,5.6-7.2,4.8-11.2l-8-44.8l32.8-32C332.8,198.4,334.4,193.6,332.8,189.6z"/>
					</svg>					
				</RouterLink>
				<RouterLink to="/user/me">
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="30px" width="30px" version="1.1" id="Layer_1" viewBox="0 0 512 512" xml:space="preserve" fill="#000000">

					<g id="SVGRepo_bgCarrier" stroke-width="0"/>

					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

					<g id="SVGRepo_iconCarrier"> <path style="fill:#FFB74A;" d="M256.001,283.145c-116.3,0-212.338,86.751-226.935,199.072c-0.979,7.532,1.336,15.119,6.352,20.822 c5.016,5.703,12.246,8.96,19.841,8.96h401.485c7.589,0,14.807-3.271,19.819-8.969c5.012-5.699,7.352-13.287,6.374-20.813 C468.339,369.896,372.301,283.145,256.001,283.145z"/> <path style="fill:#FFC56E;" d="M256,283.146c-116.299,0-212.337,86.751-226.934,199.072c-0.979,7.532,1.336,15.119,6.352,20.821 c5.016,5.703,12.246,8.96,19.841,8.96H256V283.146z"/> <path style="fill:#FFDBAC;" d="M364.161,310.313c-32.213-17.312-69.029-27.167-108.16-27.167s-75.947,9.856-108.16,27.167 c25.411,37.761,64.406,61.96,108.16,61.96C299.755,372.273,338.751,348.074,364.161,310.313z"/> <ellipse style="fill:#FFDBAC;" cx="256" cy="165.379" rx="138.644" ry="165.379"/> <path style="fill:#FFEED9;" d="M256,0c-76.573,0-138.648,74.042-138.648,165.377S179.426,330.754,256,330.754V0z"/> <path style="fill:#FFDBAC;" d="M316.549,252.575H195.451v-31.237c0-10.366,8.403-18.771,18.771-18.771h83.558 c10.366,0,18.771,8.403,18.771,18.771v31.237H316.549z"/> <path style="fill:#FFEED9;" d="M256,202.569h-41.778c-10.366,0-18.771,8.403-18.771,18.769v31.237H256V202.569z"/> </g>

					</svg>	
				</RouterLink>
				<RouterLink to="/manager">
					<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 -3.5 32 32" fill="none">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M2.90909 0H11.2834C12.4407 0 13.5506 0.459739 14.369 1.27808L14.7219 1.63101C15.5402 2.44935 16.6502 2.90909 17.8074 2.90909H23.2727C24.0761 2.90909 24.7617 3.1931 25.3297 3.76115C25.8977 4.32918 26.1818 5.01487 26.1818 5.81818V21.8182C26.1818 22.6215 25.8977 23.3072 25.3297 23.8752C24.7617 24.4432 24.0761 24.7273 23.2727 24.7273H2.90909C2.10576 24.7273 1.42009 24.4432 0.852052 23.8752C0.284017 23.3072 0 22.6215 0 21.8182V2.90909C0 2.10576 0.284017 1.42009 0.852052 0.852052C1.42009 0.284017 2.10576 0 2.90909 0Z" fill="url(#paint0_linear_103_1791)"/>
					<path fill-rule="evenodd" clip-rule="evenodd" d="M5.81818 21.8182V8.72727C5.81818 7.92395 6.1022 7.23827 6.67024 6.67023C7.23827 6.1022 7.92395 5.81818 8.72727 5.81818H29.0909C29.8942 5.81818 30.5799 6.1022 31.1479 6.67023C31.716 7.23827 32 7.92395 32 8.72727V21.8182C32 22.6215 31.716 23.3072 31.1479 23.8752C30.5799 24.4432 29.8942 24.7273 29.0909 24.7273H2.90909C3.71241 24.7273 4.3981 24.4432 4.96612 23.8752C5.53417 23.3072 5.81818 22.6215 5.81818 21.8182Z" fill="url(#paint1_linear_103_1791)"/>
					<defs>
					<linearGradient id="paint0_linear_103_1791" x1="16" y1="0" x2="16" y2="16.3543" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FBA200"/>
					<stop offset="1" stop-color="#FF7300"/>
					</linearGradient>
					<linearGradient id="paint1_linear_103_1791" x1="17.4545" y1="5.81818" x2="17.4545" y2="24.7273" gradientUnits="userSpaceOnUse">
					<stop stop-color="#FAC227"/>
					<stop offset="1" stop-color="#FAA627"/>
					</linearGradient>
					</defs>
					</svg>	
				</RouterLink>

</div>
		</div>
	</div>
  <div class="grayBG rounded-tl-3xl minWH" style="margin-left: 300px">
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

export default {
	components: {
		ProgressBar,
		Celebrate
	},
	data() {
		return {
		}
	},
	methods: {
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
        }
	}
}

</script>

<!-- 					onComplete: ()=>{
						setTimeout(() => { 						
							this.tweenedDone = false
						}, 3000);					
					} 
-->