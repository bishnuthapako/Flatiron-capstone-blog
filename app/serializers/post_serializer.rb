class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :minutes_to_read, :author, :date
 
  has_many :comments
  has_many :post_tags
  has_many :tags, through: :post_tags
end
