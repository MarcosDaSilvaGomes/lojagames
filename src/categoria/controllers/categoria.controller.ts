import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { Post, Delete , Body,Put, } from "@nestjs/common";
import { CategoriaService } from "../services/categoria.service";


@Controller("/categorias")
export class CategoriaController {
    constructor (private readonly categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]>{
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id:number): Promise<Categoria>{
        return this.categoriaService.findById(id);
    }
    @Get()
    @HttpCode(HttpStatus.CREATED)
    @Post('/cadastrar')
    async create (@Body() categoria:Categoria): Promise<Categoria> {
        return await this.categoriaService.create(categoria);
    }
    @Put ('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() categoria:Categoria): Promise<Categoria> {
        return this.categoriaService.update (categoria);
    }
    @Delete ('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
     delete(@Param('id', ParseIntPipe) id:number){ 
        return this.categoriaService.delete(id);
    }
    
}
    
    