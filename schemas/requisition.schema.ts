import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RequisitionDocument = HydratedDocument<Requisition>;

@Schema()
export class Requisition {
  @Prop({required:true})
  title: string;

  @Prop({ enum : [...Object.values(APPROVAL_STATUS)], default: APPROVAL_STATUS.PENDING})
  hrApprovalStatus: string;

  @Prop({ enum : [...Object.values(APPROVAL_STATUS)], default: APPROVAL_STATUS.PENDING})
  buApprovalStatus: string;

  @Prop({ enum : [...Object.values(APPROVAL_STATUS)], default: APPROVAL_STATUS.PENDING})
  financeApprovalStatus: string;

  @Prop({ enum : [...Object.values(REQUISITION_STATUS)], default: REQUISITION_STATUS.PENDING})
  requistionStatus: string;

  @Prop([String])
  skills: string[];

  @Prop([String])
  location:string[];

  @Prop([String])
  panelists:string[];

  @Prop([String])
  interviewRounds:string[];

  @Prop({required:false,default:''})
  jobOverview:string;

  @Prop({min:0})
  minExpirience:number;

  @Prop({min:0})
  maxExpirience:number;


  @Prop({required:false,default:Date.now})
  createdAt: Date;

  @Prop({required:false,default:Date.now})
  updatedAt: Date;
}

export const RequisitionSchema = SchemaFactory.createForClass(Requisition);