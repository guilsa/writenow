User.create(first_name: "Gui",
            last_name: "Sa",
            email: "gui@gmail.com",
            password: "foobar")

User.create(first_name: "Maria",
            last_name: "Sa",
            email: "maria@gmail.com",
            password: "foobar")

Journal.create(content: "this is by Gui", user_id: 1)
Journal.create(content: "this is Gui's second journal", user_id: 1)
Journal.create(content: "this is Gui's third journal", user_id: 1)
Journal.create(content: "this is Gui's forth journal", user_id: 1)
Journal.create(content: "this is Gui's firth journal", user_id: 1)

Journal.create(content: "this is by Maria", user_id: 2)
Journal.create(content: "this is Maria's second journal", user_id: 2)


goal = Journal(1).goal
goal = true

goal = Journal(2).goal
goal = true

goal = Journal(3).goal
goal = true

goal = Journal(5).goal
goal = true