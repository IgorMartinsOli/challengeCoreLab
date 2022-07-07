Tecnologias:<br>
"body-parser": "^1.20.0",<br>
"chai": "^4.3.6",<br>
"chai-http": "^4.3.0",<br>
"cors": "^2.8.5",<br>
"express": "^4.18.1",<br>
"mocha": "^10.0.0",<br>
"mysql2": "^2.3.3",<br>
"nodemon": "^2.0.18",<br>
"sequelize": "^6.21.2"<br>

Tipos de dados do veiculo:<br>
name: STRING(60)<br>
brand: STRING(60)<br>
color: STRING(30)<br>
year: INTEGER<br>
board: STRING(7)<br>
isFavorite: BOOLEAN<br>

Rotas:<br>
GET /vehicles<br>
Retorna todos os veiculos<br><br>

POST /vehicles/new<br>
Recebe do body os dados(name, brand, color, year, board) e persiste o objeto no BD<br><br>

DELETE /vehicles/delete:id<br>
Recebe do params um id e delete<br><br>

POST /vehicles/update<br>
Recebe do body os dados(name, brand, color, year, board) e persiste atualiza o objeto no BD<br><br>

GET /vehicles/query/:data<br>
Recebe do params um dado, e faz a pesquisa em todos os campos, ele retorna todos os objetos que em alguma coluna tem o dado passado.<br><br>

___________________________________________________________________________________________________________________________________________________________________
Desafio CoreLab: 

Desafio Corelab!
DesafioCorelab
Você vai criar uma aplicação web que vai consumir uma API para gerenciar o CRUD de veículos.

Se você se sentir mais confortável, pode escolher qualquer outro framework de React e nos mostrar as suas habilidades.

O repositório de backend é esse:
https://github.com/corelabbr/corelab-api-challenge

O repositório de frontend é esse:
https://github.com/corelabbr/corelab-web-challenge

Se você se sentir mais confortável, pode escolher qualquer outro framework de Node JS e nos mostrar as suas habilidades.

Tente nos mostrar tudo o que você pode fazer, quanto mais você fizer pelo código e se importar com ele, mais nós vamos nos impressionar. Essa é a sua chance!

O Layout do Mobile pode ser encontrado aqui:
 https://shorturl.ae/NTyff

O Layout do Desktop pode ser encontrado aqui: 
https://shorturl.ae/xEIEo

DesafioCorelab
Backend
Repositório:
1. Node: ^16.15.0
2. NPM: ^8.5.5
3. Framework: Adonis TS ou qualquer outro que você preferir.
4. Banco de dados: Escolha o sue próprio, você pode até mesmo salvar na memória.

Frontend
Repositório:
1. Node: ^16.15.0
2. NPM: ^8.5.5
3. Framework: React TS
4. Sass ou outro preprocessador

As Funcionalidades Requeridas:

1. Ao clicar em um botão "Adicionar novo veículo", um novo formulário deve ser aberto para criar um novo veículo.
2. Ao submeter o formulário, o novo veículo deve ser salvo.
3. Ao digitar algo no _input_ de pesquisa, deve-se filtrar os veículos comparando qualquer que seja a propriedade do veículo. Por exemplo: deve-se comparar o termo procurado com o nome, ou a descrição, ou o preço, ou qualquer outro campo do veículo.
4. Ao clicar em um ícone de coração, deve-se favoritar o veículo.
5. Ao clicar em um ícone de edição, deve-se abrir novamente o formulário do veículo selecionado para editá-lo.
6. Ao clicar no botão no deletar, deve-se remover o veículo.
7. Ao clicar no botão de filtro, deve-se abrir um formulário de filtros, e quando os filtros forem selecionados, deve-se filtrar os veículos baseados nos valores.

O que estamos avaliando:

1. Qualidade do código
2. Formato do código
3. Desempenho do código
4. O design do frontend
5. Se seu código pode ser lido facilmente
6. Abordagem Mobile First
7. Responsabilidade no código
8. Funcionamento das funcionalidades
9. Responsividade

Quer nos impressionar ainda mais?

Se você se sentir confortável e quiser nos impressionar ainda mais, você pode fazer o seguinte:

1. Trabalhar nas typagens corretas e interfaces
2. Trabalhar nas regras eslint
3. Trabalhar nas configs do prettier
4. Trabalhar nos conteiners docker
5. Trabalhar nos testes
6. Trabalhar no CI/CD

O que fazer quando acabar:

Crie o seu arquivo PULL REQUEST.md, onde você vai descrever o que e como fez, o mais detalhadamente possível.
Sinta-se livre para adicionar vídeos para explicar melhor.
