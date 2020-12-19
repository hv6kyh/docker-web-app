import { Post } from 'entities';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {}
