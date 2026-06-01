// ============================================================
//  FORMATIONS-DATA.JS — Orevy
//  Contenu pédagogique + Mode Administrateur
//  Mot de passe admin : Orevy2025
// ============================================================

// ────────────────────────────────────────────────────────────
//  DONNÉES — stockées en mémoire, éditables via l'admin
//  Les modifications sont sauvegardées dans localStorage
//  et exportables en fichier .js pour mise à jour GitHub
// ────────────────────────────────────────────────────────────

const FORMATIONS_DEFAULT = {
  jeu: {
    titre: '"Il ne fait que jouer…"',
    sousTitre: 'Et si c\'était exactement ce dont il avait besoin ?',
    couleur1: '#7B9E87',
    couleur2: '#5A7A65',
    emoji: '🧸',
    sequences: [
      {
        label: 'Séq. 1',
        duree: 'Séquence 1 · 25 min',
        titre: 'Les 4 types de jeu et ce qu\'ils développent vraiment',
        accroche: '"Derrière chaque jeu, un apprentissage que vous ne voyez peut-être pas encore."',
        blocs: [
          { type: 'seq', emoji: '🔵', couleur: '#4A90D9', titre: 'Jeu d\'exploration', sous: '0 – 18 mois', desc: 'L\'enfant touche, porte à la bouche, secoue, lâche, recommence. Il explore le monde physique avec tous ses sens.', points: ['Motricité fine et globale','Permanence de l\'objet','Curiosité et confiance en soi','Bases de la pensée scientifique'], tip: 'Un bébé qui met tout à la bouche apprend — il n\'est pas en train de "faire n\'importe quoi".' },
          { type: 'seq', emoji: '🟡', couleur: '#D4922A', titre: 'Jeu symbolique', sous: '18 mois – 6 ans', desc: 'Il fait semblant. La cuillère devient baguette magique, la couverture une cabane. La pensée abstraite s\'éveille.', points: ['Langage et pensée abstraite','Gestion des émotions','Empathie et prise de perspective','Créativité et imaginaire'], tip: 'Quand un enfant rejoue une dispute entre poupées, il digère une émotion difficile en toute sécurité.' },
          { type: 'seq', emoji: '🟢', couleur: '#7B9E87', titre: 'Jeu de construction', sous: '2 – 6 ans', desc: 'Empiler, équilibrer, détruire et recommencer. La tour qui s\'effondre est aussi formatrice que celle qui tient.', points: ['Motricité fine et coordination','Pensée logique et mathématique','Persévérance et tolérance à l\'échec','Planification et résolution de problèmes'], tip: 'C\'est dans l\'échec répété que se construit la persévérance. Ne pas reconstruire à la place de l\'enfant.' },
          { type: 'seq', emoji: '🔴', couleur: '#C4714A', titre: 'Jeu de règles', sous: 'Dès 4 ans', desc: 'Jouer avec des règles collectives, accepter de gagner et de perdre, négocier, attendre son tour.', points: ['Socialisation et coopération','Contrôle des impulsions','Sens de la justice et du fair-play','Mémoire et concentration'], tip: 'Un enfant qui triche à 4 ans teste les règles sociales. C\'est exactement ce qu\'il doit faire.' },
          { type: 'reflexion', question: 'Dans votre structure, quel type de jeu est le plus présent ? Lequel est le plus souvent interrompu par les adultes ?' }
        ]
      },
      {
        label: 'Séq. 2',
        duree: 'Séquence 2 · 20 min',
        titre: 'Jeu libre vs jeu dirigé : quand, pourquoi, comment alterner',
        accroche: '"Vous avez préparé une activité soigneusement… et les enfants jouent avec les boîtes vides. Révélateur ?"',
        blocs: [
          { type: 'tip', emoji: '⚖️', titre: 'La règle du 70/30', contenu: 'Une bonne journée devrait proposer <strong>70% de jeu libre</strong> et <strong>30% de jeu dirigé</strong>. Dans beaucoup de structures, ce ratio est inversé — c\'est souvent à l\'origine de l\'agitation et du manque de concentration.' },
          { type: 'erreur', items: ['Interrompre un jeu libre pour proposer une activité dirigée','Transformer le jeu libre en jeu dirigé sans le dire ("Essaie de la faire plus haute !")','Remplir tous les temps libres d\'activités dirigées','Juger le jeu libre comme un temps "sans intérêt"'] },
          { type: 'reflexion', question: 'Estimez le ratio jeu libre / jeu dirigé dans votre dernière journée type. Est-il proche du 70/30 ?' }
        ]
      },
      {
        label: 'Séq. 3',
        duree: 'Séquence 3 · 25 min',
        titre: 'Aménager l\'espace pour que le jeu fasse vraiment son travail',
        accroche: '"L\'environnement est le troisième éducateur."',
        blocs: [
          { type: 'tip', emoji: '🏛️', titre: 'Deux approches selon votre structure', contenu: '<strong>Pédagogie des coins</strong> pour les grandes structures : zones thématiques permanentes. <strong>Itinérance ludique</strong> pour les micro-crèches, MAM et assistantes maternelles : des îlots temporaires qui voyagent avec le matériel.' },
          { type: 'principe', num: '1', couleur: '#4A90D9', titre: 'Espaces lisibles', desc: 'Chaque espace doit envoyer un message clair. En coins permanents, la zone délimite. En itinérance ludique, l\'installation elle-même est le message.' },
          { type: 'principe', num: '2', couleur: '#D4922A', titre: 'Matériel accessible', desc: 'Tout à hauteur d\'enfant, sans aide adulte. Bacs ouverts, peu mais bien choisi, rotation toutes les 3-4 semaines.' },
          { type: 'principe', num: '3', couleur: '#7B9E87', titre: 'Matériaux ouverts', desc: 'Tissu, boîtes, kapla, cailloux, pommes de pin. Plus un objet est ouvert, plus il stimule l\'imaginaire.' },
          { type: 'principe', num: '4', couleur: '#C4714A', titre: 'Place pour le corps', desc: 'Les enfants ont besoin de bouger. Si les enfants sont agités, regardez d\'abord l\'espace avant de chercher la cause dans leur comportement.' },
          { type: 'principe', num: '5', couleur: '#7C3AED', titre: 'Espace vivant', desc: 'Observer avant de modifier. Enrichissement saisonnier. Impliquer les enfants dès 3 ans dans l\'organisation de leur espace.' },
          { type: 'erreur', items: ['Appliquer la pédagogie des coins sans avoir l\'espace','Trop de stimulation visuelle : murs surchargés, lumières vives','Aménager pour les adultes, pas pour les enfants'] },
          { type: 'reflexion', question: 'Faites le tour de votre espace : combien de zones lisibles ? Le matériel est-il accessible sans aide ? Notez 1 changement à faire cette semaine.' }
        ]
      },
      {
        label: 'Séq. 4',
        duree: 'Séquence 4 · 20 min',
        titre: 'Observer le jeu de l\'enfant : apprendre à voir ce qui se passe vraiment',
        accroche: '"Observer, ce n\'est pas surveiller. C\'est un acte professionnel à part entière."',
        blocs: [
          { type: 'tip', emoji: '👁️', titre: 'La posture juste', contenu: 'Observer sans intervenir demande de la discipline. La <strong>règle des 3 secondes</strong> : avant d\'intervenir, attendez 3 secondes. Dans la majorité des cas, l\'enfant trouve seul une solution.' },
          { type: 'tip', emoji: '🌱', titre: 'De l\'observation à l\'action', contenu: 'Observer → Analyser ("Qu\'est-ce que ça dit sur cet enfant ?") → Identifier un besoin → Adapter l\'environnement → Observer à nouveau l\'effet du changement.' },
          { type: 'erreur', items: ['Confondre observer et interpréter — "Il est agressif" vs "Il a poussé trois enfants en 10 minutes"','N\'observer que les enfants qui posent problème','Observer sans jamais partager avec l\'équipe ou les familles'] },
          { type: 'reflexion', question: 'Lors de votre prochaine journée, observez un enfant 10 minutes sans intervenir. Notez uniquement des faits. Qu\'apprenez-vous que vous ne saviez pas ?' }
        ]
      }
    ],
    quiz: [
      { q: "Un bébé de 8 mois porte systématiquement les objets à la bouche. C'est :", choices: ["Un comportement à décourager pour des raisons d'hygiène","Une façon d'explorer et d'apprendre sur le monde","Un signe de faim","Un comportement sans intérêt développemental"], answer: 1, feedback: "Porter à la bouche est le premier outil sensoriel du bébé. C'est du jeu d'exploration à part entière." },
      { q: "Le jeu symbolique apparaît principalement à partir de :", choices: ["6 mois","12 mois","18 mois","3 ans"], answer: 2, feedback: "Vers 18 mois, l'enfant commence à 'faire semblant' — signe que sa pensée abstraite se développe." },
      { q: "Un enfant de 3 ans rejoue une dispute entre deux poupées. Que se passe-t-il ?", choices: ["Il reproduit des comportements négatifs","Il s'ennuie","Il traite une émotion difficile en toute sécurité","Il a besoin d'une intervention adulte"], answer: 2, feedback: "Le jeu symbolique est un espace de traitement émotionnel. C'est un mécanisme sain et précieux." },
      { q: "Face à une tour qui s'effondre, le professionnel doit :", choices: ["Reconstruire pour encourager","Proposer un autre jeu","Montrer comment mieux construire","Laisser l'enfant tâtonner et valoriser ses tentatives"], answer: 3, feedback: "C'est dans la répétition et l'échec que se construisent la persévérance et la résolution de problèmes." },
      { q: "Le jeu de règles développe principalement :", choices: ["La motricité fine","Le contrôle des impulsions et la socialisation","La pensée abstraite","La curiosité sensorielle"], answer: 1, feedback: "Attendre son tour, accepter de perdre, respecter une règle collective — des compétences sociales essentielles." },
      { q: "Quelle attitude favorise le mieux le jeu libre ?", choices: ["Proposer des activités structurées","Rester proche pour corriger","Aménager un espace riche et observer sans intervenir","Alterner toutes les 5 minutes"], answer: 2, feedback: "Le rôle du professionnel dans le jeu libre est d'abord de préparer l'environnement et d'observer." },
      { q: "Un enfant de 4 ans triche au jeu de l'oie. Cela signifie :", choices: ["Il a un problème de comportement","Il manque de confiance","Il teste les règles sociales — normal à cet âge","Le jeu est trop difficile"], answer: 2, feedback: "Tester les règles fait partie du développement moral. Maintenir un cadre bienveillant est la bonne réponse." },
      { q: "Quel type d'objet favorise le mieux le jeu symbolique ?", choices: ["Des jouets électroniques","Des jouets très réalistes","Des objets ouverts comme des tissus ou boîtes","Des puzzles"], answer: 2, feedback: "Plus un objet est ouvert, plus il stimule l'imaginaire. Un tissu peut devenir une cape, une mer, un toit…" },
      { q: "Le jeu de construction développe en priorité :", choices: ["Le langage","La gestion des émotions","Les habiletés sociales","La pensée logique et la tolérance à l'échec"], answer: 3, feedback: "Empiler, équilibrer, planifier — des bases de la pensée mathématique et de la persévérance." },
      { q: "Quelle phrase valorise le mieux l'effort d'un enfant ?", choices: ["'Bravo, tu as fait la plus belle tour !'","'Tu es vraiment doué !'","'C'est bien, mais tu pourrais faire mieux'","'Tu as essayé plusieurs fois, tu n'as pas abandonné !'"], answer: 3, feedback: "Valoriser le processus plutôt que le résultat développe la motivation intrinsèque — le principe du growth mindset." }
    ]
  },
  alim: {
    titre: 'Nourrir et protéger',
    sousTitre: 'Les gestes essentiels pour accompagner l\'enfant au quotidien',
    couleur1: '#D4922A',
    couleur2: '#B97A20',
    emoji: '🥦',
    modules: [
      {
        label: 'Module 1',
        duree: 'Module 1 · 45 min',
        titre: 'L\'alimentation, bien plus qu\'un repas',
        accroche: '"Nourrir, c\'est aussi créer du lien."',
        blocs: [
          { type: 'tip', emoji: '⚖️', titre: 'L\'équilibre alimentaire 0-6 ans', contenu: 'L\'objectif est d\'assurer un état de santé optimum. L\'équilibre s\'obtient en variant l\'alimentation : <strong>15% protides, 30-35% lipides, 50-55% glucides</strong>.' },
          { type: 'seq', emoji: '🍼', couleur: '#4A90D9', titre: 'La diversification alimentaire', sous: '4 à 6 mois', desc: 'Introduire des aliments solides progressivement, en complément du lait, pour arriver à une alimentation familiale vers 1-2 ans.', points: ['Démarrer entre 4 mois révolus et 6 mois au plus tard','Ne pas commencer avant 4 mois — risque allergique','Ne pas retarder au-delà de 6 mois, même chez les enfants à risque','Le lait seul ne suffit plus après 6 mois'], tip: 'L\'âge de la diversification a beaucoup évolué. Les recommandations actuelles sont claires : entre 4 et 6 mois.' },
          { type: 'tip', emoji: '💞', titre: 'Alimentation et attachement', contenu: 'L\'alimentation est un événement social et affectif majeur. La relation alimentaire évolue en 3 étapes : <strong>0-3 mois</strong> (autorégulation), <strong>3-7 mois</strong> (attachement et confiance), <strong>6-36 mois</strong> (autonomie progressive).' },
          { type: 'reflexion', question: 'Selon le contrat avec la famille, quel est votre rôle précis dans l\'alimentation de l\'enfant ? Quels sont vos propres habitudes ou jugements à mettre à distance ?' }
        ]
      },
      {
        label: 'Module 2',
        duree: 'Module 2 · 30 min',
        titre: 'L\'hygiène, un apprentissage qui se construit',
        accroche: '"Mets des chaussettes tu vas attraper froid… vraiment ?"',
        blocs: [
          { type: 'tip', emoji: '🔬', titre: 'Un peu de science accessible', contenu: 'Tomber malade résulte de l\'exposition à un élément pathogène (virus, bactérie). C\'est notre <strong>système immunitaire</strong> qui décide si on contracte la maladie. Le froid n\'est pas la cause — il est un facteur aggravant.' },
          { type: 'seq', emoji: '🙌', couleur: '#4A90D9', titre: 'Le lavage des mains', sous: 'Le geste le plus important', desc: 'Mesure d\'hygiène la plus efficace pour prévenir la transmission des virus. Une journée mondiale lui est consacrée : le 15 octobre.', points: ['Avant de s\'occuper d\'un bébé, de préparer ou servir les repas','Après s\'être mouché, avoir toussé ou éternué','Après chaque sortie extérieure','Après être allé aux toilettes'], tip: 'Se laver les mains à l\'eau et au savon liquide, pendant 30 secondes, en frottant ongles, paumes, dos des mains, jointures et poignets.' },
          { type: 'erreur', items: ['Utiliser du gel hydroalcoolique sur les enfants en remplacement du lavage des mains','Attendre que l\'enfant soit malade pour enseigner les gestes d\'hygiène','Considérer l\'hygiène comme une contrainte plutôt qu\'un apprentissage valorisant'] },
          { type: 'reflexion', question: 'Dans votre structure, les gestes d\'hygiène sont-ils expliqués aux enfants ou seulement imposés ? Comment les rendre plus ludiques et compris ?' }
        ]
      },
      {
        label: 'Module 3',
        duree: 'Module 3 · 30 min',
        titre: 'Ma posture professionnelle face aux familles',
        accroche: '"Quand les habitudes de la famille ne sont pas les miennes…"',
        blocs: [
          { type: 'tip', emoji: '🎯', titre: 'La juste distance éducative', contenu: 'Votre rôle est de répondre aux besoins de l\'enfant tout en étant à l\'écoute du parent. Cela implique de connaître vos propres valeurs, de les reconnaître… et de savoir les mettre à distance quand nécessaire.' },
          { type: 'tip', emoji: '💬', titre: 'Communiquer avec les familles', contenu: 'Utiliser des observations concrètes plutôt que des jugements. "J\'ai remarqué que Lucas mange mieux quand il peut tenir sa cuillère seul" plutôt que "il faut le laisser manger seul".' },
          { type: 'erreur', items: ['Imposer ses propres habitudes alimentaires à l\'enfant ou à la famille','Juger les pratiques culturelles différentes des siennes','Confondre hygiène professionnelle obligatoire et préférences personnelles','Éviter d\'aborder les sujets sensibles avec les familles par peur du conflit'] },
          { type: 'reflexion', question: 'Pensez à une situation récente où les pratiques d\'une famille vous ont questionné. Était-ce une question de sécurité ou de valeurs personnelles ? Comment avez-vous réagi ?' }
        ]
      }
    ],
    quiz: [
      {
        label: 'Quiz 1',
        titre: 'Évaluation — L\'alimentation',
        questions: [
          { q: "À partir de quel âge minimum peut-on commencer la diversification alimentaire ?", choices: ["3 mois","4 mois révolus","6 mois","8 mois"], answer: 1, feedback: "La diversification ne doit pas commencer avant 4 mois révolus." },
          { q: "Quelle est la répartition idéale des macronutriments ?", choices: ["30% protides, 40% lipides, 30% glucides","15% protides, 30-35% lipides, 50-55% glucides","20% protides, 20% lipides, 60% glucides","10% protides, 50% lipides, 40% glucides"], answer: 1, feedback: "L'équilibre alimentaire repose sur 15% de protides, 30-35% de lipides et 50-55% de glucides." },
          { q: "Un enfant de 18 mois mange avec les doigts. Que faire ?", choices: ["Le reprendre immédiatement","Ignorer ce comportement","Laisser faire — c'est une exploration sensorielle normale","Retirer l'assiette"], answer: 2, feedback: "Manger avec les doigts est une étape normale du développement." },
          { q: "Le repas chez le jeune enfant est avant tout :", choices: ["Un moment d'apprentissage des bonnes manières","Un acte purement nutritionnel","Un moment de performance","Un moment de lien, d'attachement et de découverte sensorielle"], answer: 3, feedback: "L'alimentation est un événement social et affectif majeur." },
          { q: "Quelle affirmation sur la diversification est correcte ?", choices: ["Il faut attendre que l'enfant réclame","Le lait seul ne couvre plus les besoins après 6 mois","La diversification peut commencer dès 2 mois","Les enfants à risque doivent attendre 12 mois"], answer: 1, feedback: "Après 6 mois, le lait seul ne suffit plus à couvrir les besoins en fer, zinc et autres nutriments." },
          { q: "La relation alimentaire entre 0 et 3 mois est caractérisée par :", choices: ["L'apprentissage des goûts","La découverte des textures","L'autorégulation et la construction de la confiance","L'introduction des aliments solides"], answer: 2, feedback: "Entre 0 et 3 mois, l'enfant est dans une phase d'autorégulation." },
          { q: "Une famille donne à son enfant des aliments différents de vos habitudes. Quelle posture ?", choices: ["Refuser catégoriquement","Accepter sans rien dire","Juger les habitudes de la famille","Distinguer sécurité de l'enfant et préférences culturelles"], answer: 3, feedback: "La juste distance consiste à protéger l'enfant quand sa sécurité est en jeu." },
          { q: "L'alimentation peut-elle être utilisée comme récompense ou punition ?", choices: ["Oui, c'est efficace","Oui pour les récompenses seulement","Non — cela crée un rapport problématique à la nourriture","Oui avec modération"], answer: 2, feedback: "Utiliser la nourriture comme récompense ou punition crée des associations émotionnelles néfastes." },
          { q: "Quel est le rôle du professionnel pendant le repas ?", choices: ["S'assurer que l'enfant finit son assiette","Corriger les mauvaises habitudes","Gérer plusieurs enfants sans s'attarder","Être présent, attentif, répondre aux signaux de l'enfant"], answer: 3, feedback: "Le repas en structure doit reproduire la qualité du lien que l'enfant vit à la maison." },
          { q: "'Finis ton assiette, il y a des enfants qui meurent de faim' est :", choices: ["Une façon légitime de sensibiliser","Un rappel utile","Une douce violence qui culpabilise l'enfant","Une phrase anodine"], answer: 2, feedback: "Cette phrase culpabilise l'enfant et l'empêche d'apprendre à gérer ses signaux de faim." }
        ]
      },
      {
        label: 'Quiz 2',
        titre: 'Évaluation — L\'hygiène',
        questions: [
          { q: "Pourquoi contracte-t-on un rhume ?", choices: ["Parce qu'on a eu froid","Parce qu'on n'a pas mis ses chaussettes","Parce qu'on a été en contact avec un virus","Parce qu'on est sorti les cheveux mouillés"], answer: 2, feedback: "On contracte un rhume uniquement en étant exposé à un virus. Le froid est un facteur aggravant." },
          { q: "Quelle est la durée recommandée pour un lavage des mains efficace ?", choices: ["5 secondes","15 secondes","30 secondes","1 minute"], answer: 2, feedback: "30 secondes de friction avec du savon liquide sont nécessaires pour éliminer efficacement les germes." },
          { q: "Quelle est la Journée Mondiale du lavage des mains ?", choices: ["1er avril","15 septembre","15 octobre","1er novembre"], answer: 2, feedback: "La Journée Mondiale du lavage des mains est célébrée chaque année le 15 octobre." },
          { q: "Quand un enfant doit-il se laver les mains en priorité ?", choices: ["Uniquement après les toilettes","Seulement avant les repas","Après les toilettes, avant de manger, après avoir toussé, après avoir joué dehors","Une fois par jour le matin"], answer: 2, feedback: "Le lavage des mains chez l'enfant doit intervenir dans de nombreuses situations." },
          { q: "Peut-on utiliser du gel hydroalcoolique à la place du savon chez l'enfant ?", choices: ["Oui, c'est plus pratique","Oui si on n'a pas accès à de l'eau","Oui pour les enfants de plus de 3 ans","Non — le gel hydroalcoolique est à proscrire chez l'enfant"], answer: 3, feedback: "Le gel hydroalcoolique est contre-indiqué chez l'enfant. Il peut être ingéré accidentellement." },
          { q: "Un enfant éternue sans se couvrir la bouche. Quelle est la meilleure réponse ?", choices: ["Le gronder devant les autres","Ignorer — c'est normal","Lui montrer le geste du coude de façon ludique et positive","L'isoler immédiatement"], answer: 2, feedback: "Les gestes d'hygiène s'apprennent progressivement, sans honte ni punition." },
          { q: "Qu'est-ce qui permet réellement à notre corps de ne pas tomber malade ?", choices: ["Éviter le froid et l'humidité","Manger beaucoup de vitamine C","Un système immunitaire fonctionnel","Se laver les mains une fois par jour"], answer: 2, feedback: "C'est le système immunitaire qui décide si on contracte une maladie." },
          { q: "Comment rendre le lavage des mains attractif pour un enfant de 2 ans ?", choices: ["Le forcer en expliquant les microbes","Le laisser faire seul","Utiliser des menaces","En faire un jeu, chanter une comptine de 30 secondes"], answer: 3, feedback: "Transformer le lavage des mains en rituel ludique est beaucoup plus efficace que la contrainte." },
          { q: "Renouveler régulièrement l'air d'une salle est utile pour :", choices: ["Éviter les mauvaises odeurs uniquement","Réduire la chaleur en été","Diminuer la concentration de virus et bactéries dans l'air","Ce n'est pas nécessaire si la pièce est propre"], answer: 2, feedback: "La ventilation régulière réduit significativement la concentration de micro-organismes dans l'air." },
          { q: "Enseigner les gestes d'hygiène aux enfants, c'est :", choices: ["Les traumatiser avec la peur des microbes","Une contrainte inutile avant 3 ans","Uniquement le rôle des parents","Leur donner des outils pour prendre soin d'eux-mêmes"], answer: 3, feedback: "Les gestes d'hygiène sont des apprentissages fondamentaux pour l'autonomie et la santé." }
        ]
      },
      {
        label: 'Quiz 3',
        titre: 'Évaluation — Ma posture professionnelle',
        questions: [
          { q: "Qu'est-ce que la 'juste distance éducative' dans l'alimentation ?", choices: ["Imposer les habitudes de la structure","Ne jamais intervenir sur les pratiques familiales","Distinguer sécurité de l'enfant et préférences culturelles","Appliquer strictement les recommandations sans contexte"], answer: 2, feedback: "La juste distance consiste à protéger l'enfant quand sa sécurité est en jeu, tout en respectant les pratiques familiales." },
          { q: "Une famille a des pratiques alimentaires culturellement différentes des vôtres. Quelle posture ?", choices: ["Expliquer que ces pratiques ne sont pas adaptées","Accepter sans rien dire même si cela vous dérange","En parler au responsable pour les interdire","Accueillir avec bienveillance, sauf si l'enfant est en danger"], answer: 3, feedback: "Les pratiques alimentaires font partie de l'identité familiale et de l'enfant." },
          { q: "Pourquoi connaître son propre rapport à la nourriture est-il important professionnellement ?", choices: ["Pour conseiller les familles sur leur alimentation","Pour mieux contrôler les repas","Pour éviter de projeter ses propres habitudes sur l'enfant","Ce n'est pas utile professionnellement"], answer: 2, feedback: "Un professionnel qui se connaît protège l'enfant de ses propres projections." },
          { q: "Quelle phrase illustre une communication bienveillante avec une famille ?", choices: ["'Votre enfant ne mange pas bien, il faut changer ses habitudes.'","'Dans notre structure on ne fait pas comme ça.'","'Il faut absolument diversifier maintenant.'","'J'ai remarqué que Lucas mange mieux quand il peut tenir sa cuillère seul.'"], answer: 3, feedback: "Partir d'une observation concrète plutôt que d'un jugement ouvre le dialogue." },
          { q: "Un parent demande de forcer son enfant à finir son assiette. Que faites-vous ?", choices: ["Vous obéissez — c'est le souhait du parent","Vous refusez sèchement","Vous ignorez la demande","Vous expliquez calmement pourquoi c'est contre-productif, tout en cherchant un compromis"], answer: 3, feedback: "Votre rôle est de protéger le bien-être de l'enfant avec pédagogie et bienveillance." },
          { q: "Ce qui différencie une pratique professionnelle d'une habitude personnelle, c'est :", choices: ["La pratique professionnelle est toujours plus efficace","L'habitude vient de la formation initiale","La pratique peut être expliquée et repose sur des références pédagogiques","Il n'y a pas de différence"], answer: 2, feedback: "Si vous ne pouvez pas expliquer pourquoi vous faites quelque chose, c'est peut-être une habitude." },
          { q: "L'alimentation en structure est régie par :", choices: ["Les préférences du professionnel","Les souhaits des familles uniquement","Un cadre légal et des recommandations officielles (OMS, PNNS)","Les habitudes locales et régionales"], answer: 2, feedback: "Le PNNS et les recommandations de l'OMS constituent le cadre de référence." },
          { q: "Un enfant refuse catégoriquement un aliment. La meilleure réaction est :", choices: ["Le forcer — il doit apprendre à tout manger","Supprimer définitivement cet aliment","Le gronder","Respecter le refus et continuer à proposer régulièrement sans pression"], answer: 3, feedback: "La néophobie alimentaire est normale entre 2 et 6 ans. La pression crée des aversions durables." },
          { q: "Comment aborder une pratique d'hygiène préoccupante avec une famille ?", choices: ["Envoyer un message écrit impersonnel","En parler devant d'autres parents","Attendre que le problème s'aggrave","En tête à tête, avec des observations concrètes et sans jugement"], answer: 3, feedback: "Les sujets sensibles demandent du tact. Un moment privé, des faits observés, un ton bienveillant." },
          { q: "La bientraitance dans le cadre de l'alimentation et de l'hygiène, c'est :", choices: ["Tout accepter sans poser de cadre","Appliquer des règles strictes sans explication","Faire exactement ce que les parents demandent","Répondre aux besoins de l'enfant avec bienveillance, dans le respect de sa famille"], answer: 3, feedback: "La bientraitance n'est pas l'absence de cadre — c'est la façon dont on répond aux besoins de l'enfant." }
        ]
      }
    ]
  }
};

