# Relatório do Projeto Bem-Estar Jovem

## Visão Geral do Projeto

O **Bem-Estar Jovem** é uma plataforma web dedicada à promoção da saúde mental e do bem-estar emocional entre adolescentes e jovens. O projeto visa oferecer um ambiente digital seguro, acolhedor e informativo, com conteúdos educativos, ferramentas de autoconhecimento e espaços de interação. O foco principal é ajudar os jovens a lidar com desafios comuns da adolescência, como ansiedade, estresse, depressão e insônia, incentivando hábitos positivos e o autocuidado.

### Objetivos Principais
- Fornecer recursos educacionais sobre saúde mental.
- Oferecer ferramentas interativas como quizzes e diários emocionais.
- Promover rotinas de bem-estar personalizadas.
- Criar um espaço de apoio e reflexão para os usuários.
- Incluir uma área administrativa para gerenciamento do site.

### Público-Alvo
- Adolescentes e jovens entre 10 e 19 anos.
- Usuários interessados em autocuidado e saúde mental.
- Administradores responsáveis pela manutenção e análise de dados.

## Estrutura do Site

O site é composto por várias páginas HTML, organizadas em uma estrutura hierárquica simples, com estilos CSS para design responsivo e JavaScript para interatividade. Cada página foi desenvolvida para oferecer uma experiência intuitiva e acessível aos usuários.

### 1. Página Principal (`index.html`)
- **Função**: Página de entrada com formulários de cadastro e login, servindo como porta de acesso ao site.
- **Conteúdo**:
  - Cabeçalho com logo (img/logo.png) e descrição do projeto, incluindo uma introdução detalhada sobre o Bem-Estar Jovem, objetivos, benefícios e base científica (OMS).
  - Seção de descrição expandida do Bem-Estar Jovem, destacando recursos como artigos, quizzes, rotinas e diário emocional.
  - Formulário de cadastro (nome, e-mail, senha, data de nascimento), com validação para usuários nascidos antes de 2013.
  - Formulário de login (e-mail, senha), com opção para alternar entre cadastro e login.
  - Botão para acesso à área administrativa (não implementado na versão atual).
  - Rodapé com direitos autorais.
- **Funcionalidades**:
  - Validação de formulários usando JavaScript: verificação de campos obrigatórios, formato de e-mail, data de nascimento válida e anterior a 2013.
  - Armazenamento de usuários no localStorage para persistência de dados sem backend.
  - Redirecionamento automático para a página home (templates/home.html) após login bem-sucedido.
  - Mensagens de erro e sucesso dinâmicas para feedback ao usuário, exibidas condicionalmente.
  - Alternância entre formulários de cadastro e login sem recarregar a página.

### 2. Página Home (`templates/home.html`)
- **Função**: Página principal do usuário logado, centralizando todo o conteúdo interativo e educativo do site.
- **Conteúdo**:
  - Cabeçalho com logo, slogan ("Cuidando da sua mente com carinho e atenção") e botões de acesso rápido a FAQ e Contato.
  - Navegação horizontal com botões para seções: Artigos, Quizzes, Rotina, Diário Emocional, Dicas.
  - Seções dinâmicas ocultas/ativas:
    - **Tela Inicial**: Mensagem de boas-vindas detalhada, explicando recursos do site, benefícios e incentivo ao autocuidado, com link para CVV (Centro de Valorização da Vida).
    - **Artigos**: Conteúdo expandido sobre saúde mental na adolescência, incluindo artigos sobre ansiedade, depressão, estresse escolar e insônia, com imagens, estatísticas (ex.: 10-20% dos adolescentes sofrem transtornos mentais) e dicas práticas baseadas em evidências científicas.
    - **Quizzes**: Questionários interativos sobre ansiedade, sono, estresse e depressão, com perguntas de sim/não e cálculo de pontuação para feedback personalizado (ex.: indicação de problemas potenciais).
    - **Rotina**: Seleção de rotinas detalhadas de autocuidado para insônia, ansiedade, depressão e estresse, com horários diários, exercícios e dicas adicionais.
    - **Diário Emocional**: Formulário para registrar humor (opções: feliz, triste, ansioso, neutro, animado) e notas, com histórico salvo e opções de editar/excluir entradas.
    - **Dicas**: Geração aleatória de dicas de autocuidado de uma lista de mais de 50 itens, incluindo gratidão, meditação, exercícios e journaling.
    - **FAQ**: 20 perguntas frequentes expandidas, cobrindo dúvidas sobre saúde mental, sinais de problemas, ajuda a amigos, terapia e equilíbrio estudos/saúde.
    - **Contato**: Informações de contato (e-mail: 0000110410071xsp@al.educacao.sp.gov.br).
  - Rodapé com direitos autorais e link para subir ao topo.
