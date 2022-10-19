import { IsNotEmpty } from "class-validator"; 
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, } from "typeorm";

@Entity({name: "tb_categoria"})
export class Categoria {
    @PrimaryGeneratedColumn ()
    id: number

    @IsNotEmpty ()
    @Column ({length: 100, nullable:false})
    nome:string

    @IsNotEmpty ()
    @Column ({length: 1000, nullable:false})
    titulo:string
    
    @OneToMany (()=> Produto, (produto) => produto.categoria,{
        onDelete: "CASCADE"
    })
    produto:Produto [];

}
