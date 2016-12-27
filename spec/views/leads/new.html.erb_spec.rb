require 'rails_helper'

RSpec.describe "leads/new", :type => :view do
  before(:each) do
    assign(:lead, Lead.new(
      :name => "MyString",
      :email => "MyString",
      :form_hash => 1,
      :stage => nil
    ))
  end

  it "renders new lead form" do
    render

    assert_select "form[action=?][method=?]", leads_path, "post" do

      assert_select "input#lead_name[name=?]", "lead[name]"

      assert_select "input#lead_email[name=?]", "lead[email]"

      assert_select "input#lead_form_hash[name=?]", "lead[form_hash]"

      assert_select "input#lead_stage_id[name=?]", "lead[stage_id]"
    end
  end
end
