import {
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import { User } from './User';

@Entity()
class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.id)
    @JoinColumn()
    requestingUser: User;

    @ManyToOne(() => User, user => user.id, { nullable: true })
    @JoinColumn()
    payingUser: User;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export { Pix }