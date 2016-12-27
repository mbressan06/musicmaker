require 'rails_helper'

RSpec.describe "leads/edit", :type => :view do
  before(:each) do
    @lead = assign(:lead, Lead.create!(
      :name => "MyString",
      :email => "MyString",
      :form_hash => 1,
      :stage => nil
    ))
  end

  it "renders the edit lead form" do
    render

    assert_select "form[action=?][method=?]", lead_path(@lead), "post" do

      assert_select "input#lead_name[name=?]", "lead[name]"

      assert_select "input#lead_email[name=?]", "lead[email]"

      assert_select "input#lead_form_hash[name=?]", "lead[form_hash]"

      assert_select "input#lead_stage_id[name=?]", "lead[stage_id]"
    end
  end
end