// Charger depuis localStorage ou utiliser les données par défaut
let FORMATIONS_DATA = (() => {
  try {
    const saved = localStorage.getItem('orevy_formations_data');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(FORMATIONS_DEFAULT));
  } catch(e) {
    return JSON.parse(JSON.stringify(FORMATIONS_DEFAULT));
  }
})();

// Raccourcis utilisés par l'ancien code
let quizJeu   = FORMATIONS_DATA.jeu.quiz;
let quizAlim1 = FORMATIONS_DATA.alim.quiz[0].questions;
let quizAlim2 = FORMATIONS_DATA.alim.quiz[1].questions;
let quizAlim3 = FORMATIONS_DATA.alim.quiz[2].questions;

// ────────────────────────────────────────────────────────────
//  RENDU DES BLOCS
// ────────────────────────────────────────────────────────────

function renderBlocs(blocs) {
  return blocs.map(b => {
    switch(b.type) {
      case 'seq':       return seqBlock(b.emoji, b.couleur, b.titre, b.sous, b.desc, b.points, b.tip);
      case 'tip':       return tipBlock(b.emoji, b.titre, b.contenu);
      case 'principe':  return principeBlock(b.num, b.couleur, b.titre, b.desc);
      case 'erreur':    return erreurBlock(b.items);
      case 'reflexion': return reflexionBlock(b.question);
      default: return '';
    }
  }).join('');
}

