require 'rails_helper'

RSpec.describe "leads/show", :type => :view do
  before(:each) do
    @lead = assign(:lead, Lead.create!(
      :name => "Name",
      :email => "Email",
      :form_hash => 1,
      :stage => nil
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Email/)
    expect(rendered).to match(/1/)
    expect(rendered).to match(//)
  end
end
