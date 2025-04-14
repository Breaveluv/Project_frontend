let users = JSON.parse(localStorage.getItem("users")) || [];
console.log("Danh sách người dùng:", users);

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    let findUser = users.find(
      (user) => user.email === username && user.password === password
    );

    console.log("Người dùng tìm thấy:", findUser);

    if (findUser) {
      Swal.fire("Thành công", "Đăng nhập thành công!", "success").then(
        () => {
          localStorage.setItem("currentUser", JSON.stringify(findUser));
          window.location.href = "category_manager.html";
        }
      );
    } else {
      Swal.fire("Lỗi", "Email hoặc mật khẩu không đúng!", "error");
    }
  });