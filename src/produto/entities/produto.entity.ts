import { IsNotEmpty } from "class-validator"; 
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn ()
    id: number

    @IsNotEmpty ()
    @Column ({length: 100, nullable:false})
    titulo:string

    @IsNotEmpty ()
    @Column ({length: 1000, nullable:false})
    texto:string

    @ManyToOne (()=>Categoria, (categoria)=> categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categoria
}
