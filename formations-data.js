// ============================================================
//  FORMATIONS-DATA.JS — Orevy
//  Contenu pédagogique des formations en ligne
//
//  COMMENT MODIFIER CE FICHIER :
//  ─────────────────────────────
//  • Chaque formation est une fonction qui retourne du HTML.
//  • Les helpers disponibles sont : seqBlock(), tipBlock(),
//    principeBlock(), erreurBlock(), reflexionBlock()
//    (définis plus bas dans ce fichier).
//  • Les quiz sont des tableaux d'objets avec :
//      q       → texte de la question
//      choices → tableau de 4 réponses
//      answer  → index (0-3) de la bonne réponse
//      feedback → explication affichée après correction
//  • Après modification, re-déployez le fichier sur GitHub.
// ============================================================


// ────────────────────────────────────────────────────────────
//  FORMATION 1 — LE JEU LIBRE
//  "Il ne fait que jouer…"
//  4 séquences + 1 quiz
// ────────────────────────────────────────────────────────────

function getJeuContent(num) {
  const seqs = {

    // ── SÉQUENCE 1 ──────────────────────────────────────────
    1: `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Séquence 1 · 25 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Les 4 types de jeu et ce qu'ils développent vraiment</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Derrière chaque jeu, un apprentissage que vous ne voyez peut-être pas encore."</p>
      </div>

      ${seqBlock('🔵','#4A90D9','Jeu d\'exploration','0 – 18 mois',
        'L\'enfant touche, porte à la bouche, secoue, lâche, recommence. Il explore le monde physique avec tous ses sens.',
        ['Motricité fine et globale','Permanence de l\'objet','Curiosité et confiance en soi','Bases de la pensée scientifique'],
        'Un bébé qui met tout à la bouche apprend — il n\'est pas en train de "faire n\'importe quoi".')}

      ${seqBlock('🟡','#D4922A','Jeu symbolique','18 mois – 6 ans',
        'Il fait semblant. La cuillère devient baguette magique, la couverture une cabane. La pensée abstraite s\'éveille.',
        ['Langage et pensée abstraite','Gestion des émotions','Empathie et prise de perspective','Créativité et imaginaire'],
        'Quand un enfant rejoue une dispute entre poupées, il digère une émotion difficile en toute sécurité.')}

      ${seqBlock('🟢','#7B9E87','Jeu de construction','2 – 6 ans',
        'Empiler, équilibrer, détruire et recommencer. La tour qui s\'effondre est aussi formatrice que celle qui tient.',
        ['Motricité fine et coordination','Pensée logique et mathématique','Persévérance et tolérance à l\'échec','Planification et résolution de problèmes'],
        'C\'est dans l\'échec répété que se construit la persévérance. Ne pas reconstruire à la place de l\'enfant.')}

      ${seqBlock('🔴','#C4714A','Jeu de règles','Dès 4 ans',
        'Jouer avec des règles collectives, accepter de gagner et de perdre, négocier, attendre son tour.',
        ['Socialisation et coopération','Contrôle des impulsions','Sens de la justice et du fair-play','Mémoire et concentration'],
        'Un enfant qui triche à 4 ans teste les règles sociales. C\'est exactement ce qu\'il doit faire.')}

      ${reflexionBlock('Dans votre structure, quel type de jeu est le plus présent ? Lequel est le plus souvent interrompu par les adultes ?')}
    `,

    // ── SÉQUENCE 2 ──────────────────────────────────────────
    2: `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Séquence 2 · 20 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Jeu libre vs jeu dirigé : quand, pourquoi, comment alterner</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Vous avez préparé une activité soigneusement… et les enfants jouent avec les boîtes vides. Révélateur ?"</p>
      </div>

      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
        <div style="background:var(--green-lt);border-radius:12px;padding:20px;border-left:4px solid var(--green)">
          <div style="font-weight:800;color:var(--green);margin-bottom:10px;font-size:0.9rem">🟢 Jeu libre</div>
          <p style="font-size:0.83rem;color:var(--ink2);margin-bottom:10px">L'enfant choisit, décide, s'arrête quand il veut. L'adulte observe sans intervenir.</p>
          <div style="font-size:0.8rem;color:var(--ink2)">✓ Autonomie &nbsp;✓ Créativité<br>✓ Motivation intrinsèque<br>✓ Concentration profonde</div>
        </div>
        <div style="background:var(--accent-lt);border-radius:12px;padding:20px;border-left:4px solid var(--accent)">
          <div style="font-weight:800;color:var(--accent);margin-bottom:10px;font-size:0.9rem">🔵 Jeu dirigé</div>
          <p style="font-size:0.83rem;color:var(--ink2);margin-bottom:10px">L'adulte définit les règles, les objectifs, le matériel. L'enfant participe dans un cadre fixé.</p>
          <div style="font-size:0.8rem;color:var(--ink2)">✓ Compétences ciblées<br>✓ Socialisation<br>✓ Écoute des consignes<br>✓ Relation à l'adulte</div>
        </div>
      </div>

      ${tipBlock('⚖️','La règle du 70/30','Une bonne journée devrait proposer <strong>70% de jeu libre</strong> et <strong>30% de jeu dirigé</strong>. Dans beaucoup de structures, ce ratio est inversé — c\'est souvent à l\'origine de l\'agitation et du manque de concentration.')}

      <div style="background:var(--surface);border-radius:12px;padding:20px;margin-bottom:20px">
        <div style="font-weight:800;margin-bottom:14px;font-size:0.9rem">🕐 Les bons moments</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:0.83rem">
          <div><div style="font-weight:700;color:var(--green);margin-bottom:6px">Pour le jeu libre</div>
            <div style="color:var(--ink2);line-height:1.8">• À l'arrivée le matin<br>• Après le repas<br>• En milieu de matinée<br>• En fin d'après-midi</div>
          </div>
          <div><div style="font-weight:700;color:var(--accent);margin-bottom:6px">Pour le jeu dirigé</div>
            <div style="color:var(--ink2);line-height:1.8">• En petit groupe<br>• Pour un nouveau matériau<br>• Pour une compétence ciblée<br>• Pour célébrer un événement</div>
          </div>
        </div>
      </div>

      ${erreurBlock(['Interrompre un jeu libre pour proposer une activité dirigée','Transformer le jeu libre en jeu dirigé sans le dire ("Essaie de la faire plus haute !")','Remplir tous les temps libres d\'activités dirigées','Juger le jeu libre comme un temps "sans intérêt"'])}
      ${reflexionBlock('Estimez le ratio jeu libre / jeu dirigé dans votre dernière journée type. Est-il proche du 70/30 ?')}
    `,

    // ── SÉQUENCE 3 ──────────────────────────────────────────
    3: `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Séquence 3 · 25 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Aménager l'espace pour que le jeu fasse vraiment son travail</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"L'environnement est le troisième éducateur."</p>
      </div>

      ${tipBlock('🏛️','Deux approches selon votre structure','<strong>Pédagogie des coins</strong> pour les grandes structures : zones thématiques permanentes. <strong>Itinérance ludique</strong> pour les micro-crèches, MAM et assistantes maternelles : des îlots temporaires qui voyagent avec le matériel — développée par Chantal Lajonie, orthophoniste spécialiste de la petite enfance.')}

      <div style="font-weight:800;font-family:'Syne',sans-serif;margin-bottom:16px">Les 5 principes universels</div>

      ${principeBlock('1','#4A90D9','Espaces lisibles','Chaque espace doit envoyer un message clair. En coins permanents, la zone délimite. En itinérance ludique, l\'installation elle-même est le message.')}
      ${principeBlock('2','#D4922A','Matériel accessible','Tout à hauteur d\'enfant, sans aide adulte. Bacs ouverts, peu mais bien choisi, rotation toutes les 3-4 semaines.')}
      ${principeBlock('3','#7B9E87','Matériaux ouverts','Tissu, boîtes, kapla, cailloux, pommes de pin. Plus un objet est ouvert, plus il stimule l\'imaginaire. Une boîte en carton > un jouet électronique à 50€.')}
      ${principeBlock('4','#C4714A','Place pour le corps','Les enfants ont besoin de bouger. Si les enfants sont agités, regardez d\'abord l\'espace avant de chercher la cause dans leur comportement.')}
      ${principeBlock('5','#7C3AED','Espace vivant','Observer avant de modifier. Enrichissement saisonnier. Impliquer les enfants dès 3 ans dans l\'organisation de leur espace.')}

      ${erreurBlock(['Appliquer la pédagogie des coins sans avoir l\'espace — l\'itinérance ludique est une vraie alternative, pas un pis-aller','Trop de stimulation visuelle : murs surchargés, lumières vives — moins c\'est souvent plus','Aménager pour les adultes, pas pour les enfants'])}
      ${reflexionBlock('Faites le tour de votre espace : combien de zones lisibles ? Le matériel est-il accessible sans aide ? Notez 1 changement à faire cette semaine.')}
    `,

    // ── SÉQUENCE 4 ──────────────────────────────────────────
    4: `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Séquence 4 · 20 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Observer le jeu de l'enfant : apprendre à voir ce qui se passe vraiment</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Observer, ce n'est pas surveiller. C'est un acte professionnel à part entière."</p>
      </div>

      ${tipBlock('👁️','La posture juste','Observer sans intervenir demande de la discipline. La <strong>règle des 3 secondes</strong> : avant d\'intervenir, attendez 3 secondes. Dans la majorité des cas, l\'enfant trouve seul une solution.')}

      <div style="background:var(--surface);border-radius:12px;padding:20px;margin-bottom:20px">
        <div style="font-weight:800;margin-bottom:14px;font-size:0.9rem">🔍 Quoi observer ?</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;font-size:0.83rem;color:var(--ink2)">
          <div><div style="font-weight:700;margin-bottom:6px">Le jeu lui-même</div>
            Type de jeu · Durée de concentration · Évolution · Matériel utilisé</div>
          <div><div style="font-weight:700;margin-bottom:6px">L'enfant dans le jeu</div>
            Niveau d'engagement · Émotions · Initiatives · Langage</div>
          <div><div style="font-weight:700;margin-bottom:6px">L'enfant avec les autres</div>
            Seul / parallèle / coopératif · Gestion des conflits · Imitation</div>
          <div><div style="font-weight:700;margin-bottom:6px">L'enfant et l'espace</div>
            Matériel privilégié · Circulation · L'espace soutient-il le jeu ?</div>
        </div>
      </div>

      <div style="background:var(--surface);border-radius:12px;padding:20px;margin-bottom:20px">
        <div style="font-weight:800;margin-bottom:14px;font-size:0.9rem">🛠️ Les outils d'observation</div>
        <div style="display:flex;flex-direction:column;gap:10px;font-size:0.83rem;color:var(--ink2)">
          <div style="display:flex;gap:10px"><span style="font-size:1.1rem">📓</span><div><strong>Carnet de bord</strong> — Notes de faits bruts, sans interprétation. Ex : "14h10 — Léa, 26 mois. Enroule un tissu autour d'une poupée, lui parle doucement pendant 8 minutes."</div></div>
          <div style="display:flex;gap:10px"><span style="font-size:1.1rem">📋</span><div><strong>Grille d'observation</strong> — Outil structuré pour plusieurs enfants : type de jeu, niveau d'engagement, interactions, durée.</div></div>
          <div style="display:flex;gap:10px"><span style="font-size:1.1rem">📸</span><div><strong>Photo / vidéo</strong> — Avec accord des familles. Puissant pour analyser en équipe.</div></div>
          <div style="display:flex;gap:10px"><span style="font-size:1.1rem">👥</span><div><strong>Analyse en équipe</strong> — 15 min en réunion pour croiser les regards sur une observation commune.</div></div>
        </div>
      </div>

      ${tipBlock('🌱','De l\'observation à l\'action','Observer → Analyser ("Qu\'est-ce que ça dit sur cet enfant ?") → Identifier un besoin → Adapter l\'environnement → Observer à nouveau l\'effet du changement.')}

      ${erreurBlock(['Confondre observer et interpréter — "Il est agressif" vs "Il a poussé trois enfants en 10 minutes"','N\'observer que les enfants qui posent problème','Observer sans jamais partager avec l\'équipe ou les familles'])}
      ${reflexionBlock('Lors de votre prochaine journée, observez un enfant 10 minutes sans intervenir. Notez uniquement des faits. Qu\'apprenez-vous que vous ne saviez pas ?')}
    `,

    // ── QUIZ JEU LIBRE ──────────────────────────────────────
    5: `
      <div style="margin-bottom:24px">
        <span style="background:#7B9E8720;color:#5A7A65;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz · 10 questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Évaluation — Le jeu libre</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 pour obtenir l'attestation</p>
      </div>
      <div id="quiz-jeu-container">${buildQuiz('jeu', quizJeu)}</div>
    `
  };
  return seqs[num] || '';
}


