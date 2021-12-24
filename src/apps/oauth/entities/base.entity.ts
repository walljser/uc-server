import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export abstract class BaseEntity {
  // 主键id
  @PrimaryGeneratedColumn()
  id: number;

  // 创建时间
  @CreateDateColumn({ name: 'create_time' })
  createTime: Date;

  // 更新时间
  @UpdateDateColumn({ name: 'update_time' })
  updateTime: Date;

  // // 创建人
  // @Column()
  // creator: string;

  // // 更新人
  // @Column()
  // updater: string;
}