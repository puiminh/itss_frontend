class Course < ApplicationRecord
    has_many :course_details
    has_many :progresses
    has_many :register_infos
    has_many :reviews
    has_many :comments
end
