function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');

    if (id === 'rotina') {
        const container = document.getElementById('routineContent');
        container.innerHTML = '<p>Selecione uma rotina para visualizar os detalhes aqui.</p>';
    }
}

window.onload = function() {
    showSection('artigos');
};

document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let ansiedadeCount = 0;
    let sonoCount = 0;
    let estresseCount = 0;
    let depressaoCount = 0;

    function contarSim(perguntas) {
        let count = 0;
        for (const pergunta of perguntas) {
            const resposta = document.querySelector('input[name="' + pergunta + '"]:checked');
            if (!resposta) {
                alert('Por favor, responda todas as perguntas.');
                return null;
            }
            if (resposta.value === 'sim') count++;
        }
        return count;
    }

    const perguntasAnsiedade = ['ansiedade1', 'ansiedade2', 'ansiedade3'];
    const perguntasSono = ['sono1', 'sono2', 'sono3'];
    const perguntasEstresse = ['estresse1', 'estresse2', 'estresse3'];
    const perguntasDepressao = ['depressao1', 'depressao2', 'depressao3'];

    ansiedadeCount = contarSim(perguntasAnsiedade);
    if (ansiedadeCount === null) return;
    sonoCount = contarSim(perguntasSono);
    if (sonoCount === null) return;
    estresseCount = contarSim(perguntasEstresse);
    if (estresseCount === null) return;
    depressaoCount = contarSim(perguntasDepressao);
    if (depressaoCount === null) return;

    const limiar = 2;

    let problemas = [];

    if (ansiedadeCount >= limiar) problemas.push('Ansiedade');
    if (sonoCount >= limiar) problemas.push('Insonia / Problemas de Sono');
    if (estresseCount >= limiar) problemas.push('Estresse');
    if (depressaoCount >= limiar) problemas.push('Depressão');

    let feedback = '';

    if (problemas.length === 0) {
        feedback = 'Você parece estar com um bom equilíbrio mental. Continue cuidando de você!';
    } else if (problemas.length === 1) {
        feedback = `Os seus resultados indicam que você pode estar apresentando sinais de ${problemas[0]}. É importante cuidar da sua saúde mental e procurar ajuda se necessário.`;
    } else {
        feedback = `Os seus resultados indicam que você pode estar apresentando sinais de vários problemas: ${problemas.join(', ')}. Considere buscar ajuda profissional para cuidar do seu bem-estar.`;
    }

    document.getElementById('quizResult').textContent = feedback;
});

