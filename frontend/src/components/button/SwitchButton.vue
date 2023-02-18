<template>
    <div>
        <input type="radio" id="course_switch" name="option" class="hidden" @change="onChange($event)" value="course"/>
        <input type="radio" id="collection_switch" name="option" class="hidden" @change="onChange($event)" value="collection"/>
        <div>
        </div>
        <div>
            <label for="course_switch">
                <svg class="" width="16px" height="16px" viewBox="0 -3 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" fill="white" fill-opacity="0.01"/>
                        <path d="M28 12V4L8 14V42L20 36" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                        <path d="M20 16L40 6V34L20 44V16Z" fill="#2F88FF" stroke="#000000" stroke-width="4" stroke-linejoin="round"/>
                </svg>
            </label>
            <label for="collection_switch">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="16px" width="16px" version="1.1" id="Layer_1" viewBox="0 0 309.267 309.267" xml:space="preserve">
                        <g>
                            <path style="fill:#D0994B;" d="M260.944,43.491H125.64c0,0-18.324-28.994-28.994-28.994H48.323c-10.67,0-19.329,8.65-19.329,19.329   v222.286c0,10.67,8.659,19.329,19.329,19.329h212.621c10.67,0,19.329-8.659,19.329-19.329V62.82   C280.273,52.15,271.614,43.491,260.944,43.491z"/>
                            <path style="fill:#E4E7E7;" d="M28.994,72.484h251.279v77.317H28.994V72.484z"/>
                            <path style="fill:#F4B459;" d="M19.329,91.814h270.609c10.67,0,19.329,8.65,19.329,19.329l-19.329,164.298   c0,10.67-8.659,19.329-19.329,19.329H38.658c-10.67,0-19.329-8.659-19.329-19.329L0,111.143C0,100.463,8.659,91.814,19.329,91.814z   "/>
                        </g>
                </svg>
            </label>
        </div>
    </div>
</template>

<script>

export default {
    props: {

    },
    emits: ["handleSwitch"],
    data() {
        return {

        }
    },
    methods: {
        onChange(ev) {
            console.log(ev.target.value);
            this.$emit('handleSwitch',ev.target.value)
        },
    }
}
</script>

<style scoped>
 body input + div + div {
	 width: fit-content;
	 margin-top: 10px;
    user-select: none;

}
 body input + div + div label {
	 display: block;
	 padding: 10px 10px;
	 text-align: center;
	 transition: all 0.15s ease-in-out;
	 background: #fff;
	 border-radius: 10px;
	 box-sizing: border-box;
	 width: 48%;
	 font-size: 64px;
	 cursor: pointer;
}
 body input + div + div label:first-child {
	 float: left;
	 box-shadow: inset 0 0 0 4px #1597ff;
}
 body input + div + div label:last-child {
	 float: right;
}
 body input#course_switch:checked ~ div + div label:first-child {
	 box-shadow: inset 0 0 0 4px #1597ff;
}
 body input#course_switch:checked ~ div + div label:last-child {
	 box-shadow: inset 0 0 0 0px #1597ff;
}
 body input#collection_switch:checked ~ div + div label:first-child {
	 box-shadow: inset 0 0 0 0px #1597ff;
}
 body input#collection_switch:checked ~ div + div label:last-child {
	 box-shadow: inset 0 0 0 4px #1597ff;
}
 
</style>