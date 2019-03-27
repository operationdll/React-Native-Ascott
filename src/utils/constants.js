export const system = {
    getTime: '/system/getTime'
}

//统一配置该模块下的 API 路径
export const Hello = {
	helloApi: '/appimg/getAvailableAppImg'
}

//首页接口
//HomePage
export const Home = {
    groupListUrl: '/group/getGroupList',
	groupDetailUrl: '/group/getGroupDetail',
	groupListbyIdUrl:'/hotellist/getEffectiveHotelList',
	homeUrl:'/hotellist/getHotelListDetail',
	hotelDetailUrl:'/hotellist/getHotelDetail',
	tabLanguageUrl:'/user/updateUserLang',
	newsUrl:'/push/getUserMsgList',
	getStaffAppMsgList:'/push/getStaffMsgList',
	showingorderUrl:'/showingorder/addShowingOrder',
	roomResListUrl:'/roomres/getHotelRoomTypeResList',
	rssUrl:'Rss/getHotelRssList',
	myBillUrl:'/UserBill/getUserBillList',
	helpUrl:'/Help/getGroupHelp',
	orderUrl:'/shoppingorder/getShoppingOrderList',
	changeOrderUrl:'/shoppingorder/changeOrderStatus',
	appUpdateUrl:'/AppVersion/getLatestAppVersionByPlatform',
	appStartUrl:'/appStartmsg/getEffectiveAppStartmsg',
	getHotelListUrl:'/hotellist/getHotelListList',
	//查看订单
	viewOrder:'/shoppingorder/getUserOrderList',
	//删除订单
	deleteOrder:'/shoppingorder/deleteorder',
	//验证是否设置pin码
	isSetPin:'/user/hasPin',
	//设置pin码
	setPin:'/user/setpin',
	//验证pin
	checkPin:'/user/checkPin',
	//查看订单物业
	getShoppingHotelList:'/shoppingorder/getShoppingHotelList',
	//员工获取订单信息
	getStaffOrderList:'/shoppingOrder/getStaffOrderList',
	//员工修改订单信息
	updateOrderProductById:'/shoppingorder/updateOrderProductById',
	//获取购物柜参数信息
	getShoppingBoxDetail:'/user/getShoppingBoxDetail',
	//物业统计
	hotelStatistics:'/log/homepage',
	//机器人控制位置集合
	getPositionList:'/service/getPositionList',
	//机器人控制送物
	deliverRobot:'/service/deliverRobot',
	//机器人控制取物
	robotSend:'/service/robotSend',
	//机器人控制召唤/引领
	callRobot:'/service/callRobot',
	//获取首页广告列表
	getHomeAdv:'/poi/getHomeAdv',
	//机器人控制返回充电桩
	robotBack:'/service/robotBack',
}

//登录接口
//Login
export const Login = {
	LoginUrl: '/user/login',
	staffLoginUrl:'/staff/login',
	getUsersUrl:'/staff/getStaffInfoByToken'
}

//功能
//Function
//1、翻译
//Translation
export const Translate = {
	//翻译结果获取
	translate:'/translate/translate',
	//翻译语言列表获取
    translateLanguageList:"/Translate/translateLanguageList"
}
//2、电话接口
//Phone
export const Phone = {
	hotelTelList:'/tel/getHotelTelList'
}

//促销优惠
//Promotion
export const Promotion = {
	//物业促销标签获取
    PromotionTagList:'/PromotionTag/getTagList',
	//物业促销列表获取
	PromotionList:'/promotion/getPromotionList',
	//物业新闻标签获取
	NewsTagList:'/NewsTag/getTagList',
	//物业新闻列表
	NewsList:'/news/getNewsList',
	//集团新闻标签获取
	GroupNewsTagList:'/GroupNewsTag/getTagList',
	//集团新闻列表
	GroupNewsList:'/GroupNews/getGroupNewsList',
	//集团活动标签列表
	GroupActivityTagList:'/GroupActivityTagList/getActivityTagList',
	//集团活动
    GroupActivityList:'/GroupActivity/getEffectiveActivityList',
	//集团通知
	GroupNoticeList:'/GroupNotice/getNoticList',
}

//社区生活
// Community life
export const Community = {
	//获取物业活动标签列表
	ActivityTagList:'/ActivityTag/getActivityTagList',
	//获取物业活动列表
	ActivityList:'/activity/getEffectiveActivityList',
	//获取物业活动详情
	getActivityDetail:'/activity/getActivityDetail',
	//物业活动报名
	ActivityOrder:'/activityOrder/addActivityOrder',
	//获取物业通知标签列表
	NoticTagList:'/NoticTag/getTagList',
	//获取物业通知列表
	NoticList:'/notic/getNoticList',
	//体验式购物标签列表
	ShoppingTagList:'/ShoppingTag/getShoppingTagList',
	//体验式购物列表
	ShoppingList:'/shopping/getShoppingList',
	//体验式购物提交订单
	ShoppingOrder:'/shoppingOrder/addShoppingOrder',
	//雅诗阁生活分类列表
	LifeTypeList:'/lifetype/getLifeTypeList',
	//雅诗阁生活列表
	LifeList:'/life/getLifeList',
	//意见反馈  物业调查问卷列表
	FeedbackList:'/FeedbackList/getFeedbackList',
	//物业调查问卷信息
	Feedback:'/feedback/getFeedbackList',
	//提交物业调查问卷
	FeedbackResult:'/feedbackResult/addFeedbackResult',
	//机器人洗衣服
	RobotSend:'/service/robotSend',
	//早餐机
	GetBreakFast:'/user/gettoken',
	//二级分类
	FirstTags:'/shoppingtag/getShoppingTagList',
	//添加订单
	addShoppingCart:'/shoppingorder/addshoppingcart',
}
//本地攻略
//Local Guide
export const Raiders = {
	//本地攻略类型列表
	PoiTypeList:'/poitype/getPoiTypeList',
	//本地攻略标签列表
	PoiTagList:'/PoiTag/getPoiTagList',
	//本地攻略列表
	PoiList:'/poi/getPoiList',
}

//评论
//Comment
export const Judge = {
    getPromotionCommentList:'/Comment/getPromotionCommentList', //促销
    getPoiCommentList:'/Comment/getPoiCommentList', //本地攻略
    getLifeCommentList:'/Comment/getLifeCommentList', //雅诗阁生活
	commitJudge:'/Comment/createPoiComment'
}