- **Funcionalidades**:
  - Navegação dinâmica entre seções usando JavaScript, exibindo/ocultando conteúdo sem recarregar a página.
  - Salvamento de dados no localStorage para o diário emocional, permitindo persistência de histórico.
  - Lógica de quizzes implementada em JavaScript, com validação de respostas, cálculo de pontuação e feedback baseado em limiares (ex.: 2 ou mais "sim" indicam possível problema).
  - Exibição condicional de rotinas via JavaScript, carregando conteúdo HTML dinâmico.
  - Geração de dicas aleatórias usando JavaScript para selecionar itens de um array.
  - Histórico do diário com edição e exclusão de entradas, salvo no localStorage.

### 3. Página de Login Admin (`templates/admin-login.html`)
- **Função**: Página de autenticação para administradores, permitindo acesso ao painel de gerenciamento.
- **Conteúdo**:
  - Cabeçalho simples com título.
  - Formulário de login (e-mail, senha).
  - Botão para voltar à página home.
  - Rodapé.
- **Funcionalidades**:
  - Verificação de credenciais fixas usando JavaScript (e-mail: kauan@gmail.com, senha: 123).
  - Redirecionamento para o painel admin após login bem-sucedido.

### 4. Página Admin (`templates/admin.html`)
- **Função**: Painel administrativo para gerenciamento do site, com dados simulados.
- **Conteúdo**:
  - Sidebar com menu: Dashboard, Usuários, Atividades, Configurações, Estatísticas.
  - Área principal com conteúdo dinâmico:
    - **Dashboard**: Visão geral com gráfico de barras usando Chart.js.
    - **Usuários**: Tabela com participantes cadastrados (dados simulados).
    - **Atividades**: Tabela com programações recentes (dados simulados).
    - **Configurações**: Formulário para editar informações do site (não funcional).
    - **Estatísticas**: Resumo com dados fictícios e gráfico de pizza usando Chart.js.
  - Relógio em tempo real.
- **Funcionalidades**:
  - Navegação lateral dinâmica usando JavaScript.
  - Gráficos interativos criados com Chart.js (biblioteca JavaScript).
  - Dados simulados para demonstração, sem integração com backend.

## Funcionalidades Principais

### Autenticação e Cadastro
- **Cadastro de Usuários**: Formulário em `index.html` permite cadastro com nome, e-mail, senha e data de nascimento. O JavaScript foi utilizado para validar campos obrigatórios, formato de e-mail e restrição de idade (nascidos antes de 2013), armazenando dados no localStorage para persistência sem backend.
- **Login**: Formulário em `index.html` verifica credenciais salvas no localStorage. O JavaScript foi utilizado para autenticação e redirecionamento automático para `templates/home.html` após sucesso, com mensagens de erro dinâmicas.
- **Armazenamento Local**: Utiliza localStorage (API JavaScript) para salvar dados de usuários e diário emocional, permitindo acesso offline e persistência de sessões.