function getJeuContent(num) {
  const d = FORMATIONS_DATA.jeu;
  // num 1-4 = séquences, num 5 = quiz
  if (num >= 1 && num <= 4) {
    const seq = d.sequences[num - 1];
    if (!seq) return '';
    return `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">${seq.duree}</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">${seq.titre}</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">${seq.accroche}</p>
      </div>
      ${renderBlocs(seq.blocs)}`;
  }
  if (num === 5) {
    return `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz · ${d.quiz.length} questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Évaluation — Le jeu libre</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 pour obtenir l'attestation</p>
      </div>
      <div id="quiz-jeu-container">${buildQuiz('jeu', d.quiz)}</div>`;
  }
  return '';
}

function getAlimContent(num) {
  const d = FORMATIONS_DATA.alim;
  // num 1-3 = modules, num 4-6 = quiz
  if (num >= 1 && num <= 3) {
    const mod = d.modules[num - 1];
    if (!mod) return '';
    return `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">${mod.duree}</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">${mod.titre}</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">${mod.accroche}</p>
      </div>
      ${renderBlocs(mod.blocs)}`;
  }
  if (num >= 4 && num <= 6) {
    const qi = num - 4;
    const qz = d.quiz[qi];
    if (!qz) return '';
    const qid = 'alim' + (qi + 1);
    return `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz ${qz.label} · ${qz.questions.length} questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">${qz.titre}</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 pour obtenir l'attestation${qi === 2 ? ' · Ce quiz valide l\'ensemble du parcours' : ' partielle'}</p>
      </div>
      <div id="quiz-${qid}-container">${buildQuiz(qid, qz.questions)}</div>`;
  }
  return '';
}

