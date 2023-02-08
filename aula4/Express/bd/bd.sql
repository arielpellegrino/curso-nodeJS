/*criando tabela */

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);


INSERT INTO usuarios(nome, email, idade) VALUES(
    "MANU MANU", "MANU@teste.com", 18
);

DELETE FROM usuarios WHERE nome = "Victor Lima";

/* SEMPRE usar o WHERE com os comando UPDATE e DELETE */
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luiz Lima";