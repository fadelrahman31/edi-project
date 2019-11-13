import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

@Entity()
export class RequestedDocs {
    @PrimaryGeneratedColumn()
    idDocs: number;

    @Column()
    public namaMhs!: string;

    @Column()
    public nim!: number;

    @Column()
    public alamatMhs!: string;

    @Column()
    public emailMhs!: string;

    @Column()
    public jurusanMhs!: string;

    @Column()
    public keperluanMhs!: string;

    @Column()
    public ketKeperluan!: string;

    @Column()
    public status!: string;

    @CreateDateColumn()
    public submitDate!: Date;

}
