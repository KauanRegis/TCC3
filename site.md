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

O site é composto por várias páginas HTML, organizadas em uma estrutura hierárquica simples:

### 1. Página Principal (`index.html`)
- **Função**: Página de entrada com formulários de cadastro e login.
- **Conteúdo**:
  - Cabeçalho com logo e descrição do projeto.
  - Seção de descrição do Bem-Estar Jovem.
  - Formulário de cadastro (nome, e-mail, senha, data de nascimento).
  - Formulário de login (e-mail, senha).
  - Botão para acesso à área administrativa.
  - Rodapé com direitos autorais.
- **Funcionalidades**:
  - Validação de formulários (campos obrigatórios, formato de e-mail, data de nascimento anterior a 2013).
  - Armazenamento de usuários no localStorage.
  - Redirecionamento para a página home após login bem-sucedido.
  - Mensagens de erro e sucesso para feedback ao usuário.

### 2. Página Home (`templates/home.html`)
- **Função**: Página principal do usuário logado, contendo todo o conteúdo interativo.
- **Conteúdo**:
  - Cabeçalho com logo e slogan.
  - Navegação com botões para seções: Artigos, Quizzes, Rotina, Diário Emocional, Vídeos, Dicas, FAQ, Contato.
  - Seções ocultas/ativas:
    - **Tela Inicial**: Mensagem de boas-vindas e introdução.
    - **Artigos**: Conteúdo sobre saúde mental na adolescência, problemas comuns e dicas.
    - **Quizzes**: Questionários sobre ansiedade, sono, estresse e depressão com feedback personalizado.
    - **Rotina**: Rotinas detalhadas de autocuidado para insônia, ansiedade, depressão e estresse.
    - **Diário Emocional**: Formulário para registrar humor e notas, com histórico salvo no localStorage.
    - **Vídeos**: Incorporação de vídeos do YouTube sobre meditação e relaxamento.
    - **Dicas**: Geração aleatória de dicas de autocuidado.
    - **FAQ**: Perguntas frequentes sobre o projeto.
    - **Contato**: Informações de contato (e-mail).
  - Rodapé com direitos autorais e link para subir ao topo.
- **Funcionalidades**:
  - Navegação dinâmica entre seções via JavaScript.
  - Salvamento de dados no localStorage (diário emocional).
  - Lógica de quizzes com cálculo de pontuação e feedback.
  - Exibição condicional de rotinas.
  - Geração de dicas aleatórias.

### 3. Página de Login Admin (`templates/admin-login.html`)
- **Função**: Página de autenticação para administradores.
- **Conteúdo**:
  - Cabeçalho simples.
  - Formulário de login (e-mail, senha).
  - Botão para voltar à página home.
  - Rodapé.
- **Funcionalidades**:
  - Verificação de credenciais fixas (e-mail: kauan@gmail.com, senha: 123).
  - Redirecionamento para o painel admin após login.

### 4. Página Admin (`templates/admin.html`)
- **Função**: Painel administrativo para gerenciamento do site.
- **Conteúdo**:
  - Sidebar com menu: Dashboard, Usuários, Atividades, Configurações, Estatísticas.
  - Área principal com conteúdo dinâmico:
    - **Dashboard**: Visão geral com gráfico de barras (Chart.js).
    - **Usuários**: Tabela com participantes cadastrados.
    - **Atividades**: Tabela com programações recentes.
    - **Configurações**: Formulário para editar informações do site.
    - **Estatísticas**: Resumo com dados fictícios e gráfico de pizza (Chart.js).
  - Relógio em tempo real.
- **Funcionalidades**:
  - Navegação lateral dinâmica.
  - Gráficos interativos usando Chart.js.
  - Dados simulados para demonstração.

## Funcionalidades Principais

### Autenticação e Cadastro
- Cadastro de usuários com validação de idade (nascidos antes de 2013).
- Login com redirecionamento automático.
- Armazenamento local de dados (localStorage).

### Conteúdo Educativo
- Artigos sobre saúde mental na adolescência.
- Quizzes interativos com feedback baseado em respostas.
- Rotinas personalizadas para diferentes condições (insônia, ansiedade, etc.).

