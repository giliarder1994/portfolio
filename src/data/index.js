export const projetos = [
  {
    id: 1,
    titulo: 'Projeto Tela de Login / Newsletter',
    descricao: 'Interface simples para cadastro de e-mail com alternância de tema.',
    detalhes:
      'O Projeto Tela de Login / Newsletter é uma página web desenvolvida com HTML, CSS e JavaScript, que simula um formulário de inscrição em newsletter. O projeto possui tema claro e escuro, layout responsivo e interação dinâmica com o usuário.',
    imagem: './imagens/Projeto tela de login.jpeg',
    linkDemo: 'https://giliarder1994.github.io/projeto-layout-entrada/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-layout-entrada',
  },
  {
    id: 2,
    titulo: 'Projeto Buscar Usuários',
    descricao: 'Projeto que consome uma API e filtra dados dinamicamente.',
    detalhes:
      'O Projeto Buscar Usuários é uma aplicação web desenvolvida com HTML, CSS e JavaScript, que consome dados de uma API e permite realizar busca em tempo real por nome. O projeto exibe feedback visual de carregamento e resultados de forma clara e organizada.',
    imagem: './imagens/projeto lista de usuarios.jpeg',
    linkDemo: 'https://giliarder1994.github.io/Buscar-Usuarios-API-/',
    linkCodigo: 'https://github.com/giliarder1994/Buscar-Usuarios-API-',
  },
  {
    id: 3,
    titulo: 'Projeto Redes Sociais',
    descricao: 'Confira os detalhes deste projeto e as tecnologias utilizadas.',
    detalhes:
      'O Projeto Redes Sociais é um projeto que simula a navegação entre redes sociais dentro da tela de um smartphone, utilizando HTML e CSS para criar uma experiência visual interativa.',
    imagem: './imagens/projeto links.jpeg',
    linkDemo: 'https://giliarder1994.github.io/projeto-rede-sociais/',
    linkCodigo: 'https://github.com/giliarder1994/projeto-rede-sociais',
  },
  {
    id: 4,
    titulo: 'API REST - Estoque de Loja',
    descricao: 'API de gerenciamento de estoque com autenticação JWT e CRUD completo de produtos.',
    detalhes:
      'O projeto Estoque de Loja é uma API REST desenvolvida com Node.js, Express e MySQL. Possui sistema de autenticação com JWT e criptografia de senhas com bcrypt, rotas protegidas por middleware, CRUD completo de produtos com filtro por categoria e paginação de resultados. A API está hospedada na Railway e pronta para consumo em produção.',
    imagem: './imagens/Projeto API REST - Estoque de Loja.jpeg',
    linkDemo: './imagens/Projeto API REST - Estoque de Loja.jpeg',
    linkCodigo: 'https://github.com/giliarder1994/Estoque_de_Loja_-_CRUD_de_produtos'
  },
  {
  id: 5,
  titulo: 'API REST - Dashboard Financeiro',
  descricao: 'Backend de controle financeiro pessoal com autenticação JWT, CRUD de transações e resumo financeiro via SQL.',
  detalhes:
    'O Dashboard Financeiro é uma API REST desenvolvida com Node.js, Express e MySQL. O backend conta com autenticação JWT, criptografia de senhas com bcrypt e rotas protegidas por middleware. Possui CRUD completo de transações e categorias (receita/despesa), filtro por tipo, paginação de resultados e dois endpoints de análise financeira: um resumo geral de saldo calculado com SQL CASE WHEN, e um relatório mensal agrupado por mês. O frontend foi desenvolvido em React com Vite.',
  imagem: './imagens/projeto API REST - Dashboard Financeiro.png',
  linkDemo: './imagens/projeto API REST - Dashboard Financeiro.png',
  linkCodigo: 'https://github.com/giliarder1994/dashboard-financeiro',
  },
  {
    id: 6,
    titulo: 'API REST - Fitness Tracker',
    descricao: 'Backend para gestão de rotinas de treino com autenticação JWT, modelagem relacional de exercícios e controle de carga.',
    detalhes:
    'O Fitness Tracker é uma API REST desenvolvida com Node.js, Express e MySQL para o gerenciamento personalizado de treinos e evolução física. O sistema utiliza autenticação via JWT e criptografia de senhas com bcrypt, garantindo a privacidade dos dados de cada usuário. A arquitetura foi estruturada com o padrão MVC, contando com serviços dedicados e middlewares para proteção de rotas. O banco de dados gerencia o relacionamento entre usuários, treinos e exercícios, permitindo o controle detalhado de séries, repetições e cargas (decimal) com deleção em cascata. Além do backend, o projeto inclui testes de endpoints via Postman para validação de fluxos de cadastro e gestão de treinos.',
    imagem: './imagens/fitness_tracker.jpeg',
    linkDemo: './imagens/fitness_tracker.jpeg',
    linkCodigo: 'https://github.com/giliarder1994/Fitness_Tracker',
  },
];

export const skills = [
  { nome: 'HTML5', imagem: './imagens/html.webp', alt: 'HTML5' },
  { nome: 'CSS3', imagem: './imagens/css.webp', alt: 'CSS3' },
  { nome: 'JavaScript', imagem: './imagens/js.webp', alt: 'JS' },
  { nome: 'TypeScript', imagem: './imagens/typescript.webp', alt: 'TS' },
  { nome: 'React', imagem: './imagens/react-2.png', alt: 'REACT' },
  { nome: 'Git', imagem: './imagens/git.webp', alt: 'Git' },
  { nome: 'Node.JS', imagem: './imagens/nodejs.webp', alt: 'Node' },
  { nome: 'Express', imagem: './imagens/express.png', alt: 'Express' },
  { nome: 'MySQL', imagem: './imagens/mysql.webp', alt: 'MySQL' },
];

export const formacoes = [
  {
    periodo: '2025 - 24.5hrs',
    instituicao: 'Udemy',
    titulacao: 'JavaScript do básico ao avançado',
  },
  {
    periodo: '2026 - Cursando',
    instituicao: 'Estácio',
    titulacao: 'Engenharia de Software',
  },
];
