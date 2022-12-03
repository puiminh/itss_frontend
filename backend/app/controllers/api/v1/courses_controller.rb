module Api
    module V1
        class CoursesController < ApplicationController
            def getAllCourses 
                begin
                    render json: {
                        courses: Course.all
                    }, status: 200;
                rescue => exception
                    render json: {
                        courses: []
                    }, status: 400;
                end      
            end
            
            def getCourse
                begin
                    render json: {
                        course: Course.find(params[:id]) 
                    }, status: 200;
                rescue
                    render json: {
                        course: []
                    }, status: 400;
                end                
            end

            def getCourseDetails
                begin
                    course = Course.find(params[:id]);
                    details = course.course_details
                    render json: {
                        course: course,
                        details: details
                    }, status: 200;
                rescue 
                    render json: {
                        course: [],
                        details: [],
                    }, status: 400;
                end
            end

            def postCourse
                begin
                    course = Course.create(course_params);
                    render json: {
                        message: "OK",
                        data: course
                    }, status: 200;
                rescue 
                    render json: {
                        message: "Error"
                    }, status: 400;
                end
            end

            def postCourseDetail
                begin
                    course = Course.find(params[:id]);
                    details = course.course_details.create(detail_params.merge(course_id: params[:id]));
                     render json: {
                        message: "OK",
                        data: details
                   }, status: 200; 
                rescue
                   render json: {
                        message: "Error",
                   }, status: 400; 
                end
            end

            def deleteCourse
                begin
                    course = Course.find(params[:id]);
                    details = course.course_details.all;
                    details.destroy_all();
                    course.destroy();
                    render json: {
                        message: "OK"
                    }, status: 200; 
                rescue 
                    render json: {
                        message: "Error"
                    }, status: 400;
                end
            end

            private
            def course_params
                params.permit(:name, :author, :description);
            end
            
            def detail_params
                params.permit(:word, :mean, :video, :image);
            end
        end
    end
end