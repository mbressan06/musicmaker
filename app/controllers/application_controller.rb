class ApplicationController < ActionController::Base
  include Authentication

  protect_from_forgery

  before_action :set_locale

  def set_locale
    I18n.locale = params[:locale] || I18n.default_locale
  end
end
