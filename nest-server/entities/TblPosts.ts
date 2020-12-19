import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_posts', { schema: 'devdb' })
export class Post {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'content', nullable: true })
  content: string | null;
}
