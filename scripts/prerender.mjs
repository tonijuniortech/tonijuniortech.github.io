import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const site = 'https://tonijuniortec.com.br';

const articles = [
  {
    slug: 'ios-27-2-siri-ai-portugues-novos-idiomas',
    title: 'iOS 27.2 leva Siri AI em português a mais usuários',
    description: 'Primeira beta amplia a Siri AI para português, espanhol, francês, japonês e coreano. Veja os requisitos e por que ainda não é indicada para o iPhone principal.',
    category: 'Notícias', topic: 'iOS', date: '16 de setembro de 2026', published: '2026-09-16',
    sections: [
      ['Siri AI começa a falar novos idiomas', 'A primeira versão beta do iOS 27.2 amplia o suporte da Siri AI para cinco idiomas: português, espanhol, francês, japonês e coreano. A estreia pública do iOS 27 havia começado com a nova assistente disponível em inglês. A expansão torna os testes mais relevantes para usuários brasileiros, mas ainda faz parte de uma compilação destinada a desenvolvedores.'],
      ['O que muda para quem usa português', 'Com o aparelho e a Siri configurados para um idioma compatível, a Siri AI pode oferecer conversas mais naturais, respostas elaboradas e recursos integrados à Apple Intelligence. A simples presença do português na beta não garante que todas as funções estejam traduzidas ou disponíveis ao mesmo tempo. A própria Apple alerta que determinados recursos podem variar conforme idioma, região e modelo do aparelho.'],
      ['Quais aparelhos são compatíveis', 'Segundo a Apple, a Siri AI exige um dispositivo compatível com a Apple Intelligence. No iPhone, isso inclui iPhone 15 Pro, iPhone 15 Pro Max e modelos da família iPhone 16 ou posteriores. Também é necessário manter o idioma do aparelho e o idioma da Siri em uma opção aceita. Modelos mais antigos podem continuar usando a Siri tradicional, mas não recebem toda a estrutura da Siri AI.'],
      ['Português já estava nos planos da Apple', 'Quando apresentou a Siri AI, a Apple informou que o lançamento começaria em inglês e que o suporte a português chegaria ainda em 2026. Em setembro, a empresa voltou a indicar que francês, japonês, coreano, português e espanhol seriam adicionados em outubro. A presença desses idiomas na beta do iOS 27.2 é coerente com esse cronograma, embora datas de versões de teste possam mudar.'],
      ['Não instale a beta apenas por esse recurso', 'Betas para desenvolvedores podem causar aquecimento, consumo elevado de bateria, falhas em aplicativos bancários, problemas de conexão e perda de estabilidade. Antes de qualquer teste, faça backup completo e use um aparelho secundário. Para a maioria das pessoas, a decisão correta é aguardar a versão pública do iOS 27.2 e confirmar a disponibilidade do português nos canais oficiais.'],
      ['Como verificar quando chegar à versão estável', 'Quando a atualização pública estiver disponível, acesse Ajustes, Geral e Atualização de Software. Depois da instalação, confira o idioma do iPhone e as opções da Siri. A disponibilidade também pode depender da região da conta, do modelo e dos termos da Apple Intelligence. O iToni atualizará esta notícia se a Apple alterar os requisitos ou o calendário de lançamento.']
    ],
    sources: [
      ['9to5Mac — iOS 27.2 expands Siri AI to these new languages', 'https://9to5mac.com/2026/09/16/ios-27-2-expands-siri-ai-to-these-new-languages/'],
      ['Apple Brasil — iOS 27 e Siri AI', 'https://www.apple.com/br/os/ios/'],
      ['Apple Brasil — apresentação da Siri AI', 'https://www.apple.com/br/newsroom/2026/06/apple-introduces-siri-ai-a-profoundly-more-capable-and-personal-assistant/'],
      ['Apple Support — requisitos da Siri AI no iPhone', 'https://support.apple.com/guide/iphone/get-started-with-siri-ai-iphv6zwrg8jvfgr/27/ios/27']
    ]
  },
  {
    slug: 'apple-beta-watchos-27-2-tvos-27-2-visionos-27-2',
    title: 'Apple libera primeiras versões beta do watchOS 27.2, tvOS 27.2 e visionOS 27.2',
    description: 'Nova rodada de testes começou poucos dias após os sistemas 27.0. Entenda quais plataformas receberam a beta e por que usuários comuns devem esperar.',
    category: 'Notícias', topic: 'Apple', date: '16 de setembro de 2026', published: '2026-09-16',
    sections: [
      ['Uma nova rodada de testes começou', 'A Apple iniciou a distribuição das primeiras versões beta do watchOS 27.2, tvOS 27.2 e visionOS 27.2 para desenvolvedores. O movimento aconteceu poucos dias depois da liberação pública das versões 27.0 e chama atenção porque a numeração avançou diretamente para 27.2 nesses sistemas. Até o momento, a empresa não apresentou uma lista pública completa de novidades voltadas ao usuário.'],
      ['Por que a numeração 27.2 chama atenção', 'O caminho mais comum seria a chegada de versões 27.1 antes do ciclo 27.2. A ausência inicial dessas compilações para Apple Watch, Apple TV e Vision Pro não significa necessariamente que elas foram canceladas. A Apple pode manter atualizações intermediárias concentradas em segurança, compatibilidade e correções internas, enquanto testa outro conjunto de mudanças em paralelo.'],
      ['O que pode mudar nas próximas versões', 'Em uma primeira beta, alterações visíveis nem sempre aparecem imediatamente. A empresa costuma usar as compilações iniciais para testar estabilidade, APIs, consumo de energia, integração entre dispositivos e compatibilidade com aplicativos. Recursos maiores podem surgir em versões posteriores ou permanecer restritos a ajustes internos. Por isso, ainda é cedo para afirmar quais novidades chegarão à versão final.'],
      ['Beta para desenvolvedores exige cautela', 'Versões beta podem apresentar consumo elevado de bateria, falhas de conexão, reinicializações e incompatibilidade com aplicativos. No Apple Watch, a instalação merece cuidado adicional porque o retorno manual para uma versão pública pode ser limitado e exigir atendimento especializado. O ideal é testar apenas em dispositivo secundário, depois de conferir as condições do programa e manter os aparelhos principais nas versões estáveis.'],
      ['Como acompanhar a disponibilidade', 'Desenvolvedores inscritos podem consultar as áreas oficiais de downloads e notas de versão da Apple. O aparecimento de uma atualização no aparelho depende do modelo compatível, da conta vinculada e da opção de atualizações beta. Usuários comuns não precisam fazer nenhuma alteração: quando a versão estiver pronta, ela será distribuída pelos canais normais de Atualização de Software.'],
      ['O que sabemos até agora', 'A informação confirmada é o início de uma nova etapa de testes para os sistemas complementares da Apple. Ainda não há base suficiente para prometer recursos específicos ou uma data de lançamento público. O iToni acompanhará as próximas compilações e atualizará esta notícia quando surgirem mudanças verificáveis nas notas oficiais ou nos testes dos desenvolvedores.']
    ],
    sources: [
      ['9to5Mac — Apple releases beta 1 for watchOS 27.2, tvOS 27.2, more', 'https://9to5mac.com/2026/09/16/apple-releases-beta-1-for-watchos-27-2-tvos-27-2-more/'],
      ['Apple Developer — Releases', 'https://developer.apple.com/news/releases/'],
      ['Apple Developer — watchOS Release Notes', 'https://developer.apple.com/documentation/watchos-release-notes/']
    ]
  },
  {
    slug: 'vazamento-chip-a20-pro-iphone-18-pro',
    title: 'Vazamento aponta avanços no chip A20 Pro do iPhone 18 Pro',
    description: 'Suposto diagrama do A20 Pro indica GPU maior, interface de memória mais larga e aumento de cache. Entenda o que pode mudar na prática.',
    category: 'Notícias', topic: 'iPhone', date: '3 de setembro de 2026', published: '2026-09-03',
    sections: [
      ['O que apareceu no vazamento', 'Um suposto diagrama das conexões internas do A20 Pro sugere mudanças importantes na arquitetura do próximo chip da Apple. O material teria sido reconstruído a partir da posição dos pontos de solda e de imagens do silício. Segundo a interpretação divulgada, o processador manteria seis núcleos de CPU, mas passaria a usar uma GPU com sete núcleos. Como a Apple não confirmou o diagrama nem suas especificações, todas essas informações devem ser tratadas como rumor.'],
      ['GPU e memória', 'Caso o A20 Pro realmente adote sete núcleos gráficos, haverá mais margem para jogos, edição de vídeo e processamento de imagens. O ponto mais relevante é a possível passagem da interface de memória de 64 para 96 bits. Uma interface mais larga pode reduzir gargalos, desde que frequência, consumo, refrigeração e software acompanhem a mudança.'],
      ['Cache e eficiência', 'O vazamento também aponta 8 MB de cache L2 compartilhado para os núcleos de eficiência, contra 6 MB atribuídos ao A19 Pro. O cache mantém dados usados com frequência mais perto da CPU e pode melhorar a resposta do sistema e o consumo em determinadas tarefas.'],
      ['O que isso representa', 'Os benefícios devem aparecer principalmente em jogos, câmera, vídeo e recursos locais de inteligência artificial. Mensagens, redes sociais e navegação comum provavelmente terão diferenças menores. Até a apresentação oficial e a publicação de testes independentes, o rumor não deve orientar sozinho uma decisão de compra.']
    ],
    sources: [['MacRumors', 'https://www.macrumors.com/2026/09/03/iphone-18-pro-chip-leak-suggests-improvements/']]
  },
  {
    slug: 'iphone-parou-em-80-por-cento', title: 'iPhone parou de carregar em 80%? Entenda e resolva',
    description: 'Saiba por que o iPhone interrompe a carga, quando isso protege a bateria e quais ajustes verificar antes da assistência.',
    category: 'Dicas', topic: 'iPhone', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Por que a carga pode parar', 'Na maioria dos casos, parar em 80% não indica defeito. O iOS administra a recarga para reduzir o tempo em que a bateria permanece totalmente carregada, condição que acelera seu envelhecimento químico. O Carregamento Otimizado aprende a rotina e pode segurar a carga para completá-la perto do horário habitual.'],
      ['A temperatura também interfere', 'O iPhone reduz ou pausa a recarga quando está muito quente. Capas grossas, jogos, câmera, sol e carregadores inadequados aumentam a temperatura. Desconecte o aparelho, remova a capa e espere-o esfriar naturalmente em local ventilado. Não use geladeira, gelo ou água.'],
      ['O que verificar', 'Abra Ajustes, Bateria e Carregamento para conferir o limite. Observe os avisos na tela bloqueada, teste cabo e adaptador certificados, reinicie o aparelho, instale uma atualização estável e confira a Saúde da Bateria.'],
      ['Quando procurar assistência', 'Procure suporte autorizado se o aparelho não passar de 80% mesmo frio, com o limite desativado e acessórios confiáveis; se a porcentagem cair abruptamente; ou se houver deformação. Bateria estufada exige interrupção imediata do uso.']
    ]
  },
  {
    slug: 'como-liberar-espaco-no-iphone', title: 'Como liberar espaço no iPhone sem perder arquivos importantes',
    description: 'Um roteiro seguro para identificar o que ocupa armazenamento, remover excessos e preservar fotos, conversas e documentos.',
    category: 'Tutoriais', topic: 'iPhone', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Descubra o que ocupa espaço', 'Abra Ajustes, Geral e Armazenamento do iPhone e espere a análise terminar. O gráfico separa aplicativos, fotos, mensagens, mídia e dados do sistema. Evite apagar itens aleatoriamente: observe quais categorias realmente cresceram e comece pelas maiores.'],
      ['Fotos e vídeos com segurança', 'Faça uma cópia verificada no iCloud, Mac, PC ou serviço confiável antes de excluir fotos e vídeos. Depois, esvazie o álbum Apagados. Com Fotos do iCloud, Otimizar Armazenamento conserva versões menores no aparelho, mas depende de espaço na nuvem e conexão.'],
      ['Aplicativos e downloads', 'Use Desinstalar App quando quiser remover o aplicativo e preservar documentos. Apague downloads offline que podem ser baixados novamente, revise anexos grandes em Mensagens e confira Downloads no app Arquivos e nos navegadores.'],
      ['Rotina preventiva', 'Mantenha alguns gigabytes livres para atualizações e arquivos temporários. Uma revisão mensal de vídeos, downloads e anexos evita que o problema volte. Aplicativos limpadores não acessam áreas protegidas do iOS e não substituem uma revisão organizada.']
    ]
  },
  {
    slug: 'como-atualizar-ios-com-seguranca', title: 'Como atualizar o iOS com segurança: checklist completo',
    description: 'Prepare backup, energia e espaço antes de atualizar e saiba o que fazer se a instalação não avançar.',
    category: 'Tutoriais', topic: 'iOS', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Antes de instalar', 'Uma atualização comum preserva os dados, mas todo procedimento de sistema merece backup recente. Confirme fotos, contatos, documentos e códigos de acesso. Use o Backup do iCloud ou uma cópia criptografada no computador.'],
      ['Preparação', 'Use Wi-Fi estável, conecte o iPhone à energia, libere o espaço indicado pelo sistema e atualize aplicativos importantes. Evite atualizar quando depender imediatamente do aparelho para trabalho ou viagem.'],
      ['Durante e depois', 'Em Ajustes, Geral e Atualização de Software, leia a descrição e toque em Baixar e Instalar. Não force o desligamento enquanto a barra avança. Depois, teste chamadas, câmera, Wi-Fi e Bluetooth.'],
      ['Se houver falha', 'Verifique internet, energia e espaço. Pode ser possível apagar o arquivo da atualização e baixá-lo novamente. Se o aparelho entrar em recuperação, use um computador atualizado e escolha primeiro Atualizar, que tenta preservar os dados.']
    ]
  },
  {
    slug: 'iphone-esquentando-causas-solucoes', title: 'iPhone esquentando: causas comuns e soluções seguras',
    description: 'Diferencie aquecimento normal de superaquecimento e aplique medidas seguras para proteger bateria e componentes.',
    category: 'Dicas', topic: 'iPhone', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Quando é normal', 'O iPhone pode ficar morno durante recarga rápida, configuração inicial, restauração, jogos, vídeo, GPS ou atualização. O esperado é que a temperatura diminua após a tarefa terminar.'],
      ['Sinais de atenção', 'Mensagem de temperatura, brilho reduzido, carga interrompida, flash indisponível ou desempenho muito baixo indicam proteção térmica. Desligue tarefas pesadas, desconecte a carga e leve o aparelho a um local fresco.'],
      ['Como reduzir o calor', 'Retire a capa temporariamente, afaste o aparelho do sol, evite carregar sobre cama ou sofá, use acessórios confiáveis e verifique o consumo por aplicativo em Ajustes e Bateria.'],
      ['Quando buscar diagnóstico', 'Se o aquecimento ocorre repetidamente em repouso e sem carga, faça backup e procure assistência. Não coloque o aparelho no congelador nem o molhe; permita resfriamento gradual.']
    ]
  },
  {
    slug: 'mac-lento-guia-pratico', title: 'Mac lento: guia prático para recuperar o desempenho',
    description: 'Identifique falta de espaço, aplicativos pesados e processos em segundo plano antes de pensar em formatar o Mac.',
    category: 'Tutoriais', topic: 'macOS', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Comece pelo diagnóstico', 'Lentidão pode significar pouco armazenamento, memória pressionada, aplicativo travado ou sincronização. Reinicie o Mac e abra o Monitor de Atividade. Consulte CPU, Memória, Energia e Disco.'],
      ['Libere espaço com critério', 'Abra Ajustes do Sistema, Geral e Armazenamento. Revise documentos grandes, downloads, instaladores e lixeira. Mantenha margem livre para arquivos temporários e memória virtual.'],
      ['Reduza tarefas de fundo', 'Remova itens desnecessários do início de sessão, feche abas e extensões pesadas, atualize aplicativos e aguarde sincronizações terminarem antes de medir o desempenho.'],
      ['Assistência ou reinstalação', 'Teste uma conta separada e o modo seguro. Reinstalar pode corrigir arquivos do sistema, mas não resolve armazenamento defeituoso. Faça backup e procure assistência diante de travamentos ou erros recorrentes.']
    ]
  },
  {
    slug: 'backup-iphone-icloud-computador', title: 'Backup do iPhone: iCloud ou computador? Veja como escolher',
    description: 'Compare as duas formas de backup e monte uma rotina que realmente proteja seus dados antes de uma emergência.',
    category: 'Tutoriais', topic: 'iOS', date: '2 de setembro de 2026', published: '2026-09-02',
    sections: [
      ['Duas opções complementares', 'O iCloud é automático, não exige cabo e facilita a restauração longe do computador, mas depende de espaço e internet. O backup local fica sob seu controle e pode ser mais rápido.'],
      ['Backup no iCloud', 'Abra Ajustes, toque em seu nome, acesse iCloud e Backup do iCloud. Ative o recurso, toque em Fazer Backup Agora e mantenha o Wi-Fi até aparecer a data da última cópia.'],
      ['Backup no computador', 'No Mac, conecte o iPhone e abra o Finder; no Windows, use o aplicativo oficial. Selecione o aparelho e marque criptografar o backup. Guarde a senha e confira a data registrada ao terminar.'],
      ['Estratégia recomendada', 'Mantenha o iCloud automático e crie uma cópia criptografada no computador antes de atualização importante, viagem, troca ou assistência. Uma cópia só é confiável quando data, espaço e restauração foram verificados.']
    ]
  }
];

