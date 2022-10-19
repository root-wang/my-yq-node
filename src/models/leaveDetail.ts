import {CHECKSTATUS} from './typings';

export class leaveDetail {
  
  private _checkStatus: CHECKSTATUS;
  private _leaveReason: string;
  private _leaveTime: string;
  private _beginTime: string;
  private _endTIme: string;
  private _leaveArea: string;
  private _reasonDetail: string;
  private _destination: string;
  private _leaveCampusTime: string;
  private _backCampusTime: string;
  private _creatApproveTime: string;
  private _firstApproverTime: string;
  private _secondApproverTime: string;
  
  constructor(userInfoObj: {
    checkStatus: CHECKSTATUS,
    leaveReason: string,
    leaveTime: string,
    beginTime: string,
    endTIme: string,
    leaveArea: string,
    reasonDetail: string,
    destination: string,
    leaveCampusTime: string,
    backCampusTime: string,
    creatApproveTime: string,
    firstApproverTime: string,
    secondApproverTime: string
  }) {
    const {
            checkStatus,
            leaveReason,
            leaveTime,
            beginTime,
            endTIme,
            leaveArea,
            reasonDetail,
            destination,
            leaveCampusTime,
            backCampusTime,
            creatApproveTime,
            firstApproverTime,
            secondApproverTime
          } = userInfoObj;
    
    this._checkStatus = checkStatus;
    this._leaveReason = leaveReason;
    this._leaveTime = leaveTime;
    this._beginTime = beginTime;
    this._endTIme = endTIme;
    this._leaveArea = leaveArea;
    this._reasonDetail = reasonDetail;
    this._destination = destination;
    this._leaveCampusTime = leaveCampusTime;
    this._backCampusTime = backCampusTime;
    this._creatApproveTime = creatApproveTime;
    this._firstApproverTime = firstApproverTime;
    this._secondApproverTime = secondApproverTime;
  }
  
  
  public get checkStatus(): CHECKSTATUS {
    return this._checkStatus;
  }
  
  public set checkStatus(value: CHECKSTATUS) {
    this._checkStatus = value;
  }
  
  public get leaveReason(): string {
    return this._leaveReason;
  }
  
  public set leaveReason(value: string) {
    this._leaveReason = value;
  }
  
  public get leaveTime(): string {
    return this._leaveTime;
  }
  
  public set leaveTime(value: string) {
    this._leaveTime = value;
  }
  
  public get beginTime(): string {
    return this._beginTime;
  }
  
  public set beginTime(value: string) {
    this._beginTime = value;
  }
  
  public get endTIme(): string {
    return this._endTIme;
  }
  
  public set endTIme(value: string) {
    this._endTIme = value;
  }
  
  public get leaveArea(): string {
    return this._leaveArea;
  }
  
  public set leaveArea(value: string) {
    this._leaveArea = value;
  }
  
  public get reasonDetail(): string {
    return this._reasonDetail;
  }
  
  public set reasonDetail(value: string) {
    this._reasonDetail = value;
  }
  
  public get destination(): string {
    return this._destination;
  }
  
  public set destination(value: string) {
    this._destination = value;
  }
  
  public get leaveCampusTime(): string {
    return this._leaveCampusTime;
  }
  
  public set leaveCampusTime(value: string) {
    this._leaveCampusTime = value;
  }
  
  public get backCampusTime(): string {
    return this._backCampusTime;
  }
  
  public set backCampusTime(value: string) {
    this._backCampusTime = value;
  }
  
  public get creatApproveTime(): string {
    return this._creatApproveTime;
  }
  
  public set creatApproveTime(value: string) {
    this._creatApproveTime = value;
  }
  
  public get firstApproverTime(): string {
    return this._firstApproverTime;
  }
  
  public set firstApproverTime(value: string) {
    this._firstApproverTime = value;
  }
  
  public get secondApproverTime(): string {
    return this._secondApproverTime;
  }
  
  public set secondApproverTime(value: string) {
    this._secondApproverTime = value;
  }
  
}