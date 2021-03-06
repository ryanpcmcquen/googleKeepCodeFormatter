/*! googleKeepCodeFormatter v0.6.2 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA

/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function () {
    'use strict';

    var nikeIt = function () {
        codeFormatter('.notranslate[contenteditable]');
    };

    document.addEventListener('DOMContentLoaded', function () {
        nikeIt();
    });
    window.addEventListener('load', function () {
        nikeIt();
    });
    window.addEventListener('blur', function () {
        nikeIt();
    });
    window.addEventListener('focus', function () {
        nikeIt();
    });
    window.addEventListener('focusin', function () {
        nikeIt();
    });
    window.addEventListener('focusout', function () {
        nikeIt();
    });

    nikeIt();
})();