### Ferramentas Interativas
- Diário emocional para registro de humor e notas.
- Vídeos incorporados para relaxamento.
- Dicas aleatórias de autocuidado.

### Área Administrativa
- Dashboard com estatísticas visuais.
- Gerenciamento de usuários e atividades (dados simulados).
- Configurações básicas do site.

### Outros Recursos
- FAQ e seção de contato.
- Design responsivo para dispositivos móveis.
- Animações e efeitos visuais (hover, transições).

## Design e Estilo

### Paleta de Cores
- Verde claro (#e8f5e9) como fundo principal.
- Verde médio (#81c784) para cabeçalhos e botões.
- Verde escuro (#66bb6a) para destaques e hovers.
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

## Considerações Finais

O projeto Bem-Estar Jovem representa uma iniciativa completa e funcional para promover a saúde mental entre jovens. Com uma estrutura bem organizada, funcionalidades interativas e um design atrativo, o site oferece uma experiência rica e educativa. Pontos fortes incluem a responsividade, as animações suaves e a integração de ferramentas práticas como quizzes e diários. Para futuras melhorias, recomenda-se a implementação de um backend para armazenamento persistente de dados, autenticação mais segura e integração com APIs externas para vídeos ou notificações.

Este relatório cobre todos os aspectos desenvolvidos no site, baseado na análise detalhada dos arquivos do projeto.

## Atualizações Recentes (05/10/2023)

As seguintes alterações e adições foram implementadas hoje no projeto Bem-Estar Jovem:

### 1. Expansão de Conteúdo em `index.html`
- **Seção Introdutória Expandida**: A descrição inicial do projeto foi ampliada com mais detalhes sobre os objetivos, benefícios e recursos oferecidos. Inclui informações sobre a base científica (OMS), benefícios de intervenções precoces e incentivo ao autocuidado.

### 2. Adições e Expansões em `templates/home.html`
- **Artigos Expandidos e Novos**:
  - **Saúde Mental na Adolescência**: Artigo existente expandido com mais explicações, estatísticas (ex.: 10-20% dos adolescentes sofrem transtornos mentais), sinais de alerta detalhados, causas, fatores de risco e dicas práticas de autocuidado.
  - **Novo Artigo: Ansiedade em Adolescentes**: Introdução completa sobre ansiedade, tipos comuns (TAG, social, ataques de pânico), sinais, sintomas, causas, fatores de risco e estratégias de manejo (respiração 4-7-8, exercícios, TCC).
  - **Novo Artigo: Depressão Juvenil**: Explicações sobre sintomas, fatores de risco, opções de tratamento (terapia, medicamentos, estilo de vida saudável) e encorajamento à busca de ajuda.
  - **Novo Artigo: Lidando com o Estresse Escolar**: Foco em estresse acadêmico, causas, sinais, técnicas de coping (organização, pausas Pomodoro, exercícios de relaxamento) e equilíbrio entre estudos e saúde mental.
- **FAQ Expandido**: Adicionadas mais perguntas frequentes, totalizando 20 perguntas, cobrindo dúvidas sobre saúde mental, como sinais de problemas, ajuda a amigos, custo de terapia, mindfulness, pressão das redes sociais, ansiedade antes de provas, autoestima, crises de ansiedade, equilíbrio estudos/saúde mental e quando procurar ajuda profissional.
- **Dicas de Autocuidado**: Array de dicas expandido com mais de 50 dicas aleatórias, incluindo práticas de gratidão, meditação, exercícios, leitura, hobbies, respiração, journaling, visualização, autoafirmação e muito mais.

### 3. Melhorias Gerais
- **Conteúdo Educacional Aprimorado**: Todos os novos conteúdos são baseados em evidências científicas, com referências à OMS e especialistas em psicologia.
- **Aumento na Interatividade**: As adições fornecem mais recursos para reflexão e autocuidado, alinhados aos objetivos do projeto de promover resiliência e hábitos saudáveis entre jovens.
- **Consistência com o Tema**: As expansões mantêm o foco em adolescentes e jovens, enfatizando apoio sem julgamentos e busca por ajuda profissional quando necessário.

Essas atualizações fortalecem a plataforma como um recurso abrangente para saúde mental juvenil, oferecendo informações mais profundas e práticas para lidar com desafios comuns da adolescência.
