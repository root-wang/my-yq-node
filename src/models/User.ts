import {baseClass} from './baseClass';
import {leaveDetail} from './leaveDetail';


export class User extends baseClass {
  
  // 用户名
  private _username: string;
  // 登陆状态
  private _status: number;
  // 真实名字
  private _name: string;
  // 学院
  private _academy: string;
  // 审批人 两个名字字符串数组
  private _approver: [string, string];
  // 请假信息数组
  private _leaveInfo: Array<leaveDetail>;
  // 同时存在请假信息数
  private _leaveInfoNums: number;
  
  
  constructor(userInfoOgj: {
    username: string,
    status: number,
    name: string,
    academy: string,
    approver: [string, string],
    leaveInfo: Array<leaveDetail>,
    leaveInfoNums: number
  }) {
    super();
    const {
            username,
            status,
            name,
            academy,
            approver,
            leaveInfo,
            leaveInfoNums
          } = userInfoOgj
    this._username = username;
    this._status = status;
    this._name = name;
    this._academy = academy;
    this._approver = approver;
    this._leaveInfo = leaveInfo;
    this._leaveInfoNums = leaveInfoNums;
  }
  
  public get username(): string {
    return this._username;
  }
  
  public set username(value: string) {
    this._username = value;
  }
  
  public get status(): number {
    return this._status;
  }
  
  public set status(value: number) {
    this._status = value;
  }
  
  public get name(): string {
    return this._name;
  }
  
  public set name(value: string) {
    this._name = value;
  }
  
  public get academy(): string {
    return this._academy;
  }
  
  public set academy(value: string) {
    this._academy = value;
  }
  
  public get approver(): [string, string] {
    return this._approver;
  }
  
  public set approver(value: [string, string]) {
    this._approver = value;
  }
  
  public get leaveInfo(): Array<leaveDetail> {
    return this._leaveInfo;
  }
  
  public set leaveInfo(value: Array<leaveDetail>) {
    this._leaveInfo = value;
  }
  
  public get leaveInfoNums(): number {
    return this._leaveInfoNums;
  }
  
  public set leaveInfoNums(value: number) {
    this._leaveInfoNums = value;
  }
}