import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {

  @Prop({required:true})
  place: string;




  @Prop({required:true})
  test: string;
  

  @Prop({required:true})
  name: string;

  @Prop({required:true})
  email: string;

  @Prop({ enum : [...Object.values(ROLES)], default: ROLES.PANELIST})
  role: string;

  @Prop({required:false,default:Date.now()})
  createdAt: Date;

  @Prop({required:false,default:Date.now()})
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);