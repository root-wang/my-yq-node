import {baseClass} from './baseClass';
import {LeaveDetail} from './leaveDetail';


export class User extends baseClass {

    // 用户名
    private username: string;
    // 登陆状态
    private status: number;
    // 真实名字
    private name: string;
    // 学院
    private academy: string;
    // 审批人 两个名字字符串数组
    private approver: [string, string];
    // 请假信息数组
    private leave_info: LeaveDetail[];
    // 同时存在请假信息数
    private leave_info_nums: number;
    
    
    constructor(userInfoObj: {
        username: string,
        status: number,
        name: string,
        academy: string,
        approver: [string, string],
        leave_info: LeaveDetail[],
        leave_info_nums: number
    }) {
        super();
        this.username = userInfoObj.username;
        this.status = userInfoObj.status;
        this.name = userInfoObj.name;
        this.academy = userInfoObj.academy;
        this.approver = userInfoObj.approver;
        //数组class需要循环去new 出来
        this.leave_info = userInfoObj.leave_info.map(leaveInfo => {
            return ( new LeaveDetail() ).copy(leaveInfo)
        });
        this.leave_info_nums = userInfoObj.leave_info_nums;
    }

   
}