const routines = {
    insonia: `
      <h3>Rotina Completa de Autocuidado para Insônia (Dia Todo até a Noite)</h3>
      <h4>Manhã</h4>
      <p><strong>6h30 - Despertar com Luz Natural</strong><br>
      Levante assim que acordar e exponha-se à luz natural por 15 a 30 minutos. Isso ajuda a regular seu relógio biológico e aumentar o humor e a energia.</p>

      <p><strong>6h45 - Hidratação e Respiração Profunda</strong><br>
      Beba um copo grande de água.<br>
      Faça 5 minutos de respirações profundas (inspira pelo nariz contando até 4, segura 4, expira pela boca contando até 6) para ativar a calma.</p>

      <p><strong>7h00 - Alongamento e Exercício Leve</strong><br>
      Faça alongamentos suaves para pescoço, ombros, braços e pernas.<br>
      Opte por uma caminhada leve ou yoga por 20-30 minutos.</p>

      <p><strong>7h30 - Café da Manhã Nutritivo</strong><br>
      Coma alimentos ricos em triptofano (banana, aveia, castanhas), proteínas leves (ovo, iogurte) e carboidratos complexos.<br>
      Evite açúcar refinado para evitar picos de energia.</p>

      <p><strong>8h00 - Atividades Sem Telas (30 min)</strong><br>
      Leia um livro, escreva um diário ou organize seu dia no papel. Evite redes sociais e celular, que podem aumentar a ansiedade.</p>

      <h4>Meio-dia / Tarde</h4>
      <p><strong>12h00 - Almoço Leve e Equilibrado</strong><br>
      Inclua verduras, proteínas magras (frango, peixe, tofu) e carboidratos complexos (arroz integral, quinoa).<br>
      Evite alimentos muito gordurosos ou pesados que podem causar desconforto.</p>

      <p><strong>13h00 - Breve Caminhada ou Pausa Ativa</strong><br>
      Faça uma caminhada de 10-15 minutos para ativar a circulação e reduzir o estresse.</p>

      <p><strong>14h00 - Evitar Cafeína</strong><br>
      Não tome café ou bebidas com cafeína após esse horário para não interferir no sono.</p>

      <p><strong>15h00 - Trabalho/Estudo com Pausas Programadas</strong><br>
      Use a técnica Pomodoro (25-50 min focado, 5-10 min de pausa).<br>
      Nas pausas, levante-se, alongue-se e faça respirações profundas.</p>

      <p><strong>16h30 - Lanche da Tarde Saudável</strong><br>
      Frutas, castanhas, iogurte natural ou uma barrinha de cereais são boas opções para manter energia estável.</p>

      <p><strong>17h30 - Exposição à Luz Natural e Exercício Leve</strong><br>
      Se possível, faça mais uma caminhada curta ou exercícios de alongamento ao ar livre.</p>

      <h4>Noite</h4>
      <p><strong>19h00 - Jantar Leve e Antecipado</strong><br>
      Faça uma refeição leve, com proteínas e legumes. Evite alimentos picantes, gordurosos ou muito doces, que dificultam a digestão e o sono.</p>

      <p><strong>20h00 - Evitar Telas e Estímulos Fortes</strong><br>
      Desligue aparelhos eletrônicos pelo menos 1-2 horas antes de dormir para não estimular o cérebro com luz azul.</p>

      <p><strong>20h30 - Ritual de Relaxamento</strong><br>
      Tome um banho morno, que ajuda a baixar a temperatura corporal e induz o sono.<br>
      Pratique meditação guiada, respirações profundas ou leia um livro calmo.</p>

      <p><strong>21h00 - Preparar o Ambiente para Dormir</strong><br>
      Deixe o quarto escuro, silencioso e com temperatura fresca (ideal entre 18°C e 22°C).<br>
      Use cortinas blackout para evitar luz externa.</p>

      <p><strong>21h30 - Técnicas de Relaxamento para Dormir</strong><br>
      Faça exercícios de respiração, relaxamento muscular progressivo ou visualize um lugar tranquilo para desacelerar a mente.</p>

      <p><strong>22h00 - Hora de Dormir</strong><br>
      Vá para a cama no mesmo horário todos os dias para fortalecer o ciclo natural do sono.<br>
      Evite ficar no celular ou pensando em problemas; foque na sensação do corpo relaxando.</p>

      <h4>Dicas Adicionais</h4>
      <ul>
        <li>Se não conseguir dormir em 20 minutos, levante-se e faça uma atividade relaxante longe do quarto, só volte quando sentir sono.</li>
        <li>Evite cochilos longos durante o dia, limite a 20-30 minutos no máximo antes das 15h.</li>
        <li>Evite álcool, que prejudica a qualidade do sono profundo.</li>
      </ul>
    `,

    ansiedade: `
      <h3>Rotina Completa de Autocuidado para Ansiedade (Dia Inteiro)</h3>
      <h4>Manhã (Despertar até 9h00)</h4>
      <p><strong>6h30 - Acordar com Calma e Luz Natural</strong><br>
      A luz natural ajuda a despertar o cérebro de forma natural e reduz a produção de cortisol (hormônio do estresse).<br>
      Abra a janela, respire fundo e fique alguns minutos olhando para o céu ou natureza.</p>

      <p><strong>6h45 - Respiração Consciente (5-10 minutos)</strong><br>
      Exercício: Inspire pelo nariz por 4 segundos, segure por 4, expire pela boca por 6 segundos. Repita.<br>
      Isso reduz batimentos cardíacos acelerados e a sensação de sufoco causada pela ansiedade.</p>

      <p><strong>7h00 - Hidratação e Café da Manhã Tranquilo</strong><br>
      Beba água com limão ou apenas água fresca.<br>
      Café da manhã leve e nutritivo: frutas + aveia + ovos ou iogurte natural.<br>
      Evite café se sentir que ele piora a ansiedade.</p>

      <p><strong>7h30 - Escrita Terapêutica ou Diário da Gratidão (10-15 minutos)</strong><br>
      Escreva como está se sentindo e liste 3 coisas pelas quais você é grato.<br>
      Isso ajuda a organizar os pensamentos e tirar o foco da preocupação.</p>

      <p><strong>8h00 - Movimento Suave (20-30 minutos)</strong><br>
      Caminhada leve, alongamento, yoga ou dança livre.<br>
      Mexer o corpo solta tensões físicas que alimentam a ansiedade.</p>

      <h4>Manhã até o Almoço (9h às 12h)</h4>
      <p><strong>9h00 - Organização do Dia com Prioridades</strong><br>
      Crie uma lista simples de tarefas. Priorize o que for possível, sem sobrecarga.<br>
      Divida grandes tarefas em pequenas partes.</p>

      <p><strong>10h30 - Pausa com Respiração e Chá Calmante</strong><br>
      Faça 5 minutos de pausa com respiração e beba um chá como camomila, erva-doce ou melissa.</p>

      <h4>Almoço e Início da Tarde (12h às 15h)</h4>
      <p><strong>12h00 - Almoço Tranquilo, Longe de Estímulos</strong><br>
      Alimente-se em um ambiente calmo, sem celular ou TV.<br>
      Mastigue devagar, concentre-se no sabor e na textura.</p>

      <p><strong>13h00 - Pausa Mental ou Cochilo Rápido (opcional)</strong><br>
      Se estiver muito ansioso, tente deitar num ambiente tranquilo por 20 min ou faça meditação guiada.<br>
      Evite dormir por muito tempo para não atrapalhar o sono noturno.</p>

      <h4>Tarde (15h às 18h)</h4>
      <p><strong>15h00 - Atividade Focada com Pausas</strong><br>
      Faça atividades produtivas com foco (estudo, trabalho), mas inclua pausas a cada 50 minutos.<br>
      Durante as pausas: respiração profunda, alongamento ou olhar pela janela.</p>

      <p><strong>16h30 - Lanche da Tarde com Calma</strong><br>
      Frutas, castanhas ou chás calmantes.<br>
      Evite açúcar e cafeína, que podem acelerar a ansiedade.</p>

      <h4>Final da Tarde / Início da Noite (18h às 20h)</h4>
      <p><strong>18h00 - Atividade de Descompressão</strong><br>
      Caminhada ao ar livre, arte, ouvir música leve, banho relaxante, desenhar, cozinhar.<br>
      Evite coisas que causam pressão ou competição nesse horário (como redes sociais intensas).</p>

      <p><strong>19h00 - Jantar Leve</strong><br>
      Alimentos leves e fáceis de digerir.<br>
      Inclua vegetais cozidos, proteínas leves e carboidratos integrais.</p>

      <h4>Noite (20h até Dormir)</h4>
      <p><strong>20h00 - Desconectar de Telas</strong><br>
      Reduza estímulos visuais e mentais (celular, TV, computador).<br>
      Troque por leitura, escuta de música relaxante ou um banho quente.</p>

      <p><strong>20h30 - Ritual de Desaceleração</strong><br>
      Banho morno.<br>
      Óleos essenciais (lavanda ou camomila no travesseiro).<br>
      Luz baixa.<br>
      Música suave.</p>

      <p><strong>21h00 - Técnicas de Relaxamento</strong><br>
      Respiração lenta e profunda.<br>
      Meditação guiada para ansiedade.<br>
      Relaxamento muscular progressivo.</p>

      <p><strong>22h00 - Preparar para Dormir</strong><br>
      Vá para a cama no mesmo horário todo dia.<br>
      Ambiente escuro, fresco e silencioso.<br>
      Evite pensar em problemas — foque na sensação de relaxamento.</p>

      <h4>Dicas Extras</h4>
      <ul>
        <li>Pratique atividades regulares físicas.</li>
        <li>Busque apoio social.</li>
        <li>Evite álcool e drogas.</li>
        <li>Se ansiedade for intensa, procure ajuda profissional.</li>
      </ul>
    `,

    depressao: `
  <h3>Rotina Completa de Autocuidado para Depressão (Dia Inteiro)</h3>
  <h4>🌅 Manhã (6h30 às 9h00)</h4>

  <p><strong>6h30 - Acordar com Gentileza</strong><br>
  Se estiver difícil levantar da cama, tudo bem. Respire fundo, abra os olhos devagar e mexa o corpo aos poucos.<br>
  <em>Dica:</em> pense em só <em>um pequeno passo</em>, como sentar na cama.</p>

  <p><strong>6h45 - Exposição à Luz Natural</strong><br>
  Abra a janela ou vá até um espaço com luz do dia por 5 a 10 minutos.<br>
  <em>Por quê?</em> A luz solar ajuda na produção de serotonina, que melhora o humor.</p>

  <p><strong>7h00 - Hidratação e Higiene Pessoal</strong><br>
  Beba água e escove os dentes. Se conseguir, tome um banho rápido (quente ou morno).<br>
  <em>Por quê?</em> Pequenos cuidados com o corpo ativam a mente e aumentam a autoestima.</p>

  <p><strong>7h30 - Café da Manhã Simples</strong><br>
  Se estiver sem apetite, tente algo pequeno: uma fruta, pão com queijo, iogurte ou leite com aveia.<br>
  Evite pular essa refeição, mesmo que seja leve.</p>

  <p><strong>8h00 - Movimento Suave (Se possível)</strong><br>
  Alongue-se por 5-10 minutos ou dê uma caminhada curta.<br>
  Pode ser dentro de casa mesmo.<br>
  <em>Por quê?</em> O movimento libera endorfinas, que ajudam no humor.</p>

  <h4>🕘 Meio da Manhã (9h00 às 12h00)</h4>

  <p><strong>9h00 - Escolher 1 ou 2 Tarefas Leves</strong><br>
  Pode ser arrumar a cama, lavar a louça ou anotar pensamentos.<br>
  <em>Não precisa fazer muito — só algo pequeno.</em></p>

  <p><strong>10h30 - Pausa com Chá ou Água</strong><br>
  Sente-se em silêncio e beba algo quente. Preste atenção no cheiro, na temperatura e no sabor. Isso ajuda a calmar a mente.</p>

  <h4>🍽️ Almoço e Início da Tarde (12h às 15h)</h4>

  <p><strong>12h00 - Almoço Simples e Leve</strong><br>
  Coma devagar, mesmo que seja uma refeição básica.<br>
  Evite alimentos industrializados ou muito gordurosos, pois eles podem piorar o cansaço.</p>

  <p><strong>13h00 - Pausa ou Descanso</strong><br>
  Deite por 20 a 30 minutos, com música tranquila ou silêncio.<br>
  Se preferir, pode usar esse tempo para ver um conteúdo leve ou ouvir algo calmo.</p>

  <h4>🌤️ Tarde (15h às 18h)</h4>

  <p><strong>15h00 - Pequena Atividade com Sentido</strong><br>
  Escolha algo que te conecte com você mesmo: pintar, escrever, ouvir música, cuidar de uma planta, costurar, desenhar.<br>
  <em>Não precisa ser produtivo — só tem que ser gentil.</em></p>

  <p><strong>16h30 - Lanche Leve</strong><br>
  Frutas, pão, chá ou algo que traga aconchego.</p>

  <p><strong>17h30 - Relembrar Conquistas do Dia</strong><br>
  Anote ou pense em <strong>uma ou duas pequenas coisas</strong> que conseguiu fazer (até mesmo “levantei da cama” conta!).</p>

  <h4>🌆 Noite (18h às 22h)</h4>

  <p><strong>18h00 - Jantar Tranquilo</strong><br>
  Opte por uma refeição leve. Evite comer demais ou muito tarde.</p>

  <p><strong>19h00 - Desconectar-se de Estímulos</strong><br>
  Evite notícias pesadas, redes sociais ou conversas difíceis.<br>
  Prefira um filme leve, uma série calma ou leitura tranquila.</p>

  <p><strong>20h00 - Banho Quente e Ritual de Cuidado</strong><br>
  Banho ajuda a relaxar. Após o banho, vista uma roupa confortável, use um creme ou escove o cabelo com carinho.</p>

  <p><strong>20h30 - Preparar o Ambiente para Dormir</strong><br>
  Deixe o quarto escuro e silencioso. Se puder, use uma luz fraca e música ambiente calma.</p>

  <p><strong>21h00 - Esvaziar a Mente</strong><br>
  Faça respirações profundas ou escreva tudo que está na sua mente num caderno para aliviar.<br>
  Dica: ouça áudios de meditação, ASMR ou sons da natureza.</p>

  <p><strong>22h00 - Ir Dormir (Mesmo que Não Tenha Sono)</strong><br>
  Vá para a cama e descanse o corpo, mesmo que o sono demore a vir. Só o descanso já é um autocuidado.</p>

  <h4>💙 Dicas de Apoio Diário</h4>

  <p><strong>Evite se cobrar por não fazer “tudo certo”.</strong> Depressão exige um ritmo mais gentil.<br>
  <strong>Evite o isolamento total.</strong> Mande mensagem para alguém confiável, mesmo que seja só um “oi”.<br>
  <strong>Terapia é essencial.</strong> Se puder, mantenha contato com psicólogo ou CAPS da sua região.<br>
  <strong>Se estiver muito difícil, peça ajuda.</strong> Falar é um ato de coragem.</p>
`,


    estresse: `
      <h3>Rotina Completa de Autocuidado para Estresse (Dia Inteiro)</h3>
      <h4>Manhã</h4>
      <p><strong>6h30 - Acordar com Calma e Luz Natural</strong><br>
      Abra as janelas e respire fundo algumas vezes para aliviar a tensão inicial.</p>

      <p><strong>6h45 - Exercícios de Respiração</strong><br>
      Técnica 4-7-8: Inspire 4s, segure 7s, expire 8s. Repita 4 vezes.</p>

      <p><strong>7h00 - Café da Manhã Equilibrado</strong><br>
      Inclua frutas, fibras e proteínas para manter a energia.</p>

      <p><strong>7h30 - Movimento Leve</strong><br>
      Caminhada, alongamentos ou yoga para soltar o corpo.</p>

      <h4>Durante o Dia</h4>
      <p><strong>Pausas Programadas</strong><br>
      Use técnicas como Pomodoro para trabalhar e incluir pausas relaxantes.</p>

      <p><strong>Almoço Saudável</strong><br>
      Alimentos frescos, evitando gordura e excesso de cafeína.</p>

      <p><strong>Hidratação e Chá Calmante</strong><br>
      Beba água e chás como camomila ou erva-doce.</p>

      <p><strong>Evite Multitarefas</strong><br>
      Concentre-se em uma tarefa de cada vez para reduzir a sobrecarga mental.</p>

      <h4>Noite</h4>
      <p><strong>Jantar Leve</strong><br>
      Evite comidas pesadas e estimulantes.</p>

      <p><strong>Ritual Relaxante</strong><br>
      Banho quente, música calma, leitura leve e evitar telas.</p>

      <p><strong>Técnicas de Relaxamento</strong><br>
      Meditação, respiração profunda ou relaxamento muscular progressivo.</p>

      <p><strong>Preparar o Ambiente para Dormir</strong><br>
      Ambiente escuro, silencioso e fresco para facilitar o descanso.</p>
    `
};