// ────────────────────────────────────────────────────────────
//  COMPOSANTS HTML
// ────────────────────────────────────────────────────────────

function seqBlock(emoji, color, title, subtitle, desc, points, tip) {
  return `
    <div style="background:var(--surface);border-radius:12px;padding:20px;margin-bottom:16px;border-left:4px solid ${color}">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
        <span style="font-size:1.4rem">${emoji}</span>
        <div>
          <div style="font-weight:800;font-size:0.93rem">${title}</div>
          <div style="font-size:0.75rem;color:${color};font-weight:700;letter-spacing:0.06em;text-transform:uppercase">${subtitle}</div>
        </div>
      </div>
      <p style="font-size:0.85rem;color:var(--ink2);margin-bottom:12px;line-height:1.6">${desc}</p>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px">
        ${points.map(p => `<span style="background:${color}18;color:${color};font-size:0.75rem;font-weight:700;padding:3px 10px;border-radius:20px">${p}</span>`).join('')}
      </div>
      <div style="background:${color}12;border-left:3px solid ${color};border-radius:0 8px 8px 0;padding:10px 14px;font-size:0.82rem;color:var(--ink);font-style:italic;line-height:1.5">💡 ${tip}</div>
    </div>`;
}

function tipBlock(emoji, title, content) {
  return `
    <div style="background:var(--amber-lt);border-radius:12px;padding:18px 20px;margin-bottom:16px;border-left:4px solid var(--amber)">
      <div style="font-weight:800;font-size:0.88rem;margin-bottom:8px">${emoji} ${title}</div>
      <p style="font-size:0.84rem;color:var(--ink2);margin:0;line-height:1.65">${content}</p>
    </div>`;
}

function principeBlock(num, color, title, desc) {
  return `
    <div style="display:flex;gap:14px;align-items:flex-start;padding:14px 0;border-bottom:1px solid var(--border)">
      <div style="width:32px;height:32px;border-radius:50%;background:${color};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:0.9rem;flex-shrink:0">${num}</div>
      <div>
        <div style="font-weight:800;font-size:0.88rem;margin-bottom:4px">${title}</div>
        <p style="font-size:0.83rem;color:var(--ink2);margin:0;line-height:1.6">${desc}</p>
      </div>
    </div>`;
}

function erreurBlock(items) {
  return `
    <div style="background:var(--red-lt);border-radius:12px;padding:18px 20px;margin-bottom:16px;border-left:4px solid var(--red)">
      <div style="font-weight:800;font-size:0.88rem;margin-bottom:10px;color:var(--red)">🛑 Les erreurs à éviter</div>
      ${items.map(i => `<div style="display:flex;gap:8px;font-size:0.83rem;color:var(--ink2);margin-bottom:6px"><span style="color:var(--red);font-weight:700;flex-shrink:0">✗</span>${i}</div>`).join('')}
    </div>`;
}

