# Home
get '/' do
  @users = User.all
  @journals = Journal.all
  erb :index
end

get '/home' do
  @user = User.find(current_user.id)
  erb :home
end

# New entry
get '/new' do
  erb :new
end

# Clicked on a post to edit
get '/post/:id' do
  @journal = Journal.find(params[:id])
  erb :edit
end

# Edited a post, saving it
put '/edit' do
  note = Journal.find(params[:id])
  note.content = params[:content]
  note.save
  redirect '/home'
end

delete '/edit' do # Why don't I need to add :id here?
  note = Journal.find(params[:id])
  note.delete
  redirect '/' #What's the difference between this and erb :index
end

# Came from new post, creating it
post '/new' do
  Journal.create(content: params[:content])
  redirect '/home'
end