function showRoutine(type) {
    const container = document.getElementById('routineContent');
    container.innerHTML = routines[type] || '<p>Rotina não encontrada.</p>';
}

function saveMood() {
    const mood = document.getElementById("mood").value;
    const note = document.getElementById("note").value;
    const date = new Date().toLocaleString();
    const editIndex = document.getElementById("note").getAttribute("data-edit");

    let moodHistory = JSON.parse(localStorage.getItem("diarioEmocional")) || [];

    if (editIndex !== null) {
        moodHistory[editIndex] = {
            data: date + " (editado)",
            humor: mood,
            nota: note
        };
        document.getElementById("note").removeAttribute("data-edit");
    } else {
        moodHistory.push({
            data: date,
            humor: mood,
            nota: note
        });
    }

    localStorage.setItem("diarioEmocional", JSON.stringify(moodHistory));
    document.getElementById("note").value = "";
    document.getElementById("mood").value = "feliz";
    mostrarHistorico();
}

function mostrarHistorico() {
    const moodHistory = JSON.parse(localStorage.getItem("diarioEmocional")) || [];
    const container = document.getElementById("moodHistory");
    container.innerHTML = "<h3>Histórico:</h3>";

    moodHistory.slice().reverse().forEach((item, i) => {
        const indexOriginal = moodHistory.length - 1 - i;
        container.innerHTML += `
            <div style="border: 1px solid #ccc; padding: 10px; margin: 5px 0;">
                <strong>${item.data}</strong><br>
                Humor: ${item.humor}<br>
                Nota: ${item.nota}<br>
<button onclick="editarNota(${indexOriginal})" style="background-color: #66bb6a; color: white; border: none; border-radius: 8px; padding: 6px 12px; font-weight: bold; cursor: pointer; transition: background 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Editar</button>
<button onclick="excluirNota(${indexOriginal})" style="background-color: #66bb6a; color: white; border: none; border-radius: 8px; padding: 6px 12px; font-weight: bold; cursor: pointer; transition: background 0.3s; box-shadow: 0 2px 4px rgba(0,0,0,0.2);">Excluir</button>
            </div>
        `;
    });
}

