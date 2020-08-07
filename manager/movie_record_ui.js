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
    $('#monitor-bottom').hide();
    $('.manager-discord-widget, .darkmode-toggle').hide();
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-4.col-sm-12 > div.note.note-info').hide();
    $('#app-container > div.page-container > div.page-content-wrapper > div > div > div:nth-child(3) > div > div.col-md-8.col-sm-12 > div > div > ng-include > div:nth-child(2)').hide();
  }, 5000);
});
