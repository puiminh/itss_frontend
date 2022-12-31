<template>
<div class="w-full p-4 text-center bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{{courseData.name}}</h5>
    <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{{courseData.description}}</p>
    <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <div class="text-left">
                <div class="mb-1 text-xs">{{authorData.email}}</div>
                <div class="-mt-1 font-sans text-sm font-semibold">{{authorData.name}}</div>
            </div>
        </a>
        <div class="section full-height">
      	<input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn"/>
      	<label for="modal-btn">Add card</label> 		
      	<div class="modal">		
	      	<form class="modal-wrap">

<label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Name</label>
<input v-model="word" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">


<label for="mean" class="block my-2 text-sm font-medium text-gray-900 dark:text-white">Definition</label>
<textarea id="mean" v-model="mean" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


<label class="block my-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
<input @change="getFile" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
<!-- <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p> -->

<button @click.prevent="createCard" type="submit" class="inline-flex items-center my-5 px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
       Save
</button>
          </form>			          		
      	</div>	
        </div>
    </div>
</div>

<div class="grid grid-cols-4 gap-4">
  <div  v-for="card in cardDatas" class="w-full max-w-md my-10 p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
   <div class="flow-root">
                <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                        <img class="w-8 h-8 rounded-full" :src="card.image? card.image : 'https://play-lh.googleusercontent.com/tyoM-deIvgvga9-D_zQHid4eHlT9-WVyzTEomSu6L6BgaLp6lRGRqtgOzP1paGC8Krs'"  alt="Neil image">
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-2xl font-medium text-gray-900 truncate dark:text-white">
                            {{card.word}}
                        </p>
                        <!-- <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                            {{card.mean}}
                        </p> -->
                    </div>
                    <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        {{card.mean}}
                    </div>
                </div>

    </div>
    <FlashCardView :cardData="card"></FlashCardView>
</div>
</div>




</template>

<script setup>
import axios from 'axios';
import { reactive, ref, toRefs } from 'vue';
import "@/services/firebase.js";
import { getStorage, ref as refb, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from 'vue-router';
import FlashCardView from './FlashCardView.vue';
import FlipCard from '../../components/card/FlipCard.vue';

const router = useRouter();

const props = defineProps(['id'])
const courseData = ref();
const authorData = ref();
const cardDatas = ref();

const cardData = reactive({
    word: '',
    mean: '',
    video: '',
    image: '',
})

const FileI = reactive({
    file: '',
    preview: '',
    isPic: '',
});

const {word, mean, video, image} = toRefs(cardData)
const {file, preview, isPic} = toRefs(FileI)


axios.get('http://127.0.0.1:3000/api/v1/courses/details/'+props.id)
  .then((res)=>{
    console.log(res);
    courseData.value = res.data.course;
    cardDatas.value = res.data.details;
})
.then((res)=> {
    axios.get('http://127.0.0.1:3000/api/v1/users/'+courseData.value.author)
    .then((res)=>{
        console.log(res);
        authorData.value = res.data.user;
    })
})
.catch(function (error) {
        console.log(error);
    });

function createCard() {
    axios.post('http://127.0.0.1:3000/api/v1/courses/details/'+props.id, {
        ...cardData
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            sessionStorage.setItem("createdCourse", name);
            // let username = sessionStorage.getItem("name");
            router.go();
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getFile(event) {
        FileI.file = event.target.files[0];
        console.log(FileI.file)
        submitFile();
}

function submitFile() {
        const metadata = {
        };
        console.log(FileI.file);
        const storage = getStorage();
        const storageRef = refb(storage, 'images/' + FileI.file.name);
        const uploadTask = uploadBytesResumable(storageRef, FileI.file, metadata);
  //       uploadBytes(storageRef, this.File).then((snapshot) => {
  //     console.log('Uploaded a blob or file!');
  // });

  uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      cardData.image = downloadURL;
    });
  }
);
      }
</script>

<style scoped>

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.modal-btn:checked + label,
.modal-btn:not(:checked) + label{
  position: relative;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 2;
  height: 50px;
  transition: all 200ms linear;
  border-radius: 4px;
  width: 120px;
  letter-spacing: 1px;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-align-items: center;
  -moz-align-items: center;
  -ms-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  -ms-justify-content: center;
  justify-content: center;
  -ms-flex-pack: center;
  text-align: center;
    -ms-flex-item-align: center;
    align-self: center;
  border: none;
  cursor: pointer;
  background-color: #102770;
  color: #ffeba7;
  box-shadow: 0 12px 35px 0 rgba(16,39,112,.25);
}
.modal-btn:not(:checked) + label:hover{
  background-color: #ffeba7;
  color: #102770;
}
.modal-btn:checked + label .uil,
.modal-btn:not(:checked) + label .uil{
	margin-left: 10px;
	font-size: 18px;
}
.modal-btn:checked + label:after,
.modal-btn:not(:checked) + label:after{
  position: fixed;
  top: 30px;
  right: 30px;
  z-index: 110;
  width: 40px;
  border-radius: 3px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  background-color: #ffeba7;
  color: #102770;
  font-family: 'unicons';
  content: '\eac6'; 
  box-shadow: 0 12px 25px 0 rgba(16,39,112,.25);
  transition: all 200ms linear;
  opacity: 0;
  pointer-events: none;
  transform: translateY(20px);
}
.modal-btn:checked + label:hover:after,
.modal-btn:not(:checked) + label:hover:after{
  background-color: #102770;
  color: #ffeba7;
}
.modal-btn:checked + label:after{
  transition: opacity 300ms 300ms ease, transform 300ms 300ms ease, background-color 250ms linear, color 250ms linear;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.modal{
  position: fixed;
  display: block;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  overflow-x: hidden;
  background-color: rgba(31,32,41,.75);
  pointer-events: none;
  opacity: 0;
  transition: opacity 250ms 700ms ease;
}
.modal-btn:checked ~ .modal{
  pointer-events: auto;
  opacity: 1;
  transition: all 300ms ease-in-out;
}
.modal-wrap {
  position: relative;
  display: block;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  padding: 50px 20px;
  background-color: #fff;
    -ms-flex-item-align: center;
    align-self: center;
    box-shadow: 0 12px 25px 0 rgba(199,175,189,.25);
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 250ms 250ms ease, transform 300ms 250ms ease;
}
.modal-wrap img {
  display: block;
  width: 100%;
  height: auto;
}
.modal-wrap p {
  padding: 20px 30px 0 30px;
}
.modal-btn:checked ~ .modal .modal-wrap{
  opacity: 1;
  transform: scale(1);
  transition: opacity 250ms 500ms ease, transform 350ms 500ms ease;
}


.logo {
	position: absolute;
	top: 25px;
	left: 25px;
	display: block;
	z-index: 1000;
	transition: all 250ms linear;
}
.logo img {
	height: 26px;
	width: auto;
	display: block;
  	filter: brightness(10%);
	transition: filter 250ms 700ms linear;
}
.modal-btn:checked ~ .logo img {
  	filter: brightness(100%);
	transition: all 250ms linear;
}


@media screen and (max-width: 500px) {
	.modal-wrap {
		width: calc(100% - 40px);
		padding-bottom: 15px;
	}
	.modal-wrap p {
	  padding: 15px 20px 0 20px;
	}
}
</style>