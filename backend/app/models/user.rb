class User < ApplicationRecord
    # has_secure_password
    has_many :progresses
    has_many :register_infos
    has_many :reviews
    has_many :comments
end
