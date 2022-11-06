class CreateRegisterInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :register_infos do |t|
      t.datetime :register_date
      t.integer :status
      t.references :user, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
