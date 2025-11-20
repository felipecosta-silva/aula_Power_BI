const quotes = [
    { quote: "O homem que move montanhas começa por carregar pequenas pedras.", author: "Confúcio" },
    { quote: "A paz vem de dentro. Não a procure à sua volta.", author: "Buda" },
    { quote: "A felicidade da sua vida depende da qualidade dos seus pensamentos.", author: "Marco Aurélio" },
    { quote: "Seja a mudança que você deseja ver no mundo.", author: "Mahatma Gandhi" },
    { quote: "Tudo o que somos é resultado do que pensamos. A mente é tudo. O que pensamos, nós nos tornamos.", author: "Buda" },
    { quote: "Sábio é aquele que conhece os limites da própria ignorância.", author: "Sócrates" },
    { quote: "O que sabemos é uma gota; o que ignoramos é um oceano.", author: "Isaac Newton" },
    { quote: "Aquele que não tem um objetivo, não costuma encontrar alegria em nenhuma empreitada.", author: "Dalai Lama" },
    { quote: "Nossa maior glória não está em nunca falhar, mas em nos levantar toda vez que falhamos.", author: "Confúcio" },
    { quote: "Em Deus nós confiamos; todos os outros devem trazer dados.", author: "W. Edwards Deming" },
    { quote: "O objetivo não é prever o futuro, mas sim estar preparado para ele.", author: "Péricles" },
    { quote: "A informação é o petróleo do século XXI, e a análise é o motor de combustão.", author: "Peter Sondergaard" },
    { quote: "O que não pode ser medido, não pode ser gerenciado.", author: "Peter Drucker" },
    { quote: "A arte de saber é saber o que ignorar.", author: "William James" },
    { quote: "Erros não são fracassos, são evidências de que estamos tentando.", author: "Anônimo" },
    { quote: "A pressa é inimiga da perfeição.", author: "Ditado Popular" },
    { quote: "Somos o que repetidamente fazemos. A excelência, portanto, não é um ato, mas um hábito.", author: "Aristóteles" },
    { quote: "A simplicidade é o último grau de sofisticação.", author: "Leonardo da Vinci" },
    { quote: "Não podemos resolver problemas usando o mesmo tipo de pensamento que usamos quando os criamos.", author: "Albert Einstein" },
    { quote: "A única fonte de conhecimento é a experiência.", author: "Albert Einstein" },
    { quote: "Tentar evitar o erro é um erro.", author: "Anônimo" },
    { quote: "O maior obstáculo ao conhecimento não é a ignorância, mas a ilusão do conhecimento.", author: "Stephen Hawking" },
    { quote: "Se você torturar os dados por tempo suficiente, eles confessarão qualquer coisa.", author: "Ronald Coase" },
    { quote: "A paciência é amarga, mas seu fruto é doce.", author: "Jean-Jacques Rousseau" },

    // Marco Aurélio
    { quote: "Aceite o que o destino lhe traz e ame as pessoas com quem o destino o reuniu.", author: "Marco Aurélio" },
    { quote: "O universo é mudança; nossa vida é resultado dos nossos pensamentos.", author: "Marco Aurélio" },
    { quote: "A alma se pinta com a cor dos seus pensamentos.", author: "Marco Aurélio" },
    { quote: "Hoje escapei da ansiedade. Ou melhor: deixei-a para trás. Ela não me pertence.", author: "Marco Aurélio" },
    { quote: "Perceba que mudar de opinião e seguir quem corrige está tão longe de fraqueza quanto da arrogância.", author: "Marco Aurélio" },
    { quote: "Não perca mais tempo discutindo sobre o que um homem bom deve ser. Seja um.", author: "Marco Aurélio" },
    { quote: "Você tem poder sobre sua mente — não sobre os eventos. Perceba isso, e encontrará força.", author: "Marco Aurélio" },
    { quote: "A felicidade da sua vida depende da qualidade dos seus pensamentos.", author: "Marco Aurélio" },
    { quote: "O destino conduz aquele que o aceita e arrasta aquele que o nega.", author: "Marco Aurélio" },
    { quote: "Se não é certo, não faça; se não é verdade, não diga.", author: "Marco Aurélio" },

    // Sêneca
    { quote: "Quem sofre antes do necessário sofre mais que o necessário.", author: "Sêneca" },
    { quote: "Somos mais frequentemente assustados do que feridos.", author: "Sêneca" },
    { quote: "Apressa-te a viver bem e pensa que cada dia é, por si só, uma vida.", author: "Sêneca" },
    { quote: "A vida é longa o suficiente para quem sabe vivê-la.", author: "Sêneca" },
    { quote: "A dificuldade forma o espírito.", author: "Sêneca" },
    { quote: "Nenhum vento é favorável para quem não sabe onde quer chegar.", author: "Sêneca" },

    // Epicteto
    { quote: "A liberdade é conquistada quando dominamos nossos pensamentos.", author: "Epicteto" },
    { quote: "Primeiro diga a si mesmo quem você quer ser; depois faça o que precisa ser feito.", author: "Epicteto" },
    { quote: "Ninguém é livre se não for senhor de si mesmo.", author: "Epicteto" },
    { quote: "Não são os acontecimentos que perturbam os homens, mas a visão que eles têm dos acontecimentos.", author: "Epicteto" },
    { quote: "Se você quer ser sábio, aprenda a questionar tudo.", author: "Epicteto" },

    // Buda
    { quote: "Nenhum fogo é mais intenso que a raiva. Nenhum crime é maior que o ódio.", author: "Buda" },
    { quote: "A dor é inevitável; o sofrimento é opcional.", author: "Buda" },
    { quote: "Trabalhe a sua própria salvação com diligência.", author: "Buda" },
    { quote: "Você se torna aquilo que pensa.", author: "Buda" },
    { quote: "Aquilo que você é é o que você tem sido; aquilo que você será é o que faz agora.", author: "Buda" },

    // Osho
    { quote: "A vida começa onde a zona de conforto termina.", author: "Osho" },
    { quote: "Seja uma luz para si mesmo.", author: "Osho" },
    { quote: "A verdadeira liberdade nasce quando você deixa de tentar ser alguém.", author: "Osho" },
    { quote: "O silêncio não é vazio; ele está cheio de respostas.", author: "Osho" },
    { quote: "Cresça em direção à sua própria luz.", author: "Osho" },
    { quote: "A vida é uma oportunidade para despertar.", author: "Osho" },

    // Krishnamurti
    { quote: "A capacidade de observar sem avaliar é a forma mais elevada de inteligência.", author: "Jiddu Krishnamurti" },
    { quote: "A verdade é uma terra sem caminhos.", author: "Jiddu Krishnamurti" },
    { quote: "Libertar-se do conhecido é o começo da inteligência.", author: "Jiddu Krishnamurti" },

    // Lao Tsé
    { quote: "Aquele que conhece os outros é sábio; aquele que conhece a si mesmo é iluminado.", author: "Lao Tsé" },
    { quote: "A natureza não se apressa, e ainda assim tudo é realizado.", author: "Lao Tsé" },
    { quote: "Quando abandono o que sou, torno-me o que poderia ser.", author: "Lao Tsé" },

    // Rumi
    { quote: "Você não é uma gota no oceano. Você é o oceano inteiro em uma gota.", author: "Rumi" },
    { quote: "A ferida é o lugar por onde a luz entra em você.", author: "Rumi" },
    { quote: "Pare. Feche os olhos. Sinta a vida movendo-se dentro de você.", author: "Rumi" },

    // Gandhi
    { quote: "A força não vem da capacidade física, mas de uma vontade inquebrável.", author: "Mahatma Gandhi" },
    { quote: "O futuro dependerá daquilo que fazemos no presente.", author: "Mahatma Gandhi" },

    // Madre Teresa
    { quote: "As palavras gentis podem ser curtas e fáceis de dizer, mas seus ecos são verdadeiramente infinitos.", author: "Madre Teresa de Calcutá" },

    // São Francisco de Assis
    { quote: "Comece fazendo o que é necessário; depois o que é possível; e de repente você estará fazendo o impossível.", author: "São Francisco de Assis" },

    // Chico Xavier
    { quote: "Ninguém pode voltar atrás e fazer um novo começo, mas qualquer um pode começar agora e fazer um novo fim.", author: "Chico Xavier" },

    // Eckhart Tolle
    { quote: "A vida acontece somente agora.", author: "Eckhart Tolle" },

    // Yogananda
    { quote: "A mente é seu melhor amigo ou seu pior inimigo.", author: "Paramahansa Yogananda" },

    // Alan Watts
    { quote: "A vida é uma dança, e você não precisa chegar a lugar algum.", author: "Alan Watts" },

    // Heráclito
    { quote: "Nada é permanente, exceto a mudança.", author: "Heráclito" },

    // Zen
    { quote: "Para quem compreende o silêncio, até o vento fala.", author: "Sabedoria Zen" },

    // Ensinamentos universais
    { quote: "Você se torna invencível quando nada externo controla seu estado interno.", author: "Anônimo" },

    // Extra
    { quote: "Antes de iluminar o mundo, acenda sua própria lâmpada.", author: "Provérbio Chinês" },
    // ===============================
    // PARTE 2 — FRASES 101 A 200
    // ===============================

    { quote: "Aquietar a mente é o maior presente que você pode dar a si mesmo.", author: "Sabedoria Zen" },
    { quote: "A disciplina é escolher o que você quer agora e o que você mais quer na vida.", author: "Abraham Lincoln" },
    { quote: "Nada pode ferir você mais do que seus próprios pensamentos.", author: "Buda" },
    { quote: "A verdadeira riqueza é viver em paz consigo mesmo.", author: "Sêneca" },
    { quote: "Você não controla o que acontece, mas controla quem você se torna através do que acontece.", author: "Epicteto" },

    // Lao Tsé / Taoísmo
    { quote: "Aquele que vence os outros é forte; aquele que vence a si próprio é poderoso.", author: "Lao Tsé" },
    { quote: "Aquele que sabe contentar-se é verdadeiramente rico.", author: "Lao Tsé" },
    { quote: "A suavidade pode superar a dureza. A gentileza pode superar a força.", author: "Lao Tsé" },

    // Osho
    { quote: "A vida começa quando o medo termina.", author: "Osho" },
    { quote: "A maturidade chega quando você para de culpar os outros.", author: "Osho" },
    { quote: "O amor é a luz que dissipa todos os medos.", author: "Osho" },

    // Krishnamurti
    { quote: "A mente que busca segurança jamais encontrará liberdade.", author: "Jiddu Krishnamurti" },
    { quote: "A compreensão só surge quando há escuta verdadeira.", author: "Jiddu Krishnamurti" },

    // Rumi
    { quote: "Você foi criado com asas. Não rasteje.", author: "Rumi" },
    { quote: "Aquietar-se e saber que tudo é movimento dentro do movimento.", author: "Rumi" },
    { quote: "O que você procura, está procurando você.", author: "Rumi" },

    // Tagore
    { quote: "Fé é o pássaro que sente a luz e canta quando a madrugada ainda está escura.", author: "Rabindranath Tagore" },

    // Dalai Lama
    { quote: "Seja gentil sempre que possível. É sempre possível.", author: "Dalai Lama" },
    { quote: "O propósito da nossa vida é ser feliz.", author: "Dalai Lama" },
    { quote: "Quanto mais você se preocupar com os outros, menos ansioso será.", author: "Dalai Lama" },

    // Buda — profundidade
    { quote: "Tudo o que surge passa; tudo o que floresce murcha; tudo o que vive morre. Aceite a impermanência.", author: "Buda" },
    { quote: "A mente cria o mundo que você vive.", author: "Buda" },

    // Yogananda
    { quote: "A felicidade depende apenas da paz interior.", author: "Paramahansa Yogananda" },
    { quote: "A oração é quando você fala com Deus; a meditação é quando você ouve.", author: "Paramahansa Yogananda" },

    // Plotino
    { quote: "A alma nunca pensa sem uma imagem.", author: "Plotino" },

    // Heráclito
    { quote: "O caráter de um homem é o seu destino.", author: "Heráclito" },

    // Pai do Zen — Dōgen
    { quote: "Estudar o caminho é estudar a si mesmo.", author: "Dōgen" },
    { quote: "Estudar a si mesmo é esquecer-se de si mesmo.", author: "Dōgen" },
    { quote: "A prática não é para alcançar algo; ela é a própria realização.", author: "Dōgen" },

    // Sêneca — profundidade
    { quote: "Uma mente tranquila não pode ser perturbada pela fortuna nem pela desgraça.", author: "Sêneca" },
    { quote: "O homem sábio é invulnerável porque não depende de nada externo.", author: "Sêneca" },

    // Marco Aurélio — extras
    { quote: "O que é bom para a colmeia é bom para a abelha.", author: "Marco Aurélio" },
    { quote: "Se está ao seu alcance, faça. Se não está, aceite.", author: "Marco Aurélio" },

    // Provérbios espirituais
    { quote: "Quando o aluno está pronto, o mestre aparece.", author: "Sabedoria Oriental" },
    { quote: "Aquele que olha para fora sonha; aquele que olha para dentro desperta.", author: "Carl Jung" },
    { quote: "Até que você torne o inconsciente consciente, ele governará sua vida e você o chamará de destino.", author: "Carl Jung" },

    // Zen
    { quote: "Sente-se. Respire. Você já está onde precisa estar.", author: "Zen" },
    { quote: "A vida é simples; nós é que a complicamos.", author: "Zen" },

    // Espíritas / Espirituais
    { quote: "A fé é a luz que nos guia nos momentos mais escuros.", author: "Chico Xavier" },
    { quote: "O bem que você faz hoje pode ser esquecido amanhã. Faça o bem assim mesmo.", author: "Madre Teresa de Calcutá" },

    // Gandhi — profundidade
    { quote: "A verdadeira felicidade vem da superação dos nossos próprios limites.", author: "Mahatma Gandhi" },

    // Sucessos espirituais
    { quote: "O silêncio é o lugar onde todas as respostas se revelam.", author: "Sabedoria Antiga" },
    { quote: "Nada externo tem poder sobre você sem sua permissão.", author: "Anônimo" },

    // Watts
    { quote: "Nós raramente percebemos que estamos vivendo em meio ao milagre.", author: "Alan Watts" },
    { quote: "Pare de tentar nadar contra a corrente. Aprenda a flutuar.", author: "Alan Watts" },

    // Rumi — extras profundos
    { quote: "Seja como o sol: brilhe sem pedir permissão.", author: "Rumi" },
    { quote: "A dor que você abraça se transforma em luz.", author: "Rumi" },

    // Poetas místicos
    { quote: "O coração nunca envelhece; só o corpo acompanha o tempo.", author: "Khalil Gibran" },
    { quote: "O espírito encontra liberdade quando abandona o apego.", author: "Khalil Gibran" },

    // Buda — iluminação
    { quote: "Não há caminho para a felicidade. A felicidade é o caminho.", author: "Buda" },
    { quote: "Aquilo que você pensa, você se torna.", author: "Buda" },

    // Confúcio
    { quote: "Transportai um punhado de terra todos os dias e fareis uma montanha.", author: "Confúcio" },
    { quote: "Saber o que é correto e não fazê-lo é falta de coragem.", author: "Confúcio" },

    // Provérbios Sufi
    { quote: "A jornada de mil mundos começa com um único passo interior.", author: "Sabedoria Sufi" },

    // Provérbios Zen
    { quote: "Quando você está presente, cada passo é um milagre.", author: "Zen" },

    // Deep essays
    { quote: "A cura vem quando você para de fugir de quem você é.", author: "Nisargadatta Maharaj" },
    { quote: "A verdade não está lá fora; ela está dentro de você.", author: "Krishnamurti" },

    // Completando a parte 2
    { quote: "Não existe caminho para a paz — a paz é o caminho.", author: "Thich Nhat Hanh" },
    { quote: "Respirar é o primeiro ato de amor próprio.", author: "Thich Nhat Hanh" },
    { quote: "A flor não pensa em competir com a flor ao lado. Ela apenas floresce.", author: "Zen" },
    { quote: "Você não pode deter as ondas, mas pode aprender a surfar.", author: "Jon Kabat-Zinn" },
    { quote: "A mudança mais poderosa acontece silenciosamente dentro de nós.", author: "Sabedoria Oriental" },
    { quote: "Nada pode lhe trazer paz além de você mesmo.", author: "Ralph Waldo Emerson" },
    { quote: "A verdadeira viagem é para dentro.", author: "Rainer Maria Rilke" },
    { quote: "Tudo o que você busca já está dentro de você.", author: "Anônimo" },
    { quote: "A vida é um eco: recebe-se de volta aquilo que se emite.", author: "Lao Tsé" },
    { quote: "A calma é a forma mais elevada de força.", author: "Sabedoria Zen" },

        // ===============================
    // PARTE 3 — FRASES 201 A 300
    // ===============================

    { quote: "Não corra atrás da vida. Sente-se e ela virá até você.", author: "Osho" },
    { quote: "A mente é um belo servo, mas um mestre terrível.", author: "Osho" },
    { quote: "Quando você se torna silencioso, começa a ouvir a si mesmo.", author: "Osho" },

    // Zen extra profundo
    { quote: "O obstáculo é o caminho.", author: "Sabedoria Zen" },
    { quote: "A iluminação é simplesmente a ausência de resistência.", author: "Zen" },
    { quote: "A montanha só se move quando você se torna a montanha.", author: "Zen" },

    // Sêneca & Estoicismo
    { quote: "O destino conduz quem aceita e arrasta quem resiste.", author: "Sêneca" },
    { quote: "A verdadeira liberdade está em não desejar nada que dependa do outro.", author: "Sêneca" },
    { quote: "Treine sua mente para estar tranquila em qualquer cenário.", author: "Sêneca" },

    // Marco Aurélio
    { quote: "Aceite tudo aquilo que é tecido no fio do destino.", author: "Marco Aurélio" },
    { quote: "A alma se tinge da cor dos pensamentos.", author: "Marco Aurélio" },
    { quote: "Sua mente assumirá a forma daquilo em que você pensa com frequência.", author: "Marco Aurélio" },

    // Epicteto
    { quote: "Não busque que as coisas aconteçam como você deseja; deseje que elas aconteçam como acontecem.", author: "Epicteto" },
    { quote: "Nenhum homem é livre até que aprenda a disciplinar a si mesmo.", author: "Epicteto" },
    { quote: "O que perturba os homens não são as coisas, mas as opiniões que têm sobre elas.", author: "Epicteto" },

    // Buda – profundidade extra
    { quote: "O ódio nunca cessa pelo ódio, mas sim pelo amor.", author: "Buda" },
    { quote: "Seu pior inimigo não pode machucar você tanto quanto seus próprios pensamentos.", author: "Buda" },
    { quote: "A dor é inevitável; o sofrimento é opcional.", author: "Buda" },

    // Sri Ramana Maharshi
    { quote: "A pergunta 'Quem sou eu?' é a chave para toda liberdade.", author: "Ramana Maharshi" },
    { quote: "A paz não está em algum lugar distante; ela é sua própria natureza.", author: "Ramana Maharshi" },

    // Nisargadatta
    { quote: "Você não é a gota. Você é o oceano inteiro, numa gota.", author: "Nisargadatta Maharaj" },
    { quote: "Você sofrerá até desistir de sofrer.", author: "Nisargadatta Maharaj" },

    // Rumi – místico
    { quote: "Há uma força silenciosa que nos guia. Confie nela.", author: "Rumi" },
    { quote: "A ferida é o lugar por onde a luz entra em você.", author: "Rumi" },
    { quote: "Seja uma lâmpada, um barco ou uma escada para alguém.", author: "Rumi" },

    // Gibran – poético-relacional
    { quote: "A tristeza prepara você para a alegria.", author: "Khalil Gibran" },
    { quote: "O amor conhece sua profundidade apenas na hora da separação.", author: "Khalil Gibran" },

    // Madre Teresa
    { quote: "Se você julga as pessoas, não tem tempo para amá-las.", author: "Madre Teresa" },
    { quote: "Faça pequenas coisas com grande amor.", author: "Madre Teresa" },

    // Chico Xavier
    { quote: "Ninguém pode voltar e fazer um novo começo. Mas qualquer um pode começar agora e fazer um novo fim.", author: "Chico Xavier" },
    { quote: "A vida é construída nos pequenos atos de cada dia.", author: "Chico Xavier" },

    // Gandhi – extra reflexões
    { quote: "A força não vem da capacidade física, mas da vontade indomável.", author: "Mahatma Gandhi" },
    { quote: "Onde há amor, há vida.", author: "Mahatma Gandhi" },

    // Krishnamurti – consciência
    { quote: "Liberdade é estar sem medo.", author: "Jiddu Krishnamurti" },
    { quote: "A mente só é inteligente quando está livre de conflito.", author: "Jiddu Krishnamurti" },

    // Lao Tsé – profundidade elevada
    { quote: "A natureza não tem pressa, e ainda assim tudo acontece.", author: "Lao Tsé" },
    { quote: "Seja como a água: suave, paciente e incontrolável.", author: "Lao Tsé" },

    // Zendō – prática
    { quote: "A prática diária é mais importante do que a iluminação momentânea.", author: "Zen" },

    // Alan Watts – mente e fluxo
    { quote: "Você é uma abertura através da qual o universo olha e explora a si mesmo.", author: "Alan Watts" },
    { quote: "Pare de se agarrar. Você está se afogando em suas próprias mãos.", author: "Alan Watts" },

    // Plotino – metafísica
    { quote: "Torne-se aquilo que você é.", author: "Plotino" },
    { quote: "O que você busca está mais perto do que sua respiração.", author: "Plotino" },

    // Tagore – sensibilidade
    { quote: "A nuvem não apaga o sol; apenas o esconde.", author: "Tagore" },

    // Confúcio – prática e moral
    { quote: "A vida é realmente simples, mas insistimos em torná-la complicada.", author: "Confúcio" },
    { quote: "Tudo tem beleza, mas nem todos conseguem ver.", author: "Confúcio" },

    // Provérbios profundos
    { quote: "Quem olha para trás perde o passo seguinte.", author: "Provérbio Zen" },
    { quote: "A água parada apodrece a si mesma. Mova-se.", author: "Sabedoria Oriental" },

    // Mestres iluminados extra
    { quote: "Quando você muda, tudo muda.", author: "Anônimo" },
    { quote: "Você não está no mundo — o mundo está em você.", author: "Nisargadatta Maharaj" },

    // Reflexões universais
    { quote: "Tudo o que você resiste, persiste.", author: "Carl Jung" },
    { quote: "O medo é uma ilusão criada pelo pensamento.", author: "Krishnamurti" },
    { quote: "A respiração é o fio que liga corpo, mente e espírito.", author: "Sabedoria Antiga" },

    // Iluminação e presença
    { quote: "A vida só acontece no agora.", author: "Eckhart Tolle" },
    { quote: "Você é o céu. Todos os pensamentos são apenas o clima.", author: "Eckhart Tolle" },

    // Tao extra
    { quote: "Grandes atos são feitos de pequenas ações.", author: "Lao Tsé" },

    // Amor universal
    { quote: "Seja onde estiver, esteja por inteiro.", author: "Ram Dass" },
    { quote: "A compaixão é o perfume que a alma exala quando está aberta.", author: "Sabedoria Sufi" },

    // Fechando as 300 com intensidade
    { quote: "Você não pode despertar quem finge dormir.", author: "Provérbio Sufi" },
    { quote: "A vida é um espelho: ela reflete o que você é.", author: "Rumi" },
    { quote: "Quando o coração fala, a mente se cala.", author: "Sabedoria Espiritual" },
    { quote: "Seja paciente. Tudo o que é seu encontrará um caminho para você.", author: "Sabedoria Oriental" },
    { quote: "A luz entra onde o coração se abre.", author: "Rumi" },
    { quote: "Seu maior mestre é sua própria experiência.", author: "Buda" },
    { quote: "Não tenha medo da mudança. Ela é a lei do universo.", author: "Sabedoria Taoísta" },
    { quote: "Você já é aquilo que procura se tornar.", author: "Maharaj" },
    { quote: "A verdadeira força é permanecer suave em um mundo duro.", author: "Sabedoria Zen" },
    { quote: "Nada externo pode tocar a paz que habita em você.", author: "Eckhart Tolle" }
];

