<script>
export default {
   props: {
	vertical: {
		default: false,
	},
	width: {
		default: '400px'
	},
	height: {
		default: '220px'
	}
   },

   data() {
      return {
         flip: false, 
         flipClass: ["",""],
      }
   },

   computed: {
      flipClassComputed() {
         if (!this.vertical) {
         this.flipClass = ["frontFlip","backFlip"];
         } else {
            this.flipClass = ["frontFlipvertical", "backFlipvertical"];
         }
         return this.flip ? this.flipClass : ["",""];
      },
	  styleCard() {
		return `background-color: white; color: black; width: ${this.width}; height: ${this.height}`
	  }
   },

   methods: {
      flipCard() {
         this.flip = !this.flip;
         console.log("a");
      },
   }
}
</script>

<template>
<div :class="['flip', vertical? ' flip-vertical': '']" v-on:click="flipCard">
    <div :class="['front ', flipClassComputed[0]]" :style="styleCard">
       <h1 class="text-shadow">MOUNTAIN</h1>
    </div>
    <div :class="['back ', flipClassComputed[1]]">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');

* {
  box-sizing: border-box;
  font-weight: normal;
}

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
}
 .flip > .front, .flip > .back {
	 display: block;
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
	 display: inline-block;
	 margin-right: 2px;
	 margin-bottom: 1em;
}
 .flip > .front, .flip > .back {
	 display: block;
	 color: white;
	 width: inherit;
	 height: inherit;
	 background-size: cover !important;
	 background-position: center !important;
	 
	 padding: 1em 2em;
	 background: #313131;
	 border-radius: 10px;
}
 .flip > .front p, .flip > .back p {
	 font-size: 0.9125rem;
	 line-height: 160%;
	 color: #999;
}

.frontFlip {
  transform: rotateY(180deg) !important;
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
