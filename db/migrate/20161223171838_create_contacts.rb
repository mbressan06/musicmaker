class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.string :surname
      t.string :first_name
      t.string :last_name
      t.string :email
      t.integer :phone
      t.integer :mobile
      t.text :comment
      t.date :birthdate
      t.string :document
      t.string :document_type

      t.timestamps
    end
  end
end
