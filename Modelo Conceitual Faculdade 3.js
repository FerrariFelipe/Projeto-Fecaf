<?xml version="1.0"?>
<MER>
	<Informacoes>
		<Posicao Left="0" Top="0"/>
		<TotalItens Valor="143"/>
		<Tipo Valor="CONCEITUAL"/>
		<Versao Valor="2.0.0"/>
		<Autor Valor=""/>
		<Observacao Valor=""/>
		<Template>
      <CAMPOS/>
      <TIPOS/>
      <COMPLEMENTO_CAMPOS/>
      <COMPLEMENTO_TABELAS/>
      <DDL>
        <CTab_A>CREATE TABLE *$nome_tabela</CTab_A>
        <CTab_B> (</CTab_B>
        <CTab_Compl>*$compl_tabela</CTab_Compl>
        <CTab_C>)*$separador*$\n</CTab_C>
        <CCamp>*$nome_campo *$tipo_campo *$compl_campo</CCamp>
        <Pk_inTab>-1</Pk_inTab>
        <Fk_inTab>-1</Fk_inTab>
        <Const_Nomear>0</Const_Nomear>
        <CConst_Nome>*$nome_tabela_*$envol_campo</CConst_Nome>
        <Separador></Separador>
      </DDL>
    </Template>
	</Informacoes>
	<Entidades>
    <Entidade nome="tbl_cursos" id="2">
      <Left Valor="236"/>
      <Top Valor="289"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="nome_curso" id="43">
          <Left Valor="19"/>
          <Top Valor="372"/>
          <Width Valor="85"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="44"/>
          <Ligacoes>
            <Ligacao Destino_ID="2">
              <MostraCardinalidade Valor="0" Card_id="45"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_curso" id="40">
          <Left Valor="44"/>
          <Top Valor="284"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="41"/>
          <Ligacoes>
            <Ligacao Destino_ID="2">
              <MostraCardinalidade Valor="0" Card_id="42"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="carga_horaria" id="46">
          <Left Valor="39"/>
          <Top Valor="329"/>
          <Width Valor="94"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="DATETIME"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="47"/>
          <Ligacoes>
            <Ligacao Destino_ID="2">
              <MostraCardinalidade Valor="0" Card_id="48"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
    <Entidade nome="tbl_disciplinas" id="3">
      <Left Valor="356"/>
      <Top Valor="457"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="id_curso" id="58">
          <Left Valor="411"/>
          <Top Valor="377"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="59"/>
          <Ligacoes>
            <Ligacao Destino_ID="3">
              <MostraCardinalidade Valor="0" Card_id="60"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="nome_disciplina" id="52">
          <Left Valor="451"/>
          <Top Valor="415"/>
          <Width Valor="101"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="53"/>
          <Ligacoes>
            <Ligacao Destino_ID="3">
              <MostraCardinalidade Valor="0" Card_id="54"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_disciplina" id="49">
          <Left Valor="497"/>
          <Top Valor="459"/>
          <Width Valor="83"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="50"/>
          <Ligacoes>
            <Ligacao Destino_ID="3">
              <MostraCardinalidade Valor="0" Card_id="51"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="carga_horaria" id="55">
          <Left Valor="497"/>
          <Top Valor="495"/>
          <Width Valor="94"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="DATETIME"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="56"/>
          <Ligacoes>
            <Ligacao Destino_ID="3">
              <MostraCardinalidade Valor="0" Card_id="57"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
    <Entidade nome="tbl_professores" id="6">
      <Left Valor="809"/>
      <Top Valor="321"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="id_professor" id="76">
          <Left Valor="998"/>
          <Top Valor="305"/>
          <Width Valor="87"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="77"/>
          <Ligacoes>
            <Ligacao Destino_ID="6">
              <MostraCardinalidade Valor="0" Card_id="78"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="formacao_professor" id="85">
          <Left Valor="961"/>
          <Top Valor="377"/>
          <Width Valor="124"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="86"/>
          <Ligacoes>
            <Ligacao Destino_ID="6">
              <MostraCardinalidade Valor="0" Card_id="87"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="nome_professor" id="82">
          <Left Valor="975"/>
          <Top Valor="340"/>
          <Width Valor="105"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="83"/>
          <Ligacoes>
            <Ligacao Destino_ID="6">
              <MostraCardinalidade Valor="0" Card_id="84"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="cpf_professor" id="79">
          <Left Valor="947"/>
          <Top Valor="428"/>
          <Width Valor="94"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="80"/>
          <Ligacoes>
            <Ligacao Destino_ID="6">
              <MostraCardinalidade Valor="0" Card_id="81"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
    <Entidade nome="tbl_alunos" id="1">
      <Left Valor="235"/>
      <Top Valor="68"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="cpf_aluno" id="31">
          <Left Valor="253"/>
          <Top Valor="12"/>
          <Width Valor="74"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="32"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="33"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_aluno" id="19">
          <Left Valor="378"/>
          <Top Valor="133"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="20"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="21"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="data_nasc" id="28">
          <Left Valor="347"/>
          <Top Valor="19"/>
          <Width Valor="77"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="DATETIME"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="29"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="30"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_curso" id="37">
          <Left Valor="33"/>
          <Top Valor="153"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="38"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="39"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="matricula_aluno" id="22">
          <Left Valor="5"/>
          <Top Valor="113"/>
          <Width Valor="102"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="23"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="24"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="nome_aluno" id="25">
          <Left Valor="46"/>
          <Top Valor="35"/>
          <Width Valor="85"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="2"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="26"/>
          <Ligacoes>
            <Ligacao Destino_ID="1">
              <MostraCardinalidade Valor="0" Card_id="27"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
    <Entidade nome="tbl_turmas" id="5">
      <Left Valor="803"/>
      <Top Valor="108"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="ano" id="70">
          <Left Valor="878"/>
          <Top Valor="83"/>
          <Width Valor="45"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="71"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="72"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="semestre" id="64">
          <Left Valor="940"/>
          <Top Valor="117"/>
          <Width Valor="71"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="65"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="66"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_aluno" id="137">
          <Left Valor="946"/>
          <Top Valor="147"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="138"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="139"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_disciplina" id="73">
          <Left Valor="958"/>
          <Top Valor="198"/>
          <Width Valor="83"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="74"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="75"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_turma" id="61">
          <Left Valor="827"/>
          <Top Valor="30"/>
          <Width Valor="69"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="62"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="63"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_professor" id="67">
          <Left Valor="851"/>
          <Top Valor="61"/>
          <Width Valor="87"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="68"/>
          <Ligacoes>
            <Ligacao Destino_ID="5">
              <MostraCardinalidade Valor="0" Card_id="69"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
    <Entidade nome="nota" id="113">
      <Left Valor="541"/>
      <Top Valor="331"/>
      <Width Valor="102"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos>
        <Atributo nome="id_aluno" id="120">
          <Left Valor="603"/>
          <Top Valor="468"/>
          <Width Valor="67"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="121"/>
          <Ligacoes>
            <Ligacao Destino_ID="113">
              <MostraCardinalidade Valor="0" Card_id="122"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_turma" id="143">
          <Left Valor="681"/>
          <Top Valor="339"/>
          <Width Valor="69"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="144"/>
          <Ligacoes>
            <Ligacao Destino_ID="113">
              <MostraCardinalidade Valor="0" Card_id="145"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_disciplina" id="146">
          <Left Valor="702"/>
          <Top Valor="373"/>
          <Width Valor="83"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="147"/>
          <Ligacoes>
            <Ligacao Destino_ID="113">
              <MostraCardinalidade Valor="0" Card_id="148"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="data_avaliacao" id="117">
          <Left Valor="662"/>
          <Top Valor="408"/>
          <Width Valor="100"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="0"/>
          <Tipo Valor="VARCHAR( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="118"/>
          <Ligacoes>
            <Ligacao Destino_ID="113">
              <MostraCardinalidade Valor="0" Card_id="119"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
        <Atributo nome="id_nota" id="114">
          <Left Valor="628"/>
          <Top Valor="441"/>
          <Width Valor="63"/>
          <Height Valor="16"/>
          <Fonte default="0">
            <FonteNome Valor="Tahoma"/>
            <FonteTamanho Valor="8"/>
            <FonteEstilo Valor="[]"/>
            <FonteCor Valor="0"/>
          </Fonte>
          <Atributos/>
          <AtributosOcultos/>
          <Dicionario></Dicionario>
          <Nula Valor="0"/>
          <Observacao></Observacao>
          <Futuro></Futuro>
          <Anexos/>
          <MaxCard Valor="1"/>
          <MinCard Valor="1"/>
          <Composto Valor="0"/>
          <Identificador Valor="-1"/>
          <Tipo Valor="BIGINT( )"/>
          <Multivalorado Valor="0"/>
          <Orientacao Valor="3"/>
          <TamAuto Valor="-1"/>
          <Desvio Valor="10"/>
          <BarraID Valor="115"/>
          <Ligacoes>
            <Ligacao Destino_ID="113">
              <MostraCardinalidade Valor="0" Card_id="116"/>
              <Cardinalidades Cardinalidade="4"/>
              <Orientacao Valor="0"/>
              <Fraca Valor="0"/>
            </Ligacao>
          </Ligacoes>
        </Atributo>
      </Atributos>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <Especializacoes ehEsp="0"/>
    </Entidade>
  </Entidades>
	<Relacoes>
    <Relacao nome="alu_cur" id="91">
      <Left Valor="171"/>
      <Top Valor="195"/>
      <Width Valor="102"/>
      <Height Valor="51"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos/>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <SetaDirecao Valor="0"/>
      <Ligacoes>
        <Ligacao Destino_ID="2">
          <MostraCardinalidade Valor="-1" Card_id="92"/>
          <Cardinalidades Cardinalidade="1">
            <Cardinalidade nome="" id="92">
              <Left Valor="287"/>
              <Top Valor="274"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="1"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
        <Ligacao Destino_ID="1">
          <MostraCardinalidade Valor="-1" Card_id="93"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="93">
              <Left Valor="303"/>
              <Top Valor="135"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
      </Ligacoes>
    </Relacao>
    <Relacao nome="cur_disc" id="88">
      <Left Valor="154"/>
      <Top Valor="431"/>
      <Width Valor="102"/>
      <Height Valor="51"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos/>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <SetaDirecao Valor="0"/>
      <Ligacoes>
        <Ligacao Destino_ID="3">
          <MostraCardinalidade Valor="-1" Card_id="90"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="90">
              <Left Valor="321"/>
              <Top Valor="475"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
        <Ligacao Destino_ID="2">
          <MostraCardinalidade Valor="-1" Card_id="89"/>
          <Cardinalidades Cardinalidade="1">
            <Cardinalidade nome="" id="89">
              <Left Valor="304"/>
              <Top Valor="356"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="1"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
      </Ligacoes>
    </Relacao>
    <Relacao nome="aluno_nota" id="133">
      <Left Valor="504"/>
      <Top Valor="199"/>
      <Width Valor="102"/>
      <Height Valor="51"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos/>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <SetaDirecao Valor="0"/>
      <Ligacoes>
        <Ligacao Destino_ID="113">
          <MostraCardinalidade Valor="-1" Card_id="135"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="135">
              <Left Valor="592"/>
              <Top Valor="316"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
        <Ligacao Destino_ID="126">
          <MostraCardinalidade Valor="-1" Card_id="134"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="134">
              <Left Valor="589"/>
              <Top Valor="136"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
      </Ligacoes>
    </Relacao>
    <Relacao nome="tur_prof" id="94">
      <Left Valor="793"/>
      <Top Valor="223"/>
      <Width Valor="102"/>
      <Height Valor="51"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos/>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <SetaDirecao Valor="0"/>
      <Ligacoes>
        <Ligacao Destino_ID="5">
          <MostraCardinalidade Valor="-1" Card_id="95"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="95">
              <Left Valor="837"/>
              <Top Valor="175"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
        <Ligacao Destino_ID="6">
          <MostraCardinalidade Valor="-1" Card_id="96"/>
          <Cardinalidades Cardinalidade="3">
            <Cardinalidade nome="" id="96">
              <Left Valor="860"/>
              <Top Valor="306"/>
              <Width Valor="37"/>
              <Height Valor="20"/>
              <Fonte default="0">
                <FonteNome Valor="Tahoma"/>
                <FonteTamanho Valor="8"/>
                <FonteEstilo Valor="[]"/>
                <FonteCor Valor="0"/>
              </Fonte>
              <Atributos/>
              <AtributosOcultos/>
              <Dicionario></Dicionario>
              <Nula Valor="0"/>
              <Observacao></Observacao>
              <Futuro></Futuro>
              <Anexos/>
              <Cor Valor="15780518"/>
              <TamAuto Valor="-1"/>
              <Tipo Valor="0"/>
              <TextAlin Valor="0"/>
              <Card Valor="3"/>
              <Fixa Valor="0"/>
              <Ligacoes/>
            </Cardinalidade>
          </Cardinalidades>
          <Orientacao Valor="0"/>
          <Fraca Valor="0"/>
        </Ligacao>
      </Ligacoes>
    </Relacao>
  </Relacoes>
	<EntAssoss>
    <EntidadeAssoss nome="aluno_turma" id="126">
      <Left Valor="526"/>
      <Top Valor="69"/>
      <Width Valor="127"/>
      <Height Valor="66"/>
      <Fonte default="0">
        <FonteNome Valor="Tahoma"/>
        <FonteTamanho Valor="8"/>
        <FonteEstilo Valor="[]"/>
        <FonteCor Valor="0"/>
      </Fonte>
      <Atributos/>
      <AtributosOcultos/>
      <Dicionario></Dicionario>
      <Nula Valor="0"/>
      <Observacao></Observacao>
      <Futuro></Futuro>
      <Anexos/>
      <AutoRelacoes AutoRelacionado="0"/>
      <ChildRelacao nome="alu_tur" id="127">
        <Left Valor="541"/>
        <Top Valor="84"/>
        <Width Valor="97"/>
        <Height Valor="36"/>
        <Fonte default="0">
          <FonteNome Valor="Tahoma"/>
          <FonteTamanho Valor="8"/>
          <FonteEstilo Valor="[]"/>
          <FonteCor Valor="0"/>
        </Fonte>
        <Atributos/>
        <AtributosOcultos/>
        <Dicionario></Dicionario>
        <Nula Valor="0"/>
        <Observacao></Observacao>
        <Futuro></Futuro>
        <Anexos/>
        <SetaDirecao Valor="0"/>
        <Ligacoes>
          <Ligacao Destino_ID="1">
            <MostraCardinalidade Valor="-1" Card_id="131"/>
            <Cardinalidades Cardinalidade="4">
              <Cardinalidade nome="" id="131">
                <Left Valor="337"/>
                <Top Valor="75"/>
                <Width Valor="37"/>
                <Height Valor="20"/>
                <Fonte default="0">
                  <FonteNome Valor="Tahoma"/>
                  <FonteTamanho Valor="8"/>
                  <FonteEstilo Valor="[]"/>
                  <FonteCor Valor="0"/>
                </Fonte>
                <Atributos/>
                <AtributosOcultos/>
                <Dicionario></Dicionario>
                <Nula Valor="0"/>
                <Observacao></Observacao>
                <Futuro></Futuro>
                <Anexos/>
                <Cor Valor="15780518"/>
                <TamAuto Valor="-1"/>
                <Tipo Valor="0"/>
                <TextAlin Valor="0"/>
                <Card Valor="4"/>
                <Fixa Valor="0"/>
                <Ligacoes/>
              </Cardinalidade>
            </Cardinalidades>
            <Orientacao Valor="0"/>
            <Fraca Valor="0"/>
          </Ligacao>
          <Ligacao Destino_ID="5">
            <MostraCardinalidade Valor="-1" Card_id="132"/>
            <Cardinalidades Cardinalidade="4">
              <Cardinalidade nome="" id="132">
                <Left Valor="768"/>
                <Top Valor="126"/>
                <Width Valor="37"/>
                <Height Valor="20"/>
                <Fonte default="0">
                  <FonteNome Valor="Tahoma"/>
                  <FonteTamanho Valor="8"/>
                  <FonteEstilo Valor="[]"/>
                  <FonteCor Valor="0"/>
                </Fonte>
                <Atributos/>
                <AtributosOcultos/>
                <Dicionario></Dicionario>
                <Nula Valor="0"/>
                <Observacao></Observacao>
                <Futuro></Futuro>
                <Anexos/>
                <Cor Valor="15780518"/>
                <TamAuto Valor="-1"/>
                <Tipo Valor="0"/>
                <TextAlin Valor="0"/>
                <Card Valor="4"/>
                <Fixa Valor="0"/>
                <Ligacoes/>
              </Cardinalidade>
            </Cardinalidades>
            <Orientacao Valor="0"/>
            <Fraca Valor="0"/>
          </Ligacao>
        </Ligacoes>
      </ChildRelacao>
    </EntidadeAssoss>
  </EntAssoss>
	<Texto>
	</Texto>
</MER>
