# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_06_105553) do
  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.integer "user_id", null: false
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_comments_on_course_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "course_details", force: :cascade do |t|
    t.string "word"
    t.string "mean"
    t.string "video"
    t.string "image"
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_course_details_on_course_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "author"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "progresses", force: :cascade do |t|
    t.float "progress_now"
    t.integer "user_id", null: false
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_progresses_on_course_id"
    t.index ["user_id"], name: "index_progresses_on_user_id"
  end

  create_table "register_infos", force: :cascade do |t|
    t.datetime "register_date"
    t.integer "status"
    t.integer "user_id", null: false
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_register_infos_on_course_id"
    t.index ["user_id"], name: "index_register_infos_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.text "content"
    t.integer "star"
    t.integer "user_id", null: false
    t.integer "course_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_reviews_on_course_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "account"
    t.string "password"
    t.datetime "birthday"
    t.integer "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "comments", "courses"
  add_foreign_key "comments", "users"
  add_foreign_key "course_details", "courses"
  add_foreign_key "progresses", "courses"
  add_foreign_key "progresses", "users"
  add_foreign_key "register_infos", "courses"
  add_foreign_key "register_infos", "users"
  add_foreign_key "reviews", "courses"
  add_foreign_key "reviews", "users"
end
