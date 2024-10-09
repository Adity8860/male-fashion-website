// $(document).ready(function () {
//     $("a").on("click", function (event) {
//       if (this.hash !== "") {
//         event.preventDefault();
  
//         var hash = this.hash;
//         $("html, body").animate(
//           {
//             scrollTop: $(hash).offset().top,
//           },
//           800,
//           function () {
//             window.location.hash = hash;
//           }
//         );
//       }
//     });
//   });
  
//   $(".menu-items a").click(function () {
//     $("#checkbox").prop("checked", false);
//   });


document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll("a");
    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                let hash = this.hash;
                let target = document.querySelector(hash);
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
                window.location.hash = hash;
            }
        });
    });

    let menuItems = document.querySelectorAll(".menu-items a");
    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {
            document.getElementById("checkbox").checked = false;
        });
    });
});
