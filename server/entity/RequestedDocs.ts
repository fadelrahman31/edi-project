import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class RequestedDocs {
    @PrimaryGeneratedColumn()
    nimMhs: number;

    @Column()
    public namaMhs!: string;

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

}
