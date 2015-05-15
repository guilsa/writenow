## USER CREATION

User.create(first_name: "Gui",
            last_name: "Sa",
            email: "gui@gmail.com",
            password: "foobar")

User.create(first_name: "Elaine",
            last_name: "Sa",
            email: "elaine@gmail.com",
            password: "foobar")

## JOURNAL CREATION

# t.date :day
# t.string :content
# t.string :title
# t.integer :word_count
# t.boolean :goal, default: false
# t.belongs_to :user
# t.timestamps

Journal.create(day: "2015-05-01",
               content: FFaker::Lorem.sentence(49),
               user_id: 1)

Journal.create(day: "2015-05-02",
               content: FFaker::Lorem.sentence(48),
               user_id: 1)

Journal.create(day: "2015-05-03",
               content: FFaker::Lorem.sentence(50),
               user_id: 1)

Journal.create(day: "2015-05-04",
               content: FFaker::Lorem.sentence(51),
               user_id: 1)



# Journal.create(content: "this is by Maria", user_id: 2)
# Journal.create(content: "this is Maria's second journal", user_id: 2)


# goal = Journal(1).goal
# goal = true

# goal = Journal(2).goal
# goal = true

# goal = Journal(3).goal
# goal = true

# goal = Journal(5).goal
# goal = true