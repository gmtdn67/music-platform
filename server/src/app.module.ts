import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TrackModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.x1nisfj.mongodb.net/music-platform=Cluster0',
    ),
  ],
})
export class AppModule {}
