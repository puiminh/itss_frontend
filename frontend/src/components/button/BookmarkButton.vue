<template>

<div class="anim-icon anim-icon-sm bookmark">
    <input type="checkbox" id="bookmark2" />
    <label for="bookmark2"></label>
</div>
</template>

<style scoped>

.bookmark label {
	 box-shadow: 0px 0px 0px 0px rgba(13,165,142,0.5);
}
 .bookmark label:after {
	 content: '\f02e';
}
 .bookmark input:checked + label {
	 background-color: #0da58e;
	 border-color: #0da58e;
	 box-shadow: 0px 0px 0px .5em rgba(13,165,142,0);
}
 .bookmark input:checked + label:after {
	 color: #0da58e;
}
 .anim-icon {
	 width: 1.9em;
	 height: 1.9em;
	 font-size: 13px;
	 display: inline-block;
	 position: relative;
	 vertical-align: middle;
}
 .anim-icon input {
	 display: none;
}
 .anim-icon label {
	 position: absolute;
	 left: 0;
	 top: 0;
	 width: 100%;
	 height: 100%;
	 border: .1em solid #ccc;
	 border-radius: 100%;
	 display: block;
	 font: normal normal normal 13px/1 FontAwesome;
	 color: #ccc;
	 font-size: inherit;
	 text-rendering: auto;
	 -webkit-font-smoothing: antialiased;
}
 .anim-icon label:after {
	 left: 0;
	 top: 50%;
	 margin-top: -0.5em;
	 display: block;
	 position: relative;
	 text-align: center;
}
 .anim-icon input:checked + label {
	 animation: check-in .3s forwards;
	 transition: background-color .1s .2s, box-shadow 1s;
	 border-width: .1em;
	 border-style: solid;
}
 .anim-icon input:checked + label:after {
	 animation: icon .3s forwards;
}
 .anim-icon-md {
	 font-size: 20px;
}
 .anim-icon-lg {
	 font-size: 30px;
}
 @keyframes icon {
	 0% {
		 margin-top: -0.5em;
		 font-size: 1.5em;
	}
	 100% {
		 font-size: 1em;
		 opacity: 1;
		 color: white;
	}
}
 @keyframes check-in {
	 0% {
		 left: 20%;
		 top: 20%;
		 width: 60%;
		 height: 60%;
	}
	 80% {
		 left: -5%;
		 top: -5%;
		 width: 110%;
		 height: 110%;
	}
	 100% {
		 left: 0;
		 top: 0;
		 width: 100%;
		 height: 100%;
	}
}
 @keyframes check {
	 0% {
		 left: 5%;
		 top: 5%;
		 width: 90%;
		 height: 90%;
	}
	 10% {
		 left: 0;
		 top: 0;
		 width: 100%;
		 height: 100%;
	}
	 80% {
		 left: -5%;
		 top: -5%;
		 width: 110%;
		 height: 110%;
	}
	 90% {
		 left: 5%;
		 top: 5%;
		 width: 90%;
		 height: 90%;
	}
	 100% {
		 left: 0;
		 top: 0;
		 width: 100%;
		 height: 100%;
	}
}
 
</style>

<script>

export default {
    mounted() {
function demo() {
  /***
    Add your demo script here...
    In this demo, click my button after 1000 milliseconds 
    You have approx three seconds to show off your stuff.
  ***/

  demointerval = setInterval(function() {
    var chkbox = document.querySelector('input[type="checkbox"]:not([checked])');
    if (chkbox) {
      chkbox.click();
      chkbox.setAttribute('checked', 'checked');
    } else {
      clearInterval(demointerval);
    }
  }, 600);
}
// Run demo if in searchresult preview frame
// https://codepen.io/jesperkc/post/trigger-animation-in-preview-frame
if (document.location.pathname.indexOf('fullcpgrid') > -1) {
  demo();
}
    }
}

</script>