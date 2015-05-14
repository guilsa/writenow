# Home
get '/' do
  @users = User.all
  @journals = Journal.all
  erb :index
end

get '/dashboard' do
  @user = User.find(current_user.id)
  erb :dashboard
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
  redirect '/dashboard'
end

delete '/edit' do # Why don't I need to add :id here?
  note = Journal.find(params[:id])
  note.delete
  redirect '/dashboard' #What's the difference between this and erb :index
end

# Came from new post, creating it
post '/new' do
  Journal.create(content: params[:content], user_id: current_user.id)
  redirect '/dashboard'
end

get '/streak' do

  # Found out that I can call self from console and see a JSON full of Rack instance variables I can access.

  if request.xhr?
    current_user = User.find(1)

    all_journals = current_user.journals
    array = []
    all_journals.each do |journal|
      t = journal.created_at
      t = Date.parse(t.to_s).to_s
      array << { 'date' => t, 'goal' => journal.goal.to_s }
    end
    binding.pry
    return array.to_json
  end

end

