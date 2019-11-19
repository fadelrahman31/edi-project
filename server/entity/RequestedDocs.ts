import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn} from "typeorm";

export enum Approval {
    BELUM = "0",
    REJECT = "1",
    ACCEPT = "2"
}

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

    @Column({
        type: "enum",
        enum: Approval,
        default: Approval.BELUM
    })
    public approval!: Approval;

    @CreateDateColumn()
    public submitDate!: Date;

}