const nav = `<header class="site-header"><div class="top-line"><div class="shell">Conteúdo independente sobre Apple, iPhone, iOS e Mac.</div></div><div class="shell nav-wrap"><a class="brand text-brand" href="/"><span><strong>iToni</strong><small>Toni Junior Tec</small></span></a><nav class="main-nav"><a href="/">Início</a><a href="/noticias/">Notícias</a><a href="/tutoriais/">Tutoriais</a><a href="/dicas/">Dicas</a><a href="/certificado-ios/">Certificado iOS</a></nav></div></header>`;
const footer = `<footer class="site-footer"><div class="shell footer-grid"><div><h2>iToni</h2><p>Informação prática para usar melhor seus dispositivos Apple.</p></div><div><h2>Conteúdo</h2><a href="/noticias/">Notícias</a><a href="/tutoriais/">Tutoriais</a><a href="/dicas/">Dicas</a></div><div><h2>Institucional</h2><a href="/sobre/">Sobre</a><a href="/contato/">Contato</a><a href="/politica-de-privacidade/">Privacidade</a><a href="/politica-de-cookies/">Cookies</a><a href="/termos-de-uso/">Termos</a></div></div><div class="shell copyright">© 2026 iToni. Este site não é afiliado à Apple.</div></footer>`;
const related = `<aside class="related-content"><h2>Continue lendo</h2><p><a href="/tutoriais/">Confira todos os tutoriais</a> · <a href="/dicas/">Veja dicas para iPhone</a> · <a href="/noticias/">Acompanhe as notícias</a></p></aside>`;