function reflexionBlock(question) {
  return `
    <div style="background:var(--purple-lt);border-radius:12px;padding:18px 20px;border-left:4px solid var(--purple)">
      <div style="font-weight:800;font-size:0.88rem;margin-bottom:8px;color:var(--purple)">❓ Activité de réflexion</div>
      <p style="font-size:0.84rem;color:var(--ink2);margin:0 0 10px;line-height:1.65;font-style:italic">${question}</p>
      <textarea placeholder="Notez vos réflexions ici…" style="width:100%;border:1px solid var(--purple);border-radius:8px;padding:10px;font-family:'Instrument Sans',sans-serif;font-size:0.83rem;color:var(--ink);background:white;resize:vertical;min-height:70px;outline:none"></textarea>
    </div>`;
}

// ────────────────────────────────────────────────────────────
//  MOTEUR QUIZ
// ────────────────────────────────────────────────────────────

function buildQuiz(id, questions) {
  return `
    <div id="quiz-${id}-questions">
      ${questions.map((q, i) => `
        <div style="background:var(--surface);border-radius:12px;padding:20px;margin-bottom:14px" id="q-${id}-${i}">
          <div style="font-weight:700;font-size:0.9rem;margin-bottom:14px;line-height:1.5">${i+1}. ${q.q}</div>
          <div style="display:flex;flex-direction:column;gap:8px">
            ${q.choices.map((c, j) => `
              <button onclick="answerQuiz('${id}',${i},${j})" id="btn-${id}-${i}-${j}"
                style="background:var(--surface2);border:1.5px solid var(--border);border-radius:8px;padding:10px 14px;text-align:left;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.83rem;color:var(--ink);transition:all 0.2s"
                onmouseover="if(!this.dataset.answered) this.style.borderColor='var(--accent)'"
                onmouseout="if(!this.dataset.answered) this.style.borderColor='var(--border)'">
                ${c}
              </button>`).join('')}
          </div>
          <div id="feedback-${id}-${i}" style="display:none;margin-top:12px;font-size:0.82rem;padding:10px 14px;border-radius:8px;line-height:1.5"></div>
        </div>`).join('')}
      <button onclick="submitQuiz('${id}')" id="btn-submit-${id}"
        style="width:100%;background:linear-gradient(135deg,#7B9E87,#5A7A65);color:#fff;border:none;padding:14px;border-radius:10px;font-weight:800;font-size:0.9rem;cursor:pointer;font-family:'Instrument Sans',sans-serif;margin-top:8px">
        Valider mes réponses →
      </button>
    </div>
    <div id="quiz-${id}-result" style="display:none;text-align:center;padding:32px 20px"></div>`;
}

const quizAnswers = {};

function answerQuiz(id, qIdx, aIdx) {
  if (!quizAnswers[id]) quizAnswers[id] = {};
  quizAnswers[id][qIdx] = aIdx;
  document.querySelectorAll(`[id^="btn-${id}-${qIdx}-"]`).forEach((btn, j) => {
    btn.style.borderColor = j === aIdx ? 'var(--accent)' : 'var(--border)';
    btn.style.background  = j === aIdx ? 'var(--accent-lt)' : 'var(--surface2)';
    btn.style.fontWeight  = j === aIdx ? '700' : '400';
  });
}

function submitQuiz(id) {
  const qMap = { jeu: FORMATIONS_DATA.jeu.quiz, alim1: FORMATIONS_DATA.alim.quiz[0].questions, alim2: FORMATIONS_DATA.alim.quiz[1].questions, alim3: FORMATIONS_DATA.alim.quiz[2].questions };
  const questions = qMap[id] || [];
  const answers = quizAnswers[id] || {};
  let score = 0;
  const activeGradient = id === 'jeu' ? 'linear-gradient(135deg,#7B9E87,#5A7A65)' : 'linear-gradient(135deg,#D4922A,#B97A20)';

  questions.forEach((q, i) => {
    const userAnswer = answers[i];
    const correct    = q.answer;
    const isCorrect  = userAnswer === correct;
    if (isCorrect) score++;
    document.querySelectorAll(`[id^="btn-${id}-${i}-"]`).forEach((btn, j) => {
      btn.dataset.answered = 'true'; btn.style.cursor = 'default'; btn.onmouseover = null;
      if (j === correct) { btn.style.background='#F0FDF4'; btn.style.borderColor='#16A34A'; btn.style.color='#15803D'; btn.style.fontWeight='700'; }
      else if (j === userAnswer && !isCorrect) { btn.style.background='#FEF2F2'; btn.style.borderColor='#DC2626'; btn.style.color='#DC2626'; }
    });
    const fb = document.getElementById(`feedback-${id}-${i}`);
    if (fb) { fb.style.display='block'; fb.style.background=isCorrect?'#F0FDF4':'#FEF2F2'; fb.style.color=isCorrect?'#15803D':'#991B1B'; fb.style.borderLeft=`3px solid ${isCorrect?'#16A34A':'#DC2626'}`; fb.innerHTML=(isCorrect?'✅ ':'❌ ')+q.feedback; }
  });

  document.getElementById(`btn-submit-${id}`).style.display = 'none';
  const pass = score >= 7;
  const result = document.getElementById(`quiz-${id}-result`);
  result.style.display = 'block';
  result.innerHTML = `
    <div style="font-size:3rem;margin-bottom:16px">${pass?'🏅':'📖'}</div>
    <div style="font-size:2rem;font-weight:800;font-family:'Syne',sans-serif;color:${pass?'#7B9E87':'#D4922A'};margin-bottom:8px">${score} / ${questions.length}</div>
    <div style="font-size:1rem;font-weight:700;margin-bottom:12px;color:${pass?'#7B9E87':'#D4922A'}">${pass?'✅ Félicitations !':'📚 Continuez !'}</div>
    <p style="font-size:0.88rem;color:var(--ink2);max-width:400px;margin:0 auto 20px;line-height:1.7">${pass?'Excellent résultat ! Votre attestation est disponible.':'Relisez les feedbacks des questions manquées pour consolider vos acquis avant de retenter.'}</p>
    ${pass
      ? `<button onclick="genererAttestation('${id}', ${score})" style="background:${activeGradient};color:#fff;border:none;padding:12px 28px;border-radius:10px;font-weight:700;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.88rem">🏅 Télécharger mon attestation</button>`
      : `<button onclick="resetQuiz('${id}')" style="background:var(--accent);color:#fff;border:none;padding:12px 28px;border-radius:10px;font-weight:700;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.88rem">🔄 Réessayer</button>`}`;
  result.scrollIntoView({ behavior:'smooth', block:'center' });
}

function resetQuiz(id) {
  document.getElementById(`quiz-${id}-result`).style.display = 'none';
  document.querySelectorAll(`[id^="btn-${id}-"]`).forEach(b => {
    if (b.id.startsWith(`btn-${id}-`) && b.id !== `btn-submit-${id}`) {
      b.dataset.answered=''; b.style.background='var(--surface2)'; b.style.borderColor='var(--border)'; b.style.color='var(--ink)'; b.style.fontWeight='400';
    }
  });
  quizAnswers[id] = {};
  document.getElementById(`btn-submit-${id}`).style.display = 'block';
  document.querySelectorAll(`[id^="feedback-${id}"]`).forEach(f => f.style.display = 'none');
}

function genererAttestation(id, score) {
  const date = new Date().toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
  const titres = { jeu:'"Il ne fait que jouer…" — Le jeu libre', alim1:'Nourrir et protéger — Module 1 : L\'alimentation', alim2:'Nourrir et protéger — Module 2 : L\'hygiène', alim3:'Nourrir et protéger — Module 3 : Ma posture professionnelle' };
  const titre = titres[id] || 'Formation petite enfance';
  const scoreText = (score !== undefined) ? score+'/10' : '7/10 ou plus';
  const w = window.open('','_blank');
  if (!w) { showNotif('⚠️ Autorisez les popups pour télécharger l\'attestation'); return; }
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Attestation</title><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@400;700&display=swap" rel="stylesheet"><style>body{font-family:'Lato',sans-serif;background:#f8f6f2;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px}.cert{background:white;max-width:680px;width:100%;padding:60px;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.12);text-align:center;position:relative;border:2px solid #7B9E87}.cert::before{content:'';position:absolute;inset:8px;border:1px solid #7B9E8740;border-radius:10px;pointer-events:none}h1{font-family:'Playfair Display',serif;font-size:2rem;color:#2A2D26;margin:0 0 8px}.sub{color:#7B9E87;font-size:0.8rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:32px}.name{font-family:'Playfair Display',serif;font-size:1.6rem;color:#5A7A65;font-style:italic;margin:20px 0}.formation{font-size:1.1rem;font-weight:700;color:#2A2D26;margin:16px 0 8px}.date{color:#7A7065;font-size:0.88rem;margin-bottom:32px}.badge{font-size:3rem;margin-bottom:20px}.sig{border-top:1px solid #e0e0e0;padding-top:20px;margin-top:32px;font-size:0.8rem;color:#A8A29E}@media print{body{background:white}.cert{box-shadow:none}}</style></head><body><div class="cert"><div class="badge">🏅</div><div class="sub">Attestation de formation</div><h1>Certificat de réussite</h1><p style="color:#7A7065;font-size:0.9rem;margin:0 0 4px">Cette attestation certifie que</p><div class="name">le titulaire de cette attestation</div><p style="color:#7A7065;font-size:0.9rem;margin:0 0 4px">a suivi et validé avec succès la formation</p><div class="formation">${titre}</div><div class="date">le ${date}</div><p style="font-size:0.83rem;color:#7A7065;line-height:1.7;max-width:480px;margin:0 auto 24px">Score obtenu : ${scoreText} au quiz d'évaluation final.<br>Formation dispensée dans le cadre du développement des compétences professionnelles en petite enfance.</p><div class="sig">David Bucari · Éducateur de jeunes enfants · Formateur petite enfance<br>Formation en ligne — Accès Orevy</div><div style="margin-top:24px"><button onclick="window.print()" style="background:#7B9E87;color:white;border:none;padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:0.88rem">🖨 Imprimer / Sauvegarder en PDF</button></div></div></body></html>`);
}

