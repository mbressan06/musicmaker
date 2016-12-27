class LeadsController < InheritedResources::Base

  def index
    [["etapa1": 100],["etapa2":50],["etapa3":10]]
    @leads = Lead.joins(:stage).group(:stage_id, "stages.name").pluck("stages.name, count(stages.id)")
  end

  def create
    Lead.create(params[:lead])
  end

  def update
    redirect_to leads.find(params[:id]).tap do |lead|
      lead.update_attributes!(lead_params)
    end
  end

  private
    # Using a private method to encapsulate the permissible parameters is just a good pattern
    # since you'll be able to reuse the same permit list between create and update. Also, you
    # can specialize this method with per-user checking of permissible attributes.
    def lead_params
      params.required(:lead).permit(:name, :email, :form_hash, :stage_id)
    end
end
