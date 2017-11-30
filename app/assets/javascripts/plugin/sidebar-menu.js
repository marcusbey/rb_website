
// ==============================================
// Right Sidemenu Bar
// ==============================================
    $menuSidebar = $('#pushmenu-right');
    $menusidebarNav = $('#menu-sidebar-list-icon');
    $menuSidebarclose = $('#menu-sidebar-close-icon');
    $pageBanner = $('.banner-container');

window.onload = function () {
    $menusidebarNav.removeClass('active');
    $('.pushmenu-push').animate({duration: 2000}).removeClass('pushmenu-push-toleft');
    $menuSidebar.removeClass('pushmenu-open');
    $pageBanner.css({'right': '0'});
    $menusidebarNav.fadeIn('slow').removeClass('hidden');
  };


$(document).ready(function () {

    //sidebar menu navigation icon toggle
    $menusidebarNav.click(function () {
        $(this).toggleClass('active');
        $(this).toggleClass('hidden');
        $('.pushmenu-push').toggleClass('pushmenu-push-toleft pushmenu-active');
        $menuSidebar.toggleClass('pushmenu-open');
        $menuSidebarclose.removeClass('hidden');

    });



    //sidebar menu close icon
    $menuSidebarclose.click(function () {
        $menusidebarNav.removeClass('active');
        $menuSidebarclose.toggleClass('hidden');
        $('.pushmenu-push').removeClass('pushmenu-push-toleft');
        $menuSidebar.removeClass('pushmenu-open');
        $menusidebarNav.fadeIn('slow').removeClass('hidden');
    });

    //Window Click Sidemenu Hide
    $('html').click(function (sMenuOutsite) {
        // Then find a target: element you clicked on.
        var target = $(sMenuOutsite.target);

        // Close your sidebar only if you clicked outside of this sidebar:
        if ((target.closest($menusidebarNav).length === 0) && (target.closest($menuSidebarclose).length === 0) && (target.closest('.pushmenu').length === 0)) {
            $menusidebarNav.removeClass('active');
            $('.pushmenu-push').removeClass('pushmenu-push-toleft');
            $menuSidebar.removeClass('pushmenu-open');
            $menusidebarNav.fadeIn('slow').removeClass('hidden');
        }


    });

    if ($(document).find('#pushmenu-right').hasClass('pushmenu')) {
        $('body').addClass('pushmenu-push pushmenu-push-left');
        $('body').removeClass('pushmenu-push-right');
    }

});


