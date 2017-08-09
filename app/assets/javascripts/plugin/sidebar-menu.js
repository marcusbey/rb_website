// var main = function() {
//   /* Push the body and the nav over by 285px over */
//   $('#menu-sidebar-list-icon').click(function() {
//     $('.pushmenu-right').animate({
//       right: "0px"
//     }, 200);

//     $('.banner').animate({
//       left: "0px"
//     }, 200);
//   });

//   /* Then push them back */
//   $('#menu-sidebar-close-icon').click(function() {
//     $('.pushmenu-right').animate({
//       right: "0px"
//     }, 200);

//     $('.banner').animate({
//       left: "0px"
//     }, 200);
//   });
// };


// $(document).ready(main);




// ==============================================
// Right Sidemenu Bar
// ==============================================
$(document).ready(function () {
    $menuSidebar = $('.pushmenu-right');
    $menusidebarNav = $('#menu-sidebar-list-icon');
    $menuSidebarclose = $('#menu-sidebar-close-icon');

    //sidebar menu navigation icon toggle
    $menusidebarNav.click(function () {
        $(this).toggleClass('active');
        $('.pushmenu-push').toggleClass('pushmenu-push-toleft pushmenu-active');
        $menuSidebar.toggleClass('pushmenu-open');


    });

    //sidebar menu close icon
    $menuSidebarclose.click(function () {
        $menusidebarNav.removeClass('active');
        $('.pushmenu-push').removeClass('pushmenu-push-toleft');
        $menuSidebar.removeClass('pushmenu-open');

    });

    //Window Click Sidemenu Hide
    $('html').click(function (sMenuOutsite) {
        // Then find a target: element you clicked on.
        var target = $(sMenuOutsite.target);

        // Close your sidebar only if you clicked outside of this sidebar:
        if ((target.closest($menusidebarNav).length === 0) && (target.closest($menuSidebarclose).length === 0) && (target.closest('.pushmenu').length === 0)) {
            $menusidebarNav.removeClass('active');
            $('.pushmenu-push').removeClass('pushmenu-push-toleft');
            $menuSidebar.removeClass('pushmenu-open')
        }
    });

    if ($(document).find('#pushmenu-right').hasClass('pushmenu')) {
        $('body').addClass('pushmenu-push pushmenu-push-left');
        $('body').removeClass('pushmenu-push-right');
    }

});


