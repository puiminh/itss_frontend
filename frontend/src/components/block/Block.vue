<template>
    <div class="">
      <div class="flex justify-between">
        <div class="rounded-full bg-white w-fit py-0.5 px-2 shadow-sm">
          <span class="font-bold text-sm text-gray-500 ">{{title}}</span>
        </div>
        <button class="custom--border-3" :aria-label="explain" data-cooltipz-dir="top">
            <svg 
                class="rounded-full bg-white w-fit h-fit p-0.5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve" width="16px" height="16px" fill="#6B7280">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g> <path class="st0" d="M306.068,156.129c-6.566-5.771-14.205-10.186-22.912-13.244c-8.715-3.051-17.82-4.58-27.326-4.58 c-9.961,0-19.236,1.59-27.834,4.752c-8.605,3.171-16.127,7.638-22.576,13.41c-6.449,5.772-11.539,12.9-15.272,21.384 c-3.736,8.486-5.604,17.937-5.604,28.34h44.131c0-7.915,2.258-14.593,6.785-20.028c4.524-5.426,11.314-8.138,20.369-8.138 c8.598,0,15.328,2.661,20.197,7.974c4.864,5.322,7.297,11.942,7.297,19.856c0,3.854-0.965,7.698-2.887,11.543 c-1.922,3.854-4.242,7.586-6.959,11.197l-21.26,27.232c-4.527,5.884-16.758,22.908-16.758,40.316v10.187h44.129v-7.128 c0-2.938,0.562-5.996,1.699-9.168c1.127-3.162,6.453-10.904,8.268-13.168l21.264-28.243c4.752-6.333,8.705-12.839,11.881-19.518 c3.166-6.67,4.752-14.308,4.752-22.913c0-10.86-1.926-20.478-5.772-28.85C317.832,168.969,312.627,161.892,306.068,156.129z"/> <rect x="234.106" y="328.551" class="st0" width="46.842" height="45.144"/> <path class="st0" d="M256,0C114.613,0,0,114.615,0,256s114.613,256,256,256c141.383,0,256-114.615,256-256S397.383,0,256,0z M256,448c-105.871,0-192-86.131-192-192S150.129,64,256,64c105.867,0,192,86.131,192,192S361.867,448,256,448z"/> </g> </g>
            </svg>
        </button>

      </div>

      <slot>
        
      </slot>
    </div>

</template>

<script>

import 'cooltipz-css';
export default {
    props: {
        title: {
            default: "default title"
        },
        explain: {
            default: "default explain"
        }
    },
    components: {
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
.custom--border-3 {
    --cooltipz-border-color: #000;
	--cooltipz-border-width: 2px;
    --cooltipz-text-color: #000;
	--cooltipz-bg-color: #fff;

    --cooltipz-border-radius: 50px;
    --cooltipz-cursor: help;
    --cooltipz-font-family: 'Poppins', sans-serif;
}
</style>