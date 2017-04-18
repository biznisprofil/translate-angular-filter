
(function () {
var app = angular.module('customModule');
    app.filter('translate', function () {

        return function (word) {

            function filter(letter) {
                switch (letter) {
                    case 'ć':
                    case 'č':
                        return 'c';
                    case 'Ć':
                    case 'Č':
                        return 'C';
                    case 'ž':
                        return 'z';
                    case 'Ž':
                        return 'Z';
                    case 'đ':
                        return 'd';
                    case 'Đ':
                        return 'D';
                    case 'š':
                        return 's';
                    case 'Š':
                        return 'S';
                    default:
                        return letter;
                }
            }
            var translate = '', i, len;

            for (i = 0, len = word.length; i < len; i = i + 1) {
                translate = translate + filter(word.charAt(i));
            }

            return translate;
        }
    })
}());