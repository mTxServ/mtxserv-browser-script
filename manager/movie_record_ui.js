// ==UserScript==
// @name         Movie Record UI
// @namespace
// @description  Remove useless blocs on manager to record movies
// @author       mTxServ
// @version      1
// @match        https://mtxserv.com/fr/manager
// @copyright	 mTxServ
// ==/UserScript==

$(document).ready(function() {
  setTimeout(function() {
    $("<style type='text/css'> .swal2-popup .swal2-title { display: none; } </style>").appendTo("head");

    $('#game-console').css('overflow-x', 'hidden');
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-4.col-sm-12 > div:nth-child(3) > div.portlet-body > table > tbody > tr:nth-child(2)').remove();
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div.page-head > div > h1 > span, #app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-4.col-sm-12 > div:nth-child(3) > div.portlet-body > table > tbody > tr:nth-child(1) > td.text-right > small').text('GAME-FR-1337.MTXSERV.COM:27510');
    $('#navbar-collapse-manager > div').hide(); // extend contract (sidebar)
    $('#header').hide(); // header
    $('#monitor-bottom').hide(); // live console on botom
    $('.manager-discord-widget, .darkmode-toggle').hide(); // discord widget + darkmode widget
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-4.col-sm-12 > div.note.note-info').hide(); // topserveur
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-8.col-sm-12 > div > div > ng-include > div:nth-child(2)').hide(); // howto (text)
  }, 5000);
});
