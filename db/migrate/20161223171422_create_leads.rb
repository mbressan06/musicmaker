class CreateLeads < ActiveRecord::Migration
  def change
    create_table :leads do |t|
      t.string :surname
      t.string :email
      t.text :form_hash

      t.timestamps
    end
  end
end