// ────────────────────────────────────────────────────────────
//  MODE ADMINISTRATEUR
// ────────────────────────────────────────────────────────────

const ADMIN_PASSWORD = 'Orevy2025';
let adminMode = false;

// Injecter le bouton admin et la modale dans la page formations
document.addEventListener('DOMContentLoaded', () => {
  injectAdminUI();
});

function injectAdminUI() {
  // Bouton discret dans le titre de la page formations
  const titre = document.querySelector('#page-formations .page-title, #pageTitle');

  // Modale admin
  const modal = document.createElement('div');
  modal.id = 'modal-admin';
  modal.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9000;overflow-y:auto;padding:20px';
  modal.innerHTML = `
    <div style="background:#1C1917;min-height:100vh;border-radius:16px;max-width:900px;margin:0 auto;padding:0;font-family:'Instrument Sans',sans-serif">

      <!-- Header admin -->
      <div style="background:#292524;border-radius:16px 16px 0 0;padding:20px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:10;border-bottom:1px solid #44403C">
        <div>
          <div style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:#fff">⚙️ Mode Administrateur — Formations</div>
          <div style="font-size:0.78rem;color:#A8A29E;margin-top:2px">Modifications sauvegardées dans le navigateur · Exportez pour mettre à jour GitHub</div>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <button onclick="adminExport()" style="background:#7B9E87;color:#fff;border:none;padding:9px 18px;border-radius:8px;font-weight:700;font-size:0.82rem;cursor:pointer;font-family:inherit">⬇ Exporter JS</button>
          <button onclick="adminReset()" style="background:#44403C;color:#A8A29E;border:none;padding:9px 18px;border-radius:8px;font-weight:600;font-size:0.82rem;cursor:pointer;font-family:inherit">🔄 Réinitialiser</button>
          <button onclick="closeAdmin()" style="background:#DC2626;color:#fff;border:none;padding:9px 18px;border-radius:8px;font-weight:700;font-size:0.82rem;cursor:pointer;font-family:inherit">✕ Fermer</button>
        </div>
      </div>

      <!-- Navigation onglets -->
      <div style="display:flex;gap:0;border-bottom:1px solid #44403C;padding:0 28px">
        <button class="admin-tab active" data-tab="jeu" onclick="adminShowTab('jeu',this)" style="background:none;border:none;border-bottom:2px solid #7B9E87;color:#7B9E87;padding:14px 20px;font-family:inherit;font-size:0.85rem;font-weight:700;cursor:pointer">🧸 Jeu libre</button>
        <button class="admin-tab" data-tab="alim" onclick="adminShowTab('alim',this)" style="background:none;border:none;border-bottom:2px solid transparent;color:#78716C;padding:14px 20px;font-family:inherit;font-size:0.85rem;font-weight:600;cursor:pointer">🥦 Alimentation</button>
      </div>

      <!-- Contenu -->
      <div style="padding:28px" id="admin-content"></div>
    </div>`;
  document.body.appendChild(modal);

  // Bouton flottant discret (visible uniquement en mode admin)
  const btn = document.createElement('button');
  btn.id = 'btn-admin-open';
  btn.innerHTML = '⚙️ Admin';
  btn.style.cssText = 'display:none;position:fixed;bottom:80px;right:24px;background:#1C1917;color:#A8A29E;border:1px solid #44403C;padding:8px 14px;border-radius:8px;font-size:0.75rem;font-weight:600;cursor:pointer;z-index:8000;font-family:inherit';
  btn.onclick = openAdmin;
  document.body.appendChild(btn);
}

function openAdminLogin() {
  const pwd = prompt('🔐 Mot de passe administrateur :');
  if (!pwd) return;
  if (pwd !== ADMIN_PASSWORD) { alert('Mot de passe incorrect.'); return; }
  adminMode = true;
  document.getElementById('btn-admin-open').style.display = 'block';
  openAdmin();
}

function openAdmin() {
  const modal = document.getElementById('modal-admin');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
  adminShowTab('jeu', document.querySelector('.admin-tab[data-tab="jeu"]'));
}

function closeAdmin() {
  document.getElementById('modal-admin').style.display = 'none';
  document.body.style.overflow = '';
}

function adminShowTab(tab, btn) {
  document.querySelectorAll('.admin-tab').forEach(b => {
    b.style.borderBottomColor = 'transparent';
    b.style.color = '#78716C';
  });
  if (btn) { btn.style.borderBottomColor = tab === 'jeu' ? '#7B9E87' : '#D4922A'; btn.style.color = tab === 'jeu' ? '#7B9E87' : '#D4922A'; }
  document.getElementById('admin-content').innerHTML = tab === 'jeu' ? renderAdminJeu() : renderAdminAlim();
}

// ── RENDU ADMIN JEU ─────────────────────────────────────────

function renderAdminJeu() {
  const d = FORMATIONS_DATA.jeu;
  return `
    <div style="display:flex;flex-direction:column;gap:24px">

      <!-- Séquences -->
      <div>
        <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#78716C;margin-bottom:14px">Séquences (${d.sequences.length})</div>
        ${d.sequences.map((seq, si) => `
          <div style="background:#292524;border-radius:12px;padding:20px;margin-bottom:12px;border:1px solid #44403C">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
              <div style="font-weight:700;color:#fff;font-size:0.9rem">📖 Séquence ${si+1}</div>
              <button onclick="adminDeleteSeq(${si})" style="background:#7F1D1D;color:#FCA5A5;border:none;padding:5px 10px;border-radius:6px;font-size:0.72rem;cursor:pointer;font-family:inherit">🗑 Supprimer</button>
            </div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">DURÉE / LABEL</label>
                <input value="${seq.duree}" onchange="adminUpdateSeq(${si},'duree',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">TITRE</label>
                <input value="${escHtml(seq.titre)}" onchange="adminUpdateSeq(${si},'titre',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">ACCROCHE</label>
                <input value="${escHtml(seq.accroche)}" onchange="adminUpdateSeq(${si},'accroche',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                  <label style="font-size:0.72rem;color:#A8A29E">BLOCS (${seq.blocs.length})</label>
                  <div style="display:flex;gap:6px">
                    ${['seq','tip','erreur','reflexion'].map(t => `<button onclick="adminAddBloc(${si},'${t}')" style="background:#44403C;color:#D6D3D1;border:none;padding:4px 8px;border-radius:5px;font-size:0.68rem;cursor:pointer;font-family:inherit">+ ${t}</button>`).join('')}
                  </div>
                </div>
                ${seq.blocs.map((b, bi) => renderAdminBloc(b, bi, si, null)).join('')}
              </div>
            </div>
          </div>`).join('')}
        <button onclick="adminAddSeq()" style="${adminBtnStyle('#7B9E87')}">+ Ajouter une séquence</button>
      </div>

      <!-- Quiz -->
      <div>
        <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#78716C;margin-bottom:14px">Quiz (${d.quiz.length} questions)</div>
        ${d.quiz.map((q, qi) => renderAdminQuestion(q, qi, 'jeu', null)).join('')}
        <button onclick="adminAddQuestion('jeu',null)" style="${adminBtnStyle('#7B9E87')}">+ Ajouter une question</button>
      </div>
    </div>`;
}

// ── RENDU ADMIN ALIM ────────────────────────────────────────

