export function shareMessage(thumbnail, title, description, url) {
	const Url = 'https://dapper-blancmange-23af79.netlify.app' + url;
	Kakao.Share.sendDefault({
		objectType: 'feed',
		content: {
			title: title,
			description: description,
			imageUrl: thumbnail,
			link: {
				mobileWebUrl: Url,
				webUrl: Url,
			},
		},
		buttons: [
			{
				title: '상품 보러가기',
				link: {
					mobileWebUrl: Url,
					webUrl: Url,
				},
			},
		],
		installTalk: true,
	});
}
