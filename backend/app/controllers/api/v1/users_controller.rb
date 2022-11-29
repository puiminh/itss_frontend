module Api
    module V1
        class UsersController < ApplicationController
            def index
                render json: {
                    :users => User.all
                }, status: 200;
            end

            def show
                user = User.find(params[:id])
                render json: {
                    :user => user
                }, status: 200;
            end

            def create
                user = User.new(user_params);
                if user.save
                    render json: {
                        message: "Create succeed"
                    }, status: 200;
                else
                    render json: {
                        message: "Create failed"
                    },status: 400;
                end
            end

            def update
                user = User.find(params[:id]);
                if user.update(user_params)
                    render json: {
                        message: "Update succeed"
                    }, status: 200;
                else
                    render json: {
                        message: "Update failed"
                    }, status: 400;
                end
            end

            private
            def user_params
                params.permit(:name, :email, :account, :password, :birthday, :role);
            end
            
        end
    end
end