function editarNota(index) {
    const moodHistory = JSON.parse(localStorage.getItem("diarioEmocional")) || [];
    const entrada = moodHistory[index];
    document.getElementById("mood").value = entrada.humor;
    document.getElementById("note").value = entrada.nota;
    document.getElementById("note").setAttribute("data-edit", index);
}

function excluirNota(index) {
    let moodHistory = JSON.parse(localStorage.getItem("diarioEmocional")) || [];
    moodHistory.splice(index, 1);
    localStorage.setItem("diarioEmocional", JSON.stringify(moodHistory));
    mostrarHistorico();
}

window.onload = mostrarHistorico;

const dicas = [
    "Pratique a gratidão diariamente, escrevendo três coisas pelas quais você é grato.",
    "Reserve um tempo para meditar ou praticar mindfulness todos os dias.",
    "Faça uma caminhada ao ar livre para se conectar com a natureza.",
    "Experimente uma nova receita saudável uma vez por semana.",
    "Desconecte-se das redes sociais por um dia e veja como se sente.",
    "Leia um livro que você sempre quis ler.",
    "Tire um tempo para um hobby que você ama.",
    "Pratique exercícios de respiração profunda quando se sentir estressado.",
    "Mantenha um diário para expressar seus pensamentos e sentimentos.",
    "Tente fazer algo gentil por outra pessoa todos os dias.",
    "Estabeleça uma rotina de sono consistente.",
    "Experimente a aromaterapia com óleos essenciais relaxantes.",
    "Desenhe ou pinte algo, mesmo que não seja perfeito.",
    "Ouça música que te faz sentir bem.",
    "Pratique yoga ou alongamento para relaxar o corpo.",
    "Tire um tempo para cuidar de plantas ou jardinagem.",
    "Faça uma lista de metas e trabalhe em uma delas.",
    "Assista a um filme ou série que você ama.",
    "Experimente um novo tipo de chá relaxante.",
    "Participe de uma aula de dança ou movimento.",
    "Escreva uma carta para você mesmo no futuro.",
    "Desenvolva uma rotina matinal que te inspire.",
    "Experimente técnicas de visualização para alcançar seus objetivos.",
    "Faça uma pausa para um lanche saudável durante o dia.",
    "Tire um tempo para refletir sobre suas conquistas.",
    "Pratique a autoafirmação, dizendo coisas positivas sobre si mesmo.",
    "Experimente um novo exercício físico, como pilates ou natação.",
    "Desenvolva um mantra pessoal e repita-o diariamente.",
    "Faça uma lista de coisas que você ama em si mesmo.",
    "Tente fazer algo novo e fora da sua zona de conforto.",
    "Pratique a escuta ativa em suas conversas.",
    "Desenvolva um ritual noturno relaxante antes de dormir.",
    "Experimente a meditação guiada para iniciantes.",
    "Faça uma caminhada em um parque ou na praia.",
    "Tire um tempo para observar o céu e relaxar.",
    "Pratique a técnica Pomodoro para aumentar a produtividade.",
    "Faça uma pausa para dançar ao som da sua música favorita.",
    "Tente escrever um poema ou uma história curta.",
    "Desenvolva um quadro de visão com seus objetivos.",
    "Pratique a gratidão ao final do dia, refletindo sobre o que foi bom.",
    "Experimente um novo esporte ou atividade física.",
    "Tire um tempo para se desconectar e relaxar em um banho quente.",
    "Faça uma lista de coisas que você gosta de fazer.",
    "Pratique a meditação de amor e bondade.",
    "Tente fazer uma caminhada sem destino, apenas explorando.",
    "Desenvolva um hábito de autocuidado semanal.",
    "Experimente a técnica de relaxamento muscular progressivo.",
    "Tire um tempo para fazer algo criativo, como artesanato.",
    "Pratique a escuta ativa em suas conversas.",
    "Desenvolva um ritual de gratidão ao acordar.",
    "Tente fazer uma pausa para respirar profundamente a cada hora.",
    "Experimente a meditação de atenção plena.",
    "Faça uma lista de coisas que você gostaria de aprender.",
    "Tire um tempo para observar a natureza ao seu redor.",
    "Pratique a auto-compaixão em momentos difíceis.",
    "Desenvolva um hábito de leitura diária.",
    "Experimente a técnica de visualização para relaxar.",
    "Tire um tempo para fazer algo que você ama.",
    "Pratique a meditação de foco na respiração.",
    "Faça uma lista de coisas que você gostaria de realizar este ano.",
    "Tente fazer uma pausa para observar o que está ao seu redor.",
    "Desenvolva um hábito de journaling para expressar seus sentimentos.",
    "Experimente a técnica de relaxamento de visualização.",
    "Tire um tempo para fazer algo que te faça rir.",
    "Pratique a meditação de amor e bondade para os outros.",
    "Faça uma lista de coisas que você gostaria de experimentar."
];

function mostrarDica() {
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    document.getElementById("dicaContainer").textContent = dicaAleatoria;
}
