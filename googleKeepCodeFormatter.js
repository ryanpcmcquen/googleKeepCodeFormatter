/*! googleKeepCodeFormatter v0.2.0 by ryanpcmcquen */
//
// Ryan P. C. McQuen | Everett, WA | ryanpcmcquen@member.fsf.org

/*global window, codeFormatter, PR*/
/*jslint browser:true*/

(function () {

    "use strict";

    var nikeIt = function () {
        codeFormatter(".notranslate");
        // Syntax highlight after the markup:
        PR.prettyPrint();
    };

    window.addEventListener("load", function () {
        nikeIt();
    });
    window.addEventListener("blur", function () {
        nikeIt();
    });
    window.addEventListener("focus", function () {
        nikeIt();
    });
    window.addEventListener("focusin", function () {
        nikeIt();
    });
    window.addEventListener("focusout", function () {
        nikeIt();
    });

}());
