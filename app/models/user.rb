class User < ApplicationRecord
    has_many :comments
    has_many :posts, through: :comments
    has_secure_password
end
