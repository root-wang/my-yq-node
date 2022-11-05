import {CHECKSTATUS} from './typings';

export class LeaveDetail {
  
  private check_status: CHECKSTATUS;
  private leave_reason: string;
  private leave_time: string;
  private begin_time: string;
  private end_time: string;
  private leave_area: string;
  private reason_detail: string;
  private destination: string;
  private leave_campus_time: string;
  private back_campus_time: string;
  private creat_approve_time: string;
  private first_approver_time: string;
  private second_approver_time: string;
  
  constructor(check_status: CHECKSTATUS = 0, leave_reason: string = "", leave_time: string = "", begin_time: string = "", end_time: string = "", leave_area: string = "", reason_detail: string = "", destination: string = "", leave_campus_time: string = "", back_campus_time: string = "", creat_approve_time: string = "", first_approver_time: string = "", second_approver_time: string = "") {
    this.check_status = check_status;
    this.leave_reason = leave_reason;
    this.leave_time = leave_time;
    this.begin_time = begin_time;
    this.end_time = end_time;
    this.leave_area = leave_area;
    this.reason_detail = reason_detail;
    this.destination = destination;
    this.leave_campus_time = leave_campus_time;
    this.back_campus_time = back_campus_time;
    this.creat_approve_time = creat_approve_time;
    this.first_approver_time = first_approver_time;
    this.second_approver_time = second_approver_time;
  }
  
  public copy(leaveDetail: LeaveDetail): LeaveDetail {
    const {
            check_status,
            leave_reason,
            leave_time,
            begin_time,
            end_time,
            leave_area,
            reason_detail,
            destination,
            leave_campus_time,
            back_campus_time,
            creat_approve_time,
            first_approver_time,
            second_approver_time
          } =
            leaveDetail
    this.check_status = check_status;
    this.leave_reason = leave_reason;
    this.leave_time = leave_time;
    this.begin_time = begin_time;
    this.end_time = end_time;
    this.leave_area = leave_area;
    this.reason_detail = reason_detail;
    this.destination = destination;
    this.leave_campus_time = leave_campus_time;
    this.back_campus_time = back_campus_time;
    this.creat_approve_time = creat_approve_time;
    this.first_approver_time = first_approver_time;
    this.second_approver_time = second_approver_time;
    return this
  }
}