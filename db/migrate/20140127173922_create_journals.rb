class CreateJournals < ActiveRecord::Migration
  def change
    create_table(:journals) do |t|
      t.string :content
      t.string :title
      t.boolean :goal, default: false

      t.belongs_to :user

      t.timestamp
    end
  end
end
