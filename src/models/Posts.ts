import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Users from './Users';

// '@' indicate that this JS field it has relation with DB
@Entity('posts')
class Posts {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // By default an Colunm without params is a varchar
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'user_id' })
  user: Users;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Posts;
