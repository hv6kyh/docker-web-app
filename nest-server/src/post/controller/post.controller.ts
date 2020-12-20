import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostCreate } from '../dto';
import { PostService } from '../service/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  getPostList() {
    return this.postService.getPostList();
  }

  @Post()
  createPost(@Body() dto: PostCreate) {
    return this.postService.createPost(dto);
  }
}