function renderAdminAlim() {
  const d = FORMATIONS_DATA.alim;
  return `
    <div style="display:flex;flex-direction:column;gap:24px">

      <!-- Modules -->
      <div>
        <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#78716C;margin-bottom:14px">Modules (${d.modules.length})</div>
        ${d.modules.map((mod, mi) => `
          <div style="background:#292524;border-radius:12px;padding:20px;margin-bottom:12px;border:1px solid #44403C">
            <div style="font-weight:700;color:#fff;font-size:0.9rem;margin-bottom:16px">🥦 Module ${mi+1}</div>
            <div style="display:flex;flex-direction:column;gap:10px">
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">DURÉE / LABEL</label>
                <input value="${mod.duree}" onchange="adminUpdateMod(${mi},'duree',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">TITRE</label>
                <input value="${escHtml(mod.titre)}" onchange="adminUpdateMod(${mi},'titre',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">ACCROCHE</label>
                <input value="${escHtml(mod.accroche)}" onchange="adminUpdateMod(${mi},'accroche',this.value)" style="${adminInputStyle()}">
              </div>
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
                  <label style="font-size:0.72rem;color:#A8A29E">BLOCS (${mod.blocs.length})</label>
                  <div style="display:flex;gap:6px">
                    ${['seq','tip','erreur','reflexion'].map(t => `<button onclick="adminAddBloc(${mi},'${t}')" style="background:#44403C;color:#D6D3D1;border:none;padding:4px 8px;border-radius:5px;font-size:0.68rem;cursor:pointer;font-family:inherit">+ ${t}</button>`).join('')}
                  </div>
                </div>
                ${mod.blocs.map((b, bi) => renderAdminBloc(b, bi, null, mi)).join('')}
              </div>
            </div>
          </div>`).join('')}
      </div>

      <!-- Quiz -->
      ${d.quiz.map((qz, qzi) => `
        <div>
          <div style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:#78716C;margin-bottom:14px">${qz.label} — ${qz.titre} (${qz.questions.length} questions)</div>
          <div style="background:#292524;border-radius:12px;padding:16px;border:1px solid #44403C;margin-bottom:8px">
            <label style="font-size:0.72rem;color:#A8A29E;display:block;margin-bottom:4px">TITRE DU QUIZ</label>
            <input value="${escHtml(qz.titre)}" onchange="adminUpdateQuizTitre(${qzi},this.value)" style="${adminInputStyle()}">
          </div>
          ${qz.questions.map((q, qi) => renderAdminQuestion(q, qi, 'alim', qzi)).join('')}
          <button onclick="adminAddQuestion('alim',${qzi})" style="${adminBtnStyle('#D4922A')}">+ Ajouter une question</button>
        </div>`).join('')}
    </div>`;
}

// ── RENDU D'UN BLOC ADMIN ───────────────────────────────────

function renderAdminBloc(b, bi, si, mi) {
  const delFn = si !== null ? `adminDeleteBloc(${si},${bi},'seq')` : `adminDeleteBloc(${mi},${bi},'mod')`;
  const typeColors = { seq:'#3B82F6', tip:'#D97706', principe:'#7C3AED', erreur:'#DC2626', reflexion:'#7C3AED' };
  const col = typeColors[b.type] || '#78716C';
  return `
    <div style="background:#1C1917;border-radius:8px;padding:14px;margin-bottom:8px;border-left:3px solid ${col}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px">
        <span style="font-size:0.7rem;font-weight:700;color:${col};text-transform:uppercase">${b.type}</span>
        <button onclick="${delFn}" style="background:#7F1D1D;color:#FCA5A5;border:none;padding:3px 8px;border-radius:5px;font-size:0.68rem;cursor:pointer;font-family:inherit">✕</button>
      </div>
      ${b.type === 'seq' ? `
        <input placeholder="Emoji" value="${b.emoji||''}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'emoji',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle('60px')}">
        <input placeholder="Couleur (#hex)" value="${b.couleur||''}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'couleur',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle('120px')}">
        <input placeholder="Titre" value="${escHtml(b.titre||'')}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'titre',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle()}">
        <input placeholder="Sous-titre" value="${escHtml(b.sous||'')}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'sous',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle()}">
        <textarea placeholder="Description" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'desc',this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle()}">${escHtml(b.desc||'')}</textarea>
        <textarea placeholder="Points (un par ligne)" onchange="adminUpdateBlocPoints(${si!==null?si:mi},${bi},this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle('60px')}">${(b.points||[]).join('\n')}</textarea>
        <input placeholder="Conseil (💡)" value="${escHtml(b.tip||'')}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'tip',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle()}">
      ` : b.type === 'tip' ? `
        <input placeholder="Emoji" value="${b.emoji||''}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'emoji',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle('60px')}">
        <input placeholder="Titre" value="${escHtml(b.titre||'')}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'titre',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle()}">
        <textarea placeholder="Contenu (HTML autorisé)" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'contenu',this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle()}">${escHtml(b.contenu||'')}</textarea>
      ` : b.type === 'erreur' ? `
        <textarea placeholder="Erreurs (une par ligne)" onchange="adminUpdateBlocItems(${si!==null?si:mi},${bi},this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle('80px')}">${(b.items||[]).join('\n')}</textarea>
      ` : b.type === 'reflexion' ? `
        <textarea placeholder="Question de réflexion" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'question',this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle('60px')}">${escHtml(b.question||'')}</textarea>
      ` : b.type === 'principe' ? `
        <input placeholder="Numéro" value="${b.num||''}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'num',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle('60px')}">
        <input placeholder="Couleur (#hex)" value="${b.couleur||''}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'couleur',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle('120px')}">
        <input placeholder="Titre" value="${escHtml(b.titre||'')}" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'titre',this.value,'${si!==null?'seq':'mod'}')" style="${adminInputStyle()}">
        <textarea placeholder="Description" onchange="adminUpdateBloc(${si!==null?si:mi},${bi},'desc',this.value,'${si!==null?'seq':'mod'}')" style="${adminTextareaStyle()}">${escHtml(b.desc||'')}</textarea>
      ` : ''}
    </div>`;
}

// ── RENDU D'UNE QUESTION ADMIN ──────────────────────────────

function renderAdminQuestion(q, qi, formation, qzi) {
  const delFn = formation === 'jeu' ? `adminDeleteQuestion('jeu',null,${qi})` : `adminDeleteQuestion('alim',${qzi},${qi})`;
  return `
    <div style="background:#292524;border-radius:10px;padding:16px;margin-bottom:10px;border:1px solid #44403C">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <span style="font-size:0.72rem;font-weight:700;color:#A8A29E">QUESTION ${qi+1}</span>
        <button onclick="${delFn}" style="background:#7F1D1D;color:#FCA5A5;border:none;padding:4px 10px;border-radius:6px;font-size:0.72rem;cursor:pointer;font-family:inherit">🗑 Supprimer</button>
      </div>
      <textarea placeholder="Question" onchange="adminUpdateQuestion('${formation}',${qzi},${qi},'q',this.value)" style="${adminTextareaStyle('50px')}">${escHtml(q.q)}</textarea>
      ${q.choices.map((c, ci) => `
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px">
          <input type="radio" name="correct-${formation}-${qzi}-${qi}" ${q.answer===ci?'checked':''} onchange="adminUpdateQuestion('${formation}',${qzi},${qi},'answer',${ci})" style="flex-shrink:0;accent-color:#7B9E87">
          <input value="${escHtml(c)}" placeholder="Réponse ${ci+1}" onchange="adminUpdateChoice('${formation}',${qzi},${qi},${ci},this.value)" style="${adminInputStyle()}">
        </div>`).join('')}
      <div style="margin-top:6px">
        <label style="font-size:0.68rem;color:#78716C;display:block;margin-bottom:3px">FEEDBACK (explication après correction)</label>
        <textarea placeholder="Feedback" onchange="adminUpdateQuestion('${formation}',${qzi},${qi},'feedback',this.value)" style="${adminTextareaStyle('44px')}">${escHtml(q.feedback)}</textarea>
      </div>
      <div style="font-size:0.68rem;color:#7B9E87;margin-top:6px">✅ Bonne réponse : bouton radio vert à gauche de la réponse correcte</div>
    </div>`;
}

// ── HELPERS STYLES ──────────────────────────────────────────

