import {
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    OneToOne,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';

@Entity('pix')
class Pix {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    status: string;

    @Column()
    value: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

export { Pix }