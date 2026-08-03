// ============================================================
// VALENÇA & MONTEIRO — Interações
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- NAVBAR ON SCROLL ---------- */
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* ---------- MOBILE MENU ---------- */
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }));

  /* ============================================================
     CONTENT DATA
     ============================================================ */
  const icon = (path) => `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">${path}</svg>`;

  const areas = [
    { t: 'Direito Civil', d: 'Contratos, responsabilidade civil e relações patrimoniais conduzidos com precisão técnica.', i: '<path d="M12 2l9 4.5v9L12 22l-9-6.5v-9z"/><path d="M12 2v20M3 6.5l9 6.5 9-6.5"/>' },
    { t: 'Direito Empresarial', d: 'Estruturação societária, contratos comerciais e governança para empresas de todos os portes.', i: '<rect x="3" y="8" width="18" height="13" rx="1"/><path d="M9 8V5a3 3 0 016 0v3"/>' },
    { t: 'Direito Trabalhista', d: 'Consultoria preventiva e atuação contenciosa nas relações entre empregadores e empregados.', i: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-2a7 7 0 0114 0v2"/>' },
    { t: 'Direito Previdenciário', d: 'Planejamento e revisão de benefícios junto ao INSS com foco na segurança financeira do cliente.', i: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>' },
    { t: 'Direito Imobiliário', d: 'Due diligence, contratos de compra e venda e regularização de imóveis urbanos e rurais.', i: '<path d="M3 10.5L12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/>' },
    { t: 'Direito do Consumidor', d: 'Defesa de direitos em relações de consumo, com atuação individual e coletiva.', i: '<path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="19" r="1.4"/><circle cx="17" cy="19" r="1.4"/>' },
    { t: 'Direito Tributário', d: 'Planejamento fiscal, contencioso administrativo e recuperação de créditos tributários.', i: '<path d="M4 4h16v16H4z" opacity="0"/><path d="M12 3v18M6 8h12M6 16h12"/>' },
    { t: 'Direito de Família', d: 'Divórcios, guarda, partilha de bens e mediação com abordagem humanizada.', i: '<circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><path d="M2 21v-2a5 5 0 015-5h2M15 21v-2a5 5 0 015-5h0"/>' },
    { t: 'Direito Sucessório', d: 'Planejamento patrimonial, inventários e testamentos com segurança jurídica.', i: '<path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.8 7.1 17.2l.9-5.5-4-3.9L9.5 7z"/>' },
  ];

  const areasGrid = document.querySelector('.areas-grid');
  areasGrid.innerHTML = areas.map(a => `
    <div class="area-card reveal">
      <div class="area-ico">${icon(a.i)}</div>
      <h3>${a.t}</h3>
      <p>${a.d}</p>
    </div>
  `).join('');

  const diferenciais = [
    { t: 'Atendimento Personalizado', d: 'Cada cliente é acompanhado de perto, com comunicação direta e transparente.', i: '<path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.6l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z"/>' },
    { t: 'Agilidade', d: 'Processos e respostas conduzidos com rapidez, sem abrir mão da qualidade.', i: '<path d="M13 2L3 14h7l-1 8 10-12h-7z"/>' },
    { t: 'Sigilo Absoluto', d: 'Confidencialidade rigorosa em todas as informações e estratégias compartilhadas.', i: '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/>' },
    { t: 'Excelência Técnica', d: 'Equipe atualizada e especializada, comprometida com a melhor solução jurídica.', i: '<path d="M12 2l3 6 6 .9-4.5 4.3 1 6-5.5-3-5.5 3 1-6L3 8.9 9 8z"/>' },
    { t: 'Análise Estratégica', d: 'Cada caso é avaliado sob múltiplas perspectivas antes da tomada de decisão.', i: '<path d="M3 3v18h18"/><path d="M7 15l4-6 4 3 5-8"/>' },
    { t: 'Atuação Consultiva', d: 'Prevenção de riscos jurídicos por meio de orientação contínua e proativa.', i: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>' },
  ];
  document.getElementById('difGrid').innerHTML = diferenciais.map(d => `
    <div class="dif-card reveal">
      <div class="ico">${icon(d.i)}</div>
      <div><h4>${d.t}</h4><p>${d.d}</p></div>
    </div>
  `).join('');

  const processo = [
    { t: 'Primeiro Contato', d: 'Entendimento inicial da sua necessidade jurídica.' },
    { t: 'Análise do Caso', d: 'Estudo aprofundado de documentos e contexto.' },
    { t: 'Estratégia Jurídica', d: 'Definição do melhor caminho a ser seguido.' },
    { t: 'Execução', d: 'Condução técnica e diligente do caso.' },
    { t: 'Acompanhamento', d: 'Atualizações constantes até a conclusão.' },
  ];
  document.getElementById('timeline').innerHTML = processo.map((p, i) => `
    <div class="t-step reveal" style="--i:${i}">
      <div class="t-num">${String(i+1).padStart(2,'0')}</div>
      <div><h4>${p.t}</h4><p>${p.d}</p></div>
    </div>
  `).join('');

  const team = [
    { img: 'henrique.png', name: 'Dr. Henrique Valença', role: 'Sócio Fundador · OAB/SP 214.587', bio: 'Mais de 15 anos em consultoria estratégica para empresas e pessoas físicas, com foco em soluções seguras e personalizadas.' },
    { img: 'gustavo.png', name: 'Dra. Beatriz Monteiro', role: 'Sócia · OAB/SP 267.194', bio: 'Condução de casos familiares e patrimoniais com atendimento humanizado e soluções éticas e eficientes.' },
    { img: 'beatriz.png', name: 'Dr. Gustavo Almeida', role: 'Advogado Associado', bio: 'Atuação dedicada em Direito Trabalhista e Previdenciário, com abordagem técnica e próxima ao cliente.' },
    { img: 'camila.png', name: 'Dra. Camila Nogueira', role: 'Advogada Consultora', bio: 'Especialista em Compliance, Direito Empresarial e Proteção de Dados (LGPD).' },
  ];
  document.getElementById('teamGrid').innerHTML = team.map((m, i) => `
    <div class="team-card reveal" style="--i:${i}">
      <div class="team-photo">
        <img src="${m.img}" alt="${m.name}, ${m.role}">
        <div class="overlay"></div>
        <div class="social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="E-mail">@</a>
        </div>
      </div>
      <div class="team-info">
        <h3>${m.name}</h3>
        <span class="role">${m.role}</span>
        <p>${m.bio}</p>
      </div>
    </div>
  `).join('');

  const testimonials = [
    { n: 'Marcos T.', c: 'São Paulo/SP', t: 'Conduziram um processo empresarial delicado com muita clareza e agilidade. Me senti seguro em cada etapa.' },
    { n: 'Renata A.', c: 'Campinas/SP', t: 'Atendimento humanizado do início ao fim. A equipe explicou cada detalhe do inventário com paciência.' },
    { n: 'Felipe M.', c: 'Rio de Janeiro/RJ', t: 'Profissionalismo e sigilo absoluto durante toda a negociação contratual. Recomendo sem ressalvas.' },
    { n: 'Juliana P.', c: 'Belo Horizonte/MG', t: 'A estratégia definida para o caso trabalhista foi decisiva para o resultado positivo que obtivemos.' },
    { n: 'Eduardo S.', c: 'São Paulo/SP', t: 'Equipe extremamente ágil e tecnicamente sólida. Superou minhas expectativas em um caso tributário complexo.' },
  ];
  const track = document.getElementById('testiTrack');
  track.innerHTML = testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-stars">★★★★★</div>
      <p>"${t.t}"</p>
      <div class="testi-foot">
        <div class="testi-avatar">${t.n.charAt(0)}</div>
        <div><strong>${t.n}</strong><span>${t.c}</span></div>
      </div>
    </div>
  `).join('');

  let testiIndex = 0;
  const getPerView = () => window.innerWidth <= 860 ? 1 : window.innerWidth <= 1100 ? 2 : 3;
  const updateTesti = () => {
    const perView = getPerView();
    const max = Math.max(0, testimonials.length - perView);
    testiIndex = Math.min(testiIndex, max);
    const cardWidth = track.children[0].getBoundingClientRect().width + 26;
    track.style.transform = `translateX(-${testiIndex * cardWidth}px)`;
  };
  document.getElementById('testiNext').addEventListener('click', () => {
    const perView = getPerView();
    const max = Math.max(0, testimonials.length - perView);
    testiIndex = testiIndex >= max ? 0 : testiIndex + 1;
    updateTesti();
  });
  document.getElementById('testiPrev').addEventListener('click', () => {
    const perView = getPerView();
    const max = Math.max(0, testimonials.length - perView);
    testiIndex = testiIndex <= 0 ? max : testiIndex - 1;
    updateTesti();
  });
  window.addEventListener('resize', updateTesti);
  setTimeout(updateTesti, 200);

  const stats = [
    { n: 15, suf: '+', l: 'Anos de Experiência' },
    { n: 500, suf: '+', l: 'Clientes Atendidos' },
    { n: 98, suf: '%', l: 'Satisfação' },
    { n: 1000, suf: '+', l: 'Processos Conduzidos' },
  ];
  document.getElementById('statsGrid').innerHTML = stats.map(s => `
    <div class="stat-item reveal">
      <div class="stat-num"><span class="count" data-target="${s.n}">0</span><span class="suffix">${s.suf}</span></div>
      <div class="stat-label">${s.l}</div>
    </div>
  `).join('');

  const faqs = [
    { q: 'Como funciona a primeira consulta?', a: 'A primeira consulta é um momento de escuta: entendemos seu caso, esclarecemos dúvidas iniciais e apresentamos um panorama sobre os possíveis caminhos jurídicos, com total sigilo.' },
    { q: 'Quais são as formas de pagamento dos honorários?', a: 'Trabalhamos com honorários fixos, por êxito ou mensalidade, conforme a natureza do caso. Os termos são sempre definidos com transparência antes do início dos trabalhos.' },
    { q: 'O escritório atende clientes fora de São Paulo?', a: 'Sim. Contamos com atuação nacional e atendimento remoto, garantindo a mesma qualidade de suporte independentemente da localização do cliente.' },
    { q: 'Quanto tempo leva para eu receber um retorno?', a: 'Mensagens enviadas pelo site ou WhatsApp são respondidas em até 24 horas úteis. Casos urgentes recebem prioridade no atendimento.' },
    { q: 'É possível ter uma reunião totalmente online?', a: 'Sim, todas as etapas — da consulta inicial ao acompanhamento processual — podem ser conduzidas de forma remota, com a mesma segurança e sigilo do atendimento presencial.' },
  ];
  document.getElementById('faqList').innerHTML = faqs.map((f, i) => `
    <div class="faq-item${i===0 ? ' open' : ''}">
      <button class="faq-q">
        <span>${f.q}</span>
        <span class="plus"></span>
      </button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join('');

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    const a = item.querySelector('.faq-a');
    if (item.classList.contains('open')) a.style.maxHeight = a.scrollHeight + 'px';
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = 0;
      });
      if (!isOpen) {
        item.classList.add('open');
        a.style.maxHeight = a.scrollHeight + 'px';
      }
    });
  });

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('.count');
  const animateCounter = (el) => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1800;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  };
  const statsIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(animateCounter);
        statsIO.disconnect();
      }
    });
  }, { threshold: 0.4 });
  const statsSection = document.getElementById('stats');
  if (statsSection) statsIO.observe(statsSection);

  /* ---------- CONTACT FORM → ENVIA PARA O WHATSAPP ---------- */
  const WHATSAPP_NUMBER = '5511987654321';
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const email = form.email.value.trim();
    const assunto = form.assunto.value.trim();
    const mensagem = form.mensagem.value.trim();

    const linhas = [
      `Olá! Meu nome é ${nome} e gostaria de agendar uma consulta.`,
      '',
      `*Área de interesse:* ${assunto}`,
      `*Telefone:* ${telefone}`,
      `*E-mail:* ${email}`,
    ];
    if (mensagem) linhas.push('', `*Mensagem:* ${mensagem}`);

    const texto = encodeURIComponent(linhas.join('\n'));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`;

    const btn = form.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Abrindo WhatsApp...';
    btn.style.opacity = '0.75';

    window.open(url, '_blank');

    setTimeout(() => { btn.textContent = original; btn.style.opacity = '1'; form.reset(); }, 1200);
  });

});
