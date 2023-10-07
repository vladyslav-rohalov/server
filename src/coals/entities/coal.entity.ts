import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import { Product } from '../../products/entities/product.entity';

@Entity({ name: 'coals' })
export class Coal {
  @PrimaryGeneratedColumn({ name: 'tobacco_id' })
  id: number;

  @Column()
  size: number;

  @Column()
  weight: number;

  @ManyToMany(() => Product, product => product.coals)
  products: Product;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
