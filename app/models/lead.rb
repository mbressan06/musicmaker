class Lead < ActiveRecord::Base
  belongs_to :stage

  validates_presence_of :name,
                        :email

end
