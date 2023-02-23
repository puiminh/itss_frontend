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
            bookmarkCollectionCourse: null,
            totalComment: 0,
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
        getBookmarkCollectionCourse: (state) => state.bookmarkCollectionCourse,
        getTotalComment: (state) => state.totalComment,
    },
    actions: {
        async getRecentCourseAction() {
            // if (this.getRecentCourse.length == 0) {
                try {
                    const userStore = useUserStore()
                    const response = await axios.get(`/courses/recent/${userStore.getUser.id}`)
    
                    this.recentCourse = response.data.data
                    console.log("recent: ",response.data.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }            

        },
        async getCreatedCourseCollectionAction(id = -1) {
                try {
                    const userStore = useUserStore()
                    const response = await axios.get(`/users/created/courses_collections/${id==-1 ? userStore.getUser.id : id}`)
    
                    this.createdCourse = response.data.courses;
                    this.createdCollection = response.data.collections;
    
                    console.log("created: ",response);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }     

        },

        async getRecommentCourseAction() {
            if (this.getRecommentCourse.length == 0) {
                try {
                    const response = await axios.get(`/courses/recommended`)
                    this.recommendCourse = response.data.data
                    console.log("recommendcourse: ",response.data.data);
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
                    console.log("recommentcollection: ",response.data.data);
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
                    console.log("progress: ",response.data);
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
                    console.log("courseinfo: ",response.data);
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
                    console.log("collectioninfo: ",response.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            // }
        },

        async getBookmarkCollectionCourseAction(id) {
            const userStore = useUserStore();
            // if (!this.getBookmarkCollectionCourse) {
                try {
                    const response = await axios.get(`/users/bookmarked/courses_collections/${userStore.getUser.id}`)
                    this.bookmarkCollectionCourse = response.data;
                    console.log("bookmark: ",response.data);
                    return response;
    
                } catch (error) {
                    console.error(error);
                    return false;
                }                
            // }
        },

        addBookmarkCourse(course, bookmark) {
            this.bookmarkCollectionCourse.bookmark_courses.push({
                bookmark: bookmark,
                course: course
            })
        },

        // async getTotalCommentAction(id) {
        //     try {
        //         const response = await axios.get(`/comments/course//${id}`)
        //         this.totalComment = response.data.total;
        //         console.log("comment: ",response.data);
        //         return response;

        //     } catch (error) {
        //         console.error(error);
        //         return false;
        //     }       
        // }
    }

})