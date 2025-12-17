// ------------------------------------------------------------------
// FUNÇÃO DE TOGGLE (Chamada APÓS o carregamento do HTML)
// ------------------------------------------------------------------
function setupSidebarToggle() {
    // Estas variáveis agora existem porque o HTML foi injetado pelo loadSidebar
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const hamburger = document.getElementById('hamburger-menu');
    const overlay = document.getElementById('overlay');

    // Toggle do sidebar (desktop)
    if (sidebarToggleBtn && content) {
        sidebarToggleBtn.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                sidebar.classList.toggle('sidebar-mini');
                content.classList.toggle('sidebar-mini');
            }
        });
    }

    // Toggle do menu hamburguer (mobile)
    if (hamburger && overlay) {
        function toggleSidebarMobile() {
            sidebar.classList.toggle('active');
            content.classList.toggle('sidebar-active');
            overlay.classList.toggle('active');
        }
        hamburger.addEventListener('click', toggleSidebarMobile);
        overlay.addEventListener('click', toggleSidebarMobile);
    }
}

// ------------------------------------------------------------------
// FUNÇÃO PARA CARREGAR E INJETAR O CONTEÚDO DA SIDEBAR (MENU)
// ------------------------------------------------------------------
function loadSidebar() {
    const sidebar = document.getElementById('sidebar');

    if (!sidebar) return;

    // fetch funciona apenas se estiver rodando em um servidor local (Live Server ou Python)
    fetch('includes/sidebar.html')
        .then(response => {
            if (!response.ok) {
                console.error('Erro ao carregar o menu: includes/sidebar.html não encontrado ou erro de CORS. Verifique se está usando Live Server.');
                return;
            }
            return response.text();
        })
        .then(data => {
            if (!data) return;

            // 1. Injeta o HTML estático no div da sidebar
            sidebar.innerHTML = data;

            // 2. Define o link ativo com base na URL atual
            const currentPath = window.location.pathname.split('/').pop();

            const linkMap = {
                'index.html': 'link-index',
                'Introducao_BI_e_Power_BI.html': 'link-aula1',
                'Aula_02_Modelagem.html': 'link-aula2',
                'Aula_03_Criacao_Relacionamento.html': 'link-aula3',
                'Aula_04_Acrescentar_Consultas.html': 'link-aula4',
                'Aula_05_Calendario.html': 'link-aula5',
                'Aula_06_Relatorio_Simples.html': 'link-aula6'
            };

            const activeLinkID = linkMap[currentPath];
            if (activeLinkID) {
                const activeLink = document.getElementById(activeLinkID);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            // 3. ATIVA A FUNCIONALIDADE DE TOGGLE SÓ DEPOIS QUE O MENU FOI INJETADO
            setupSidebarToggle();
        })
        .catch(error => {
            console.error('Erro geral ao processar a sidebar:', error);
        });
}

// ------------------------------------------------------------------
// FUNÇÕES AUXILIARES (Migradas daquele bloco anônimo)
// ------------------------------------------------------------------
function setupQuotes() {
    const quoteElement = document.querySelector('.thought-of-the-day p');
    const authorElement = document.querySelector('.thought-of-the-day cite');

    if (quoteElement && authorElement && typeof quotes !== 'undefined' && quotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        quoteElement.textContent = `"${randomQuote.quote}"`;
        authorElement.textContent = `— ${randomQuote.author}`;
    } else if (quoteElement) {
        quoteElement.textContent = "A informação é o petróleo do século 21. A análise de dados é o motor.";
        authorElement.textContent = "— Andrew McAfee";
    }
}

function setupBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        }
    });
}

function setupAnswerToggle() {
    document.querySelectorAll('.toggle-answer-btn').forEach(toggleBtn => {
        toggleBtn.addEventListener('click', () => {
            const answerDiv = toggleBtn.nextElementSibling;
            if (answerDiv && answerDiv.classList.contains('answer')) {
                const isVisible = answerDiv.style.display === 'block';
                if (isVisible) {
                    answerDiv.style.display = 'none';
                    toggleBtn.innerHTML = '<i class="fas fa-eye"></i> Mostrar Gabarito';
                } else {
                    answerDiv.style.display = 'block';
                    toggleBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Esconder Gabarito';
                }
            }
        });
    });
}

function setupCopyCodeButtons() {
    document.querySelectorAll('pre').forEach((pre) => {
        const codeHeader = document.createElement('div');
        codeHeader.className = 'code-header';

        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.innerHTML = '<i class="far fa-copy"></i> Copiar';

        button.addEventListener('click', () => {
            const code = pre.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
                setTimeout(() => {
                    button.innerHTML = '<i class="far fa-copy"></i> Copiar';
                }, 2000);
            });
        });

        codeHeader.appendChild(button);
        pre.parentNode.insertBefore(codeHeader, pre);
    });
}


// ------------------------------------------------------------------
// LIGHTBOX (ZOOM IMAGEM) - Pode ficar fora do DOMContentLoaded
// ------------------------------------------------------------------
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.className = 'lightbox';
lightbox.innerHTML = '<img class="lightbox-content" id="lightbox-img"><div id="caption" class="lightbox-caption"></div>';
document.body.appendChild(lightbox);

const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('caption');

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('screenshot')) {
        lightbox.style.display = "block";
        lightboxImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    }
});

lightbox.addEventListener('click', function() {
    lightbox.style.display = "none";
});


// ------------------------------------------------------------------
// CHAMADA PRINCIPAL - Executa tudo que depende do DOM estar pronto
// ------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    // Chamada que inicia o carregamento do menu (e chama o setupSidebarToggle)
    loadSidebar(); 

    // Chamadas para as demais funcionalidades
    setupQuotes();
    setupBackToTop();
    setupAnswerToggle();
    setupCopyCodeButtons();
});