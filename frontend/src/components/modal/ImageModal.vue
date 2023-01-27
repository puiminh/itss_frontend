<template>
  <div class="bg-white rounded-lg p-8" @paste="onPasteMethod">
      <div class="container relative w-96">
         <label :class="['wrapper ', {'active': active}]" for="default-btn">
            <div :class="['image ', {'!hidden': !active}]">
               <img :src="previewLink" alt="">
            </div>
            <div :class="['content ', {'hidden': active}]">
               <div class="icon">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"></path>
                </svg>
               </div>
               <div class="text">
                  No file chosen, yet!
               </div>
            </div>
            <div class="file-name flex">
               {{ fileName }}
                <button id="cancel-btn" @click.stop="removeFile" class="hover:text-red-600">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </button>
            </div>
          </label>
         <!-- <label for="default-btn" class="w-fit h-fit" id="custom-btn">
            Choose a file
          </label> -->
         <input id="default-btn" type="file"  hidden @change="getFile">
      </div>

      <input type="text" v-model="keyword">

      <button class="py-4" @click.prevent="recommendImg(keyword)">Recommend</button>

      <div class="flex">
        <img v-for="i in images.slice(0,10)" :src="i" referrerpolicy="no-referrer" style="width: 100px"/>
      </div>

      
  </div>


</template>

<script>
import axios from 'axios';

export default {
    data() {
      return {
        previewLink: '',
        file: '',
        active: false,
        fileName: '',
        keyword: '',
        images: [],
      }
    },

    methods: {
      getFile(event) {
        console.log(event.target.files[0]);
        this.file = event.target.files[0];
        this.fileName = event.target.files[0].name;

        if (this.file) {
            this.previewLink =  URL.createObjectURL(this.file)
            this.active = true;
        }
      },

      removeFile() {
        this.file = '';
        this.fileName = '';
        this.previewLink = '';
        this.active = false;

      },

      onPasteMethod(evt) {

          const clipboardItems = evt.clipboardData.items;
          const items = [].slice.call(clipboardItems).filter(function (item) {
              // Filter the image items only
              return item.type.indexOf('image') !== -1;
          });
          if (items.length === 0) {
              return;
          }

          const item = items[0];
          // Get the blob of image
          const blob = item.getAsFile();
          
          this.file = blob;
          this.fileName = blob.name;

          if (this.file) {
              this.previewLink =  URL.createObjectURL(this.file)
              this.active = true;
          }
          
      },

      recommendImg(keyWord) {
            var config = {
              method: 'get',
              url: `https://api.imgur.com/3/gallery/search/time/all?q=${keyWord}&q_type=jpg`,
              headers: { 
                'Authorization': 'Client-ID f6f8f286d4cbdd1', 
              },
            };
              axios(config)
              .then((response) => {
                console.log(response.data.data);
                this.images = response.data.data.map((e)=>{
                  if (e.images) {
                    console.log(e.images[0].link);
                    return e.images[0].link
                  } else {
                    return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTKS8sgnBMSLmsUMhsuoKM94dLEb61aboXs6wc0zwu&s"
                  }
                });
              })
            .catch(function (error) {
              console.log(error)})
          }
    },

    mounted() {
      
    }
}
</script>

<style scoped>

.container .wrapper{
  position: relative;
  height: 200px;
  width: 200px;
  border-radius: 10px;
  background: #fff;
  border: 2px dashed #c2cdda;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.wrapper.active{
  border: none;
}
.wrapper .image{
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wrapper img{
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.wrapper .icon{
  font-size: 100px;
  color: #9658fe;
}
.wrapper .text{
  font-size: 20px;
  font-weight: 500;
  color: #5B5B7B;
}
.wrapper #cancel-btn i{
  position: absolute;
  font-size: 20px;
  right: 15px;
  top: 15px;
  color: #9658fe;
  cursor: pointer;
  display: none;
}
.wrapper.active:hover #cancel-btn i{
  display: block;
}
.wrapper #cancel-btn i:hover{
  color: #e74c3c;
}
.wrapper .file-name{
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 8px 12px;
  font-size: 18px;
  color: #fff;
  display: none;
  background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
  justify-content: space-between;
}
.wrapper.active:hover .file-name{
  display: flex;
}
.container #custom-btn{
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  border-radius: 25px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  background: linear-gradient(135deg,#3a8ffe 0%,#9658fe 100%);
  text-align: center;
  align-items: center;
  justify-content: center;
}

</style>