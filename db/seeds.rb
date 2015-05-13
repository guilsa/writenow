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
Journal.create(content: "this is by Maria", user_id: 2)
Journal.create(content: "this is Maria's second journal", user_id: 2)

