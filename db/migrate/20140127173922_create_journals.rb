class CreateJournals < ActiveRecord::Migration
  def change
    create_table(:journals) do |t|
      t.string :content
      t.belongs_to :user

      t.timestamp
    end
  end
end
