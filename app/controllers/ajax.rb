# Found out that I can call self from console and see a JSON full of Rack instance variables I can access.

get '/getgoals' do
  if request.xhr?
    # current_user = User.find(1)
    current_user = User.find(current_user.id)
    all_journals = current_user.journals.order(id: :asc)
    array = []
    all_journals.each do |journal|
      t = journal.created_at
      t = Date.parse(t.to_s).to_s
      array << { 'date' => t, 'goal' => journal.goal.to_s }
    end
    content_type :json

    array.to_json
  end
end

put '/:day' do
  if request.xhr?
    journal = Journal.find_by(day: params[:day])
    journal.content = params[:content]
    journal.title = params[:title]
    journal.word_count = params[:wordcount]
    journal.save
  else
    journal = Journal.find_by(day: params[:day])
    journal.content = params[:content]
    journal.title = params[:title]
    journal.word_count = params[:wordcount]
    journal.save
    redirect '/dashboard'
  end

end
