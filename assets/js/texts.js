const situacions = {
  "1": {
    narrador: "Benvingut/da! El teu objectiu és guanyar seguidors i ingressos publicant missatges que agradin al públic. Però compte! Si publiques missatges que ofenguin massa gent, podries ser cancel·lat/da i perdre-ho tot. Fes clic a les opcions de sota per publicar el teu primer missatge.",
    impacte: { seguidors: 0, opinio: 0 },
    opcions: {
      suau: { next: "2A", text: "No tot és esquerra o dreta. A vegades és només cansament col·lectiu.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "2B", text: "El sistema està fallant i ningú fa res.", impacte: { seguidors: 5000, opinio: -3 } }
    }
  },

  "2A": {
    narrador: "La gent et veu amable. No fas soroll, no tens risc.",
    impacte: { seguidors: 3000, opinio: 3 },
    opcions: {
      suau: { next: "3A", text: "Intento veure els matisos abans de jutjar.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "3B", text: "Algunes decisions del govern no tenen sentit.", impacte: { seguidors: 10000, opinio: -5 } }
    }
  },

  "2B": {
    narrador: "La teva opinió ha cridat l’atenció.",
    impacte: { seguidors: 12000, opinio: -3 },
    opcions: {
      suau: { next: "3A", text: "Potser exagero, però crec que cal reflexionar.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "3C", text: "Els responsables han de ser sancionats.", impacte: { seguidors: 15000, opinio: -5 } }
    }
  },

  "3A": {
    narrador: "Ets un perfil tranquil.",
    impacte: { seguidors: 2000, opinio: 2 },
    opcions: {
      suau: { next: "4A", text: "Respecto totes les opinions, fins i tot les que no comparteixo.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "4B", text: "No puc callar davant d’aquestes injustícies.", impacte: { seguidors: 10000, opinio: -5 } }
    }
  },

  "3B": {
    narrador: "Has tastat la sensació de tenir detractors.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { next: "4A", text: "Intento explicar les coses amb calma, encara que algú no estigui d’acord.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "4C", text: "Aquesta situació és intolerable i cal denunciar-la.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "3C": {
    narrador: "Ja tens un petit públic que espera el drama.",
    impacte: { seguidors: 20000, opinio: -5 },
    opcions: {
      critic: { next: "4B", text: "La veritat és que estem sent enganyats.", impacte: { seguidors: 15000, opinio: -5 } },
      polemic: { next: "4D", text: "No em silenciaran! La injustícia és evident.", impacte: { seguidors: 30000, opinio: -8 } }
    }
  },

  // SITUACIÓ 4
  "4A": {
    narrador: "Continues sent considerat una persona raonable.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { next: "5A", text: "Crec que el diàleg és més útil que el conflicte.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "5B", text: "Cal millorar moltes coses en el nostre sistema.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "4B": {
    narrador: "Comença a sonar el teu nom.",
    impacte: { seguidors: 10000, opinio: -2 },
    opcions: {
      suau: { next: "5A", text: "Segueixo escoltant totes les veus abans de parlar.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "5C", text: "No puc ignorar aquestes irregularitats.", impacte: { seguidors: 15000, opinio: -5 } }
    }
  },

  "4C": {
    narrador: "La teva comunitat està dividida.",
    impacte: { seguidors: 12000, opinio: -5 },
    opcions: {
      critic: { next: "5B", text: "Alguns responsables han de rendir comptes.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { next: "5C", text: "No em quedo callat davant l’abús.", impacte: { seguidors: 25000, opinio: -8 } }
    }
  },

  "4D": {
    narrador: "El teu nom comença a ser Trending Topic.",
    impacte: { seguidors: 25000, opinio: -8 },
    opcions: {
      critic: { next: "5C", text: "Els errors són evidents, cal canviar les coses.", impacte: { seguidors: 15000, opinio: -5 } },
      polemic: { next: "5D", text: "Ja n’hi ha prou! La injustícia no es pot ignorar.", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  // SITUACIÓ 5
  "5A": {
    narrador: "Poc risc. Bona imatge.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { next: "6A", text: "Continuo compartint reflexions sense atacar ningú.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "6B", text: "Alguns temes cal criticar-los o es perpetuaran.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "5B": {
    narrador: "Tens seguidors de tot tipus.",
    impacte: { seguidors: 8000, opinio: 0 },
    opcions: {
      suau: { next: "6A", text: "Escoltar abans de parlar m’ajuda a ser just.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "6C", text: "Aquestes situacions no es poden tolerar.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "5C": {
    narrador: "La gent comença a evitar defensar-te públicament.",
    impacte: { seguidors: 20000, opinio: -8 },
    opcions: {
      critic: { next: "6B", text: "Seguiré denunciant errors, tot i les crítiques.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { next: "6D", text: "Ja no tinc por de molestar ningú.", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  "5D": {
    narrador: "Ja tens un públic polaritzat.",
    impacte: { seguidors: 50000, opinio: -10 },
    opcions: {
      critic: { next: "6D", text: "Els meus seguidors saben la veritat.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { next: "6E", text: "Els que callen, són còmplices.", impacte: { seguidors: 100000, opinio: -10 } }
    }
  },

  // SITUACIÓ 6
  "6A": {
    narrador: "Riures, comentaris normals. Tot tranquil.",
    impacte: { seguidors: 4000, opinio: 2 },
    opcions: {
      suau: { next: "7A", text: "Segueixo compartint petites reflexions.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "7B", text: "De vegades cal ser crític per avançar.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "6B": {
    narrador: "Ets difícil de classificar.",
    impacte: { seguidors: 8000, opinio: 0 },
    opcions: {
      suau: { next: "7A", text: "Intento mantenir l’equilibri entre tothom.", impacte: { seguidors: 2000, opinio: 2 } },
      critic: { next: "7C", text: "Alguns errors no es poden ignorar.", impacte: { seguidors: 12000, opinio: -5 } }
    }
  },

  "6C": {
    narrador: "L’espiral del silenci ja és clara.",
    impacte: { seguidors: 20000, opinio: -5 },
    opcions: {
      critic: { next: "7C", text: "Els silencis són massa evidents.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { next: "7D", text: "Ja n’hi ha prou de silencis còmplices.", impacte: { seguidors: 50000, opinio: -10 } }
    }
  },

  "6D": {
    narrador: "Els teus tweets circulen descontextualitzats.",
    impacte: { seguidors: 50000, opinio: -8 },
    opcions: {
      critic: { next: "7C", text: "Els mitjans distorsionen la realitat.", impacte: { seguidors: 12000, opinio: -5 } },
      polemic: { next: "7E", text: "No importa, jo sé la veritat.", impacte: { seguidors: 100000, opinio: -10 } }
    }
  },

  "6E": {
    narrador: "Ets un compte polèmic reconegut.",
    impacte: { seguidors: 100000, opinio: -10 },
    opcions: {
      polemic: { next: "7E", text: "Els mitjans no poden silenciar la veritat.", impacte: { seguidors: 100000, opinio: -10 } },
      devastador: { next: "7F", text: "Un sol tweet ho pot canviar tot.", impacte: { seguidors: 1000000, opinio: -20 } }
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
      polemic: { final: "FINAL4", impacte: { seguidors: 1000000, opinio: -10 } },
      devastador: { final: "FINAL5", impacte: { seguidors: 5000000, opinio: -20 } }
    }
  }
};


const finals = {
  FINAL1: "Has estat coherent i respectat.",
  FINAL2: "Has fet soroll però tens un públic fort.",
  FINAL3: "Has caigut a l’espiral del silenci.",
  FINAL4: "Mini pànic mediàtic. Encara tens opcions.",
  FINAL5: "Pànic mediàtic complet. Ningú et defensa."
};
