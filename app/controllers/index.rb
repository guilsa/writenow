# Home
get '/' do
  @notes = Note.all
  erb :index
end

# New entry
get '/new' do
  erb :new
end

# Clicked on a post to edit
get '/post/:id' do
  @post = Note.find(params[:id])
  erb :edit
end

# Edited a post, saving it
put '/edit' do
  note = Note.find(params[:id])
  note.content = params[:content]
  note.save
  redirect '/'
end

delete '/edit' do # Why don't I need to add :id here?
  note = Note.find(params[:id])
  note.delete
  redirect '/' #What's the difference between this and erb :index
end

# Came from new post, creating it
post '/new' do
  Note.create(content: params[:content])
  redirect '/'
end

