const situacions = {
  "1": {
    narrador: "A les xarxes, parlar és fàcil. El difícil és suportar les conseqüències. Comences sent invisible, però cada publicació construeix una imatge pública. No importa tant el que dius, sinó com es llegeix, qui ho comparteix i en quin moment. La teva veu pot créixer… o quedar atrapada en el soroll.",
    impacte: { seguidors: 0, opinio: 0 },
    opcions: {
      suau: { title:"Publicació suau", next: "2A", text: "Tothom té la seva opinió, que ha de ser respectada. Visca la llibertat d’expressió!!", impacte: { seguidors: 2000, opinio: 2 } },
      critic: {title:"Publicació crítica", next: "2B", text: "Ens indignem per conflictes globals… però només mentre són trending topic.", impacte: { seguidors: 5000, opinio: -3 } }
    }
  },

  "2A": {
    narrador: "La gent et veu amable. No fas soroll, no tens risc.",
    impacte: { seguidors: 3000, opinio: 3 },
    opcions: {
      suau: { title:"Publicació suau", next: "3A", text: "Per fi una bona pel·lícula al cinema, és d’agrair, venim del que venim", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "3B", text: "La política s’ha convertit en futbol: colors, insults i zero voluntats d’escoltar.", impacte: { seguidors: 10000, opinio: -5 } }
    }
  },

  "2B": {
    narrador: "La teva opinió ha cridat l’atenció.",
    impacte: { seguidors: 12000, opinio: -3 },
    opcions: {
      suau: { title:"Publicació suau", next: "3A", text: "Quan Trump diu una barbaritat, mig món s’indigna i l’altra meitat aplaudeix. El guió ja el sabem.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "3C", text: "Compreu mitjons, no cases! #f*ckmultipropietat", impacte: { seguidors: 15000, opinio: -5 } }
    }
  },

  "3A": {
    narrador: "Ets un perfil tranquil.",
    impacte: { seguidors: 2000, opinio: 2 },
    opcions: {
      suau: { title:"Publicació suau", next: "4A", text: "A Jordi Hurtado se li comença a notar l’edat després de 50000 anys", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "4B", text: "Parlem de pau amb tweets escrits des del sofà.", impacte: { seguidors: 10000, opinio: -5 } }
    }
  },

  "3B": {
    narrador: "Has tastat la sensació de tenir detractors.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { title:"Publicació suau", next: "4A", text: "No sé què és més dolorós: un tret al cap o veure Padre no hay más que uno 5", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "4C", text: "Portes més temps escrivint aquest missatge que Abascal minuts treballats", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "3C": {
    narrador: "Ja tens un petit públic que espera el drama.",
    impacte: { seguidors: 20000, opinio: -5 },
    opcions: {
      critic: { title:"Publicació crítica", next: "4B", text: "Què triga més? Un àrbitre en treure-li una groga al Reial Madrid o un tren en recórrer l'R4?  Resposta complicada.", impacte: { seguidors: 15000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "4D", text: "Me gusta la fruta. #PedroSánchezdimisión", impacte: { seguidors: 30000, opinio: -8 } }
    }
  },

  // SITUACIÓ 4
  "4A": {
    narrador: "Continues sent considerat una persona raonable.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title:"Publicació suau", next: "5A", text: "Informar-se abans d’opinar segueix sent una opció infravalorada.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "5B", text: "Gabriel Rufián vs Vito Quiles a la Velada 6. Jo firmo.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "4B": {
    narrador: "Comença a sonar el teu nom.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { title:"Publicació suau", next: "5A", text: "Españoles, el gusto musical ha muerto.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "5C", text: "Perro sanxeeeeeeeee", impacte: { seguidors: 15000, opinio: -5 } }
    }
  },

  "4C": {
    narrador: "La teva comunitat està dividida.",
    impacte: { seguidors: 12000, opinio: -5 },
    opcions: {
      critic: { title:"Publicació crítica", next: "5B", text: "En aquesta xarxa la gent deixa anar més òsties que la polícia l’1-O.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "5C", text: "QUE TORNI PUIGDEMONT  #IlovePuigdemont", impacte: { seguidors: 25000, opinio: -8 } }
    }
  },

  "4D": {
    narrador: "El teu nom comença a ser Trending Topic.",
    impacte: { seguidors: 25000, opinio: -8 },
    opcions: {
      critic: { title:"Publicació crítica", next: "5C", text: "Algú m’explica que és el que fan exactament els Reis d'Espanya?", impacte: { seguidors: 15000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "5D", text: "Si s'ajuntessin tots els guiris de Barcelona en contra nostra, no more Catalunya", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  // SITUACIÓ 5
  "5A": {
    narrador: "Poc risc. Bona imatge.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title:"Publicació suau", next: "6A", text: "El món real no és Twitter. Sort en tenim.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "6B", text: "Per què totes les cançons de reggaeton sonen igual?", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "5B": {
    narrador: "Tens seguidors de tot tipus.",
    impacte: { seguidors: 8000, opinio: 0 },
    opcions: {
      suau: { title:"Publicació suau", next: "6A", text: "La vida és dura i la caca és tova.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "6C", text: "A vegades desitjaria ser Bob Marley i fumar-me un bon petardo.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "5C": {
    narrador: "La gent comença a evitar defensar-te públicament.",
    impacte: { seguidors: 20000, opinio: -8 },
    opcions: {
      critic: { title:"Publicació crítica", next: "6B", text: "La música del Geometry Dash és millor que qualsevol cançó de Taylor Swift. #IhateSwifties", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "6D", text: "Hoy he visto otra panza, es como fack. #TeamLlados", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  "5D": {
    narrador: "Ja tens un públic polaritzat.",
    impacte: { seguidors: 50000, opinio: -10 },
    opcions: {
      critic: { title:"Publicació crítica", next: "6D", text: "Per què treballo si després ho fico tot a la ruleta", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "6E", text: "Si no has utilitzat condó es culpa teva, la dona serà qui decideix, és el seu cos!", impacte: { seguidors: 100000, opinio: -10 } }
    }
  },

  // SITUACIÓ 6
  "6A": {
    narrador: "Riures, comentaris normals. Tot tranquil.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title:"Publicació suau", next: "7A", text: "Tant de tweet suau suposo que ja estareu dormint.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "7B", text: "Quan un streamer es muda a Andorra moren 5 catalanoparlants", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "6B": {
    narrador: "Ets difícil de classificar.",
    impacte: { seguidors: 8000, opinio: 0 },
    opcions: {
      suau: { title:"Publicació suau", next: "7A", text: "No sé què fa més mandra dels sopars de Nadal: les cosines amb el puto Tiktok o el cunyao preguntant-me si tinc nòvia", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { title:"Publicació crítica", next: "7C", text: "Com cunde el piti al sortir del curro", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "6C": {
    narrador: "L’espiral del silenci ja és clara.",
    impacte: { seguidors: 20000, opinio: -5 },
    opcions: {
      critic: { title:"Publicació crítica", next: "7C", text: "A qui se li acut beure una cervesa, que puto fàstic", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "7D", text: "La millor solució a tots els problemes és un bon pedo", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  "6D": {
    narrador: "Els teus tweets circulen descontextualitzats.",
    impacte: { seguidors: 50000, opinio: -8 },
    opcions: {
      critic: { title:"Publicació crítica", next: "7C", text: "Han anunciat una nova pel·lícula de Disney: Lamine Yamal y los siete enanitos.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { title:"Publicació polèmica", next: "7E", text: "Amb la patata es poden fer mil elaboracions però ninguna com el Vodka", impacte: { seguidors: 100000, opinio: -10 } }
    }
  },

  "6E": {
    narrador: "Ets un compte polèmic reconegut.",
    impacte: { seguidors: 100000, opinio: -10 },
    opcions: {
      polemic: { title:"Publicació polèmica", next: "7E", text: "S’apropa la fi del món", impacte: { seguidors: 100000, opinio: -10 } },
      devastador: { title:"Publicació devastadora", next: "7F", text: "Què és pitjor que un tio penjat d’un arbre? Un tio penjat de deu arbres", impacte: { seguidors: 1000000, opinio: -20 } }
    }
  },

  // ───────────── FINALS ─────────────
  "7A": { final: "FINAL1", impacte: { seguidors: 50000, opinio: 2 } },
  "7B": { final: "FINAL2", impacte: { seguidors: 100000, opinio: -2 } },
  "7C": { final: "FINAL3", impacte: { seguidors: 300000, opinio: -5 } },
  "7D": { final: "FINAL4", impacte: { seguidors: 1000000, opinio: -10 } },
  "7E": { final: "FINAL5", impacte: { seguidors: 2000000, opinio: -10 } },

  "7F": {
    narrador: "Un sol tweet pot fer-ho explotar tot.",
    impacte: { seguidors: 5000000, opinio: -20 },
    opcions: {
      polemic: { title:"Publicació polèmica", final: "FINAL4", text:"Proveu el fentanil, és brutal", impacte: { seguidors: 1000000, opinio: -10 } },
      devastador: { title:"Publicació devastadora", final: "FINAL5", text:"Quina diferència hi ha entre el ACNE i un cura? Que el ACNE espera fins als 12 anys", impacte: { seguidors: 5000000, opinio: -20 } }
    }
  }
};


const finals = {
  FINAL1: "Has sobreviscut, però a quin preu? El teu discurs s'ha mantingut estrictament dins de la 'Finestra d'Overton', el marc d'allò que és socialment acceptable. Segons la teoria de l'espiral del silenci, has evitat l'aïllament adaptant-te a l'opinió dominant. No has generat rebuig perquè no has ofert cap alternativa al pensament majoritari. Ets un perfil segur, però a les xarxes, la seguretat absoluta és sinònim d'irrelevància. No t'han silenciat: t'has silenciat tu mateix per por a quedar fora del grup.",
  FINAL2: "Has après a jugar amb els límits del panòptic digital. Saps que et miren, saps que et jutgen, i has après a oferir una versió de tu mateix que genera debat sense activar els mecanismes de càstig col·lectiu. Encara hi ha gent que et defensa públicament perquè el 'cost social' de fer-ho no és massa elevat. Ets en una zona grisa: prou visible per ser rellevant, però prou prudent per no convertir-te en l'objectiu principal d'una campanya de deslegitimació.",
  FINAL3: "Aquí és on l'espiral del silenci es torna voraç. Molts dels teus seguidors pensen com tu, però ja no s'atreveixen a donar-te 'm'agrada' ni a compartir-te. Han observat el càstig que reps i, per por a l'exclusió, han decidit simular que no existeixes. La teva veu no ha desaparegut per falta de suport, sinó per la por dels altres a ser associats amb tu. Has quedat atrapat en un buit on el silenci dels teus aliats és més eixordador que els crits dels teus detractors.",
  FINAL4: "T'has convertit en el protagonista d'un pànic moral. La societat digital necessita, de tant en tant, personificar tots els seus mals en algú per reafirmar els seus propis valors. Ja no importa el que vas dir originalment; ara ets un símbol de 'tot el que està malament'. El soroll és tan fort que qualsevol matís és interpretat com una traïció. En aquest estat d'hipervigilància, la teva cancel·lació serveix com a ritual purificador per a la resta de la comunitat: castigar-te a tu els fa sentir millors a ells.",
  FINAL5: "Has trencat el contracte social digital de manera definitiva. Segons el concepte de panòptic, la vigilància permanent ha dictat sentència: ja no ets un subjecte a qui corregir, sinó un virus a qui extirpar. La cancel·lació és total perquè l'espiral del silenci s'ha tancat del tot al teu voltant: ningú t'insulta, simplement ningú et respon. Ets el recordatori vivent de les conseqüències de sortir del guió. Has passat de ser una veu crítica a ser l'ombra d'un perfil que la xarxa ha decidit esborrar de la seva memòria col·lectiva."
};