function adminInputStyle(w) {
  return `width:${w||'100%'};background:#1C1917;border:1px solid #44403C;border-radius:6px;padding:8px 10px;color:#E7E5E0;font-family:'Instrument Sans',sans-serif;font-size:0.82rem;margin-bottom:6px;outline:none;box-sizing:border-box`;
}
function adminTextareaStyle(h) {
  return `width:100%;background:#1C1917;border:1px solid #44403C;border-radius:6px;padding:8px 10px;color:#E7E5E0;font-family:'Instrument Sans',sans-serif;font-size:0.82rem;margin-bottom:6px;outline:none;resize:vertical;min-height:${h||'70px'};box-sizing:border-box`;
}
function adminBtnStyle(col) {
  return `background:${col}22;color:${col};border:1px dashed ${col};padding:10px 20px;border-radius:8px;font-weight:700;font-size:0.82rem;cursor:pointer;font-family:inherit;width:100%;margin-top:4px`;
}
function escHtml(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── MUTATIONS DONNÉES ────────────────────────────────────────

function adminSave() {
  quizJeu   = FORMATIONS_DATA.jeu.quiz;
  quizAlim1 = FORMATIONS_DATA.alim.quiz[0].questions;
  quizAlim2 = FORMATIONS_DATA.alim.quiz[1].questions;
  quizAlim3 = FORMATIONS_DATA.alim.quiz[2].questions;
  localStorage.setItem('orevy_formations_data', JSON.stringify(FORMATIONS_DATA));
}

function getBlocs(si, mi) {
  if (si !== null) return FORMATIONS_DATA.jeu.sequences[si].blocs;
  return FORMATIONS_DATA.alim.modules[mi].blocs;
}

function adminUpdateSeq(si, field, val)       { FORMATIONS_DATA.jeu.sequences[si][field] = val; adminSave(); }
function adminUpdateMod(mi, field, val)        { FORMATIONS_DATA.alim.modules[mi][field] = val; adminSave(); }
function adminUpdateBloc(idx, bi, field, val, type) { getBlocs(type==='seq'?idx:null, type==='mod'?idx:null)[bi][field] = val; adminSave(); }
function adminUpdateBlocPoints(idx, bi, val, type)  { getBlocs(type==='seq'?idx:null, type==='mod'?idx:null)[bi].points = val.split('\n').filter(Boolean); adminSave(); }
function adminUpdateBlocItems(idx, bi, val, type)   { getBlocs(type==='seq'?idx:null, type==='mod'?idx:null)[bi].items  = val.split('\n').filter(Boolean); adminSave(); }

function adminDeleteBloc(idx, bi, type) {
  const blocs = getBlocs(type==='seq'?idx:null, type==='mod'?idx:null);
  blocs.splice(bi, 1);
  adminSave();
  adminShowTab(type==='seq'?'jeu':'alim', document.querySelector(`.admin-tab[data-tab="${type==='seq'?'jeu':'alim'}"]`));
}

function adminAddBloc(idx, type) {
  const newBlocs = { seq:{type:'seq',emoji:'🔵',couleur:'#4A90D9',titre:'Nouveau bloc',sous:'',desc:'',points:[],tip:''}, tip:{type:'tip',emoji:'💡',titre:'Nouveau conseil',contenu:''}, erreur:{type:'erreur',items:['Nouvelle erreur']}, reflexion:{type:'reflexion',question:'Votre question de réflexion…'}, principe:{type:'principe',num:'1',couleur:'#4A90D9',titre:'Nouveau principe',desc:''} };
  // Déterminer si c'est jeu ou alim selon l'onglet actif
  const activeTab = document.querySelector('.admin-tab.active')?.dataset.tab;
  if (activeTab === 'jeu') FORMATIONS_DATA.jeu.sequences[idx].blocs.push({...newBlocs[type]});
  else FORMATIONS_DATA.alim.modules[idx].blocs.push({...newBlocs[type]});
  adminSave();
  adminShowTab(activeTab, document.querySelector(`.admin-tab[data-tab="${activeTab}"]`));
}

function adminDeleteSeq(si) {
  if (!confirm('Supprimer cette séquence ?')) return;
  FORMATIONS_DATA.jeu.sequences.splice(si, 1);
  adminSave();
  adminShowTab('jeu', document.querySelector('.admin-tab[data-tab="jeu"]'));
}

function adminAddSeq() {
  FORMATIONS_DATA.jeu.sequences.push({ label:'Séq. '+(FORMATIONS_DATA.jeu.sequences.length+1), duree:'Séquence · 20 min', titre:'Nouvelle séquence', accroche:'', blocs:[] });
  adminSave();
  adminShowTab('jeu', document.querySelector('.admin-tab[data-tab="jeu"]'));
}

function adminUpdateQuestion(formation, qzi, qi, field, val) {
  if (formation === 'jeu') FORMATIONS_DATA.jeu.quiz[qi][field] = field==='answer'?Number(val):val;
  else FORMATIONS_DATA.alim.quiz[qzi].questions[qi][field] = field==='answer'?Number(val):val;
  adminSave();
}

function adminUpdateChoice(formation, qzi, qi, ci, val) {
  if (formation === 'jeu') FORMATIONS_DATA.jeu.quiz[qi].choices[ci] = val;
  else FORMATIONS_DATA.alim.quiz[qzi].questions[qi].choices[ci] = val;
  adminSave();
}

function adminUpdateQuizTitre(qzi, val) {
  FORMATIONS_DATA.alim.quiz[qzi].titre = val;
  adminSave();
}

function adminDeleteQuestion(formation, qzi, qi) {
  if (!confirm('Supprimer cette question ?')) return;
  if (formation === 'jeu') FORMATIONS_DATA.jeu.quiz.splice(qi, 1);
  else FORMATIONS_DATA.alim.quiz[qzi].questions.splice(qi, 1);
  adminSave();
  adminShowTab(formation === 'jeu' ? 'jeu' : 'alim', document.querySelector(`.admin-tab[data-tab="${formation==='jeu'?'jeu':'alim'}"]`));
}

function adminAddQuestion(formation, qzi) {
  const newQ = { q:'Nouvelle question ?', choices:['Réponse A','Réponse B','Réponse C','Réponse D'], answer:0, feedback:'Explication de la bonne réponse.' };
  if (formation === 'jeu') FORMATIONS_DATA.jeu.quiz.push({...newQ});
  else FORMATIONS_DATA.alim.quiz[qzi].questions.push({...newQ});
  adminSave();
  adminShowTab(formation==='jeu'?'jeu':'alim', document.querySelector(`.admin-tab[data-tab="${formation==='jeu'?'jeu':'alim'}"]`));
}

function adminReset() {
  if (!confirm('⚠️ Réinitialiser toutes les formations aux données d\'origine ?\nToutes vos modifications seront perdues.')) return;
  FORMATIONS_DATA = JSON.parse(JSON.stringify(FORMATIONS_DEFAULT));
  adminSave();
  adminShowTab('jeu', document.querySelector('.admin-tab[data-tab="jeu"]'));
}

// ── EXPORT JS ────────────────────────────────────────────────

function adminExport() {
  const json = JSON.stringify(FORMATIONS_DATA, null, 2);
  const content = `// formations-data.js — exporté le ${new Date().toLocaleDateString('fr-FR')}\n// Remplacez le contenu de FORMATIONS_DEFAULT par ce JSON puis rechargez\n\n` +
    document.currentScript?.src ? '' : '' ;

  // On génère un fichier JS complet prêt à uploader
  const blob = new Blob([
    `// ============================================================\n` +
    `//  FORMATIONS-DATA.JS — Orevy (exporté le ${new Date().toLocaleDateString('fr-FR')})\n` +
    `// ============================================================\n\n` +
    `// Remplacez le fichier formations-data.js sur GitHub par ce fichier\n\n` +
    `const FORMATIONS_SAVED = ${json};\n\n` +
    `// Injection dans FORMATIONS_DEFAULT au chargement\n` +
    `if (typeof FORMATIONS_DEFAULT !== 'undefined') {\n` +
    `  Object.assign(FORMATIONS_DEFAULT, FORMATIONS_SAVED);\n` +
    `}\n`
  ], { type: 'text/javascript' });

  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `formations-export-${new Date().toISOString().slice(0,10)}.js`;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ── ACCÈS ADMIN DEPUIS LA PAGE FORMATIONS ───────────────────
// Ajoute un bouton "Admin" discret dans l'en-tête de la page formations

function addAdminButtonToFormations() {
  const header = document.querySelector('#page-formations > div > #f-catalogue > div:first-child');
  if (!header || document.getElementById('btn-open-admin-login')) return;
  const btn = document.createElement('button');
  btn.id = 'btn-open-admin-login';
  btn.innerHTML = '🔐';
  btn.title = 'Mode administrateur';
  btn.style.cssText = 'background:none;border:none;cursor:pointer;font-size:1.1rem;opacity:0.3;padding:4px;transition:opacity 0.2s;position:absolute;right:0;top:0';
  btn.onmouseover = () => btn.style.opacity = '1';
  btn.onmouseout  = () => btn.style.opacity = adminMode ? '1' : '0.3';
  btn.onclick = () => adminMode ? openAdmin() : openAdminLogin();
  header.style.position = 'relative';
  header.appendChild(btn);
}

// Appel après chargement complet
window.addEventListener('load', addAdminButtonToFormations);
