import { email, z } from 'zod';

export const colaboradorSchema = z.object({
    nome: z.string()
    .min(3, {message: 'O nome deve ter no mínimo 3 letras!'}),
    email: z.email({message:'O email deve ser válidado!'}),
    idade: z.number({message:'A idade deve ser um número válido!'})
    .min(18, {message:'A idade minima permitida é de 18 anos!'})
    .max(65, {message:'A idade máxima permitida é de 65 anos!'}),
    departamento: z.enum(['TI', 'RH', 'comercial', 'Financeiro'],{
        error: () => ({message: 'Departamento deve ser obrigatoriamente TI, RH, Comercial ou Financeiro'}),
    }),
});

export type Colaborador = z.infer<typeof colaboradorSchema>;