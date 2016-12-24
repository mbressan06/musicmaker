class LeadController < ApplicationController
  def new
    @lead = Lead.new
  end

  def index
    @lead = Lead.all
  end

  def show
    @lead = Lead.find(params[:id])
  end

  # This action uses POST parameters. They are most likely coming
  # from an HTML form which the user has submitted. The URL for
  # this RESTful request will be "/leads", and the data will be
  # sent as part of the request body.
  def create
    @lead = Lead.new(params[:lead])
    if @lead.save
      redirect_to @lead
    else
      # This line overrides the default rendering behavior, which
      # would have been to render the "create" view.
      render "new"
    end
  end
end
