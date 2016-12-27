class CreateLeads < ActiveRecord::Migration
  def change
    create_table :leads do |t|
      t.string :name
      t.string :email
      t.integer :form_hash
      t.references :stage, index: true


      t.timestamps
    end
  end
end
