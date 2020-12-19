import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from 'repositories';
import { PostController } from './controller/post.controller';
import { PostService } from './service/post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
