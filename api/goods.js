export default class Goods {
	constructor(url) {
	    this.url = `${url}/api/goods`
	}
	
	/**
	 * @param {Object} data 包括长度和一些筛选字段
	 */
	getGoodsList(data) {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.url}/getGoodsList`,
				method: 'GET',
				success: (res) => {
					if(res.statusCode === 200) {
						resolve(res.data)
					}else {
						reject(res.statusCode);
					}
				},
				fail: (e) => {
					reject(e)
				}
			})
		}) 
	}
	/**
	 * banner 列表
	 */
	getBanner() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.url}/getBanner`,
				success: (res) => {
					if(res.statusCode === 200) {
						resolve(res.data)
					}else {
						reject(res.statusCode)
					}
				},
				fail:(e) => {
					reject(e) 
				}
			})
		})
	}
	/**
	 * 推荐列表
	 */
	getRecom() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.url}/getRecom`,
				success: (res) => {
					if(res.statusCode === 200) {
						resolve(res.data)
					}else {
						reject(res.statusCode)
					}
				},
				fail: (e) => {
					reject(e)
				}
			})
		})
	}
	
	getCategoryList() {
		return new Promise((resolve, reject) => {
			uni.request({
				url: `${this.url}/getGoodsCategory`,
				method: 'GET',
				success:(res) => {
					if(res.statusCode == 200) {
						resolve(res.data)
					}else {
						reject(res.statusCode)
					}
				},
				fail(e) {
					resolve(e)
				}
			})
		})
	}
	
}