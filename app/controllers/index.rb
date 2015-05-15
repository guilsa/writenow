# Home
get '/' do
  @users = User.all
  @journals = Journal.all
  erb :index
end

get '/dashboard' do
  if current_user
    @user = User.find(current_user.id)
    erb :dashboard
  else
    redirect '/login'
  end
end

# New entry
get '/new' do
  erb :new
end

#### TEMPORARY SHOULD REMOVE SOON
# Edited a post, saving it
put '/edit' do
  journal = Journal.find_by(____)
  journal.content = params[:content]
  journal.save
  redirect '/dashboard'
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
    # binding.pry
    # return array.to_json
  end

end

# Clicked on a post to edit
get '/:day' do
  @journal = Journal.find_by(day: params[:day])
  erb :edit
end


# A journal cannot be deleted
# delete '/edit' do
#   binding.pry
#   journal = Journal.find_by(day: params[:id])
#   journal.delete
#   redirect '/dashboard' #What's the difference between this and erb :index
# end
