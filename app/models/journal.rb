class Journal < ActiveRecord::Base

  # attr_accessible :created_at

  validates :day, uniqueness: true
  after_save :daily_goal_achieved?
  belongs_to :user

  private

  def daily_goal_achieved?
    self.goal = true if self.word_count > 50
  end

end
