Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show, :create, :update]
      get "/courses", to: "courses#getAllCourses"
      get "/courses/:id", to: "courses#getCourse"
      get "/courses/details/:id", to: "courses#getCourseDetails"
      post "/courses", to: "courses#postCourse"
      post "/courses/details/:id", to: "courses#postCourseDetail"
      delete "/courses/:id", to: "courses#deleteCourse"
    end
  end
end
