class CreateCourseDetails < ActiveRecord::Migration[7.0]
  def change
    create_table :course_details do |t|
      t.string :word
      t.string :mean
      t.string :video
      t.string :image
      t.references :course, null: false, foreign_key: true

      t.timestamps
    end
  end
end
