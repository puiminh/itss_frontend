<template>

<div class="flex flex-col justify-center items-center gap-10">
    <QuestionCard></QuestionCard>
    
    <TrueFalseCard></TrueFalseCard>
    <TrueFalseCard></TrueFalseCard>
    <TrueFalseCard></TrueFalseCard>
    <TrueFalseCard></TrueFalseCard>

</div>



</template>

<script>
import TrueFalseCard from '../../components/card/TrueFalseCard.vue';
import QuestionCard from '../../components/card/QuestionCard.vue';




export default {
    components: {
    TrueFalseCard,
    QuestionCard
}
}
</script>