// ────────────────────────────────────────────────────────────
//  FORMATION 2 — ALIMENTATION & HYGIÈNE
//  "Nourrir et protéger"
//  3 modules + 3 quiz
// ────────────────────────────────────────────────────────────

function getAlimContent(num) {
  const modules = {

    // ── MODULE 1 — L'alimentation ────────────────────────────
    1: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Module 1 · 45 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">L'alimentation, bien plus qu'un repas</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Nourrir, c'est aussi créer du lien."</p>
      </div>

      ${tipBlock('⚖️','L\'équilibre alimentaire 0-6 ans','L\'objectif est d\'assurer un état de santé optimum. L\'équilibre s\'obtient en variant l\'alimentation : <strong>15% protides, 30-35% lipides, 50-55% glucides</strong>. Les aliments sont classés selon leur composition en nutriments.')}

      ${seqBlock('🍼','#4A90D9','La diversification alimentaire','4 à 6 mois',
        'Introduire des aliments solides progressivement, en complément du lait, pour arriver à une alimentation familiale vers 1-2 ans.',
        ['Démarrer entre 4 mois révolus et 6 mois au plus tard','Ne pas commencer avant 4 mois — risque allergique','Ne pas retarder au-delà de 6 mois, même chez les enfants à risque','Le lait seul ne suffit plus après 6 mois'],
        'L\'âge de la diversification a beaucoup évolué. Les recommandations actuelles sont claires : entre 4 et 6 mois.')}

      ${tipBlock('💞','Alimentation et attachement','L\'alimentation est un événement social et affectif majeur. Elle apporte une valeur nutritive mais aussi des occasions d\'apprentissage. La relation alimentaire évolue en 3 étapes : <strong>0-3 mois</strong> (autorégulation), <strong>3-7 mois</strong> (attachement et confiance), <strong>6-36 mois</strong> (autonomie progressive).')}

      ${seqBlock('🌍','#7B9E87','Culture et alimentation','Tous âges',
        'Les habitudes alimentaires familiales influencent profondément la relation de l\'enfant à la nourriture. La culture détermine les choix, les comportements et l\'exposition aux environnements alimentaires.',
        ['Respecter les habitudes alimentaires des familles','Mettre à distance son propre rapport à la nourriture','Maintenir la juste distance éducative','Répondre aux besoins de l\'enfant ET aux attentes du parent'],
        'L\'enfant qui mange avec les doigts n\'est pas incorrect — dans de nombreuses cultures, c\'est la norme. Accueillir cette différence sans jugement.')}

      ${tipBlock('🔬','L\'alimentation, espace de découverte','Les 5 sens sont en action lors du repas. L\'enfant prend avec les doigts, goûte, sent, observe. Ce rapport sensoriel à la nourriture développe sa perception du monde. Ne pas le réprimer.')}

      ${reflexionBlock('Selon le contrat avec la famille, quel est votre rôle précis dans l\'alimentation de l\'enfant ? Quels sont vos propres habitudes ou jugements à mettre à distance ?')}
    `,

    // ── MODULE 2 — L'hygiène ─────────────────────────────────
    2: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Module 2 · 30 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">L'hygiène, un apprentissage qui se construit</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Mets des chaussettes tu vas attraper froid… vraiment ?"</p>
      </div>

      ${tipBlock('🔬','Un peu de science accessible','Tomber malade résulte de l\'exposition à un élément pathogène (virus, bactérie). C\'est notre <strong>système immunitaire</strong> qui décide si on contracte la maladie. Le froid n\'est pas la cause — il est un facteur aggravant. On contracte un virus, on ne "prend" pas froid.')}

      ${seqBlock('🙌','#4A90D9','Le lavage des mains','Le geste le plus important',
        'Mesure d\'hygiène la plus efficace pour prévenir la transmission des virus. Une journée mondiale lui est consacrée : le 15 octobre.',
        ['Avant de s\'occuper d\'un bébé, de préparer ou servir les repas','Après s\'être mouché, avoir toussé ou éternué','Après chaque sortie extérieure','Après être allé aux toilettes'],
        'Se laver les mains à l\'eau et au savon liquide, pendant 30 secondes, en frottant ongles, paumes, dos des mains, jointures et poignets. Sécher avec une serviette propre.')}

      ${seqBlock('👶','#7B9E87','Le lavage des mains chez l\'enfant','Dès le plus jeune âge',
        'Garder les mains des enfants propres est la meilleure façon d\'éviter la propagation des germes. C\'est un apprentissage progressif.',
        ['Après les toilettes','Avant de manger','Après avoir toussé, éternué ou été mouché','Après avoir joué avec des jouets partagés','Après avoir touché un animal','Après avoir joué dehors'],
        'La solution hydroalcoolique est à proscrire chez l\'enfant. Privilégier toujours le lavage eau + savon.')}

      ${tipBlock('🏠','Créer un environnement sain','Renouveler régulièrement l\'air des espaces de vie, encourager la toux dans le coude, limiter les contacts en cas de maladie. La crise Covid a renforcé notre conscience collective de ces gestes essentiels.')}

      ${erreurBlock(['Utiliser du gel hydroalcoolique sur les enfants en remplacement du lavage des mains','Attendre que l\'enfant soit malade pour enseigner les gestes d\'hygiène','Considérer l\'hygiène comme une contrainte plutôt qu\'un apprentissage valorisant'])}
      ${reflexionBlock('Dans votre structure, les gestes d\'hygiène sont-ils expliqués aux enfants ou seulement imposés ? Comment les rendre plus ludiques et compris ?')}
    `,

    // ── MODULE 3 — Ma posture ────────────────────────────────
    3: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Module 3 · 30 min</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Ma posture professionnelle face aux familles</h2>
        <p style="color:var(--ink3);font-size:0.88rem;font-style:italic">"Quand les habitudes de la famille ne sont pas les miennes…"</p>
      </div>

      ${tipBlock('🎯','La juste distance éducative','Votre rôle est de répondre aux besoins de l\'enfant tout en étant à l\'écoute du parent. Cela implique de connaître vos propres valeurs, de les reconnaître… et de savoir les mettre à distance quand nécessaire.')}

      ${seqBlock('🌍','#C4714A','Culture et valeurs : accueillir la différence','Posture professionnelle',
        'Les habitudes alimentaires et les principes éducatifs liés à l\'hygiène varient considérablement d\'une famille à l\'autre. Ce n\'est pas à nous de juger.',
        ['Identifier les pratiques de la famille sans les évaluer','Distinguer ce qui relève de la sécurité de l\'enfant de ce qui relève des préférences','Communiquer avec bienveillance sur nos pratiques professionnelles','S\'appuyer sur les recommandations officielles (OMS, PNNS) sans les imposer'],
        'Votre positionnement professionnel doit être cohérent, bienveillant et explicable. Si vous ne pouvez pas expliquer pourquoi vous faites quelque chose, c\'est peut-être une habitude plutôt qu\'une pratique professionnelle.')}

      ${seqBlock('🪞','#7B9E87','Mon propre rapport à la nourriture et à l\'hygiène','Introspection professionnelle',
        'Nous portons tous des histoires, des valeurs, des dégoûts en lien avec la nourriture et l\'hygiène. Ces éléments intimes influencent notre pratique professionnelle sans qu\'on le réalise toujours.',
        ['Identifier ses propres représentations de l\'alimentation','Reconnaître ses jugements implicites','Faire la différence entre ce qui vient de soi et ce qui vient du professionnel','Accepter que sa façon de faire ne soit pas la seule valide'],
        'Un professionnel qui se connaît est un professionnel qui protège l\'enfant et la famille de ses propres projections.')}

      ${tipBlock('💬','Communiquer avec les familles','Utiliser des observations concrètes plutôt que des jugements. "J\'ai remarqué que Lucas mange mieux quand il peut tenir sa cuillère seul" plutôt que "il faut le laisser manger seul". Les faits ouvrent le dialogue, les injonctions le ferment.')}

      ${erreurBlock(['Imposer ses propres habitudes alimentaires à l\'enfant ou à la famille','Juger les pratiques culturelles différentes des siennes','Confondre hygiène professionnelle obligatoire et préférences personnelles','Éviter d\'aborder les sujets sensibles avec les familles par peur du conflit'])}
      ${reflexionBlock('Pensez à une situation récente où les pratiques d\'une famille vous ont questionné. Était-ce une question de sécurité ou de valeurs personnelles ? Comment avez-vous réagi ?')}
    `,

    // ── QUIZ MODULE 1 ────────────────────────────────────────
    4: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz Module 1 · 10 questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Évaluation — L'alimentation</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 pour obtenir l'attestation partielle</p>
      </div>
      <div id="quiz-alim1-container">${buildQuiz('alim1', quizAlim1)}</div>
    `,

    // ── QUIZ MODULE 2 ────────────────────────────────────────
    5: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz Module 2 · 10 questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Évaluation — L'hygiène</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 pour obtenir l'attestation partielle</p>
      </div>
      <div id="quiz-alim2-container">${buildQuiz('alim2', quizAlim2)}</div>
    `,

    // ── QUIZ MODULE 3 ────────────────────────────────────────
    6: `
      <div style="margin-bottom:24px">
        <span style="background:#D4922A20;color:#B97A20;font-size:0.72rem;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;padding:4px 14px;border-radius:20px">Quiz Module 3 · 10 questions</span>
        <h2 style="font-family:'Syne',sans-serif;font-size:1.3rem;margin:14px 0 6px">Évaluation — Ma posture professionnelle</h2>
        <p style="color:var(--ink3);font-size:0.88rem">Seuil de réussite : 7/10 · Ce quiz valide l'ensemble du parcours</p>
      </div>
      <div id="quiz-alim3-container">${buildQuiz('alim3', quizAlim3)}</div>
    `
  };
  return modules[num] || '';
}


// ────────────────────────────────────────────────────────────
//  QUIZ — JEU LIBRE (10 questions)
//  answer = index 0-3 de la bonne réponse dans choices[]
// ────────────────────────────────────────────────────────────

const quizJeu = [
  {
    q: "Un bébé de 8 mois porte systématiquement les objets à la bouche. C'est :",
    choices: ["Un comportement à décourager pour des raisons d'hygiène","Une façon d'explorer et d'apprendre sur le monde","Un signe de faim","Un comportement sans intérêt développemental"],
    answer: 1,
    feedback: "Porter à la bouche est le premier outil sensoriel du bébé. C'est du jeu d'exploration à part entière."
  },
  {
    q: "Le jeu symbolique apparaît principalement à partir de :",
    choices: ["6 mois","12 mois","18 mois","3 ans"],
    answer: 2,
    feedback: "Vers 18 mois, l'enfant commence à 'faire semblant' — signe que sa pensée abstraite se développe."
  },
  {
    q: "Un enfant de 3 ans rejoue une dispute entre deux poupées. Que se passe-t-il ?",
    choices: ["Il reproduit des comportements négatifs","Il s'ennuie","Il traite une émotion difficile en toute sécurité","Il a besoin d'une intervention adulte"],
    answer: 2,
    feedback: "Le jeu symbolique est un espace de traitement émotionnel. C'est un mécanisme sain et précieux."
  },
  {
    q: "Face à une tour qui s'effondre, le professionnel doit :",
    choices: ["Reconstruire pour encourager","Proposer un autre jeu","Montrer comment mieux construire","Laisser l'enfant tâtonner et valoriser ses tentatives"],
    answer: 3,
    feedback: "C'est dans la répétition et l'échec que se construisent la persévérance et la résolution de problèmes."
  },
  {
    q: "Le jeu de règles développe principalement :",
    choices: ["La motricité fine","Le contrôle des impulsions et la socialisation","La pensée abstraite","La curiosité sensorielle"],
    answer: 1,
    feedback: "Attendre son tour, accepter de perdre, respecter une règle collective — des compétences sociales essentielles."
  },
  {
    q: "Quelle attitude favorise le mieux le jeu libre ?",
    choices: ["Proposer des activités structurées","Rester proche pour corriger","Aménager un espace riche et observer sans intervenir","Alterner toutes les 5 minutes"],
    answer: 2,
    feedback: "Le rôle du professionnel dans le jeu libre est d'abord de préparer l'environnement et d'observer."
  },
  {
    q: "Un enfant de 4 ans triche au jeu de l'oie. Cela signifie :",
    choices: ["Il a un problème de comportement","Il manque de confiance","Il teste les règles sociales — normal à cet âge","Le jeu est trop difficile"],
    answer: 2,
    feedback: "Tester les règles fait partie du développement moral. Maintenir un cadre bienveillant est la bonne réponse."
  },
  {
    q: "Quel type d'objet favorise le mieux le jeu symbolique ?",
    choices: ["Des jouets électroniques","Des jouets très réalistes","Des objets ouverts comme des tissus ou boîtes","Des puzzles"],
    answer: 2,
    feedback: "Plus un objet est ouvert, plus il stimule l'imaginaire. Un tissu peut devenir une cape, une mer, un toit…"
  },
  {
    q: "Le jeu de construction développe en priorité :",
    choices: ["Le langage","La gestion des émotions","Les habiletés sociales","La pensée logique et la tolérance à l'échec"],
    answer: 3,
    feedback: "Empiler, équilibrer, planifier — des bases de la pensée mathématique et de la persévérance."
  },
  {
    q: "Quelle phrase valorise le mieux l'effort d'un enfant ?",
    choices: ["'Bravo, tu as fait la plus belle tour !'","'Tu es vraiment doué !'","'C'est bien, mais tu pourrais faire mieux'","'Tu as essayé plusieurs fois, tu n'as pas abandonné !'"],
    answer: 3,
    feedback: "Valoriser le processus plutôt que le résultat développe la motivation intrinsèque — le principe du growth mindset."
  }
];


// ────────────────────────────────────────────────────────────
//  QUIZ — ALIMENTATION MODULE 1 (10 questions)
// ────────────────────────────────────────────────────────────

const quizAlim1 = [
  {
    q: "À partir de quel âge minimum peut-on commencer la diversification alimentaire ?",
    choices: ["3 mois","4 mois révolus","6 mois","8 mois"],
    answer: 1,
    feedback: "La diversification ne doit pas commencer avant 4 mois révolus. Elle ne doit pas non plus être retardée au-delà de 6 mois, même chez les enfants à risque allergique."
  },
  {
    q: "Quelle est la répartition idéale des macronutriments dans l'alimentation du jeune enfant ?",
    choices: ["30% protides, 40% lipides, 30% glucides","15% protides, 30-35% lipides, 50-55% glucides","20% protides, 20% lipides, 60% glucides","10% protides, 50% lipides, 40% glucides"],
    answer: 1,
    feedback: "L'équilibre alimentaire repose sur 15% de protides, 30-35% de lipides et 50-55% de glucides. Il s'obtient en variant les aliments, pas en calculant chaque repas."
  },
  {
    q: "Un enfant de 18 mois mange avec les doigts. Que faire ?",
    choices: ["Le reprendre immédiatement","Ignorer ce comportement","Laisser faire — c'est une exploration sensorielle normale","Retirer l'assiette jusqu'à ce qu'il utilise la cuillère"],
    answer: 2,
    feedback: "Manger avec les doigts est une étape normale du développement. C'est une exploration sensorielle qui développe la motricité fine et l'autonomie. Ne pas réprimer."
  },
  {
    q: "Le repas chez le jeune enfant est avant tout :",
    choices: ["Un moment d'apprentissage des bonnes manières","Un acte purement nutritionnel","Un moment de performance à évaluer","Un moment de lien, d'attachement et de découverte sensorielle"],
    answer: 3,
    feedback: "L'alimentation est un événement social et affectif majeur. Elle nourrit le corps mais aussi la relation. Le repas est une occasion de tisser du lien et de rassurer."
  },
  {
    q: "Quelle affirmation sur la diversification est correcte ?",
    choices: ["Il faut attendre que l'enfant réclame","Le lait seul ne couvre plus les besoins après 6 mois","La diversification peut commencer dès 2 mois","Les enfants à risque allergique doivent attendre 12 mois"],
    answer: 1,
    feedback: "Après 6 mois, le lait seul ne suffit plus à couvrir les besoins en fer, zinc et autres nutriments essentiels."
  },
  {
    q: "La relation alimentaire entre 0 et 3 mois est caractérisée par :",
    choices: ["L'apprentissage des goûts","La découverte des textures","L'autorégulation et la construction de la confiance","L'introduction des aliments solides"],
    answer: 2,
    feedback: "Entre 0 et 3 mois, l'enfant est dans une phase d'autorégulation. Répondre à ses signaux construit la confiance et les bases d'une relation saine à la nourriture."
  },
  {
    q: "Une famille donne à son enfant des aliments différents de vos habitudes. Quelle est la bonne posture ?",
    choices: ["Refuser catégoriquement","Accepter sans rien dire","Juger les habitudes de la famille","Distinguer sécurité de l'enfant et préférences culturelles"],
    answer: 3,
    feedback: "La juste distance consiste à protéger l'enfant quand sa sécurité est en jeu, tout en respectant les pratiques familiales qui ne le mettent pas en danger."
  },
  {
    q: "L'alimentation peut-elle être utilisée comme récompense ou punition ?",
    choices: ["Oui, c'est efficace","Oui pour les récompenses seulement","Non — cela crée un rapport problématique à la nourriture","Oui avec modération"],
    answer: 2,
    feedback: "Utiliser la nourriture comme récompense ou punition crée des associations émotionnelles néfastes. C'est une douce violence qui peut engendrer des troubles alimentaires."
  },
  {
    q: "Quel est le rôle du professionnel pendant le repas ?",
    choices: ["S'assurer que l'enfant finit son assiette","Corriger les mauvaises habitudes familiales","Gérer plusieurs enfants sans s'attarder","Être présent, attentif, répondre aux signaux de l'enfant"],
    answer: 3,
    feedback: "Le repas en structure doit reproduire la qualité du lien que l'enfant vit à la maison. Présence, attention, réponse aux besoins — c'est cela qui fait du repas un moment de développement."
  },
  {
    q: "'Finis ton assiette, il y a des enfants qui meurent de faim' est :",
    choices: ["Une façon légitime de sensibiliser","Un rappel utile","Une douce violence qui culpabilise l'enfant","Une phrase anodine"],
    answer: 2,
    feedback: "Cette phrase culpabilise l'enfant pour quelque chose dont il n'est pas responsable et l'empêche d'apprendre à gérer ses quantités selon ses vrais signaux de faim."
  }
];


// ────────────────────────────────────────────────────────────
//  QUIZ — HYGIÈNE MODULE 2 (10 questions)
// ────────────────────────────────────────────────────────────

const quizAlim2 = [
  {
    q: "Pourquoi contracte-t-on un rhume ?",
    choices: ["Parce qu'on a eu froid","Parce qu'on n'a pas mis ses chaussettes","Parce qu'on a été en contact avec un virus","Parce qu'on est sorti les cheveux mouillés"],
    answer: 2,
    feedback: "On contracte un rhume uniquement en étant exposé à un virus. Le froid est un facteur aggravant mais pas la cause. On ne 'prend' pas froid — on contracte un virus."
  },
  {
    q: "Quelle est la durée recommandée pour un lavage des mains efficace ?",
    choices: ["5 secondes","15 secondes","30 secondes","1 minute"],
    answer: 2,
    feedback: "30 secondes de friction avec du savon liquide sont nécessaires pour éliminer efficacement les germes. Il faut frotter paumes, dos des mains, ongles, jointures et poignets."
  },
  {
    q: "Quelle est la Journée Mondiale du lavage des mains ?",
    choices: ["1er avril","15 septembre","15 octobre","1er novembre"],
    answer: 2,
    feedback: "La Journée Mondiale du lavage des mains est célébrée chaque année le 15 octobre. Elle vise à sensibiliser à cette mesure d'hygiène simple mais essentielle."
  },
  {
    q: "Quand un enfant doit-il se laver les mains en priorité ?",
    choices: ["Uniquement après les toilettes","Seulement avant les repas","Après les toilettes, avant de manger, après avoir toussé, après avoir joué dehors","Une fois par jour le matin"],
    answer: 2,
    feedback: "Le lavage des mains chez l'enfant doit intervenir dans de nombreuses situations : après les toilettes, avant de manger, après avoir toussé, joué dehors ou touché un animal."
  },
  {
    q: "Peut-on utiliser du gel hydroalcoolique à la place du savon chez l'enfant ?",
    choices: ["Oui, c'est plus pratique","Oui si on n'a pas accès à de l'eau","Oui pour les enfants de plus de 3 ans","Non — le gel hydroalcoolique est à proscrire chez l'enfant"],
    answer: 3,
    feedback: "Le gel hydroalcoolique est contre-indiqué chez l'enfant. Il peut être ingéré accidentellement et est irritant pour la peau. Le lavage à l'eau et au savon reste la seule méthode recommandée."
  },
  {
    q: "Un enfant éternue sans se couvrir la bouche. Quelle est la meilleure réponse ?",
    choices: ["Le gronder devant les autres","Ignorer — c'est normal","Lui montrer le geste du coude de façon ludique et positive","L'isoler immédiatement"],
    answer: 2,
    feedback: "Les gestes d'hygiène s'apprennent progressivement. Montrer le geste, l'expliquer simplement, le valoriser quand il est bien fait — sans honte ni punition."
  },
  {
    q: "Qu'est-ce qui permet réellement à notre corps de ne pas tomber malade ?",
    choices: ["Éviter le froid et l'humidité","Manger beaucoup de vitamine C","Un système immunitaire fonctionnel qui combat les agents pathogènes","Se laver les mains une fois par jour"],
    answer: 2,
    feedback: "C'est le système immunitaire qui décide si on contracte une maladie. Les gestes d'hygiène réduisent l'exposition aux agents pathogènes mais ne remplacent pas l'immunité."
  },
  {
    q: "Comment rendre le lavage des mains attractif pour un enfant de 2 ans ?",
    choices: ["Le forcer en expliquant les microbes","Le laisser faire seul","Utiliser des menaces","En faire un jeu, chanter une comptine de 30 secondes"],
    answer: 3,
    feedback: "Transformer le lavage des mains en rituel ludique est beaucoup plus efficace que la contrainte. L'enfant intègre mieux ce qu'il fait avec plaisir."
  },
  {
    q: "Renouveler régulièrement l'air d'une salle est utile pour :",
    choices: ["Éviter les mauvaises odeurs uniquement","Réduire la chaleur en été","Diminuer la concentration de virus et bactéries dans l'air","Ce n'est pas nécessaire si la pièce est propre"],
    answer: 2,
    feedback: "La ventilation régulière réduit significativement la concentration de micro-organismes dans l'air. C'est l'une des mesures barrières les plus simples et les plus efficaces."
  },
  {
    q: "Enseigner les gestes d'hygiène aux enfants, c'est :",
    choices: ["Les traumatiser avec la peur des microbes","Une contrainte inutile avant 3 ans","Uniquement le rôle des parents","Leur donner des outils pour prendre soin d'eux-mêmes et construire leur autonomie"],
    answer: 3,
    feedback: "Les gestes d'hygiène sont des apprentissages fondamentaux pour l'autonomie et la santé. Le professionnel a un rôle clé dans leur transmission — c'est un cadeau pour la vie."
  }
];


// ────────────────────────────────────────────────────────────
//  QUIZ — POSTURE PROFESSIONNELLE MODULE 3 (10 questions)
// ────────────────────────────────────────────────────────────

const quizAlim3 = [
  {
    q: "Qu'est-ce que la 'juste distance éducative' dans l'alimentation ?",
    choices: ["Imposer les habitudes de la structure","Ne jamais intervenir sur les pratiques familiales","Distinguer sécurité de l'enfant et préférences culturelles","Appliquer strictement les recommandations sans contexte"],
    answer: 2,
    feedback: "La juste distance consiste à protéger l'enfant quand sa sécurité est en jeu, tout en respectant les pratiques familiales qui ne le mettent pas en danger."
  },
  {
    q: "Une famille a des pratiques alimentaires culturellement différentes des vôtres. Quelle posture ?",
    choices: ["Expliquer que ces pratiques ne sont pas adaptées","Accepter sans rien dire même si cela vous dérange","En parler au responsable pour les interdire","Accueillir avec bienveillance, sauf si l'enfant est en danger"],
    answer: 3,
    feedback: "Les pratiques alimentaires font partie de l'identité familiale et de l'enfant. Les accueillir avec respect, c'est aussi respecter l'enfant dans sa globalité."
  },
  {
    q: "Pourquoi connaître son propre rapport à la nourriture est-il important professionnellement ?",
    choices: ["Pour conseiller les familles sur leur alimentation","Pour mieux contrôler les repas","Pour éviter de projeter ses propres habitudes sur l'enfant","Ce n'est pas utile professionnellement"],
    answer: 2,
    feedback: "Chacun porte une histoire alimentaire personnelle. Sans en prendre conscience, on peut influencer l'enfant négativement. Un professionnel qui se connaît protège l'enfant de ses projections."
  },
  {
    q: "Quelle phrase illustre une communication bienveillante avec une famille ?",
    choices: ["'Votre enfant ne mange pas bien, il faut changer ses habitudes.'","'Dans notre structure on ne fait pas comme ça.'","'Il faut absolument diversifier maintenant.'","'J'ai remarqué que Lucas mange mieux quand il peut tenir sa cuillère seul.'"],
    answer: 3,
    feedback: "Partir d'une observation concrète plutôt que d'un jugement ouvre le dialogue. Les faits rassemblent, les injonctions divisent."
  },
  {
    q: "Un parent demande de forcer son enfant à finir son assiette. Que faites-vous ?",
    choices: ["Vous obéissez — c'est le souhait du parent","Vous refusez sèchement","Vous ignorez la demande","Vous expliquez calmement pourquoi c'est contre-productif, tout en cherchant un compromis"],
    answer: 3,
    feedback: "Votre rôle est de protéger le bien-être de l'enfant, y compris face aux demandes des familles qui pourraient lui nuire — mais avec pédagogie et bienveillance, pas dans l'affrontement."
  },
  {
    q: "Ce qui différencie une pratique professionnelle d'une habitude personnelle, c'est :",
    choices: ["La pratique professionnelle est toujours plus efficace","L'habitude vient de la formation initiale","La pratique peut être expliquée et repose sur des références pédagogiques","Il n'y a pas de différence"],
    answer: 2,
    feedback: "Si vous ne pouvez pas expliquer pourquoi vous faites quelque chose, c'est peut-être une habitude plutôt qu'une pratique professionnelle. Se poser cette question est un signe de maturité."
  },
  {
    q: "L'alimentation en structure est régie par :",
    choices: ["Les préférences du professionnel","Les souhaits des familles uniquement","Un cadre légal et des recommandations officielles (OMS, PNNS)","Les habitudes locales et régionales"],
    answer: 2,
    feedback: "Le Programme National Nutrition Santé (PNNS) et les recommandations de l'OMS constituent le cadre de référence pour appuyer vos pratiques face aux familles."
  },
  {
    q: "Un enfant refuse catégoriquement un aliment. La meilleure réaction est :",
    choices: ["Le forcer — il doit apprendre à tout manger","Supprimer définitivement cet aliment","Le gronder","Respecter le refus et continuer à proposer régulièrement sans pression"],
    answer: 3,
    feedback: "La néophobie alimentaire est normale entre 2 et 6 ans. Il faut parfois présenter un aliment 10 à 15 fois avant qu'un enfant l'accepte. La pression crée des aversions durables."
  },
  {
    q: "Comment aborder une pratique d'hygiène préoccupante avec une famille ?",
    choices: ["Envoyer un message écrit impersonnel","En parler devant d'autres parents","Attendre que le problème s'aggrave","En tête à tête, avec des observations concrètes et sans jugement"],
    answer: 3,
    feedback: "Les sujets sensibles demandent du tact. Un moment privé, des faits observés, un ton bienveillant — c'est ce qui permet à la famille de s'ouvrir plutôt que de se défendre."
  },
  {
    q: "La bientraitance dans le cadre de l'alimentation et de l'hygiène, c'est :",
    choices: ["Tout accepter sans poser de cadre","Appliquer des règles strictes sans explication","Faire exactement ce que les parents demandent","Répondre aux besoins de l'enfant avec bienveillance, dans le respect de sa famille"],
    answer: 3,
    feedback: "La bientraitance n'est pas l'absence de cadre — c'est la façon dont on répond aux besoins de l'enfant. Elle est à la fois exigeante et douce, professionnelle et humaine."
  }
];


// ────────────────────────────────────────────────────────────
//  COMPOSANTS HTML RÉUTILISABLES
//  (ne pas modifier sauf si vous savez ce que vous faites)
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
//  MOTEUR QUIZ — NE PAS MODIFIER
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
    <div id="quiz-${id}-result" style="display:none;text-align:center;padding:32px 20px"></div>
  `;
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
  const questions = id === 'jeu' ? quizJeu : id === 'alim1' ? quizAlim1 : id === 'alim2' ? quizAlim2 : quizAlim3;
  const answers = quizAnswers[id] || {};
  let score = 0;
  const activeGradient = id === 'jeu' ? 'linear-gradient(135deg,#7B9E87,#5A7A65)' : 'linear-gradient(135deg,#D4922A,#B97A20)';

  questions.forEach((q, i) => {
    const userAnswer = answers[i];
    const correct    = q.answer;
    const isCorrect  = userAnswer === correct;
    if (isCorrect) score++;

    document.querySelectorAll(`[id^="btn-${id}-${i}-"]`).forEach((btn, j) => {
      btn.dataset.answered = 'true';
      btn.style.cursor     = 'default';
      btn.onmouseover      = null;
      if (j === correct)                   { btn.style.background = '#F0FDF4'; btn.style.borderColor = '#16A34A'; btn.style.color = '#15803D'; btn.style.fontWeight = '700'; }
      else if (j === userAnswer && !isCorrect) { btn.style.background = '#FEF2F2'; btn.style.borderColor = '#DC2626'; btn.style.color = '#DC2626'; }
    });

    const fb = document.getElementById(`feedback-${id}-${i}`);
    if (fb) {
      fb.style.display    = 'block';
      fb.style.background = isCorrect ? '#F0FDF4' : '#FEF2F2';
      fb.style.color      = isCorrect ? '#15803D' : '#991B1B';
      fb.style.borderLeft = `3px solid ${isCorrect ? '#16A34A' : '#DC2626'}`;
      fb.innerHTML        = (isCorrect ? '✅ ' : '❌ ') + q.feedback;
    }
  });

  document.getElementById(`btn-submit-${id}`).style.display = 'none';

  const pass = score >= 7;
  const result = document.getElementById(`quiz-${id}-result`);
  result.style.display = 'block';
  result.innerHTML = `
    <div style="font-size:3rem;margin-bottom:16px">${pass ? '🏅' : '📖'}</div>
    <div style="font-size:2rem;font-weight:800;font-family:'Syne',sans-serif;color:${pass ? '#7B9E87' : '#D4922A'};margin-bottom:8px">${score} / ${questions.length}</div>
    <div style="font-size:1rem;font-weight:700;margin-bottom:12px;color:${pass ? '#7B9E87' : '#D4922A'}">${pass ? '✅ Félicitations !' : '📚 Continuez !'}</div>
    <p style="font-size:0.88rem;color:var(--ink2);max-width:400px;margin:0 auto 20px;line-height:1.7">
      ${pass ? 'Excellent résultat ! Votre attestation est disponible.' : 'Relisez les feedbacks des questions manquées pour consolider vos acquis avant de retenter.'}
    </p>
    ${pass
      ? `<button onclick="genererAttestation('${id}', ${score})" style="background:${activeGradient};color:#fff;border:none;padding:12px 28px;border-radius:10px;font-weight:700;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.88rem">🏅 Télécharger mon attestation</button>`
      : `<button onclick="resetQuiz('${id}')" style="background:var(--accent);color:#fff;border:none;padding:12px 28px;border-radius:10px;font-weight:700;cursor:pointer;font-family:'Instrument Sans',sans-serif;font-size:0.88rem">🔄 Réessayer</button>`
    }
  `;
  result.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function resetQuiz(id) {
  document.getElementById(`quiz-${id}-result`).style.display = 'none';
  document.querySelectorAll(`[id^="btn-${id}-"]`).forEach(b => {
    if (b.id.startsWith(`btn-${id}-`) && b.id !== `btn-submit-${id}`) {
      b.dataset.answered = '';
      b.style.background = 'var(--surface2)';
      b.style.borderColor = 'var(--border)';
      b.style.color      = 'var(--ink)';
      b.style.fontWeight = '400';
    }
  });
  quizAnswers[id] = {};
  document.getElementById(`btn-submit-${id}`).style.display = 'block';
  document.querySelectorAll(`[id^="feedback-${id}"]`).forEach(f => f.style.display = 'none');
}

function genererAttestation(id, score) {
  const date = new Date().toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
  const titres = {
    jeu:   '"Il ne fait que jouer…" — Le jeu libre',
    alim1: 'Nourrir et protéger — Module 1 : L\'alimentation',
    alim2: 'Nourrir et protéger — Module 2 : L\'hygiène',
    alim3: 'Nourrir et protéger — Module 3 : Ma posture professionnelle'
  };
  const titre     = titres[id] || 'Formation petite enfance';
  const scoreText = (score !== undefined) ? score + '/10' : '7/10 ou plus';
  const w = window.open('', '_blank');
  if (!w) { showNotif('⚠️ Autorisez les popups pour télécharger l\'attestation'); return; }
  w.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Attestation</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <style>body{font-family:'Lato',sans-serif;background:#f8f6f2;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;padding:20px}
  .cert{background:white;max-width:680px;width:100%;padding:60px;border-radius:16px;box-shadow:0 8px 40px rgba(0,0,0,0.12);text-align:center;position:relative;border:2px solid #7B9E87}
  .cert::before{content:'';position:absolute;inset:8px;border:1px solid #7B9E8740;border-radius:10px;pointer-events:none}
  h1{font-family:'Playfair Display',serif;font-size:2rem;color:#2A2D26;margin:0 0 8px}
  .sub{color:#7B9E87;font-size:0.8rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;margin-bottom:32px}
  .name{font-family:'Playfair Display',serif;font-size:1.6rem;color:#5A7A65;font-style:italic;margin:20px 0}
  .formation{font-size:1.1rem;font-weight:700;color:#2A2D26;margin:16px 0 8px}
  .date{color:#7A7065;font-size:0.88rem;margin-bottom:32px}
  .badge{font-size:3rem;margin-bottom:20px}
  .sig{border-top:1px solid #e0e0e0;padding-top:20px;margin-top:32px;font-size:0.8rem;color:#A8A29E}
  @media print{body{background:white}.cert{box-shadow:none}}</style></head>
  <body><div class="cert">
  <div class="badge">🏅</div>
  <div class="sub">Attestation de formation</div>
  <h1>Certificat de réussite</h1>
  <p style="color:#7A7065;font-size:0.9rem;margin:0 0 4px">Cette attestation certifie que</p>
  <div class="name">le titulaire de cette attestation</div>
  <p style="color:#7A7065;font-size:0.9rem;margin:0 0 4px">a suivi et validé avec succès la formation</p>
  <div class="formation">${titre}</div>
  <div class="date">le ${date}</div>
  <p style="font-size:0.83rem;color:#7A7065;line-height:1.7;max-width:480px;margin:0 auto 24px">Score obtenu : ${scoreText} au quiz d'évaluation final.<br>Formation dispensée dans le cadre du développement des compétences professionnelles en petite enfance.</p>
  <div class="sig">David Bucari · Éducateur de jeunes enfants · Formateur petite enfance<br>Formation en ligne — Accès Orevy</div>
  <div style="margin-top:24px"><button onclick="window.print()" style="background:#7B9E87;color:white;border:none;padding:10px 24px;border-radius:8px;font-weight:700;cursor:pointer;font-size:0.88rem">🖨 Imprimer / Sauvegarder en PDF</button></div>
  </div></body></html>`);
}
