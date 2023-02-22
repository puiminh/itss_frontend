import axios from "axios";
import { defineStore } from "pinia";
import { useUserStore } from "./user";

export const useCourseCollectionStore = defineStore('course_collection', {
    state: ()=> {
        return {
            recentCourse: [],
            recommendCourse: [],
            recommendCollection: [],
            createdCourse: [],
            createdCollection: [],
            allProgress: [],
            courseInfo: null,
            collectionInfo: null,
        }
    },
    getters: {
        getRecentCourse: (state) => state.recentCourse,
        getRecommentCourse: (state) => state.recommendCourse,
        getRecommentCollection: (state) => state.recommendCollection,
        getCreatedCourse: (state) => state.createdCourse,
        getCreatedCollection: (state) => state.createdCollection,
        getAllProgress: (state) => state.allProgress,
        getCourseInfo: (state) => state.courseInfo,
        getCollectionInfo: (state) => state.collectionInfo,
    },
    actions: {
        async getRecentCourseAction() {
            // if (this.getRecentCourse.length == 0) {
                try {
                    const userStore = useUserStore()
                    const response = await axios.get(`/courses/recent/${userStore.getUser.id}`)
    
                    this.recentCourse = response.data.data
                    console.log(response.data.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }            

        },
        async getCreatedCourseCollectionAction() {
            if (this.getCreatedCourseCollectionAction.length == 0  && this.getCreatedCollection == 0) {
                try {
                    const userStore = useUserStore()
                    const response = await axios.get(`/users/created/courses_collections/${userStore.getUser.id}`)
    
                    this.createdCourse = response.data.courses;
                    this.createdCollection = response.data.collections;
    
                    console.log(response);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }     
            }

        },

        async getRecommentCourseAction() {
            if (this.getRecommentCourse.length == 0) {
                try {
                    const response = await axios.get(`/courses/recommended`)
                    this.recommendCourse = response.data.data
                    console.log(response.data.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }   
            }

        },

        async getRecommentCollectionAction() {
            if (this.getRecommentCollection.length == 0) {
                try {
                    const response = await axios.get(`/collections/recommended`)
                    this.recommendCollection = response.data.data
                    console.log(response.data.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            }
        },

        async getAllProgressAction() {
            const userStore = useUserStore();
            if (this.allProgress.length == 0) {
                try {
                    const response = await axios.get(`/progress/${userStore.getUser.id}`)
                    this.allProgress = response.data;
                    console.log(response.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            }
        },
        async getCourseInfoAction(id) {
            // if (!this.collectionInfo) {
                try {
                    const response = await axios.get(`/courses/${id}`)
                    this.courseInfo = response.data;
                    console.log(response.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            // }
        },
        async getCollectionInfoAction(id) {
            // if (!this.collectionInfo) {
                try {
                    const response = await axios.get(`/collections/${id}`)
                    this.collectionInfo = response.data;
                    console.log(response.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            // }
        },
    }

})