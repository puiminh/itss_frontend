<script>
import gsap from 'gsap';
import GameButton from '../button/GameButton.vue';

export default {
    props: {
        vertical: {
            default: false,
        },
		reviewComponent: {
			default: true,
		}
    },
    data() {
        return {
            flip: false,
            flipClass: ["", ""],
        };
    },
    computed: {
        flipClassComputed() {
            if (!this.vertical) {
                this.flipClass = ["frontFlip", "backFlip"];
            }
            else {
                this.flipClass = ["frontFlipvertical", "backFlipvertical"];
            }
            return this.flip ? this.flipClass : ["", ""];
        },
        styleCard() {
            return `background-color: white; color: black;`;
        }
    },
    methods: {
        flipCard() {
            this.flip = !this.flip;
            console.log("a");
        },
		showReviewMethod() {
			gsap.from('#review', {
					y: '500px',
					opacity: 0,
			}),
			gsap.to('#review', {
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: 'ease-in',
					delay: 0.2,
					display: 'flex'
			})
		},
		hideReviewMethod() {
			gsap.to('#review', {
					y: '500px',
					opacity: 0,
			})
		},
		beforeEnterSlideIn(ev) {
				gsap.from(ev, {
					y: '500px',
					opacity: 0,
				})
		},
		enterSlideIn(ev) {
				gsap.to(ev, {
					y: 0,
					opacity: 1,
					duration: 0.3,
					ease: 'ease-in',
					delay: 0.2
				})

		},
		leaveSlideIn(ev) {
			gsap.to(ev, {
				y: '500px',
				opacity: 0,
				duration: 0.3,
			})
		}

    },
	watch: {
		flip(value) {
			if (value) {
				this.showReviewMethod()
				 
			} else {
				this.hideReviewMethod()
			}
		}
	}
	,
    components: { GameButton }
}
</script>

<template>

	<div :class="['flip', vertical? ' flip-vertical': '']" v-on:click="flipCard">
		<div :class="['front shadow-md flex items-center justify-center', flipClassComputed[0]]" :style="styleCard">
			<div>
				<slot named="front">
					<h1 class="text-shadow">MOUNTAIN</h1>
				</slot>
			</div>
		</div>
		<div :class="['back shadow-md flex items-center justify-center', flipClassComputed[1]]">
			<div>
				<slot named="back">
					<h2>Angular</h2>
					<p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
				</slot>
			</div>
		</div>
		<div id="review" class="absolute bottom-5 justify-center w-full hidden" @click.stop>
			<!-- @before-enter="beforeEnterSlideIn" @enter="enterSlideIn" @leave="leaveSlideIn" -->
			<TransitionGroup v-if="reviewComponent==true" appear tag="div" class=" flex justify-center flex-col">
				<div key="1">
					<p class="text-lg font-semibold text-gray-500">
						How much do you remember this term?
					</p>
				</div>

				<div key="2" class="flex gap-5 justify-center">
					<GameButton class="!bg-red-500 !text-white">
						<i class="fa fa-frown-o" aria-hidden="true"></i>
						<p class="text-xs font-semibold">BAD</p> 
					</GameButton>
					<GameButton class="!bg-yellow-400 !text-white">
						<i class="fa fa-meh-o" aria-hidden="true"></i>
						<p class="text-xs font-semibold">NOT REALLY</p> 
					</GameButton>
					<GameButton class="!bg-green-400 !text-white">
						<i class="fa fa-smile-o" aria-hidden="true"></i>
						<p class="text-xs font-semibold">GOOD</p> 

					</GameButton>
				</div>
			</TransitionGroup>
		</div>	
	</div>



</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

body {
	 color: #555;
	 background: #222;
	 text-align: center;
	 font-family: 'Roboto Mono';
	 padding: 1em;
}
 h1 {
	 font-size: 2.2em;
}
 .flip {
	 position: relative;
	 width: 100%;
	 height: 100%;
}
 .flip > .front, .flip > .back {
	 display: flex;
	 transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
	 transition-duration: 0.5s;
	 transition-property: transform, opacity;
}
 .flip > .front {
	 transform: rotateY(0deg);
}
 .flip > .back {
	 position: absolute;
	 opacity: 0;
	 top: 0px;
	 left: 0px;
	 width: 100%!important;
	 height: 100%!important;
	 transform: rotateY(-180deg);
}

 .flip.flip-vertical > .back {
	 transform: rotateX(-180deg);
}


 .flip {
	 position: relative;
	 display: flex;
	 padding: 12px;
	 margin: 12px;
}
 .flip > .front, .flip > .back {
	 display: flex;
	 width: inherit;
	 height: inherit;
	 background-size: cover !important;
	 background-position: center !important;
	 border-radius: 10px;
	 background: white;
}

.frontFlip {
  transform: rotateY(180deg) !important;
  opacity: 0!important;
}

.backFlip {
   opacity: 1!important;
	transform: rotateY(0deg) !important;
}

.frontFlipvertical {
  transform: rotateX(180deg) !important;
}

.backFlipvertical {
   opacity: 1!important;
	 transform: rotateX(0deg) !important;
}


 
</style>
