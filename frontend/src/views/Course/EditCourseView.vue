<template>
    <div class="wrapper px-20 mt-4 xl:mt-20 w-full">
        <p class="font-bold text-2xl">Edit a course</p>
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
                        Save
                    </p>
                </GameButton>
            </div>
        </div>
    
        <div class="mt-12 flex flex-col gap-8 pt-10">
            <AddTermCard ref="vocabs"  v-for="i in vocabs" :predata="i" @addVocabFromParent="addVocabFromParent"></AddTermCard>
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
import { useCourseCollectionStore } from '../../stores/course';
    import { useUserStore } from '../../stores/user';
    
    
    export default {
        components: { InputNoBorder, GameButton, AddTermCard, AddNewCard, TextAreaNoBorder },
        props: ['id'],
        data() {
            return {
                course: {
                    desc: '',
                    title: '',
                    author_id: 0,
                },
                vocabs: [
                ],
                totalCard: 0,
            }
        },
        computed: {
            ...mapState(useUserStore,['getUser']),
            ...mapState(useCourseCollectionStore, ['getCourseInfo']),
        },
        methods: {
            async submit() {
                this.vocabs = [];
                this.$refs.vocabs.forEach((e)=>{
                    e.addVocabFromChildren()
                })
    
                this.course.author_id = this.getUser.id
    
                const response = await axios.put('/courses/vocabularies/'+this.$route.params.id, {
                    course: this.course,
                    vocabs: this.vocabs
                })
    
                console.log(this.course, this.vocabs, response);
    
                this.$router.push(`/course/${this.$route.params.id}`)
            },
            addVocabFromParent(vocab) {
                console.log(vocab, this.vocabs);
                this.vocabs.push(vocab)
            }
        },
        mounted() {
            this.course = this.getCourseInfo.course;
            this.vocabs = this.getCourseInfo.vocabularies;
        },
        beforeRouteEnter(to, from, next) {
            const courseStore = useCourseCollectionStore()
            console.log(to);
            courseStore.getCourseInfoAction(to.params.id).then((res)=>{
            // this.wordlist = res.data;
            // this.totalword = this.wordlist.length
                console.log('getCourseInfo:', courseStore.getCourseInfo);
                next();
            })
        },
    }
    </script>
    
    <style scoped>
    .ql-container {
        border: none;
    }
    </style>