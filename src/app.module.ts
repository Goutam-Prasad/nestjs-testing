import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RequisitionModule } from './requisition/requisition.module';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * This is the main module from which everything runs just like in react app.js or nextjs layout file
 * This is the parent module for all the compoent every module is imported here eventually
 * a module can import other modules
 * module can use providers 
 */

// decorator is just a function that add some meta data or function to a class
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/test', {
      connectionName: 'primary',//Connection name is required for multiple db connection 
    }),
    AuthModule,
    UserModule,
    RequisitionModule
  ],
})
export class AppModule {}
