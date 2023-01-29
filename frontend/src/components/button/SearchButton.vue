<template>
<button @click="openModalMethod" type="button" class="DocSearch DocSearch-Button flex p-2 gap-2 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none" aria-label="Search">
	<span class="DocSearch-Button-Container flex items-center gap-2">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
		</svg>

		<!-- <svg width="20" height="20" class="DocSearch-Search-Icon" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg> -->
		<span class="DocSearch-Button-Placeholder font-mono text-md text-gray-500">Search</span>
	</span>
	
	<span class="DocSearch-Button-Keys flex items-center rounded border border-gray-700 py-0.5 px-1 gap-0.5">
		<kbd class="DocSearch-Button-Key pt-0.5">
			<svg width="15" height="15" class="DocSearch-Control-Key-Icon">
				<path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" stroke-width="1.2" stroke="currentColor" fill="none" stroke-linecap="square"></path>
			</svg>
		</kbd>
		
		<kbd class="DocSearch-Button-Key font-semibold text-gray-600 text-xs font-mono">K</kbd>
		
	</span>
</button>
</template>

<style scoped>
 

</style>

<script>
import { closeModal, openModal } from 'jenesius-vue-modal';
import Search from '../search/Search.vue';


export default {
	methods: {
		openModalMethod() {
			openModal(Search)
		}
	},
	mounted() {
		function KeyPress(e) {
      var evtobj = window.event? event : e
      if (evtobj.keyCode == 75 && evtobj.ctrlKey) {
        e.preventDefault();
		closeModal();
        openModal(Search)
      } 
    }

    document.onkeydown = KeyPress;
	}
}

</script>