enable :sessions

# User goes to Sign up form
get '/signup' do
  erb :signup
end

# User comes from Sign up form
post '/signup' do
  User.create(first_name: params[:user]["firstname"],
              last_name: params[:user]["lastname"],
              email: params[:user]["email"],
              password: params[:user]["password"])
  erb :login
end

get '/login' do
  # render sign-in page
  erb :login
end

post '/login' do
  # sign-in
  @user = User.find_by(email: params[:email])
  if @user && @user.password == params[:password]
    login(@user)
    # redirect to('/dashboard')
    erb :dashboard
  else
    @login_failed = true
    erb :login
  end
end

delete '/logout' do
  # sign-out -- invoked
  logout!
  redirect '/'
end
