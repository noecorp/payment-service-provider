'use strict';
var dataProvider = require('../../models/payment/returnResult.js');
/**
 * Operations on /payment/returnResult
 */
module.exports = {
    /**
     * summary: 
     * description: The url which payment provider will redirect to after payment finished
     * parameters: 
     * produces: application/json
     * responses: 200
     */
    get: function receivingPaymentResult(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.redirect(data.redirect_url);
        });
    }
};
