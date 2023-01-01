<template>
  <header>
    <h1><a href="index.html">MediaRecorder examples</a></h1>
    <p>Record live audio</p>
  </header>
  <main>
    <p><button id="record" :disabled="recordButtonStatus" @click="startRecording">Record audio</button> 
       <button id="stop" :disabled="stopButtonStatus" @click="stopRecording">Stop</button></p>
    <p><audio id="audio" controls :src="recordURL"></audio></p>
  </main>

  <input @change="getFile" class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file">
  <button @click="uploadExcute">UPLOAD</button>
  <UploadFirebase :file="file" :upload="upload" :bob="true" @uploadDone="uploadDone"></UploadFirebase>

</template>

<script>
import UploadFirebase from '../uploadFirebase/UploadFirebase.vue';


export default {
    props: ['start'],
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
        };
    },
    watch: {
        start: function (newValue, oldValue) {
            console.log("start prop change",newValue,oldValue)
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
        uploadDone() {
            this.upload = false;
        },
        setupRecord() {
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
                
            this.recordButtonStatus = true;
            this.stopButtonStatus = false;
            this.recorder.start();
            })

        },
        stopRecording() {
            this.recordButtonStatus = false;
            this.stopButtonStatus = true;
            this.recorder.stop();
            this.streamV.getTracks().forEach(t => t.stop())               
        },
        onRecordingReady(e) {
            this.recordURL = URL.createObjectURL(e.data);
            console.log(e, this.recordURL);
            this.file = e.data;
            this.uploadExcute();
        }
    },
    mounted() {

        // This example uses MediaRecorder to record from a live audio stream,
        // and uses the resulting blob as a source for an audio element.
        //
        // The relevant functions in use are:
        //
        // navigator.mediaDevices.getUserMedia -> to get audio stream from microphone
        // MediaRecorder (constructor) -> create MediaRecorder instance for a stream
        // MediaRecorder.ondataavailable -> event to listen to when the recording is ready
        // MediaRecorder.start -> start recording
        // MediaRecorder.stop -> stop recording (this will generate a blob of data)
        // URL.createObjectURL -> to create a URL from a blob, which we can use as audio src
        // var recordButton, stopButton, recorder;
        // window.onload = function () {
        //     recordButton = document.getElementById("record");
        //     stopButton = document.getElementById("stop");
        //     // get audio stream from user's mic
        //     navigator.mediaDevices.getUserMedia({
        //         audio: true
        //     })
        //         .then(function (stream) {
        //         recordButton.disabled = false;
        //         recordButton.addEventListener("click", startRecording);
        //         stopButton.addEventListener("click", stopRecording);
        //         recorder = new MediaRecorder(stream);
        //         // listen to dataavailable, which gets triggered whenever we have
        //         // an audio blob available
        //         recorder.addEventListener("dataavailable", onRecordingReady);
        //     });
        // };
        // function startRecording() {
        //     recordButton.disabled = true;
        //     stopButton.disabled = false;
        //     recorder.start();
        // }
        // function stopRecording() {
        //     recordButton.disabled = false;
        //     stopButton.disabled = true;
        //     // Stopping the recorder will eventually trigger the `dataavailable` event and we can complete the recording process
        //     recorder.stop();
        // }
        // function onRecordingReady(e) {
        //     var audio = document.getElementById("audio");
        //     // e.data contains a blob representing the recording
        //     audio.src = URL.createObjectURL(e.data);
        //     console.log(e);
        //     // e.target.stream.getTracks().forEach(t => t.stop()); //clear status
        //     audio.play();
        // }
    },
    components: { UploadFirebase }
}

</script>

<style scoped>
body {
  font-family: Courier, 'Courier New', monospace;
  padding: 1em 2em;
  font-size: 1rem;
}

code, pre, button {
  font-family: Courier, 'Courier New', monospace;
  font-size: 1rem;
}

code {
  color: #666;
}

button {
    border: 0;
    background: #31ffd5;
    font-family: Courier, 'Courier New', monospace;
    font-size: 1rem;
    padding: 0.5em 1em;
}

button:active, button:hover {
    background: #000;
    color: #fff;
}

button[disabled] {
    background: #ccc;
    color: #000;
}

a, a:hover, a:visited {
    color: #000;
    text-decoration: none;
    font-weight: bold;
    padding-bottom: 0.1em;
}

a {
    box-shadow: inset 0 -3px #31ffd5;
}

a:hover {
    background:#31ffd5;
}

p, li {
  line-height: 1.3em;
  margin: 1em 0;
}

li {
    margin: 0.8em 0;
}

canvas, video {
    max-width: 100%;
    max-height: 60vh;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.row > * {
  text-align: center;
}

.choices {
    list-style-type: none;
    margin-left: 0;
    padding-left: 0;
}

@media (min-width: 640px) {
    .choices li {
        display: inline-block;
        margin: 0;
    }
}

video {
    background: #666;
}

</style>