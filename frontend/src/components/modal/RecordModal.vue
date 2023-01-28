<template>
    <div class="rounded-2xl bg-white p-4">

      <Playing :active="playwave" :bgColor="bgColor"></Playing>
      <p class="hidden"><audio id="audio" controls :src="recordURL" ref="audio"></audio></p>

      <div class="flex justify-center items-center mt-3">
        <button :class="['text-white rounded-full w-12 h-12 z-10 flex justify-center items-center', bgColor]" @click="handleRecord" :disabled="recording==-1">
            <svg v-show="recording==0" class="w-6 h-6 absolute" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"></path>
            </svg>
            <svg v-show="recording==1" class="w-6 h-6 absolute" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"></path>
            </svg>
            <svg v-show="recording==2" class="w-6 h-6 absolute" fill="currentColor" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"></path>
            </svg>
            <div v-show="recording==-1" class="loader absolute"></div>
        </button>
        <div class="rounded-full bg-red-300 animate-ping w-16 h-16 absolute hidden" >
        </div>
      </div>

      <div class="bg-red-500 bg-blue-500 bg-gray-500 bg-blue-200">

      </div>

      <UploadFirebase :file="file" :upload="upload" :bob="true" @uploadDone="uploadDone"></UploadFirebase>

    </div>
  
  
  </template>
  
  <script>
  import Playing from '../progress/Playing.vue';
import UploadFirebase from '../uploadFirebase/UploadFirebase.vue';
  
  
  export default {
      data() {
          return {
              file: "",
              upload: false,
              recordButton: "", 
              stopButton: "", 
              recorder: "",
              recordButtonStatus: false,
              stopButtonStatus: false, 
              recordURL: "",
              streamV: "",
              recording: 0,
              
          };
      },
      watch: {
      },
      computed: {
        bgColor() {
            switch (this.recording) {
                case 0:
                    return 'bg-gray-500'
                    break;
                case 1:
                    return 'bg-red-500'
                    break;
                case 2:
                    return 'bg-blue-500'
                    break;
                case -1:
                    return 'bg-blue-200'
                default:
                    break;
            }
        },
        playwave() {
            switch (this.recording) {
                case 1:
                    return 'active'
                    break;
                case 3:
                    return 'active'
                    break;
                default:
                    break;
            }
        }
      },
      methods: {
          getFile(event) {
              this.file = event.target.files[0];
              console.log(event,  this.file);
              // this.submitFile(file);
          }, 
          uploadExcute() {
              console.log("Upload from parent")
              this.upload = true;
          },
          uploadDone(link) {
              this.upload = false;
              this.recordURL = link;
              this.recording = 2;
          },

          handleRecord() {
            console.log(this.recording);
            // 0: chua lam gi, 1: dang record, 2: file da load
            switch (this.recording) {
                case 0:
                    this.startRecording()
                    break;
                case 1:
                    this.stopRecording()
                    break;
                case 2:
                    this.playRecording()
                    break;
                default:
                    break;
            }
          },

          startRecording() {
              navigator.mediaDevices.getUserMedia({
                  audio: true
              }).then((stream)=>{
                  this.recordButtonStatus = false;
                  // binding click for both
                  this.streamV = stream;
                  this.recorder = new MediaRecorder(stream)
                  this.recorder.addEventListener('dataavailable', this.onRecordingReady)
              }).then(()=>{
                  
              this.recording = 1;
              this.recorder.start();
              })
  
          },
          stopRecording() {
              this.recording = -1;
              this.recorder.stop();
              this.streamV.getTracks().forEach(t => t.stop())               
          },
          onRecordingReady(e) {
            //   this.recordURL = URL.createObjectURL(e.data);
              this.file = e.data;
              this.uploadExcute();
          },
          playRecording() {
            this.$refs.audio.play();
            
          }
      },
      components: { UploadFirebase, Playing }
  }
  
  </script>
  
  <style scoped>
.loader {
  border: 2px solid #f3f3f3; /* Light grey */
  border-top: 2px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
  </style>