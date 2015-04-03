class ApplicationController < ActionController::Base
  protect_from_forgery

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end

  def require_not_logged_in
    redirect_to root_url if logged_in?
  end

  def login!
    @user.reset_session_token!
    session[:session_token] = @user.session_token
  end
end
