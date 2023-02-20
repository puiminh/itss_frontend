<script>

export default {
    props: {
        answers: Array,
        question: String,
        right: Number,
    },
    data() {
        return {
            shuffleArray: [],
        }
    },
    computed: {
    },
    methods: {
        choose(data) {
            console.log(data,"The shuffle: ",this.shuffleArray,"The original: ",this.answers);
            if (this.shuffleArray[data].id == this.right) {
                console.log("Correct!");
            } else {
                console.log("Incorrect!");

            this.$refs.answerElements[data].style.backgroundColor="#f8d4d5";
            this.$refs.answerElements[data].style.boxShadow= "#e7696b 0px 0.5rem 0px";
            this.$refs.answerElements[data].style.borderColor= "#e7696b";
            this.$refs.answerElements[data].querySelector(".answerNumber").style.backgroundColor="#e7696b"
            }

            const found = this.shuffleArray.findIndex(element => element.id == this.right);

            this.$refs.answerElements[found].style.backgroundColor="#9de3d3";
            this.$refs.answerElements[found].style.boxShadow= "#00a57a 0px 0.5rem 0px";
            this.$refs.answerElements[found].style.borderColor= "#00a57a";
            this.$refs.answerElements[found].querySelector(".answerNumber").style.backgroundColor="#00a57a";
            this.$refs.answerElements[found].focus();

            this.$refs.answerElements.forEach(element => {
                element.disabled = true;
            });
        },
        shuffle(array) {
            let currentIndex = array.length,  randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }

            this.shuffleArray = array;
        },
        resetColor() {
            this.$refs.answerElements.forEach(element => {
                element.style.backgroundColor="white";
                element.style.boxShadow= "rgb(188 194 207) 0px 4px 0px";
                element.style.border= "2px solid rgb(188, 194, 207)";
                element.querySelector(".answerNumber").style.backgroundColor="rgb(41, 42, 46)";
                element.disabled = false;
            });
        }
    }, 
    watch: {
        answers(newValue, oldValue) {
            console.log("Answer props have update");
            this.shuffle(this.answers.slice());
        }
    },
    mounted() {
        this.shuffle(this.answers.slice());
    }
}

</script>

<template>
<div class="mb-12">
    <div class="questionWrap">
        <h2 class="questionText">{{question }}</h2>
    </div>
    <div class="answerWrap mt-8">
        <div v-for="(answer,index) in shuffleArray" class="answerBlock">
            <button type="button" class="answerButton" @click="choose(index)" ref="answerElements">
                <div class="answerNumber">{{index+1}}</div>
                <div class="answerText">{{answer.word}}</div>
            </button>
        </div>
    </div>
</div>
</template>

<style scoped>
.iJOVEV {
    -webkit-box-align: center;
    align-items: center;
    background-color: rgb(252, 250, 242);
    color: rgb(41, 42, 46);
    display: flex;
    flex-direction: column;
    font-size: 0.75rem;
    height: 100%;
    min-height: 100vh;
    min-width: 100vw;
    width: 100%;
}


.questionWrap {
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding: 0px;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
}

.questionText {
    color: rgb(41, 42, 46);
    font-family: "Open Sans", sans-serif;
    font-size: 3.25rem;
    font-weight: 700;
}

.answerBlock {
    flex-basis: 100%;

    position: relative;
}

@media (min-width: 30rem) {
    .answerWrap {
        grid-template-columns: 1fr 1fr;
    }
}
@media (min-width: 45rem)
{
    .answerWrap {
        gap: 1rem;
    }
}

.answerWrap {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: 1fr 1fr;
}

.answerBlock button {
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding-top: clamp(1rem, 2.5vw, 1.5rem);
    padding-bottom: clamp(1rem, 2.5vw, 1.5rem);
    height: 100%;
    border-radius: 1rem;
    font-weight: 600;
}

.answerButton {
    -webkit-box-align: center;
    align-items: center;
    background: white;
    border-radius: 0.5rem;
    color: rgb(41, 42, 46);
    cursor: pointer;
    display: flex;
    flex-basis: 100%;
    flex-direction: row;
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    hyphens: auto;
    -webkit-box-pack: center;
    justify-content: center;
    line-height: 1.2;
    overflow-wrap: anywhere;
    padding: 1rem;
    position: relative;
    text-align: center;
    text-decoration: none;
    transition: opacity 200ms cubic-bezier(0, 1, 0.75, 1) 0s, color 0.2s ease-in-out 0.1s;
    width: 100%;
    height: auto;
    border: 2px solid rgb(188, 194, 207);
    box-shadow: rgb(188 194 207) 0px 4px 0px;
    font-weight: 600;
}

.answerNumber {
    display: none;
    background-color: rgb(41, 42, 46);
    border-radius: 0.25rem;
    color: rgb(252, 250, 242);
    flex-shrink: 0;
    font-size: 1rem;
    width: 1.5rem;
    height: 1.5rem;
    -webkit-box-pack: center;
    justify-content: center;
    text-align: center;
    position: absolute;
    top: calc(50% - 0.75rem);
    left: 1rem;
    -webkit-box-align: center;
    align-items: center;
}

@media (min-width: 40rem)
{
    .answerNumber {
        display: flex;
    }
}

@media (min-width: 40rem)
{
    .answerText {
        margin-left: 2.5rem;
        margin-right: 2.5rem;
    }
}
.answerText {
    -webkit-box-flex: 1;
    flex-grow: 1;
    font-weight: 500;
}


/* Hover */

.answerButton:hover::after, .answerButton:focus::after {
    content: "";
    width: 100%;
    position: absolute;
    top: 100%;
    height: 6px;
}

.answerButton:hover, .answerButton:focus {
    box-shadow: rgb(188 194 207) 0px 0.5rem 0px;
    transform: translateY(-4px);
}

.answerButton:hover, .answerButton:focus, .answerButton:hover:visited {
    color: rgb(0, 17, 34);
}

</style>