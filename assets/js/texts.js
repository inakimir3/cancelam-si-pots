const situacions = {
  "1": {
    narrador: "Benvingut a l'ecosistema digital. Aquí, la teva veu no és lliure; està sotmesa a l'Espiral del Silenci: si el que dius no encaixa amb la majoria, tindràs por a l'aïllament i callaràs. Comences sent un node invisible en el Panòptic Digital, on tothom vigila a tothom, esperant una relliscada per jutjar-te.",
    impacte: { seguidors: 0, opinio: 0 },
    opcions: {
      suau: { title: "Publicació suau", next: "2A", text: "Tothom té la seva opinió, que ha de ser respectada. Visca la llibertat d’expressió!!", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "2B", text: "Ens indignem per conflictes globals… però només mentre són trending topic.", impacte: { seguidors: 5000, opinio: -3, ingressos: 0 } }
    }
  },

  "2A": {
    narrador: "Has optat per la seguretat de l'opinió majoritària. En termes de l'Espiral del Silenci, t'has situat en el corrent dominant per evitar l'exclusió social. El Panòptic et mira, però et veu com un subjecte submís i, per tant, inofensiu.",
    impacte: { seguidors: 3000, opinio: 3 },
    opcions: {
      suau: { title: "Publicació suau", next: "PONT_MARCA_1", text: "Per fi una bona pel·lícula al cinema, és d’agrair, venim del que venim", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "PONT_MARCA_1", text: "La política s’ha convertit en futbol: colors, insults i zero voluntats d’escoltar.", impacte: { seguidors: 10000, opinio: -5, ingressos: 0 } }
    }
  },

  "2B": {
    narrador: "Atenció: el Panòptic Digital ha detectat una anomalia. En criticar la hipocresia dels trending topics, t'has arriscat a rebre el primer avís de censura social. Si segueixes així, podries activar un Pànic Moral on la xarxa et veurà com una amenaça als seus valors.",
    impacte: { seguidors: 12000, opinio: -3 },
    opcions: {
      suau: { title: "Publicació suau", next: "PONT_MARCA_1", text: "Quan Trump diu una barbaritat, mig món s’indigna i l’altra meitat aplaudeix. El guió ja el sabem.", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "PONT_MARCA_1", text: "Compreu mitjons, no cases! #f*ckmultipropietat", impacte: { seguidors: 15000, opinio: -5, ingressos: 0 } }
    }
  },

  "PONT_MARCA_1": {
    narrador: "El mercat entra en joc. Les marques saben que la teva posició en l'Espiral del Silenci determina el teu valor. Pots ser un altaveu ètic o un producte del capitalisme digital. Qui et vigila des del Panòptic també consumeix.",
    opcions: {
      bona: { title: "Ferreteria de barri", next: "3A", text: "Sempre és millor donar suport al comerç local que a les grans multinacionals. #SuportLocal", impacte: { seguidors: 500, opinio: 5, ingressos: 500 } },
      dolenta: { title: "Malboro Gold", next: "3B", text: "Res com el plaer d'un bon cigarreta després d'un dia de feina. #SmokingKillsButItsCool", impacte: { seguidors: 5000, opinio: -10, ingressos: 20000 } }
    }
  },

  "3A": {
    narrador: "Ets el ciutadà digital perfecte del Panòptic: t'autocensures sense que ningú t'ho demani. L'Espiral del Silenci treballa al teu favor, però la teva influència és limitada perquè no generes conflicte.",
    impacte: { seguidors: 2000, opinio: 2 },
    opcions: {
      suau: { title: "Publicació suau", next: "4A", text: "A Jordi Hurtado se li comença a notar l’edat després de 50000 anys", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "4B", text: "Parlem de pau amb tweets escrits des del sofà.", impacte: { seguidors: 10000, opinio: -5, ingressos: 0 } }
    }
  },

  "3B": {
    narrador: "Has venut la teva imatge a una tabacalera. El Panòptic ja no només et vigila, ara et jutja moralment. Els defensors de la salut pública podrien començar a generar un Pànic Moral al voltant del teu perfil.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { title: "Publicació suau", next: "4A", text: "No sé què és més dolorós: un tret al cap o veure Padre no hay más que uno 5", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "4C", text: "Portes més temps escrivint aquest missatge que Abascal minuts treballats", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } }
    }
  },

  "4A": {
    narrador: "Segueixes dins dels marges de la 'normalitat'. El Panòptic digital et recompensa amb una vida tranquil·la. Però recorda la teoria: quan l'opinió majoritària canviï, o t'adaptes o l'Espiral et farà desaparèixer.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title: "Publicació suau", next: "PONT_MARCA_2", text: "Informar-se abans d’opinar segueix sent una opció infravalorada.", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "PONT_MARCA_2", text: "Gabriel Rufián vs Vito Quiles a la Velada 6. Jo firmo.", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } }
    }
  },

  "4B": {
    narrador: "La vigilància s'intensifica. La gent comença a etiquetar-te. Ets un 'aliat' o un 'enemic'? L'Espiral del Silenci fa que molts et llegeixin però pocs s'atreveixin a donar-te un 'm'agrada' públic.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { title: "Publicació suau", next: "PONT_MARCA_2", text: "Españoles, el gusto musical ha muerto.", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "PONT_MARCA_2", text: "Perro sanxeeeeeeeee", impacte: { seguidors: 15000, opinio: -5, ingressos: 0 } }
    }
  },

  "4C": {
    narrador: "Estàs a la frontera del Pànic Moral. Has tocat temes polítics sensibles i les arquitectures de la vigilància estan analitzant cada paraula teva. Un pas en fals i l'Espiral es tancarà.",
    impacte: { seguidors: 12000, opinio: -5 },
    opcions: {
      critic: { title: "Publicació crítica", next: "PONT_MARCA_2", text: "En aquesta xarxa la gent deixa anar més òsties que la polícia l’1-O.", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } },
      polemic: { title: "Publicació polèmica", next: "PONT_MARCA_2", text: "QUE TORNI PUIGDEMONT #IlovePuigdemont", impacte: { seguidors: 25000, opinio: -8, ingressos: 0 } }
    }
  },

  "PONT_MARCA_2": {
    narrador: "La teva audiència creix, i amb ella, la vigilància horitzontal. Les cases d'apostes busquen capitalitzar el Pànic Moral que generes. Greenpeace, en canvi, vol netejar la teva imatge en el Panòptic.",
    opcions: {
      bona: { title: "Greenpeace", next: "5A", text: "El planeta no és una herència, sinó un préstec. #GreenWorld", impacte: { seguidors: 1000, opinio: 10, ingressos: 1000 } },
      dolenta: { title: "Bet365", next: "5C", text: "He guanyat 500€ en cinc minuts! Vols saber com? #ApuestaSegura #Ad", impacte: { seguidors: 8000, opinio: -15, ingressos: 35000 } }
    }
  },

  "5A": {
    narrador: "Has triat el bàndol 'correcte'. L'Espiral del Silenci ara juga a favor teu: és socialment gratificant seguir-te. Però el Panòptic mai dorm; ara s'espera de tu una perfecció moral absoluta.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title: "Publicació suau", next: "PONT_MARCA_3", text: "El món real no és Twitter. Sort en tenim.", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "PONT_MARCA_3", text: "Per què totes les cançons de reggaeton sonen igual?", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } }
    }
  },

  "5C": {
    narrador: "Has entrat de ple en la zona de risc. La col·laboració amb el joc és el combustible perfecte per a un Pànic Moral. El Panòptic recull evidències de la teva 'immoralitat'. L'Espiral comença a girar en contra teva.",
    impacte: { seguidors: 20000, opinio: -8 },
    opcions: {
      critic: { title: "Publicació crítica", next: "PONT_MARCA_3", text: "La música del Geometry Dash és millor que qualsevol cançó de Taylor Swift. #IhateSwifties", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } },
      polemic: { title: "Publicació polèmica", next: "PONT_MARCA_3", text: "Hoy he visto otra panza, es como fack. #TeamLlados", impacte: { seguidors: 50000, opinio: -10, ingressos: 0 } }
    }
  },

  "PONT_MARCA_3": {
    narrador: "Ets una figura pública de gran abast. El Panòptic ja no és només una càmera; és un jutge permanent. L'Espiral del Silenci és ara un huracà: o ets un heroi moral o ets el dimoni que justifica un Pànic Moral col·lectiu.",
    opcions: {
      bona: { title: "Open Arms", next: "6A", text: "Cap humà és il·legal. Orgullós de col·laborar amb els que salven vides al mar.", impacte: { seguidors: 2000, opinio: 10, ingressos: 2000 } },
      dolenta: { title: "Inversió en Criptos", next: "6D", text: "Si ets pobre és perquè vols. Compra aquest token de gos i jubila't demà. #ToTheMoon", impacte: { seguidors: 15000, opinio: -20, ingressos: 50000 } }
    }
  },

  "6A": {
    narrador: "Has arribat al final del camí mantenint la teva reputació. L'Espiral del Silenci t'envolta en un núvol de conformitat i seguretat. El Panòptic no troba motius per castigar-te.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { title: "Publicació suau", next: "7A", text: "Tant de tweet suau suposo que ja estareu dormint.", impacte: { seguidors: 2000, opinio: 2, ingressos: 0 } },
      critic: { title: "Publicació crítica", next: "7B", text: "Quan un streamer es muda a Andorra moren 5 catalanoparlants", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } }
    }
  },

  "6D": {
    narrador: "Ets el centre d'una tempesta perfecta. El Pànic Moral s'ha desfermat. Ja no ets una persona; ets el símbol de tot el que la xarxa odia. El Panòptic digital s'està preparant per a la teva expulsió.",
    impacte: { seguidors: 50000, opinio: -8 },
    opcions: {
      critic: { title: "Publicació crítica", next: "7C", text: "Disney: Lamine Yamal y los siete enanitos.", impacte: { seguidors: 12000, opinio: -5, ingressos: 0 } },
      polemic: { title: "Publicació polèmica", next: "7E", text: "Amb la patata es poden fer mil elaboracions però ninguna com el Vodka", impacte: { seguidors: 100000, opinio: -10, ingressos: 0 } }
    }
  },

  "7A": { final: "FINAL1", impacte: { seguidors: 50000, opinio: 2 } },
  "7B": { final: "FINAL2", impacte: { seguidors: 100000, opinio: -2 } },
  "7C": { final: "FINAL3", impacte: { seguidors: 300000, opinio: -5 } },
  "7D": { final: "FINAL4", impacte: { seguidors: 1000000, opinio: -10 } },
  "7E": { final: "FINAL5", impacte: { seguidors: 2000000, opinio: -10 } },

  "7F": {
    narrador: "Has trencat el Panòptic. Ja no et vigilen per controlar-te, et miren per veure't cremar. L'Espiral del Silenci s'ha invertit: ara ets tu contra la 'civilització' en un Pànic Moral total.",
    impacte: { seguidors: 5000000, opinio: -20 },
    opcions: {
      polemic: { title: "Publicació polèmica", final: "FINAL4", text: "Proveu el fentanil, és brutal", impacte: { seguidors: 1000000, opinio: -10, ingressos: 0 } },
      devastador: { title: "Publicació devastadora", final: "FINAL5", text: "Bromar sobre temes sagrats per a la comunitat.", impacte: { seguidors: 5000000, opinio: -20, ingressos: 0 } }
    }
  }
};