### Conteúdo Educativo
- **Artigos**: Seção em `templates/home.html` com artigos expandidos sobre saúde mental, incluindo estatísticas, sinais, causas e dicas. O HTML foi utilizado para estruturar o conteúdo, com imagens e links para recursos externos.
- **Quizzes Interativos**: Questionários sobre ansiedade, sono, estresse e depressão em `templates/home.html`. O JavaScript foi utilizado para validar respostas, calcular pontuação (ex.: contagem de "sim") e gerar feedback personalizado baseado em limiares (2 ou mais "sim" indicam possível problema).
- **Rotinas Personalizadas**: Seleção de rotinas diárias para insônia, ansiedade, depressão e estresse em `templates/home.html`. O JavaScript foi utilizado para exibir conteúdo dinâmico via objetos e innerHTML, com horários detalhados e dicas práticas.

### Ferramentas Interativas
- **Diário Emocional**: Formulário em `templates/home.html` para registrar humor e notas. O JavaScript foi utilizado para salvar, editar e excluir entradas no localStorage, exibindo histórico reverso com timestamps.
- **Vídeos Incorporados**: Embora mencionados, não implementados na versão atual; planejados para incorporação via HTML iframes do YouTube.
- **Dicas Aleatórias**: Botão em `templates/home.html` gera dicas de um array de mais de 50 itens. O JavaScript foi utilizado para seleção aleatória usando Math.random() e exibição dinâmica.

### Área Administrativa
- **Dashboard**: Em `templates/admin.html`, exibe gráficos de barras com Chart.js. O JavaScript foi utilizado para criar gráficos interativos com dados simulados.
- **Gerenciamento de Usuários e Atividades**: Tabelas em `templates/admin.html` com dados fictícios. O HTML foi utilizado para estrutura, com navegação lateral dinâmica via JavaScript.
- **Configurações**: Formulário básico em `templates/admin.html` para editar informações (não funcional na versão atual).

### Outros Recursos
- **FAQ e Contato**: Seções em `templates/home.html` com 20 perguntas frequentes e e-mail de contato. O HTML foi utilizado para estrutura estática.
- **Design Responsivo**: CSS3 com media queries para dispositivos móveis, flexbox para layouts e transições suaves.
- **Animações e Efeitos**: CSS3 para hover, fade-in e efeitos de clique (ex.: translateY, scale), com keyframes para animações personalizadas.

## Design e Estilo

