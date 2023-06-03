import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const produto = await prisma.tLinhaProduto.create({
        data:{
            cdProduto:'9',
            nmProduto:'Mostarda',
            nmTipoLinha:'2908345',
        }
    })
    const recurso = await prisma.tLinhaRecursos.create({
        data:{
            cdRecurso:'4',
            nmRecurso:'Raiz de mostarda',
            qtdUsoRecurso: '9786',
        }
    })
    const consumo = await prisma.tConsultaConsumo.create({
        data:{
            cdHistoricoConsumo: '3',
            dtInicioFabricacao:  new Date(),
            dtFimFabricacao: new Date(),
            qtdRecursosUtilizados: 3200,
            usoAgua: 2730,
            gravidade: 'Baixa',
            comorbidade: 'Bem Rentável',
            cdRecurso: '4',
            cdProduto: '9',
        }
    })
    console.log(consumo, produto, recurso)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })