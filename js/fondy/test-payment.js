var Options = {
	options: {
		methods: ['card', 'banklinks_eu', 'wallets', 'local_methods'],
		methods_disabled: [],
		card_icons: ['mastercard', 'visa', 'maestro'],
		active_tab: 'card',
		fields: false,
		title: 'Demo checkout',
		link: 'https://shop.com',
		full_screen: true,
		button: true,
		email: true
	},
	params: {
		merchant_id: 1396424,
		required_rectoken: 'y',
		currency: 'UAH',
		amount: 50,
		order_desc: 'Demo order'
	}
}
fondy("#checkout-container", Options);