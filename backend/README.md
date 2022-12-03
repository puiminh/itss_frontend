- Chạy câu lệnh sau:

* bundle install : để cài đặt các gem cần thiết
* rake db:migrate : để migrate database và các bảng

- Các API hiện có:

* User

- GET: /api/v1/users: Lấy toàn bộ người dùng
- POST: /api/v1/users: Tạo một người dùng
  input: {
  name,
  email,
  account,
  password,
  birthday,
  role
  }
- GET /api/v1/user/:id : Lấy người dùng có id = :id
- PUT /api/v1/user/:id : Cập nhật người dùng có id = :id
  input: {
  name,
  email,
  account,
  password,
  birthday,
  role
  }

* Course

- GET /api/v1/courses : Lấy toàn bộ khóa học
- GET /api/v1/courses/:id : Lấy khóa học có id = :id
- GET /api/v1/courses/details/:id : Lấy khóa học có id = :id với nội dung của nó
- POST /api/v1/courses : Tạo một khóa học
  input: {
  name,
  author,
  description
  }
- POST /api/v1/courses/details/:id : Tạo một nội dung cho khóa học có id = :id
  input: {
  word,
  mean,
  video,
  image
  }
- DELETE /api/v1/courses/:id : Xóa một khóa học có id = :id
