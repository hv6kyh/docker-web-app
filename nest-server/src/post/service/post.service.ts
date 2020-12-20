import { Injectable } from '@nestjs/common';
import { Post } from '../../entities';
import { PostRepository } from '../../repositories';
import { PostCreate } from '../dto';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  getPostList(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async createPost(dto: PostCreate) {
    const post = await this.postRepository.save(
      this.postRepository.create({
        content: dto.content,
      }),
    );

    // 현재 프론트엔드를 수정하지 않기 위해 응답 형태 가공함
    return { success: true, post };
  }
}
