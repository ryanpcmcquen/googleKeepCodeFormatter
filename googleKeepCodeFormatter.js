/*! googleKeepCodeFormatter v0.5.2 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA

/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function() {
    'use strict';

    var nikeIt = function() {
        codeFormatter('.notranslate[contenteditable]');
        // After several rejections from add-on stores
        // complaining about files inside of Google
        // Prettify, I have decided to remove it
        // from this project.
        //PR.prettyPrint();
    };

    document.addEventListener('DOMContentLoaded', function() {
        nikeIt();
    });
    window.addEventListener('load', function() {
        nikeIt();
    });
    window.addEventListener('blur', function() {
        nikeIt();
    });
    window.addEventListener('focus', function() {
        nikeIt();
    });
    window.addEventListener('focusin', function() {
        nikeIt();
    });
    window.addEventListener('focusout', function() {
        nikeIt();
    });

    nikeIt();
})();
