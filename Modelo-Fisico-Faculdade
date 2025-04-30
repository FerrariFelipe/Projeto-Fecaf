-- Geração de Modelo físico
-- Sql ANSI 2003 - brModelo.



CREATE TABLE tbl_cliente (
id_cliente_1 VARCHAR(10) PRIMARY KEY,
nome_cliente_1 VARCHAR(10)
)

CREATE TABLE tbl_produtos (
id_produto_1 VARCHAR(10) PRIMARY KEY,
preco_produto_1 VARCHAR(10),
nome_produto_1 VARCHAR(10)
)

CREATE TABLE tbl_colaboradores (
Id_colaborador_1 BIGINT(10) PRIMARY KEY,
nome_colaborador_1 VARCHAR(10)
)

CREATE TABLE tbl_vendas (
id_venda_1 VARCHAR(10) PRIMARY KEY,
data_venda_1 VARCHAR(10),
valor_venda_1 VARCHAR(10)
)

CREATE TABLE tel_cliente_1 (
tel_cliente_1_PK INTEGER PRIMARY KEY,
tel_cliente_1 VARCHAR(10),
id_cliente_1_FK VARCHAR(),
FOREIGN KEY(id_cliente_1_FK) REFERENCES tbl_cliente (id_cliente_1)
)

CREATE TABLE tel_colaborador_1 (
tel_colaborador_1_PK INTEGER PRIMARY KEY,
tel_colaborador_1 VARCHAR(10),
Id_colaborador_1_FK BIGINT(),
FOREIGN KEY(Id_colaborador_1_FK) REFERENCES tbl_colaboradores (Id_colaborador_1)
)

CREATE TABLE pro_vend (
id_venda_1 VARCHAR(10),
id_produto_1 VARCHAR(10),
FOREIGN KEY(id_venda_1) REFERENCES tbl_vendas (id_venda_1),
FOREIGN KEY(id_produto_1) REFERENCES tbl_produtos (id_produto_1)
)

CREATE TABLE clien_vend (
id_venda_1 VARCHAR(10),
id_cliente_1 VARCHAR(10),
FOREIGN KEY(id_venda_1) REFERENCES tbl_vendas (id_venda_1),
FOREIGN KEY(id_cliente_1) REFERENCES tbl_cliente (id_cliente_1)
)

CREATE TABLE prod_colab (
Id_colaborador_1 BIGINT(10),
id_produto_1 VARCHAR(10),
FOREIGN KEY(Id_colaborador_1) REFERENCES tbl_colaboradores (Id_colaborador_1),
FOREIGN KEY(id_produto_1) REFERENCES tbl_produtos (id_produto_1)
)


