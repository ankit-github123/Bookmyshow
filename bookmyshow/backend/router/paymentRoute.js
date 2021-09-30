require("dotenv").config();
const express = require("express");
const router = express.Router();
const PaytmChecksum = require("../PaytmChecksum");
const { v4: uuidv4 } = require("uuid");

router.post("/payment", (req, res) => {


 const {amount, email} = req.body;

 const totalAmount = JSON.stringify(amount);
  /* import checksum generation utility */
  var params = {};

  /* initialize JSON String */

  params['MID'] = process.env.PAYTM_MID,
  params['WEBSITE'] = process.env.PAYTM_WEBSITE,
  params['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
  params['INDUSTRY_TYE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
  params['ORDER_ID'] = uuidv4(),
  params['CUST_ID'] = '23re4334',
  params['TXN_AMOUNT'] = totalAmount,
  params['CALLBACK_URL'] = 'http://localhost:4001/api/callback',
  params['EMAIL'] = email,
  params['MOBILE_NO'] = '9999999999'


  /**
   * Generate checksum by parameters we have
   * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
   */
  var paytmChecksum = PaytmChecksum.generateSignature(
    params,
    process.env.PAYTM_MKEY
  );
  paytmChecksum
    .then(function (result) {
     console.log("generateSignature Returns: " + result);
     let paytmParams = {
        ...params,
        "CHECKSUMHASH" : result
     }
      
     res.json(paytmParams);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = router;
