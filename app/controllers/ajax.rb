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

get '/wordcount' do

  if request.xhr?
    current_user = User.find(1)
    current_user.jowordcount

  end

end

put '/:day' do
  if request.xhr?
    journal = Journal.find_by(day: params[:day])
    journal.content = params[:content]
    journal.word_count = params[:wordcount]
    journal.save
  end

end
