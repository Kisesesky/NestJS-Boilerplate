import { Column, Entity } from "typeorm";
import { BaseEntity } from '../../../common/entities/base.entity';

@Entity()
export class User extends BaseEntity {
    @Column()
    name: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
    
}