<template>

<div class="multi-button shadow-lg">
    <button class="button rounded-l-md" id="create" @click="openModalMethod"><span>      Create</span></button>
  <RouterLink to="/manager">
  <button class="button" id="course"><span>      Manager</span></button>
  </RouterLink>

  <RouterLink to="/bookmark">
  <button class="button rounded-r-md" id="bookmark"><span>      Bookmark</span></button>
  </RouterLink>

</div>
</template>

<style scoped>
.multi-button {
  background-color: white;
  border: 1px solid rgba(232, 232, 232, 0.8);
  border-radius: 14px;
  padding: 7px;
  place-items: center;
  display: flex;
  justify-content: center;
  width: fit-content;
}

#create {
  background-color: rgb(85,131,241);
  border: 1px solid rgb(85,131,241);
  
}

#create {
  background-color: rgb(85,131,241);
  border: 1px solid rgb(85,131,241);
  
}

#course {
  background-color: rgb(39,166,75);
  border: 1px solid rgb(39,166,75);
  
}

#bookmark {
  background-color: rgb(242,185,42);
  border: 1px solid rgb(242,185,42);
  
}


.button { 
  padding: 7px 8px 7px 8px;
    font: 12px Ubuntu;
  color: white;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

#create span:after {
  font-family: FontAwesome;
  content: "\f055";
}

#course span:after {
  font-family: FontAwesome;
  content: "\f07c";
}

#bookmark span:after {
  font-family: FontAwesome;
  content: "\f02e";
}

</style>

<script>
import { openModal, closeModal } from 'jenesius-vue-modal';
import CreateOptionBox from '../box/CreateOptionBox.vue';


export default {
	methods: {
		openModalMethod() {
			openModal(CreateOptionBox)
		},
    closeModalMethod() {
      closeModal()
    }
	}
}

</script>