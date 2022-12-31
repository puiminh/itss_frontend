<script>

export default {
    props: {
        answers: Array,
    },
    data() {
        return {

        }
    },
}

</script>

<template>
<div class="mb-12">
    <div class="questionWrap">
        <h2 class="questionText">Hello</h2>
    </div>
    <div class="answerWrap">
        <div v-for="(answer,index) in answers" class="answerBlock">
            <button type="button" class="answerButton">
                <div class="answerNumber">{{index+1}}</div>
                <div class="answerText">{{answer}}</div>
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
    font-size: 2.25rem;
}

.answerBlock {
    flex-basis: 100%;
    z-index: 100;
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
    background: none;
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
    z-index: 300;
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