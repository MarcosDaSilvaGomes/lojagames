import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";

import { Post, Delete , Body,Put, } from "@nestjs/common";
import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";


@Controller('/produto')
export class ProdutoController {
    constructor (private readonly produtoService: ProdutoService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Produto[]>{
        return this.produtoService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Produto>{
        return this.produtoService.findById(id);
    }
    
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
     create
      (@Body()
       produto:Produto
       ): Promise<Produto> {
        return  this.produtoService.create(produto);
    }
    @Put ('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() produto:Produto): Promise<Produto> {
        return this.produtoService.update (produto);
    }
    @Delete ('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
     delete(@Param('id', ParseIntPipe) id:number){ 
        return this.produtoService.delete(id);
    }
}