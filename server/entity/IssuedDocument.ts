import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class IssuedDocument {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public uuid!: string;

    @Column()
    public nim!: string;

    @Column()
    public title!: string;

    @Column()
    public type!: string;

    @Column()
    public requestedDate!: Date;

    @Column()
    public issuedDate!: Date;
}
