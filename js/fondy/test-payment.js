var Options = {
	options: {
		methods: ['card', 'banklinks_eu', 'wallets', 'local_methods'],
		methods_disabled: [],
		card_icons: ['mastercard', 'visa'],
		active_tab: 'card',
		fields: false,
		title: 'Оплата курсу TikTok Tuning "Basic"',
		link: 'http://ladytuning.com/',
		full_screen: true,
		button: true,
		//locales: ['uk'],
		email: true,
		api_domain: 'pay.fondy.eu'
	},
	params: {
		merchant_id: 1533198,
		order_desc: 'Оплативши цей курс, вам відкриваються широкі можливості стати тікток зіркою!',
		signature: '',
		amount: 100,
		currency: 'UAH',
		version: '1.0.1',
		//response_url: 'http://ladytuning.com/',
		//server_callback_url: 'http://ladytuning.com/',
		required_rectoken: 'y',
		//verification: 'y',
		//verification_type: 'code',
		email: 'thesinsoul@gmail.com',
		token: ''
	}
}
fondy("#checkout-container", Options);
// var app = fondy("#checkout-container", Options)
//   .$on("success", function(model) {
//     console.log("success event handled");

//     var order_status = model.attr("order.order_data.order_status");

//     if (order_status == "approved") {
//       console.log("Order is approved. Do somethng on approve...");
//     }
//   })
//   .$on("error", function(model) {
//     console.log("error event handled");
//     var response_code = model.attr("error.code");
//     var response_description = model.attr("error.message");
//     console.log(
//         "Order is declined: " +
//           response_code +
//           ", description: " +
//           response_description
//       );
//   });