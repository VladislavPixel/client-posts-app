const posts = [
	{
		id: "32424",
		title: "JavaScript top language",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "678",
		title: "React",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "45654",
		title: "Go — компилируемый многопоточный язык программирования",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "98023",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "0000657",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 1
	},
	{
		id: "57687989888",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 1
	},
	{
		id: "9076867uytu",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "kkkkkk8777",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 1
	},
	{
		id: "888777",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 1
	},
	{
		id: "324240",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "6789",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "456548",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "980237",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "00006576",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 2
	},
	{
		id: "576879898885",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 2
	},
	{
		id: "9076867uytu4",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "kkkkkk87773",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 2
	},
	{
		id: "8887772",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 2
	},
	{
		id: "324241",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "67800",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "4565499",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "9802388",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "000065777",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 3
	},
	{
		id: "5768798988866",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 3
	},
	{
		id: "9076867uytu55",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "kkkkkk877744",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 3
	},
	{
		id: "88877733",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 3
	},
	{
		id: "32424mm",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "678nn",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "45654bb",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "98023vv",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "0000657cc",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 4
	},
	{
		id: "57687989888xx",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 4
	},
	{
		id: "9076867uytuzz",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "kkkkkk8777ll",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 4
	},
	{
		id: "888777kk",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 4
	},
	{
		id: "324240jj",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "6789hh",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "456548gg",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "980237ff",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "00006576dd",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 5
	},
	{
		id: "576879898885ss",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 5
	},
	{
		id: "9076867uytu4aa",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "kkkkkk87773pp",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 5
	},
	{
		id: "8887772oo",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 5
	},
	{
		id: "324241ii",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "67800uu",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "4565499yy",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "9802388tt",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "000065777rr",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: [],
		group: 6
	},
	{
		id: "5768798988866ee",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 6
	},
	{
		id: "9076867uytu55ww",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687", "546qwe", "546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "kkkkkk877744qq",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["546xvmnb", "poi456"],
		group: 6
	},
	{
		id: "88877733qqqq",
		title: "Lorem ipsum dolor sit amet",
		created: "1454357657",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit fdgfdgd gdfgfdgd dfgfdg dfgfdg dfgfdg paint fdgvcbvcwerqeq dfgnbmnbzzx retu fdgcvbvb",
		userId: "13435768bvn",
		commented: ["fdg687"],
		group: 6
	}
]

const comments = [
	{
		id: "dfgdfgdfg9991",
		username: "Славян",
		content: "Вот это мега крутой пост) Просто топ!",
		userId: "5556667770",
		postId: "32424"
	},
	{
		id: "dfgdfgdfgtryyut2",
		username: "Виталик",
		content: "Вот это мега крутой пост) Просто топ!",
		userId: "5556667771",
		postId: "32424"
	},
	{
		id: "dfgdfgdfgсми3",
		username: "Максим",
		content: "Вот это мега крутой пост) Просто топ!",
		userId: "5556667772",
		postId: "32424"
	},
	{
		id: "dfgdfgdfgапрар4",
		username: "Миша",
		content: "Вот это мега крутой пост) Просто топ!",
		userId: "5556667774",
		postId: "32424"
	}
]

export { comments }
export default posts