import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

// '@' indicate that this JS field it has relation with DB
@Entity('technologies')
class Technology {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // By default an Colunm without params is a varchar
  @Column()
  name: string;

  @Column()
  type: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Technology;
