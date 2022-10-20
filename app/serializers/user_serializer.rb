class UserSerializer < ActiveModel::Serializer
  attributes :id, :fullname, :username, :password_digest, :email, :avatar_url, :bio
  has_many :comments
  has_many :posts, through: :comments
end
