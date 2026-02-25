import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import 'dotenv/config';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'static'),
    }),
    TrackModule,
    MongooseModule.forRoot(process.env.DATABASE_URL!),
    FileModule,
  ],
})
export class AppModule {}
