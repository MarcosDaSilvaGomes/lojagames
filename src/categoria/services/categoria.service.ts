import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import {InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Categoria } from "../entities/categoria.entity";


@Injectable ()
export class CategoriaService {
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    update(categoria: Categoria): Categoria | PromiseLike<Categoria> {
        throw new Error("Method not implemented.");
    }
    create(categoria: Categoria): Categoria | PromiseLike<Categoria> {
        throw new Error("Method not implemented.");
    }
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>
    ) {}
    async findAll (): Promise<Categoria[]> {
        return await this.categoriaRepository.find ();
    }
    async findById(id: number): Promise<Categoria> {

        let categoria = await this.categoriaRepository.findOne({
            where:{
                id
            }
        });
        if (!categoria)
        throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);
        return categoria;
    }
}
