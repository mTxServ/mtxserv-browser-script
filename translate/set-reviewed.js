// ==UserScript==
// @name         Translate reviewer
// @version      0.1
// @match        https://translate.mtxserv.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    $(document).ready(function() {
        $('#wl-navbar-main > ul:first-child').append('<li id="set-all-reviewer"><a style="font-weight: bold; text-transform: uppercase;">Set reviewed</a></li>');
        $('#set-all-reviewer').on('click', function(e) {
            e.preventDefault()
            $('.review_radio[value=30]').click();
        });
    });
})();
