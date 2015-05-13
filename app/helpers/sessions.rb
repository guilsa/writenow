helpers do
  def login(user)
    session[:user_id] = user.id
  end

  def logout!
    session.clear
  end

  def logged_in?
    !!current_user
  end

  def current_user
    if session[:user_id] then
      @current_user ||= User.where(id: session[:user_id]).first
    end
  end
end