const articleHtml = (a) => `${nav}<main><article class="shell article-narrow article-content"><p class="eyebrow">${a.category} · ${a.topic}</p><h1>${a.title}</h1><p class="article-lead">${a.description}</p><p class="article-date">Publicado em ${a.date} por Toni Junior</p>${a.sections.map(([h, p]) => `<section><h2>${h}</h2><p>${p}</p></section>`).join('')}${a.sources?.length ? `<section><h2>Fontes e referências</h2><ul>${a.sources.map(([n,u]) => `<li><a href="${u}" rel="nofollow noopener">${n}</a></li>`).join('')}</ul></section>` : ''}${related}</article></main>${footer}`;
const cards = (items) => `<div class="article-grid">${items.map(a => `<article class="article-card"><div class="card-body"><p class="eyebrow">${a.category} · ${a.topic}</p><h2><a href="/artigos/${a.slug}/">${a.title}</a></h2><p>${a.description}</p><a href="/artigos/${a.slug}/">Ler artigo completo</a></div></article>`).join('')}</div>`;

const pages = {
  '/': `${nav}<main><section class="hero"><div class="shell hero-grid"><div><p class="eyebrow">Tecnologia explicada sem complicação</p><h1>Seu guia confiável para iPhone, iOS e Mac.</h1><p>Notícias explicadas, tutoriais completos e dicas que ajudam você a resolver problemas e aproveitar melhor seus dispositivos.</p></div></div></section><section class="section"><div class="shell"><h2>Conteúdo recente</h2>${cards(articles)}</div></section></main>${footer}`,
  '/noticias': `${nav}<main><section class="page-hero"><div class="shell"><h1>Notícias de Apple, iPhone, iOS e Mac</h1><p>Informações recentes explicadas com contexto, fontes e atenção ao que já foi confirmado.</p></div></section><section class="section"><div class="shell">${cards(articles.filter(a => a.category === 'Notícias'))}</div></section></main>${footer}`,
  '/tutoriais': `${nav}<main><section class="page-hero"><div class="shell"><h1>Tutoriais para iPhone, iOS e Mac</h1><p>Guias práticos, completos e seguros para configurar, proteger e manter seus dispositivos.</p></div></section><section class="section"><div class="shell">${cards(articles.filter(a => ['Tutoriais','Guias'].includes(a.category)))}</div></section></main>${footer}`,
  '/dicas': `${nav}<main><section class="page-hero"><div class="shell"><h1>Dicas para iPhone, iPad e Mac</h1><p>Soluções objetivas para bateria, temperatura, armazenamento, desempenho e uso diário.</p></div></section><section class="section"><div class="shell">${cards(articles.filter(a => a.category === 'Dicas'))}</div></section></main>${footer}`,
  '/sobre': `${nav}<main><article class="shell legal-content"><h1>Sobre o iToni</h1><p>O iToni é o portal da Toni Junior Tec, criado para publicar informação prática e independente sobre tecnologia.</p><h2>Nossa proposta</h2><p>Produzir tutoriais, guias, notícias e análises em português que ajudem usuários de iPhone, iPad e Mac.</p><h2>Responsabilidade editorial</h2><p>Os textos são organizados e revisados por Toni Junior, com contexto, riscos, referências e atualizações quando os sistemas mudarem.</p><h2>Independência</h2><p>O iToni não é afiliado, patrocinado ou endossado pela Apple. A área comercial de certificados é mantida separada do conteúdo editorial.</p></article></main>${footer}`,
  '/contato': `${nav}<main><article class="shell legal-content"><h1>Contato</h1><p>Use o canal adequado para atendimento comercial, dúvidas editoriais ou pedidos de correção.</p><h2>Atendimento sobre certificado iOS</h2><p>Para preço, prazo e compatibilidade, utilize o <a href="https://wa.me/message/IM5MDTMSI3O2B1" rel="nofollow noopener">WhatsApp oficial</a>.</p><h2>Correções editoriais</h2><p>Informe o título do artigo, o trecho que precisa de revisão e, quando possível, a fonte correta.</p></article></main>${footer}`,
  '/politica-de-privacidade': `${nav}<main><article class="shell legal-content"><h1>Política de Privacidade</h1><p>Esta política explica quais dados podem ser tratados ao usar o site.</p><h2>Dados de navegação</h2><p>Servidor e ferramentas autorizadas podem registrar endereço IP, navegador, dispositivo, páginas, data e horário para segurança e medição.</p><h2>Dados fornecidos</h2><p>Informações enviadas voluntariamente são usadas para responder e executar o serviço solicitado.</p><h2>Publicidade</h2><p>Se anúncios forem ativados em páginas editoriais, fornecedores poderão usar cookies conforme consentimento e legislação. Páginas transacionais não devem exibir anúncios.</p><h2>Direitos</h2><p>O usuário pode solicitar acesso, correção ou eliminação de dados, observados os deveres legais.</p></article></main>${footer}`,
  '/politica-de-cookies': `${nav}<main><article class="shell legal-content"><h1>Política de Cookies</h1><p>Cookies são arquivos usados para funcionamento, preferências, medição e publicidade.</p><h2>Cookies necessários</h2><p>Mantêm recursos essenciais, preferências e segurança do site.</p><h2>Medição e publicidade</h2><p>Cookies não essenciais devem respeitar a escolha do usuário quando exigido pela legislação.</p><h2>Controle</h2><p>O usuário pode aceitar, recusar ou ajustar categorias e também usar as configurações do navegador. A recusa não deve impedir o acesso ao conteúdo editorial.</p></article></main>${footer}`,
  '/termos-de-uso': `${nav}<main><article class="shell legal-content"><h1>Termos de Uso</h1><p>Ao acessar o iToni, o usuário concorda com estas regras.</p><h2>Conteúdo</h2><p>Os artigos têm caráter educativo e não substituem diagnóstico técnico. Faça backup antes de mudanças importantes.</p><h2>Propriedade</h2><p>É permitido compartilhar links e pequenos trechos com crédito; reprodução integral exige autorização.</p><h2>Certificados</h2><p>A contratação depende das condições apresentadas. Revogações realizadas pela Apple não são controladas pela Toni Junior Tec.</p><h2>Links externos</h2><p>Sites externos possuem regras, políticas e responsabilidades próprias.</p></article></main>${footer}`,
};

