class CreateJournals < ActiveRecord::Migration
  def change
    create_table(:journals) do |t|
      t.text :content
      t.date :day
      t.string :title
      t.integer :word_count, default: 0
      t.boolean :goal, default: false

      t.timestamps

      t.belongs_to :user
    end
  end
end
