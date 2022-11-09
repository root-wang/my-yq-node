export enum Title {
  myDaKa            = '我的打卡',
  myQingJia         = '我的请假',
  staySchoolRequest = '假期留（离）校申请',
  backSchoolRequest = '假期返校申请',
  inOutSchoolRecord = '出入校记录',
  healthException   = '健康异常',
  personalInfo      = '个人资料'
}

export const titleClass = {
  [Title.myDaKa]           : 'icon iconfont icon-daka',
  [Title.myQingJia]        : 'icon iconfont icon-qingjia',
  [Title.staySchoolRequest]: 'icon iconfont icon-103',
  [Title.backSchoolRequest]: 'icon iconfont icon-107',
  [Title.inOutSchoolRecord]: 'icon iconfont icon-likai',
  [Title.healthException]  : 'icon iconfont icon-geliguanli',
  [Title.personalInfo]     : 'icon iconfont icon-geren'
}


export const titleRouterPath = {
  [Title.myDaKa]           : '',
  [Title.myQingJia]        : '/qingjia',
  [Title.staySchoolRequest]: '',
  [Title.backSchoolRequest]: '',
  [Title.inOutSchoolRecord]: '',
  [Title.healthException]  : '',
  [Title.personalInfo]     : ''
}

export const collegeName = [
  "航空",
  "航天",
  "航海",
  "材料",
  "机电",
  "力学与土木建筑",
  "动力与能源",
  "电子信息",
  "自动化",
  "计算机",
  "数学与统计",
  "物理科学与技术",
  "化学与化工",
  "管理",
  "公共政策与管理",
  "软件",
  "生命",
  "外国语",
  "教育实验",
  "马克思主义",
  "微电子",
  "网络空间安全",
  "民航",
  "生态环境"
]

export const COLLEGE = "学院"

export const campusArea = [
  '友谊',
  '长安'
]

export const Area = '校区'