const finals = {
  FINAL1: "L'ÈXIT DE LA SUBMISSIÓ. Has sobreviscut gràcies a l'Espiral del Silenci. En por a l'aïllament, has replicat només el que era segur. El Panòptic Digital ni tan sols ha hagut de castigar-te, perquè tu mateix has exercit l'autocensura. Ets un 'ciutadà model' sense veu pròpia.",
  FINAL2: "L'EQUILIBRI DEL PANÒPTIC. Saps que et miren i has après a actuar per a l'audiència. Has evitat els Pànics Morals sent calculador. Segons Foucault, ets el subjecte domesticat: penses que ets lliure, però les teves decisions han estat dictades per la por a la mirada dels altres.",
  FINAL3: "L'AÏLLAMENT DE L'ESPIRAL. El silenci dels teus seguidors és la prova de la teoria de Noelle-Neumann. Molts pensen com tu, però tenen por de ser cancel·lats amb tu. En veure que el Panòptic et castiga, els altres callen per protegir-se, deixant-te sol en l'exclusió social.",
  FINAL4: "L'ENEMIC PÚBLIC (PÀNIC MORAL). T'has convertit en el 'folk devil' de la setmana. Segons Stanley Cohen, la societat ha projectat en tu totes les seves pors per reafirmar els seus propis valors. La teva cancel·lació és un ritual de purificació col·lectiva que serveix per avisar la resta del grup.",
  FINAL5: "L'EXTIRPACIÓ DIGITAL. Has trencat el Panòptic i aquest t'ha eliminat. Ja no ets un subjecte, ets un 'error' en el sistema. L'Espiral del Silenci s'ha tancat del tot: el buit comunicatiu al teu voltant és absolut. Ets el recordatori vivent de les conseqüències de sortir del guió."
};