for (const a of articles) pages[`/artigos/${a.slug}`] = articleHtml(a);

// A versão estática da página comercial serve somente aos robôs e ao carregamento inicial.
// O aplicativo React continua assumindo a interface e todas as funções atuais no navegador.
pages['/certificado-ios'] = `${nav}<main class="commercial-page"><section class="cert-hero dark-cert"><div class="shell cert-intro"><div><p class="eyebrow">Certificado iOS · Aplicativos iToni</p><h1>Certificado iOS para iPhone e iPad</h1><p>Instale aplicativos compatíveis no seu dispositivo Apple utilizando certificado iOS, com atendimento em português, pagamento via Pix e registro pelo UDID.</p><p><a class="button primary" href="https://toni-junior-tec.pushinshop.com.br/" rel="nofollow noopener">Ver preços e comprar</a> <a class="button secondary" href="https://wa.me/5511992432053" rel="nofollow noopener">Falar com suporte</a></p><small>Página comercial sem anúncios do Google.</small></div></div></section><section class="section"><div class="shell"><h2>Como funciona</h2><p>Escolha a modalidade, finalize a compra, obtenha o UDID do dispositivo e envie os dados solicitados. Após o processamento, siga as instruções encaminhadas pelo atendimento.</p><h2>Compatibilidade</h2><p>O serviço atende dispositivos Apple compatíveis, incluindo iPhone e iPad. Não é compatível com Android.</p><h2>Informações importantes</h2><p>A duração e a possibilidade de revogação dependem da Apple. Consulte sempre as condições atualizadas da modalidade antes da compra e fale com o suporte em caso de dúvida.</p></div></section></main>${footer}`;

