-- CreateTable
CREATE TABLE "TConsultaConsumo" (
    "cdHistoricoConsumo" TEXT NOT NULL PRIMARY KEY,
    "dtInicioFabricacao" DATETIME NOT NULL,
    "dtFimFabricacao" DATETIME NOT NULL,
    "qtdRecursosUtilizados" REAL NOT NULL,
    "usoAgua" REAL NOT NULL,
    "gravidade" TEXT NOT NULL,
    "comorbidade" TEXT NOT NULL,
    "cdRecurso" TEXT NOT NULL,
    "cdProduto" TEXT NOT NULL,
    CONSTRAINT "TConsultaConsumo_cdProduto_fkey" FOREIGN KEY ("cdProduto") REFERENCES "TLinhaProduto" ("cdProduto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TConsultaConsumo_cdRecurso_fkey" FOREIGN KEY ("cdRecurso") REFERENCES "TLinhaRecursos" ("cdRecurso") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TLinhaProduto" (
    "cdProduto" TEXT NOT NULL PRIMARY KEY,
    "nmProduto" TEXT NOT NULL,
    "nmTipoLinha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TLinhaRecursos" (
    "cdRecurso" TEXT NOT NULL PRIMARY KEY,
    "nmRecurso" TEXT NOT NULL,
    "qtdUsoRecurso" TEXT NOT NULL
);
