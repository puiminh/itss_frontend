<script setup>
import { onMounted } from 'vue';

onMounted(()=>{
    let flashCards = document.getElementsByClassName("flip"); for (let card of flashCards) {
        card.addEventListener("click", function () {
        // card.getElementsByClassName("front")[0].style.transform = "rotateY(180deg)"; 
        card.querySelector(".front").classList.toggle("frontHover");
        card.querySelector(".back").classList.toggle("frontHover");
        })    
        console.log(card);
    }
});
</script>

<template>
 <!-- horizontal -->

<h4>Horizontal Flip</h4>
<div class="flip">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">MOUNTAIN</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">LAKE</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">OCEAN</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>

<br>
<br>

<!-- vertical -->
  
<h4>Vertical Flip</h4>
<div class="flip flip-vertical">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/38136/pexels-photo-38136.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">FOREST</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip flip-vertical">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/34950/pexels-photo.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">TRACK</h1>
    </div>
    <div class="back">
       <h2>Angular</h2>
       <p>Good tools make application development quicker and easier to maintain than if you did everything by hand..</p>
    </div>
</div>
<div class="flip flip-vertical">
    <div class="front" style="background-image: url(https://images.pexels.com/photos/34546/sunset-lake-landscape-summer.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb)">
       <h1 class="text-shadow">SWAMP</h1>
    </div>
    <div class="back">
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
	 width: 100%;
	 height: 100%;
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
	 width: 400px;
}
 .flip > .front, .flip > .back {
	 display: block;
	 color: white;
	 width: inherit;
	 background-size: cover !important;
	 background-position: center !important;
	 height: 220px;
	 padding: 1em 2em;
	 background: #313131;
	 border-radius: 10px;
}
 .flip > .front p, .flip > .back p {
	 font-size: 0.9125rem;
	 line-height: 160%;
	 color: #999;
}

.frontHover {
  transform: rotateY(180deg) !important;
}

.backHover {
   opacity: 1;
	 transform: rotateY(0deg) !important;
}
 
</style>
