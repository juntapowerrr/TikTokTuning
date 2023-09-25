// getSignature(merchant_id, PaymentKey, params: any) {
//     params.merchant_id = merchant_id;
    
//     const sortedKeys = Object.keys(params).sort();

//     params.PaymentKey = PaymentKey;
//     sortedKeys.unshift('PaymentKey')

//     const concatenatedParams = sortedKeys.map(key => params[key]).join('|');

//     return sha1(concatenatedParams);
// }