function escapeRegex(value) { return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

for (const [route, content] of Object.entries(pages)) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}/index.html`;
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) {
    fs.mkdirSync(path.dirname(absolute), { recursive: true });
    const source = fs.readFileSync(path.join(root, 'artigos', 'iphone-parou-em-80-por-cento', 'index.html'), 'utf8');
    const rootStart = source.indexOf('<div id="root">');
    const bodyEnd = source.lastIndexOf('</body>');
    const article = articles.find(item => route === `/artigos/${item.slug}`);
    let template = `${source.slice(0, rootStart)}<div id="root"></div>\n  ${source.slice(bodyEnd)}`;
    if (article) {
      template = template
        .replace(/<title>.*?<\/title>/, `<title>${article.title} | iToni</title>`)
        .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${article.description}" />`)
        .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${article.title} | iToni" />`)
        .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${article.description}" />`);
    }
    fs.writeFileSync(absolute, template);
  }
  let html = fs.readFileSync(absolute, 'utf8');
  const canonical = `${site}${route === '/' ? '/' : `${route}/`}`;
  if (!html.includes('google-adsense-account')) {
    html = html.replace('<meta name="viewport" content="width=device-width, initial-scale=1.0" />', '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta name="google-adsense-account" content="ca-pub-1819143807433209" />');
  }
  if (!html.includes('rel="icon"')) {
    html = html.replace('<link rel="canonical"', '<link rel="icon" href="/img/logo-itoni.svg" type="image/svg+xml" />\n    <link rel="canonical"');
  }
  html = html.replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
  html = html.replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`);
  html = html.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
  fs.writeFileSync(absolute, html);
}

for (const a of articles) {
  const file = path.join(root, 'artigos', a.slug, 'index.html');
  let html = fs.readFileSync(file, 'utf8');
  const image = `${site}/img/logo-itoni.svg`;
  html = html.replace(/<script id="static-page-json-ld" type="application\/ld\+json">.*?<\/script>/s,
    `<script id="static-page-json-ld" type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Article', headline: a.title,
      description: a.description, datePublished: a.published, dateModified: a.published,
      image, author: {'@type':'Person', name:'Toni Junior'},
      publisher: {'@type':'Organization', name:'iToni', logo:{'@type':'ImageObject', url:image}},
      mainEntityOfPage: `${site}/artigos/${a.slug}/`, inLanguage:'pt-BR'
    })}</script>`);
  fs.writeFileSync(file, html);
}

const staticCard = (a) => `<article class="article-card"><div class="card-body"><p class="eyebrow">${a.category} · ${a.topic}</p><h2><a href="/artigos/${a.slug}/">${a.title}</a></h2><p>${a.description}</p><a href="/artigos/${a.slug}/">Ler artigo completo</a></div></article>`;
for (const relative of ['index.html', 'noticias/index.html']) {
  const file = path.join(root, relative);
  let html = fs.readFileSync(file, 'utf8');
  for (const article of articles.filter(item => relative === 'index.html' || item.category === 'Notícias')) {
    const href = `/artigos/${article.slug}/`;
    if (!html.includes(`href="${href}"`)) {
      html = html.replace('<div class="article-grid">', `<div class="article-grid">${staticCard(article)}`);
    }
  }
  fs.writeFileSync(file, html);
}

const bundleFile = fs.readdirSync(path.join(root, 'assets')).find(name => /^index-.*\.js$/.test(name));
if (!bundleFile) throw new Error('Arquivo JavaScript principal não encontrado.');
const bundlePath = path.join(root, 'assets', bundleFile);
let bundle = fs.readFileSync(bundlePath, 'utf8');
const newest = articles[0];
if (!bundle.includes(newest.slug)) {
  const runtimePost = `Er(${JSON.stringify(newest.slug)},${JSON.stringify(newest.title)},${JSON.stringify(newest.description)},${JSON.stringify(newest.category)},${JSON.stringify(newest.topic)},\`update\`,${JSON.stringify(newest.sections)},{readTime:\`7 min\`,date:${JSON.stringify(newest.date)},published:${JSON.stringify(newest.published)},modified:${JSON.stringify(newest.published)},sources:${JSON.stringify(newest.sources.map(([name,url]) => ({name,url})))}})`;
  const anchor = 'Dr=[';
  if (!bundle.includes(anchor)) throw new Error('Não foi possível localizar a lista de artigos no aplicativo.');
  bundle = bundle.replace(anchor, `${anchor}${runtimePost},`);
}
fs.writeFileSync(bundlePath, bundle);

const bundleHash = crypto.createHash('sha256').update(bundle).digest('hex').slice(0, 10);
const versionedBundleFile = `index-${bundleHash}.js`;
const versionedBundlePath = path.join(root, 'assets', versionedBundleFile);
if (bundleFile !== versionedBundleFile) fs.renameSync(bundlePath, versionedBundlePath);

for (const file of [...Object.keys(pages).map(route => route === '/' ? 'index.html' : `${route.slice(1)}/index.html`), '404.html']) {
  const absolute = path.join(root, file);
  let html = fs.readFileSync(absolute, 'utf8');
  html = html.replace(/\/assets\/index-[^"']+\.js/g, `/assets/${versionedBundleFile}`);
  fs.writeFileSync(absolute, html);
}

console.log(`Pré-renderização concluída para ${Object.keys(pages).length} páginas.`);
