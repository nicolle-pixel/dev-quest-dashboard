/* Dashboard for Study — conteúdo traduzido (matérias, resumos, tópicos, tarefas) */
window.DFS_DATA = {
  pt: {
    subjects: [
      { icon: "∑", name: "Matemática", tags: "Álgebra | Geometria", summary: "Funções, equações, trigonometria e geometria analítica com exercícios resolvidos." },
      { icon: "⚛", name: "Física", tags: "Mecânica | Ondas", summary: "Cinemática, leis de Newton, energia, ondas e eletromagnetismo." },
      { icon: "🧪", name: "Química", tags: "Geral | Orgânica", summary: "Tabela periódica, ligações, estequiometria e reações orgânicas." },
      { icon: "🧬", name: "Biologia", tags: "Células | Genética", summary: "Citologia, genética mendeliana, evolução e ecologia." },
      { icon: "🏛", name: "História", tags: "Geral | Contemporânea", summary: "Idade Moderna, revoluções, guerras mundiais e história do Brasil." },
      { icon: "📚", name: "Literatura", tags: "Escolas | Redação", summary: "Movimentos literários, análise de texto e técnicas de redação." }
    ],
    accordion: [
      { title: "Fundamentos", body: "Representação de dados, arquitetura de computadores, complexidade e abstração." },
      { title: "Lógica", body: "Proposições, tabelas-verdade, álgebra booleana e provas por indução." },
      { title: "Algoritmos", body: "Ordenação, busca, recursão, programação dinâmica e algoritmos gulosos." }
    ],
    csLinks: [
      {
        name: "Estruturas de Dados",
        summary: "Listas, pilhas, filas, árvores, grafos e tabelas hash.",
        detail: [
          { title: "O que são", text: "Formas de organizar dados na memória para que as operações de inserção, busca e remoção sejam eficientes. A escolha certa muda o desempenho de um programa inteiro." },
          { title: "Lineares", text: "Arrays têm acesso direto por índice (O(1)) mas inserção cara. Listas ligadas inserem em O(1) mas buscam em O(n). Pilhas seguem LIFO (desfazer, chamadas de função) e filas seguem FIFO (impressão, escalonamento)." },
          { title: "Árvores", text: "Árvores binárias de busca guardam valores ordenados e buscam em O(log n) quando equilibradas. AVL e Rubro-Negra reequilibram sozinhas; heaps servem para filas de prioridade; tries aceleram buscas por texto." },
          { title: "Grafos", text: "Conjunto de vértices e arestas, representados por matriz ou lista de adjacência. Percorridos com BFS (menor caminho em grafos não ponderados) e DFS (ciclos, componentes, ordenação topológica)." },
          { title: "Tabelas hash", text: "Convertem a chave num índice por função de dispersão, oferecendo busca média O(1). É preciso tratar colisões por encadeamento ou endereçamento aberto e vigiar o fator de carga." },
          { title: "Como estudar", text: "Implemente cada estrutura do zero uma vez, depois resolva exercícios comparando o custo de tempo e memória de cada escolha." }
        ]
      },
      {
        name: "Redes",
        summary: "Modelo OSI, TCP/IP, HTTP, DNS e segurança básica.",
        detail: [
          { title: "Modelo em camadas", text: "O modelo OSI tem 7 camadas (física, enlace, rede, transporte, sessão, apresentação, aplicação). Na prática usa-se TCP/IP com 4: acesso à rede, internet, transporte e aplicação." },
          { title: "IP e roteamento", text: "Cada dispositivo tem um endereço IP (IPv4 ou IPv6) e uma máscara de sub-rede. Os roteadores decidem o próximo salto; NAT permite que uma rede local partilhe um IP público." },
          { title: "TCP e UDP", text: "TCP cria conexão com handshake de 3 vias, garante ordem e retransmite pacotes perdidos. UDP não garante entrega, mas é leve — ideal para vídeo, voz e jogos." },
          { title: "HTTP e DNS", text: "O DNS traduz nomes em endereços IP através de servidores raiz, TLD e autoritativos. O HTTP transporta os pedidos (GET, POST...) e o HTTPS acrescenta cifra TLS com certificados." },
          { title: "Segurança básica", text: "Firewalls filtram tráfego, VPNs criam túneis cifrados e a cifra TLS protege os dados em trânsito. Ataques comuns: sniffing, spoofing, man-in-the-middle e negação de serviço." },
          { title: "Ferramentas", text: "Pratique com ping, traceroute, nslookup, netstat e Wireshark para ver os pacotes reais a circular." }
        ]
      },
      {
        name: "Bancos de Dados",
        summary: "Modelagem relacional, SQL, normalização e transações.",
        detail: [
          { title: "Modelo relacional", text: "Os dados vivem em tabelas com linhas e colunas. A chave primária identifica cada linha e a chave estrangeira liga tabelas, garantindo integridade referencial." },
          { title: "SQL essencial", text: "SELECT ... FROM ... WHERE filtra; JOIN combina tabelas; GROUP BY com COUNT, SUM e AVG resume; ORDER BY e LIMIT organizam o resultado. INSERT, UPDATE e DELETE alteram os dados." },
          { title: "Normalização", text: "1FN elimina campos repetidos, 2FN remove dependências parciais da chave e 3FN remove dependências transitivas. Reduz redundância e evita anomalias de atualização." },
          { title: "Transações e ACID", text: "Uma transação é um bloco tudo-ou-nada: BEGIN, COMMIT ou ROLLBACK. ACID significa Atomicidade, Consistência, Isolamento e Durabilidade; níveis de isolamento evitam leituras sujas e fantasmas." },
          { title: "Índices e desempenho", text: "Índices B-Tree aceleram buscas e ordenações ao custo de escrita mais lenta. Analise consultas com EXPLAIN antes de criar índices." },
          { title: "SQL vs NoSQL", text: "Bancos relacionais (PostgreSQL, MySQL) brilham com dados estruturados e relações. NoSQL (documentos, chave-valor, grafos) escala melhor com esquemas flexíveis." }
        ]
      }
    ],
    langDetails: {
      Python: [
        { title: "Para que serve", text: "Linguagem interpretada e de sintaxe simples, usada em ciência de dados, automação, inteligência artificial, back-end web e scripts do dia a dia." },
        { title: "Bases", text: "Tipagem dinâmica, indentação obrigatória, listas, dicionários, conjuntos e tuplas. Funções com def, compreensões de lista e tratamento de erros com try/except." },
        { title: "Ecossistema", text: "NumPy e Pandas para dados, Matplotlib para gráficos, Django e FastAPI para web, PyTorch para IA. Ambientes virtuais com venv e pacotes com pip." },
        { title: "Exemplo", text: "def media(n): return sum(n) / len(n)" }
      ],
      JavaScript: [
        { title: "Para que serve", text: "É a linguagem do navegador e, com Node.js, também do servidor. Move páginas web, aplicações completas, APIs e até aplicações móveis." },
        { title: "Bases", text: "let e const, funções de seta, objetos e arrays, métodos map/filter/reduce, promessas e async/await, manipulação do DOM e eventos." },
        { title: "Ecossistema", text: "React, Vue e Svelte no front-end; Node.js e Express no back-end; npm para pacotes; TypeScript acrescenta tipagem estática." },
        { title: "Exemplo", text: "const media = n => n.reduce((a, b) => a + b, 0) / n.length;" }
      ],
      "C++": [
        { title: "Para que serve", text: "Linguagem compilada de alto desempenho usada em jogos, sistemas embebidos, motores gráficos, finanças e software que precisa de controlo total da memória." },
        { title: "Bases", text: "Tipos estáticos, ponteiros e referências, alocação manual, classes, herança, templates e sobrecarga de operadores." },
        { title: "Ecossistema", text: "STL com vector, map e algoritmos prontos; RAII e smart pointers para gerir memória; CMake para compilar projetos." },
        { title: "Exemplo", text: "double media(const std::vector<double>& v);" }
      ],
      Java: [
        { title: "Para que serve", text: "Linguagem orientada a objetos que corre na JVM. Domina sistemas empresariais, aplicações Android e serviços de grande escala." },
        { title: "Bases", text: "Classes e interfaces, herança e polimorfismo, coleções (List, Map, Set), exceções verificadas e streams." },
        { title: "Ecossistema", text: "Spring Boot para serviços web, Maven e Gradle para build, JUnit para testes, Android SDK para telemóveis." },
        { title: "Exemplo", text: "double media(List<Double> n) { return n.stream().mapToDouble(d -> d).average().orElse(0); }" }
      ],
      Ruby: [
        { title: "Para que serve", text: "Linguagem dinâmica focada na produtividade e na legibilidade, muito usada em aplicações web e automação." },
        { title: "Bases", text: "Tudo é objeto, blocos e iteradores, símbolos, módulos e mixins, metaprogramação simples." },
        { title: "Ecossistema", text: "Ruby on Rails para web com convenções fortes, RSpec para testes, Bundler e gems para dependências." },
        { title: "Exemplo", text: "def media(n) = n.sum / n.size.to_f" }
      ],
      Swift: [
        { title: "Para que serve", text: "Linguagem moderna da Apple para iOS, macOS, watchOS e também servidores. Segura por padrão e rápida." },
        { title: "Bases", text: "Opcionais para evitar valores nulos inesperados, structs e classes, protocolos, closures e tratamento de erros com throws." },
        { title: "Ecossistema", text: "SwiftUI e UIKit para interfaces, Xcode como ambiente, Swift Package Manager para dependências." },
        { title: "Exemplo", text: "func media(_ n: [Double]) -> Double { n.reduce(0, +) / Double(n.count) }" }
      ]
    },
    pages: {
      privacy: {
        title: "Política de Privacidade",
        body: [
          { title: "Que dados guardamos", text: "O Dashboard for Study é um site de estudo que funciona no seu navegador. As metas, o idioma escolhido, a preferência de cookies e as publicações criadas ficam guardados apenas no armazenamento local do seu dispositivo." },
          { title: "Não enviamos dados", text: "Não temos servidor de contas nem base de dados externa: nada do que escreve sai do seu computador e nada é vendido ou partilhado com terceiros." },
          { title: "Cookies", text: "Usamos apenas armazenamento essencial para lembrar o idioma, o estado das tarefas e o aviso de cookies. Pode limpar tudo a qualquer momento apagando os dados do site no navegador." },
          { title: "Os seus direitos", text: "Como os dados ficam no seu dispositivo, o controlo é totalmente seu: pode consultar, alterar ou eliminar as informações quando quiser." }
        ]
      },
      about: {
        title: "Sobre Nós",
        body: [
          { title: "A nossa missão", text: "Reunir num só painel resumos claros, teoria essencial e prática de programação, para que estudar deixe de ser uma caça a materiais espalhados." },
          { title: "O que oferecemos", text: "Matérias fundamentais, ciência da computação, guias de linguagens de programação, metas de estudo e uma área de criador para publicar conteúdos próprios." },
          { title: "Como funciona", text: "Todo o conteúdo está disponível em português, inglês e francês, e a busca cobre matérias, resumos, tópicos, tarefas e publicações." },
          { title: "Contacto", text: "Sugestões e correções são bem-vindas através da área do criador ou do endereço de contacto do administrador do site." }
        ]
      },
      terms: {
        title: "Termos de Serviço",
        body: [
          { title: "Uso do site", text: "O conteúdo é disponibilizado com fins educativos. Pode consultar, estudar e citar o material indicando a fonte." },
          { title: "Conteúdo publicado", text: "Quem usa a área do criador é responsável pelo que publica e deve respeitar direitos de autor e a legislação aplicável." },
          { title: "Disponibilidade", text: "O serviço é oferecido tal como está, sem garantia de funcionamento ininterrupto ou de ausência total de erros nos materiais." },
          { title: "Alterações", text: "Estes termos podem ser atualizados. O uso continuado do site após uma alteração significa a aceitação da nova versão." }
        ]
      }
    },
    tasks: [
      "Terminar o guia de Python",
      "Dominar as estruturas de dados",
      "Revisar o capítulo sobre Redes",
      "Praticar os desafios de Lógica"
    ],
    topics: [
      { title: "Estruturas & Algoritmos", links: ["Resumos de Estruturas de Dados", "Guia de Algoritmos Populares", "Conceitos Chave de Computação"] },
      { title: "Ciências Exatas", links: ["Resumos de Álgebra Linear", "Guia de Física Moderna", "Conceitos Chave de Química"] },
      { title: "Humanas & Letras", links: ["Resumos de História Contemporânea", "Guia de Literatura Brasileira", "Conceitos Chave de Redação"] }
    ]
  },
  en: {
    subjects: [
      { icon: "∑", name: "Mathematics", tags: "Algebra | Geometry", summary: "Functions, equations, trigonometry and analytic geometry with solved exercises." },
      { icon: "⚛", name: "Physics", tags: "Mechanics | Waves", summary: "Kinematics, Newton's laws, energy, waves and electromagnetism." },
      { icon: "🧪", name: "Chemistry", tags: "General | Organic", summary: "Periodic table, bonding, stoichiometry and organic reactions." },
      { icon: "🧬", name: "Biology", tags: "Cells | Genetics", summary: "Cytology, Mendelian genetics, evolution and ecology." },
      { icon: "🏛", name: "History", tags: "General | Contemporary", summary: "Modern age, revolutions, world wars and Brazilian history." },
      { icon: "📚", name: "Literature", tags: "Movements | Writing", summary: "Literary movements, text analysis and essay writing techniques." }
    ],
    accordion: [
      { title: "Fundamentals", body: "Data representation, computer architecture, complexity and abstraction." },
      { title: "Logic", body: "Propositions, truth tables, boolean algebra and proofs by induction." },
      { title: "Algorithms", body: "Sorting, searching, recursion, dynamic programming and greedy algorithms." }
    ],
    csLinks: [
      {
        name: "Data Structures",
        summary: "Lists, stacks, queues, trees, graphs and hash tables.",
        detail: [
          { title: "What they are", text: "Ways of organising data in memory so insertion, search and removal stay efficient. The right choice changes the performance of a whole program." },
          { title: "Linear structures", text: "Arrays give O(1) index access but costly insertion. Linked lists insert in O(1) but search in O(n). Stacks are LIFO (undo, call stack) and queues are FIFO (printing, scheduling)." },
          { title: "Trees", text: "Binary search trees keep values ordered and search in O(log n) when balanced. AVL and Red-Black trees rebalance themselves; heaps power priority queues; tries speed up text lookups." },
          { title: "Graphs", text: "Vertices and edges stored as adjacency matrices or lists. Traversed with BFS (shortest path on unweighted graphs) and DFS (cycles, components, topological sort)." },
          { title: "Hash tables", text: "A hash function turns the key into an index, giving average O(1) lookups. Collisions are handled by chaining or open addressing and the load factor must be watched." },
          { title: "How to study", text: "Implement every structure from scratch once, then solve exercises comparing the time and memory cost of each choice." }
        ]
      },
      {
        name: "Networks",
        summary: "OSI model, TCP/IP, HTTP, DNS and basic security.",
        detail: [
          { title: "Layered model", text: "The OSI model has 7 layers (physical, data link, network, transport, session, presentation, application). In practice we use TCP/IP with 4: link, internet, transport and application." },
          { title: "IP and routing", text: "Every device has an IP address (IPv4 or IPv6) and a subnet mask. Routers pick the next hop; NAT lets a local network share one public IP." },
          { title: "TCP and UDP", text: "TCP opens a connection with a three-way handshake, guarantees order and retransmits lost packets. UDP gives no guarantee but is lightweight — ideal for video, voice and games." },
          { title: "HTTP and DNS", text: "DNS translates names into IP addresses through root, TLD and authoritative servers. HTTP carries requests (GET, POST...) and HTTPS adds TLS encryption with certificates." },
          { title: "Basic security", text: "Firewalls filter traffic, VPNs create encrypted tunnels and TLS protects data in transit. Common attacks: sniffing, spoofing, man-in-the-middle and denial of service." },
          { title: "Tools", text: "Practise with ping, traceroute, nslookup, netstat and Wireshark to watch real packets flow." }
        ]
      },
      {
        name: "Databases",
        summary: "Relational modeling, SQL, normalization and transactions.",
        detail: [
          { title: "Relational model", text: "Data lives in tables of rows and columns. The primary key identifies each row and foreign keys link tables, enforcing referential integrity." },
          { title: "Essential SQL", text: "SELECT ... FROM ... WHERE filters; JOIN combines tables; GROUP BY with COUNT, SUM and AVG summarises; ORDER BY and LIMIT shape the output. INSERT, UPDATE and DELETE change data." },
          { title: "Normalization", text: "1NF removes repeating groups, 2NF removes partial key dependencies and 3NF removes transitive ones. It cuts redundancy and avoids update anomalies." },
          { title: "Transactions and ACID", text: "A transaction is an all-or-nothing block: BEGIN, COMMIT or ROLLBACK. ACID stands for Atomicity, Consistency, Isolation and Durability; isolation levels prevent dirty and phantom reads." },
          { title: "Indexes and performance", text: "B-Tree indexes speed up searches and sorting at the cost of slower writes. Inspect queries with EXPLAIN before adding indexes." },
          { title: "SQL vs NoSQL", text: "Relational databases (PostgreSQL, MySQL) shine with structured, related data. NoSQL (document, key-value, graph) scales better with flexible schemas." }
        ]
      }
    ],
    langDetails: {
      Python: [
        { title: "What it is for", text: "An interpreted language with simple syntax, used for data science, automation, artificial intelligence, web back-ends and everyday scripts." },
        { title: "Basics", text: "Dynamic typing, meaningful indentation, lists, dictionaries, sets and tuples. Functions with def, list comprehensions and try/except error handling." },
        { title: "Ecosystem", text: "NumPy and Pandas for data, Matplotlib for charts, Django and FastAPI for web, PyTorch for AI. Virtual environments with venv and packages with pip." },
        { title: "Example", text: "def mean(n): return sum(n) / len(n)" }
      ],
      JavaScript: [
        { title: "What it is for", text: "The language of the browser and, with Node.js, of the server too. It powers web pages, full applications, APIs and even mobile apps." },
        { title: "Basics", text: "let and const, arrow functions, objects and arrays, map/filter/reduce, promises and async/await, DOM manipulation and events." },
        { title: "Ecosystem", text: "React, Vue and Svelte on the front-end; Node.js and Express on the back-end; npm for packages; TypeScript adds static typing." },
        { title: "Example", text: "const mean = n => n.reduce((a, b) => a + b, 0) / n.length;" }
      ],
      "C++": [
        { title: "What it is for", text: "A compiled, high-performance language used in games, embedded systems, graphics engines, finance and software needing full memory control." },
        { title: "Basics", text: "Static types, pointers and references, manual allocation, classes, inheritance, templates and operator overloading." },
        { title: "Ecosystem", text: "The STL with vector, map and ready-made algorithms; RAII and smart pointers for memory; CMake to build projects." },
        { title: "Example", text: "double mean(const std::vector<double>& v);" }
      ],
      Java: [
        { title: "What it is for", text: "An object-oriented language running on the JVM. It dominates enterprise systems, Android apps and large-scale services." },
        { title: "Basics", text: "Classes and interfaces, inheritance and polymorphism, collections (List, Map, Set), checked exceptions and streams." },
        { title: "Ecosystem", text: "Spring Boot for web services, Maven and Gradle for builds, JUnit for tests, the Android SDK for phones." },
        { title: "Example", text: "double mean(List<Double> n) { return n.stream().mapToDouble(d -> d).average().orElse(0); }" }
      ],
      Ruby: [
        { title: "What it is for", text: "A dynamic language focused on productivity and readability, widely used for web applications and automation." },
        { title: "Basics", text: "Everything is an object, blocks and iterators, symbols, modules and mixins, easy metaprogramming." },
        { title: "Ecosystem", text: "Ruby on Rails for convention-driven web apps, RSpec for tests, Bundler and gems for dependencies." },
        { title: "Example", text: "def mean(n) = n.sum / n.size.to_f" }
      ],
      Swift: [
        { title: "What it is for", text: "Apple's modern language for iOS, macOS, watchOS and servers too. Safe by default and fast." },
        { title: "Basics", text: "Optionals to avoid unexpected nulls, structs and classes, protocols, closures and error handling with throws." },
        { title: "Ecosystem", text: "SwiftUI and UIKit for interfaces, Xcode as the IDE, Swift Package Manager for dependencies." },
        { title: "Example", text: "func mean(_ n: [Double]) -> Double { n.reduce(0, +) / Double(n.count) }" }
      ]
    },
    pages: {
      privacy: {
        title: "Privacy Policy",
        body: [
          { title: "What we store", text: "Dashboard for Study is a study site that runs in your browser. Goals, chosen language, cookie preference and created posts are kept only in your device's local storage." },
          { title: "We send nothing", text: "There is no account server or external database: nothing you write leaves your computer and nothing is sold or shared with third parties." },
          { title: "Cookies", text: "We only use essential storage to remember the language, task state and the cookie notice. You can clear everything any time by deleting site data in your browser." },
          { title: "Your rights", text: "Because data stays on your device, control is entirely yours: view, change or delete the information whenever you want." }
        ]
      },
      about: {
        title: "About Us",
        body: [
          { title: "Our mission", text: "Bring clear summaries, essential theory and programming practice into a single dashboard, so studying stops being a hunt for scattered material." },
          { title: "What we offer", text: "Core subjects, computer science, programming language guides, study goals and a creator area to publish your own content." },
          { title: "How it works", text: "All content is available in Portuguese, English and French, and search covers subjects, summaries, topics, tasks and posts." },
          { title: "Contact", text: "Suggestions and corrections are welcome through the creator area or the site administrator's contact address." }
        ]
      },
      terms: {
        title: "Terms of Service",
        body: [
          { title: "Using the site", text: "Content is provided for educational purposes. You may read, study and quote the material as long as you credit the source." },
          { title: "Published content", text: "Whoever uses the creator area is responsible for what they publish and must respect copyright and applicable law." },
          { title: "Availability", text: "The service is offered as is, with no guarantee of uninterrupted operation or of completely error-free material." },
          { title: "Changes", text: "These terms may be updated. Continued use of the site after a change means you accept the new version." }
        ]
      }
    },
    tasks: [
      "Finish the Python guide",
      "Master data structures",
      "Review the Networks chapter",
      "Practice the Logic challenges"
    ],
    topics: [
      { title: "Structures & Algorithms", links: ["Data Structure Summaries", "Popular Algorithms Guide", "Key Computing Concepts"] },
      { title: "Exact Sciences", links: ["Linear Algebra Summaries", "Modern Physics Guide", "Key Chemistry Concepts"] },
      { title: "Humanities & Letters", links: ["Contemporary History Summaries", "Brazilian Literature Guide", "Key Writing Concepts"] }
    ]
  },
  fr: {
    subjects: [
      { icon: "∑", name: "Mathématiques", tags: "Algèbre | Géométrie", summary: "Fonctions, équations, trigonométrie et géométrie analytique avec exercices corrigés." },
      { icon: "⚛", name: "Physique", tags: "Mécanique | Ondes", summary: "Cinématique, lois de Newton, énergie, ondes et électromagnétisme." },
      { icon: "🧪", name: "Chimie", tags: "Générale | Organique", summary: "Tableau périodique, liaisons, stœchiométrie et réactions organiques." },
      { icon: "🧬", name: "Biologie", tags: "Cellules | Génétique", summary: "Cytologie, génétique mendélienne, évolution et écologie." },
      { icon: "🏛", name: "Histoire", tags: "Générale | Contemporaine", summary: "Époque moderne, révolutions, guerres mondiales et histoire du Brésil." },
      { icon: "📚", name: "Littérature", tags: "Courants | Rédaction", summary: "Courants littéraires, analyse de texte et techniques de rédaction." }
    ],
    accordion: [
      { title: "Fondamentaux", body: "Représentation des données, architecture des ordinateurs, complexité et abstraction." },
      { title: "Logique", body: "Propositions, tables de vérité, algèbre booléenne et démonstrations par récurrence." },
      { title: "Algorithmes", body: "Tri, recherche, récursivité, programmation dynamique et algorithmes gloutons." }
    ],
    csLinks: [
      {
        name: "Structures de Données",
        summary: "Listes, piles, files, arbres, graphes et tables de hachage.",
        detail: [
          { title: "Définition", text: "Manières d'organiser les données en mémoire pour que l'insertion, la recherche et la suppression restent efficaces. Le bon choix change la performance de tout un programme." },
          { title: "Structures linéaires", text: "Les tableaux offrent un accès en O(1) mais une insertion coûteuse. Les listes chaînées insèrent en O(1) et cherchent en O(n). Les piles sont LIFO (annulation, appels) et les files FIFO (impression, ordonnancement)." },
          { title: "Arbres", text: "Les arbres binaires de recherche gardent les valeurs ordonnées et cherchent en O(log n) s'ils sont équilibrés. AVL et rouge-noir se rééquilibrent; les tas servent aux files de priorité; les tries accélèrent la recherche textuelle." },
          { title: "Graphes", text: "Sommets et arêtes représentés par matrice ou liste d'adjacence. Parcourus en BFS (plus court chemin non pondéré) et DFS (cycles, composantes, tri topologique)." },
          { title: "Tables de hachage", text: "Une fonction de hachage transforme la clé en indice, d'où une recherche moyenne en O(1). Il faut gérer les collisions par chaînage ou adressage ouvert et surveiller le facteur de charge." },
          { title: "Comment étudier", text: "Implémentez chaque structure une fois de zéro, puis résolvez des exercices en comparant le coût en temps et en mémoire." }
        ]
      },
      {
        name: "Réseaux",
        summary: "Modèle OSI, TCP/IP, HTTP, DNS et sécurité de base.",
        detail: [
          { title: "Modèle en couches", text: "Le modèle OSI compte 7 couches (physique, liaison, réseau, transport, session, présentation, application). En pratique on utilise TCP/IP à 4 couches." },
          { title: "IP et routage", text: "Chaque appareil possède une adresse IP (IPv4 ou IPv6) et un masque de sous-réseau. Les routeurs choisissent le saut suivant; le NAT permet de partager une IP publique." },
          { title: "TCP et UDP", text: "TCP ouvre une connexion par poignée de main en trois temps, garantit l'ordre et retransmet les paquets perdus. UDP ne garantit rien mais reste léger — idéal pour la vidéo, la voix et les jeux." },
          { title: "HTTP et DNS", text: "Le DNS traduit les noms en adresses IP via les serveurs racine, TLD et autoritatifs. HTTP transporte les requêtes (GET, POST...) et HTTPS ajoute le chiffrement TLS." },
          { title: "Sécurité de base", text: "Les pare-feu filtrent le trafic, les VPN créent des tunnels chiffrés et TLS protège les données en transit. Attaques courantes : sniffing, spoofing, homme du milieu et déni de service." },
          { title: "Outils", text: "Entraînez-vous avec ping, traceroute, nslookup, netstat et Wireshark pour observer les paquets réels." }
        ]
      },
      {
        name: "Bases de Données",
        summary: "Modélisation relationnelle, SQL, normalisation et transactions.",
        detail: [
          { title: "Modèle relationnel", text: "Les données vivent dans des tables de lignes et de colonnes. La clé primaire identifie chaque ligne et les clés étrangères relient les tables, assurant l'intégrité référentielle." },
          { title: "SQL essentiel", text: "SELECT ... FROM ... WHERE filtre; JOIN combine les tables; GROUP BY avec COUNT, SUM et AVG résume; ORDER BY et LIMIT organisent le résultat. INSERT, UPDATE et DELETE modifient les données." },
          { title: "Normalisation", text: "1FN supprime les groupes répétés, 2FN les dépendances partielles et 3FN les dépendances transitives. Cela réduit la redondance et évite les anomalies." },
          { title: "Transactions et ACID", text: "Une transaction est un bloc tout-ou-rien : BEGIN, COMMIT ou ROLLBACK. ACID signifie Atomicité, Cohérence, Isolation et Durabilité; les niveaux d'isolation évitent lectures sales et fantômes." },
          { title: "Index et performance", text: "Les index B-Tree accélèrent recherches et tris au prix d'écritures plus lentes. Analysez les requêtes avec EXPLAIN avant de créer des index." },
          { title: "SQL ou NoSQL", text: "Les bases relationnelles (PostgreSQL, MySQL) excellent avec des données structurées et reliées. Le NoSQL (documents, clé-valeur, graphes) s'adapte mieux aux schémas flexibles." }
        ]
      }
    ],
    langDetails: {
      Python: [
        { title: "À quoi ça sert", text: "Langage interprété à la syntaxe simple, utilisé en science des données, automatisation, intelligence artificielle, back-end web et scripts quotidiens." },
        { title: "Bases", text: "Typage dynamique, indentation significative, listes, dictionnaires, ensembles et tuples. Fonctions avec def, compréhensions de liste et gestion d'erreurs try/except." },
        { title: "Écosystème", text: "NumPy et Pandas pour les données, Matplotlib pour les graphiques, Django et FastAPI pour le web, PyTorch pour l'IA. Environnements virtuels avec venv et paquets avec pip." },
        { title: "Exemple", text: "def moyenne(n): return sum(n) / len(n)" }
      ],
      JavaScript: [
        { title: "À quoi ça sert", text: "Le langage du navigateur et, avec Node.js, du serveur. Il anime les pages web, les applications complètes, les API et même le mobile." },
        { title: "Bases", text: "let et const, fonctions fléchées, objets et tableaux, map/filter/reduce, promesses et async/await, manipulation du DOM et événements." },
        { title: "Écosystème", text: "React, Vue et Svelte côté front; Node.js et Express côté serveur; npm pour les paquets; TypeScript ajoute le typage statique." },
        { title: "Exemple", text: "const moyenne = n => n.reduce((a, b) => a + b, 0) / n.length;" }
      ],
      "C++": [
        { title: "À quoi ça sert", text: "Langage compilé haute performance utilisé dans les jeux, l'embarqué, les moteurs graphiques, la finance et tout logiciel exigeant un contrôle total de la mémoire." },
        { title: "Bases", text: "Types statiques, pointeurs et références, allocation manuelle, classes, héritage, templates et surcharge d'opérateurs." },
        { title: "Écosystème", text: "La STL avec vector, map et algorithmes prêts; RAII et smart pointers pour la mémoire; CMake pour la compilation." },
        { title: "Exemple", text: "double moyenne(const std::vector<double>& v);" }
      ],
      Java: [
        { title: "À quoi ça sert", text: "Langage orienté objet tournant sur la JVM. Il domine les systèmes d'entreprise, les applications Android et les services à grande échelle." },
        { title: "Bases", text: "Classes et interfaces, héritage et polymorphisme, collections (List, Map, Set), exceptions vérifiées et streams." },
        { title: "Écosystème", text: "Spring Boot pour les services web, Maven et Gradle pour la construction, JUnit pour les tests, le SDK Android pour le mobile." },
        { title: "Exemple", text: "double moyenne(List<Double> n) { return n.stream().mapToDouble(d -> d).average().orElse(0); }" }
      ],
      Ruby: [
        { title: "À quoi ça sert", text: "Langage dynamique axé sur la productivité et la lisibilité, très utilisé pour les applications web et l'automatisation." },
        { title: "Bases", text: "Tout est objet, blocs et itérateurs, symboles, modules et mixins, métaprogrammation simple." },
        { title: "Écosystème", text: "Ruby on Rails pour le web, RSpec pour les tests, Bundler et gems pour les dépendances." },
        { title: "Exemple", text: "def moyenne(n) = n.sum / n.size.to_f" }
      ],
      Swift: [
        { title: "À quoi ça sert", text: "Le langage moderne d'Apple pour iOS, macOS, watchOS et aussi les serveurs. Sûr par défaut et rapide." },
        { title: "Bases", text: "Optionnels pour éviter les valeurs nulles, structures et classes, protocoles, closures et gestion d'erreurs avec throws." },
        { title: "Écosystème", text: "SwiftUI et UIKit pour les interfaces, Xcode comme environnement, Swift Package Manager pour les dépendances." },
        { title: "Exemple", text: "func moyenne(_ n: [Double]) -> Double { n.reduce(0, +) / Double(n.count) }" }
      ]
    },
    pages: {
      privacy: {
        title: "Politique de Confidentialité",
        body: [
          { title: "Données conservées", text: "Dashboard for Study est un site d'étude qui fonctionne dans votre navigateur. Les objectifs, la langue choisie, la préférence de cookies et les publications restent uniquement dans le stockage local de votre appareil." },
          { title: "Aucun envoi", text: "Il n'y a ni serveur de comptes ni base externe : rien de ce que vous écrivez ne quitte votre ordinateur et rien n'est vendu ni partagé." },
          { title: "Cookies", text: "Nous n'utilisons qu'un stockage essentiel pour mémoriser la langue, l'état des tâches et l'avis de cookies. Vous pouvez tout effacer en supprimant les données du site." },
          { title: "Vos droits", text: "Les données restant sur votre appareil, le contrôle vous appartient : consultez, modifiez ou supprimez les informations quand vous voulez." }
        ]
      },
      about: {
        title: "À Propos",
        body: [
          { title: "Notre mission", text: "Réunir dans un seul tableau de bord des résumés clairs, la théorie essentielle et la pratique de la programmation, pour ne plus chercher les supports partout." },
          { title: "Ce que nous offrons", text: "Matières fondamentales, informatique, guides de langages, objectifs d'étude et un espace créateur pour publier vos propres contenus." },
          { title: "Fonctionnement", text: "Tout le contenu existe en portugais, anglais et français, et la recherche couvre matières, résumés, sujets, tâches et publications." },
          { title: "Contact", text: "Suggestions et corrections sont bienvenues via l'espace créateur ou l'adresse de l'administrateur du site." }
        ]
      },
      terms: {
        title: "Conditions d'Utilisation",
        body: [
          { title: "Utilisation du site", text: "Le contenu est fourni à des fins éducatives. Vous pouvez le consulter, l'étudier et le citer en indiquant la source." },
          { title: "Contenu publié", text: "Toute personne utilisant l'espace créateur est responsable de ses publications et doit respecter le droit d'auteur et la loi applicable." },
          { title: "Disponibilité", text: "Le service est fourni en l'état, sans garantie de fonctionnement ininterrompu ni d'absence totale d'erreurs." },
          { title: "Modifications", text: "Ces conditions peuvent être mises à jour. L'usage continu du site après une modification vaut acceptation." }
        ]
      }
    },
    tasks: [
      "Terminer le guide Python",
      "Maîtriser les structures de données",
      "Réviser le chapitre Réseaux",
      "Pratiquer les défis de Logique"
    ],
    topics: [
      { title: "Structures & Algorithmes", links: ["Résumés de Structures de Données", "Guide des Algorithmes Populaires", "Concepts Clés de l'Informatique"] },
      { title: "Sciences Exactes", links: ["Résumés d'Algèbre Linéaire", "Guide de Physique Moderne", "Concepts Clés de Chimie"] },
      { title: "Humanités & Lettres", links: ["Résumés d'Histoire Contemporaine", "Guide de Littérature Brésilienne", "Concepts Clés de Rédaction"] }
    ]
  }
};

window.DFS_LANGS = [
  { name: "Python", short: "PY", color: "#3776ab" },
  { name: "JavaScript", short: "JS", color: "#f7df1e" },
  { name: "C++", short: "C++", color: "#00599c" },
  { name: "Java", short: "JV", color: "#e76f00" },
  { name: "Ruby", short: "RB", color: "#cc342d" },
  { name: "Swift", short: "SW", color: "#f05138" }
];
