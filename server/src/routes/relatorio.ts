import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function relatorioRoute(app: FastifyInstance) {
  app.get('/report', async (request) => {
    const consumototal = await prisma.tConsultaConsumo.findMany()

    return consumototal.map((tConsultaConsumo) => {
      return {
        id: tConsultaConsumo.cdHistoricoConsumo,
        inicioFabricao: tConsultaConsumo.dtInicioFabricacao,
        fimFabricao: tConsultaConsumo.dtFimFabricacao,
        qtdRecursosUtilizados: tConsultaConsumo.qtdRecursosUtilizados,
        usoAgua: tConsultaConsumo.usoAgua,
        gravidade: tConsultaConsumo.gravidade,
        comorbidade: tConsultaConsumo.comorbidade,
        cdRecurso: tConsultaConsumo.cdRecurso,
        cdProduto: tConsultaConsumo.cdProduto,
      }
    })
  })
}