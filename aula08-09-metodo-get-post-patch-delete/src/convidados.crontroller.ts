import { Controller, Get, Post, Body, Patch, Delete, Param, HttpCode } from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidados.dto.js";
import { ConvidadosService } from "./convidados.service.js";

@Controller('convidados')
export class ConvidadoConstroller {

    constructor(private readonly convidadoService : ConvidadosService){}

    @Get()
    listarConvidados(){
        return this.convidadoService.listarConvidados();
    }
    @Post()
    criarConvidado(@Body() criarConvidado: CriarConvidadoDto){
        console.log(`[Operador Maria] Novo convidado Registrado: ${criarConvidado.nome}`);

        return {
            mensagem: `Convidado(a) ${criarConvidado.nome}, foi adicionado(a) com sucesso `,
            dados: criarConvidado,
        }
    }

    @Patch(':id')
    atualizarIdade(@Param('id') id: string,@Body('idade') idade: number){
        console.log(`[ADMINISTRADOR] Atualizando idade do ID ${id}`);
        return this.convidadoService.atualizarIdade(+id, idade);

    }

    @Delete(':id')
    @HttpCode(204)
    removerConvidados(@Param('id') id: string){
        console.log(`[ADMINISTRADOR] Convidado com id ${id} removido com sucesso`);
        this.convidadoService.removerConvidadoLista(+id);
    }
}
