(function (window, angular) {
    "use strict";

    /**
     * @ngdoc           filter
     * @name            percentage
     *
     * @param {number}  input       any number, decimal, or fraction. Note: fractions passed as strings are not accepted
     *                              and will result in an empty ('') return value.
     * @param {int}     decimals    (optional) number of decimal places to use. Default is 3.
     * @param {string}  symbol      (optional) symbol character to append to formatted value. Default is '%'.
     * @returns {string}            Percentage value appended with passed suffix.
     *
     * @description     Outputs the given parameter as a percentage.
     *                  For e.g., 0.5, 1/2 or .5 will be formatted to 50%.
     * @example
     <example>
     <p>{{data.amount | percentage}}</p>
     </example>
     *
     */
    angular.module('filters.percentage', [])
        .filter('percentage', function () {
            return function (input, decimals, suffix) {
                decimals = angular.isNumber(decimals) ? decimals :  3;
                suffix = suffix || '%';
                input = Number(input);
                if (Number.isNaN(input)) {
                    return '';
                }

                return Math.round(input * Math.pow(10, decimals + 2))/Math.pow(10, decimals) + suffix;
            };
        });
})(window, window.angular);