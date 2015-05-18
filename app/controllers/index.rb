# Home
get '/' do
  @users = User.all
  @journals = Journal.all
  erb :index
end

get '/dashboard' do
  @users = User.all
  if current_user
    @user = User.find(current_user.id)
    erb :dashboard
  else
    redirect '/login'
  end
end

# New entry
# get '/new' do
#   erb :new
# end

#### TEMPORARY SHOULD REMOVE SOON
# Edited a post, saving it
# put '/edit' do
#   journal = Journal.find_by(____)
#   journal.content = params[:content]
#   journal.save
#   redirect '/dashboard'
# end

# # Came from new post, creating it
# post '/new' do
#   Journal.create(content: params[:content], user_id: current_user.id)
#   redirect '/dashboard'
# end

post '/:day' do
  binding.pry
  Journal.create(day: params[:day],
                 content: params[:content],
                 user_id: current_user.id)
  redirect '/dashboard'
end
