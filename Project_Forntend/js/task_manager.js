
    
      function switchpage() {
       
        window.location.href = "./category_manager.html"; 
      }
      function out() {
        Swal.fire({
          title: "Bạn chắc chắn muốn đăng xuất?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Đăng xuất",
          cancelButtonText: "Hủy",
        }).then((result) => {
          if (result.isConfirmed) {
           
            window.location.href = "login1.html"; 
          }
        });
      }
    
      document.addEventListener("DOMContentLoaded", () => {
        const categoryRows = document.querySelectorAll(
          ".task-table tbody tr.task-category"
        );

        categoryRows.forEach((headerRow) => {
   
          const group = headerRow.dataset.group;
          const items = document.querySelectorAll(
            `.task-table tbody tr.task-item.${group}`
          );
          if (headerRow.classList.contains("collapsed")) {
            items.forEach((item) => item.classList.add("hidden"));
          }

       
          headerRow.addEventListener("click", () => {
         
            headerRow.classList.toggle("collapsed");

            items.forEach((item) => {
              item.classList.toggle("hidden");
            });
          });
        });
      });
    