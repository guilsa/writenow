# User goes to Sign up form
get '/users/new' do
  erb :sign_up
end

# User comes from Sign up form
post '/users' do
  User.create(first_name: params[:user]["firstname"],
              last_name: params[:user]["lastname"],
              email: params[:user]["email"],
              password: params[:user]["password"])
  erb :sign_in
end

get '/sessions/new' do
  # render sign-in page
  erb :sign_in
end

post '/sessions' do
  # sign-in
  user = User.find_by(email: params[:email])
  if user && user.password == params[:password]
    login(user)
    redirect to('/')
  else
    @login_failed = true
    erb :sign_in
  end
end

delete '/sessions' do
  # sign-out -- invoked
  logout!
  erb :index
end
