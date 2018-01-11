# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180108091201) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_roles", force: :cascade do |t|
    t.string   "code",                    comment: "角色代码"
    t.string   "title",                   comment: "角色名称"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_user_logs", force: :cascade do |t|
    t.string   "ip",                      comment: "登录ip"
    t.integer  "user_id",                 comment: "用户ID"
    t.string   "username",                comment: "用户名称"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_user_role_relations", force: :cascade do |t|
    t.string   "user_id",                 comment: "用户id"
    t.string   "role_id",                 comment: "角色id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "admin_users", force: :cascade do |t|
    t.string   "code",                                           comment: "用户编号"
    t.string   "username",                                       comment: "用户名"
    t.string   "account",                                        comment: "账户"
    t.string   "password_hash",        default: "", null: false
    t.integer  "state",                                          comment: "用户状态 1:正常 2:冻结 3:注销"
    t.datetime "created_at",                        null: false
    t.datetime "updated_at",                        null: false
    t.string   "authentication_token"
  end

  create_table "article_contents", force: :cascade do |t|
    t.string   "no",                      comment: "正文编号"
    t.text     "content",                 comment: "正文内容"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "article_mains", force: :cascade do |t|
    t.string   "no",                      comment: "文章编号"
    t.string   "title",                   comment: "文章标题"
    t.string   "author",                  comment: "作者名称"
    t.string   "author_id",               comment: "作者用户id"
    t.integer  "content_id",              comment: "文章正文关联id"
    t.integer  "comment_id",              comment: "评论关联id"
    t.integer  "good",                    comment: "赞"
    t.integer  "bad",                     comment: "踩"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "articles", force: :cascade do |t|
    t.string   "no",                      comment: "文章编号"
    t.string   "title",                   comment: "文章标题"
    t.string   "author",                  comment: "作者名称"
    t.string   "author_id",               comment: "作者用户id"
    t.integer  "content_id",              comment: "文章正文关联id"
    t.integer  "comment_id",              comment: "评论关联id"
    t.integer  "good",                    comment: "赞"
    t.integer  "bad",                     comment: "踩"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
