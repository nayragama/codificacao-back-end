import { Controller, Get, Post, Body } from "@nestjs/common";
import { CriarConvidadoDto } from "./criar-convidados.dto.js";

@Controller('convidados')
export class ConvidadoConstroller {

    @Get()
    listarConvidados(){
        return [
           'Rebeca',
           'Liam',
           'Cauê',
           'Nayra',
           'Jamilly',
        'Vitória',
        ];
    }
    @Post()
    criarConvidado(@Body() criarConvidado: CriarConvidadoDto){
        console.log(`[Operador Maria] Novo convidado Registrado: ${criarConvidado.nome}`);

        return {
            mensagem: `Convidado(a) ${criarConvidado.nome}, foi adicionado(a) com sucesso `,
            dados: criarConvidado,
        }
    }
}