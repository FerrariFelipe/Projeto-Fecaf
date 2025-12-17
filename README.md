## Projeto-Fecaf
# 📄 Modelo Físico de Banco de Dados – brModelo (SQL ANSI 2003)
Este repositório contém a estrutura física de um banco de dados relacional, desenvolvido com base no padrão SQL ANSI 2003, utilizando o brModelo como ferramenta de modelagem. O objetivo é representar um sistema simples de vendas, com entidades que abrangem clientes, produtos, colaboradores e transações.

🗃️ Tabelas Principais
tbl_cliente
Armazena os dados dos clientes.

id_cliente_1: Identificador único (PK)

nome_cliente_1: Nome do cliente

tbl_produtos
Armazena os dados dos produtos.

id_produto_1: Identificador único (PK)

preco_produto_1: Preço do produto

nome_produto_1: Nome do produto

tbl_colaboradores
Armazena informações dos colaboradores.

Id_colaborador_1: Identificador único (PK)

nome_colaborador_1: Nome do colaborador

tbl_vendas
Representa as vendas realizadas.

id_venda_1: Identificador da venda (PK)

data_venda_1: Data da venda

valor_venda_1: Valor total da venda

📞 Tabelas de Telefones
tel_cliente_1
Armazena os telefones dos clientes.

tel_cliente_1_PK: Identificador do telefone (PK)

tel_cliente_1: Número de telefone

id_cliente_1_FK: Chave estrangeira para tbl_cliente

tel_colaborador_1
Armazena os telefones dos colaboradores.

tel_colaborador_1_PK: Identificador do telefone (PK)

tel_colaborador_1: Número de telefone

Id_colaborador_1_FK: Chave estrangeira para tbl_colaboradores

🔗 Tabelas de Relacionamento (N:N)
pro_vend
Relaciona produtos e vendas (produto vendido em uma venda).

id_venda_1: Chave estrangeira para tbl_vendas

id_produto_1: Chave estrangeira para tbl_produtos

clien_vend
Relaciona clientes e vendas (cliente responsável por uma venda).

id_venda_1: Chave estrangeira para tbl_vendas

id_cliente_1: Chave estrangeira para tbl_cliente

prod_colab
Relaciona colaboradores e produtos (colaborador responsável por um produto).

Id_colaborador_1: Chave estrangeira para tbl_colaboradores

id_produto_1: Chave estrangeira para tbl_produtos


🛠️ Ferramenta Utilizada
brModelo – Ferramenta de modelagem para criação do modelo físico e geração do script SQL.

📌 Licença
Este projeto é de uso educacional e pode ser adaptado livremente.

