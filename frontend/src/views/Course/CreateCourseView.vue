<template>
<div class="wrapper px-20 mt-4 xl:mt-20 w-full">
    <p class="font-bold text-2xl">Create a course</p>
    <p class="font-medium text-sm text-gray-600 mt-2">Auto saved</p>
    <div class="flex gap-5">
        <div class="w-4/5">
            <InputNoBorder title="TITLE" class="mt-8" v-model="course.title"/>
            <InputNoBorder title="DESCRIPTION" class="mt-8" v-model="course.desc"/>
            
            <!-- <TextAreaNoBorder title="DESCRIPTION" class="mt-8" v-model="desc"></TextAreaNoBorder> -->
        </div>
        <div class="place-self-end">
            <GameButton 
                @click="submit"
                class="!bg-blue-600 !px-3 !py-2"
            >
                <p class="text-center pt-2 font-bold text-white">
                    Create
                </p>
            </GameButton>
        </div>
    </div>

    <div class="mt-12 flex flex-col gap-8 pt-10">
        <AddTermCard ref="vocabs" v-for="i in totalCard" @addVocabFromParent="addVocabFromParent"></AddTermCard>
    </div>

    <div class="mt-32">
        <AddNewCard @click="totalCard++"></AddNewCard>
    </div>
</div>

</template>
<script>
import axios from 'axios';
import { mapState } from 'pinia';
import GameButton from '../../components/button/GameButton.vue';
import AddNewCard from '../../components/card/AddNewCard.vue';
import AddTermCard from '../../components/card/AddTermCard.vue';
import InputNoBorder from '../../components/input/InputNoBorder.vue';
import TextAreaNoBorder from '../../components/input/TextAreaNoBorder.vue';
import { useUserStore } from '../../stores/user';


export default {
    components: { InputNoBorder, GameButton, AddTermCard, AddNewCard, TextAreaNoBorder },
    data() {
        return {
            course: {
                desc: '',
                title: '',
                author_id: 0,
            },
            vocabs: [
            ],
            totalCard: 4,
        }
    },
    computed: {
        ...mapState(useUserStore,['getUser'])
    },
    methods: {
        async submit() {

            this.$refs.vocabs.forEach((e)=>{
                e.addVocabFromChildren()
            })

            this.course.author_id = this.getUser.id

            const response = await axios.post('/courses/vocabularies', {
                course: this.course,
                vocabs: this.vocabs
            })

            console.log(this.course, this.vocabs, response);

            this.$router.push(`/course/${response.data.course.id}`)
        },
        addVocabFromParent(vocab) {
            console.log(vocab, this.vocabs);
            this.vocabs.push(vocab)
        }
    }
}
</script>

<style scoped>
.ql-container {
    border: none;
}
</style>