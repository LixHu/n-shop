import Goods from './goods'
import User from './user'

const apiUrl = 'http://n-shop-back.test'
export default class Api {
	constructor() {
		this.api = apiUrl
		this.user = new User(this.api)
		this.goods = new Goods(this.api)
	}
}