### Paleta de Cores
- Verde claro (#e8f5e9) como fundo principal.
- Verde escuro (#2a8770) para cabeçalhos.
- Verde médio (#a5d6a7) para navegação.
- Verde teal (#38bb9b) para botões.
- Verde teal escuro (#2e9b7f) para destaques e hovers.
- Branco (#ffffff) para caixas de texto.
- Preto (#000000) para texto principal.

### Layout
- Design responsivo com media queries para telas menores.
- Uso de flexbox para navegação e layout geral.
- Caixas arredondadas com sombras para elementos principais.
- Fundo com imagem de fundo fixa (img/fundo.jpg).

### Tipografia
- Fonte monospace para um visual moderno e legível.
- Tamanhos de fonte variados para hierarquia (h1, h2, p).
- Line-height de 1.6 para melhor leitura.

### Animações e Efeitos
- Transições suaves em botões e elementos (0.3s).
- Animações de fade-in e slide-in para seções.
- Efeitos de hover com transformação (translateY, scale).
- Animações de clique em botões (efeito de onda).

### Arquivos CSS
- `css/styles.css`: Estilos gerais aplicáveis a todas as páginas.
- `css/home.css`: Estilos específicos para a página home, com algumas variações.

## Tecnologias Utilizadas

### Linguagens
- **HTML5**: Estrutura das páginas.
- **CSS3**: Estilização, layouts e animações.
- **JavaScript (ES6)**: Funcionalidades interativas, validação, armazenamento local.

### Bibliotecas e Frameworks
- **Chart.js**: Para gráficos no painel admin.
- **LocalStorage**: Para armazenamento de dados do usuário (cadastro, diário).

### Outros Recursos
- Imagens: Logo (img/logo.png), fundo (img/fundo.jpg).
- Vídeos incorporados do YouTube.
- Formulários com validação nativa e personalizada.

## Linguagens de Programação Utilizadas

### HTML5
- **Estrutura das Páginas**: Utilizado para criar a estrutura básica de todas as páginas, incluindo cabeçalhos, formulários, seções e rodapés. Por exemplo, em `index.html`, o HTML5 foi usado para definir os formulários de cadastro e login, com elementos como `<form>`, `<input>` e `<button>`.
- **Conteúdo Educativo**: Em `templates/home.html`, o HTML5 estruturou os artigos, quizzes e rotinas, utilizando listas (`<ul>`, `<li>`), parágrafos (`<p>`) e cabeçalhos (`<h2>`, `<h3>`) para organizar o conteúdo de forma acessível.
- **Navegação e Layout**: Implementou a navegação horizontal e seções dinâmicas, com classes CSS para controle de visibilidade (ex.: `class="active"` para seções ativas).

### CSS3
- **Estilização Geral**: Aplicado em `css/styles.css` para definir a paleta de cores (verdes suaves), tipografia (fonte monospace) e layout responsivo com flexbox e media queries para dispositivos móveis.
- **Animações e Efeitos**: Utilizado para transições suaves (0.3s), efeitos de hover (translateY, scale), animações de fade-in/slide-in com keyframes, e efeitos de clique (onda pulsante) para melhorar a experiência do usuário.
- **Responsividade**: Em `css/home.css`, o CSS3 garantiu que o layout se adapte a telas menores, ajustando navegação, caixas de texto e botões para uma visualização otimizada em smartphones e tablets.

### JavaScript (ES6)
- **Validação de Formulários e Autenticação**: Em `js/index.js`, o JavaScript foi utilizado para validar campos obrigatórios, formato de e-mail e data de nascimento no cadastro, além de verificar credenciais no login e redirecionar para `templates/home.html`. Também alterna entre formulários de cadastro e login sem recarregar a página.
- **Navegação Dinâmica e Interatividade**: Em `js/home.js`, o JavaScript controla a exibição de seções (ex.: `showSection()` para ocultar/mostrar conteúdo), permitindo navegação fluida entre Artigos, Quizzes, Rotina, Diário Emocional e Dicas.
- **Quizzes e Feedback**: O JavaScript foi usado para processar respostas dos quizzes (contagem de "sim"), calcular pontuação e gerar feedback personalizado baseado em limiares (ex.: 2 ou mais "sim" indica possível ansiedade).
- **Diário Emocional**: Implementou salvamento, edição e exclusão de entradas no localStorage, exibindo histórico com timestamps e opções de interação (botões Editar/Excluir).
- **Rotinas e Dicas**: Carrega rotinas dinâmicas via objetos JavaScript e innerHTML; gera dicas aleatórias de um array usando Math.random().
- **Painel Admin**: Em arquivos não analisados, o JavaScript integra Chart.js para gráficos interativos e navegação lateral dinâmica.
- **Armazenamento Local**: Utiliza localStorage para persistir dados de usuários e diário, permitindo acesso offline e continuidade de sessões.

## Considerações Finais

O projeto Bem-Estar Jovem representa uma iniciativa completa e funcional para promover a saúde mental entre jovens. Com uma estrutura bem organizada, funcionalidades interativas e um design atrativo, o site oferece uma experiência rica e educativa. Pontos fortes incluem a responsividade, as animações suaves e a integração de ferramentas práticas como quizzes e diários. Para futuras melhorias, recomenda-se a implementação de um backend para armazenamento persistente de dados, autenticação mais segura e integração com APIs externas para vídeos ou notificações.

Este relatório cobre todos os aspectos desenvolvidos no site, baseado na análise detalhada dos arquivos do projeto.

## Atualizações Recentes (05/10/2023)

As seguintes alterações e adições foram implementadas hoje no projeto Bem-Estar Jovem, visando enriquecer o conteúdo educativo e interativo do site:

### 1. Expansão de Conteúdo em `index.html`
- **Seção Introdutória Expandida**: A descrição inicial do projeto foi ampliada com mais detalhes sobre os objetivos, benefícios e recursos oferecidos. Inclui informações sobre a base científica (OMS), benefícios de intervenções precoces e incentivo ao autocuidado. O HTML foi utilizado para estruturar o conteúdo com parágrafos e listas, enquanto o CSS aplicou estilos para melhor legibilidade.
- **Melhoria na Navegação**: Adicionada alternância dinâmica entre formulários de cadastro e login usando JavaScript, evitando recarregamento da página e melhorando a experiência do usuário.

### 2. Adições e Expansões em `templates/home.html`
- **Artigos Expandidos e Novos**:
  - **Saúde Mental na Adolescência**: Artigo existente expandido com mais explicações, estatísticas (ex.: 10-20% dos adolescentes sofrem transtornos mentais), sinais de alerta detalhados, causas, fatores de risco e dicas práticas de autocuidado. O HTML estruturou o conteúdo com cabeçalhos, listas e imagens.
  - **Novo Artigo: Ansiedade em Adolescentes**: Introdução completa sobre ansiedade, tipos comuns (TAG, social, ataques de pânico), sinais, sintomas, causas, fatores de risco e estratégias de manejo (respiração 4-7-8, exercícios, TCC). Conteúdo baseado em evidências científicas.
  - **Novo Artigo: Depressão Juvenil**: Explicações sobre sintomas, fatores de risco, opções de tratamento (terapia, medicamentos, estilo de vida saudável) e encorajamento à busca de ajuda. Inclui links para recursos externos.
  - **Novo Artigo: Lidando com o Estresse Escolar**: Foco em estresse acadêmico, causas, sinais, técnicas de coping (organização, pausas Pomodoro, exercícios de relaxamento) e equilíbrio entre estudos e saúde mental.
- **FAQ Expandido**: Adicionadas mais perguntas frequentes, totalizando 20 perguntas, cobrindo dúvidas sobre saúde mental, como sinais de problemas, ajuda a amigos, custo de terapia, mindfulness, pressão das redes sociais, ansiedade antes de provas, autoestima, crises de ansiedade, equilíbrio estudos/saúde mental e quando procurar ajuda profissional. O HTML organizou as perguntas em listas expansíveis.
- **Dicas de Autocuidado**: Array de dicas expandido com mais de 50 dicas aleatórias, incluindo práticas de gratidão, meditação, exercícios, leitura, hobbies, respiração, journaling, visualização, autoafirmação e muito mais. O JavaScript foi utilizado para gerar dicas aleatórias via Math.random() e exibir dinamicamente.
- **Quizzes Aprimorados**: Lógica de quizzes refinada com JavaScript para validação de respostas obrigatórias e feedback mais detalhado baseado em pontuação.
- **Diário Emocional Melhorado**: Adicionadas opções de edição e exclusão de entradas, com histórico salvo no localStorage. O JavaScript gerencia o CRUD (Create, Read, Update, Delete) das entradas.

### 3. Melhorias Gerais
- **Conteúdo Educacional Aprimorado**: Todos os novos conteúdos são baseados em evidências científicas, com referências à OMS e especialistas em psicologia. O HTML estruturou o conteúdo para acessibilidade, com CSS aplicando estilos responsivos.
- **Aumento na Interatividade**: As adições fornecem mais recursos para reflexão e autocuidado, alinhados aos objetivos do projeto de promover resiliência e hábitos saudáveis entre jovens. O JavaScript foi essencial para implementar navegação dinâmica, salvamento de dados e geração de conteúdo aleatório.
- **Consistência com o Tema**: As expansões mantêm o foco em adolescentes e jovens, enfatizando apoio sem julgamentos e busca por ajuda profissional quando necessário.
- **Otimização de Performance**: Código JavaScript otimizado para reduzir carregamento, com uso eficiente de localStorage para dados locais.

Essas atualizações fortalecem a plataforma como um recurso abrangente para saúde mental juvenil, oferecendo informações mais profundas e práticas para lidar com desafios comuns da adolescência. Linguagens como HTML para estrutura, CSS para estilo e JavaScript para interatividade foram cruciais em cada adição.
