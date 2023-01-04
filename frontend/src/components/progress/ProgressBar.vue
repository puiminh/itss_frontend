<template>
    <div class="my-2">
        <div class="flex justify-between mb-1">
            <span :class="['text-sm font-medium dark:text-white ',textColor]">{{name}}</span>
            <span :class="['text-sm font-medium dark:text-white ',textColor  ]">{{progress}}%</span>
        </div>
            <div class="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div :class="['h-1.5 rounded-full ',bgColor]" :style="['width: '+progress+'%']"></div>
        </div>
    </div>

    <!-- Weird way to make dynamic class -->
    <!-- <div class="text-red-700 text-blue-700 text-purple-700 bg-blue-700 bg-red-700 bg-purple-700"></div> -->

</template>

<script>

export default {
    props: {
        color: {
            default: ''
        },
        name: '',
        progress: '',   
    }, 
    data() {
        return {
        }
    },
    mounted() {
        
    },
    computed: {
        textColor() {
            return 'text-'+this.color+'-700';
        },
        bgColor() {
            return 'bg-'+this.color+'-700';
        }
    }
}
</script>