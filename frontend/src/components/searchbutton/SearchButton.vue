<template>
<div class="search">
  <input type="text" placeholder="search" />
  <div class="symbol">
    <svg class="cloud">
      <use xlink:href="#cloud" />
    </svg>
    <svg class="lens">
      <use xlink:href="#lens" />
    </svg>
  </div>
</div>
<!-- SVG -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" id="cloud">
    <path d="M31.714,25.543c3.335-2.17,4.27-6.612,2.084-9.922c-1.247-1.884-3.31-3.077-5.575-3.223h-0.021
	C27.148,6.68,21.624,2.89,15.862,3.931c-3.308,0.597-6.134,2.715-7.618,5.708c-4.763,0.2-8.46,4.194-8.257,8.919
	c0.202,4.726,4.227,8.392,8.991,8.192h4.873h13.934C27.784,26.751,30.252,26.54,31.714,25.543z" />
  </symbol>
  <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="lens">
    <path d="M15.656,13.692l-3.257-3.229c2.087-3.079,1.261-7.252-1.845-9.321c-3.106-2.068-7.315-1.25-9.402,1.83
	s-1.261,7.252,1.845,9.32c1.123,0.748,2.446,1.146,3.799,1.142c1.273-0.016,2.515-0.39,3.583-1.076l3.257,3.229
	c0.531,0.541,1.404,0.553,1.95,0.025c0.009-0.008,0.018-0.017,0.026-0.025C16.112,15.059,16.131,14.242,15.656,13.692z M2.845,6.631
	c0.023-2.188,1.832-3.942,4.039-3.918c2.206,0.024,3.976,1.816,3.951,4.004c-0.023,2.171-1.805,3.918-3.995,3.918
	C4.622,10.623,2.833,8.831,2.845,6.631L2.845,6.631z" />
  </symbol>
</svg>  
</template>

<style scoped>
.search {
	 --background: rgb(255, 255, 255);
	 --text-color: #000000;
	 --primary-color: #ffffff;
	 --border-radius: 10px;
	 --width: 190px;
	 --height: 55px;
     --fill-color: rgb(57, 57, 57);
	 background: var(--background);
	 width: auto;
	 height: var(--height);
	 position: relative;
	 overflow: hidden;
	 border-radius: var(--border-radius);
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .search input[type="text"] {
	 position: relative;
	 width: var(--height);
	 height: var(--height);
	 font: 400 16px 'Varela Round', sans-serif;
	 color: var(--text-color);
	 border: 0;
	 box-sizing: border-box;
	 outline: none;
	 padding: 0 0 0 40px;
	 transition: width 0.6s ease;
	 z-index: 10;
	 opacity: 0;
	 cursor: pointer;
}
 .search input[type="text"]:focus {
	 z-index: 0;
	 opacity: 1;
	 width: var(--width);
}
 .search input[type="text"]:focus ~ .symbol::before {
	 width: 0%;
}
 .search input[type="text"]:focus ~ .symbol:after {
	 clip-path: inset(0% 0% 0% 100%);
	 transition: clip-path 0.04s linear 0.105s;
}
 .search input[type="text"]:focus ~ .symbol .cloud {
	 top: -30px;
	 left: -30px;
	 transform: translate(0, 0);
	 transition: all 0.6s ease;
}
 .search input[type="text"]:focus ~ .symbol .lens {
	 top: 20px;
	 left: 15px;
	 transform: translate(0, 0);
	 fill: var(--fill-color);
	 transition: top 0.5s ease 0.1s, left 0.5s ease 0.1s, fill 0.3s ease;
}
 .search .symbol {
	 height: 100%;
	 width: 100%;
	 position: absolute;
	 top: 0;
	 z-index: 1;
	 display: flex;
	 justify-content: center;
	 align-items: center;
}
 .search .symbol:before {
	 content: "";
	 position: absolute;
	 right: 0;
	 width: 100%;
	 height: 100%;
	 background: var(--primary-color);
	 z-index: -1;
	 transition: width 0.6s ease;
}
 .search .symbol:after {
	 content: "";
	 position: absolute;
	 top: 21px;
	 left: 21px;
	 width: 20px;
	 height: 20px;
	 border-radius: 50%;
	 background: var(--primary-color);
	 z-index: 1;
	 clip-path: inset(0% 0% 0% 0%);
	 transition: clip-path 0.04s linear 0.225s;
}
 .search .symbol .cloud, .search .symbol .lens {
	 position: absolute;
	 fill: var(--fill-color);
	 stroke: none;
	 top: 50%;
	 left: 50%;
}
 .search .symbol .cloud {
	 width: 35px;
	 height: 32px;
	 transform: translate(-50%, -60%);
	 transition: all 0.6s ease;
}
 .search .symbol .lens {
	 fill: var(--fill-color);
	 width: 16px;
	 height: 16px;
	 z-index: 2;
	 top: 24px;
	 left: 24px;
	 transition: top 0.3s ease, left 0.3s ease, fill 0.2s ease 0.2s;
}


</style>