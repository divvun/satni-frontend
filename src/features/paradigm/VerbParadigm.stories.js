import VerbParadigm from './VerbParadigm';

const paradigm = {
  sme: {
    analyses: {
      'V+Inf': ['váldit'],
      'V+Ind+Prs+Sg1': ['válddán'],
      'V+Ind+Prs+Sg2': ['válddát'],
      'V+Ind+Prs+Sg3': ['váldá'],
      'V+Ind+Prs+Du1': ['válde'],
      'V+Ind+Prs+Du2': ['váldibeahtti'],
      'V+Ind+Prs+Du3': ['váldiba'],
      'V+Ind+Prs+Pl1': ['váldit'],
      'V+Ind+Prs+Pl2': ['váldibehtet'],
      'V+Ind+Prs+Pl3': ['váldet'],
      'V+Ind+Prs+ConNeg': ['váldde'],
      'V+Ind+Prt+Sg1': ['válden'],
      'V+Ind+Prt+Sg2': ['váldet'],
      'V+Ind+Prt+Sg3': ['válddii'],
      'V+Ind+Prt+Du1': ['válddiime'],
      'V+Ind+Prt+Du2': ['válddiide'],
      'V+Ind+Prt+Du3': ['válddiiga'],
      'V+Ind+Prt+Pl1': ['válddiimet'],
      'V+Ind+Prt+Pl2': ['válddiidet'],
      'V+Ind+Prt+Pl3': ['válde'],
      'V+Ind+Prt+ConNeg': ['váldán'],
      'V+PrfPrc': ['váldán'],
    },
  },
  sma: {
    analyses: {
      'V+Inf': ['vaeltedh'],
      'V+PrfPrc': ['vaalteme'],
      'V+Ger': ['vaeltieminie'],
      'V+Ind+Prs+Sg1': ['vaaltam'],
      'V+Ind+Prs+Sg2': ['vaaltah'],
      'V+Ind+Prs+Sg3': ['vaalta'],
      'V+Ind+Prs+Du1': ['vaeltien'],
      'V+Ind+Prs+Du2': ['vaelteden', 'vaeltiejidien', 'vaeltiejidien'],
      'V+Ind+Prs+Du3': ['vaeltiejægan', 'vaeltiejægan'],
      'V+Ind+Prs+Pl1': ['vaeltebe', 'vaeltiejibie', 'vaeltiejibie'],
      'V+Ind+Prs+Pl2': ['vaeltede', 'vaeltiejidie', 'vaeltiejidie'],
      'V+Ind+Prs+Pl3': ['vaeltieh'],
      'V+Ind+Prt+Sg1': ['veeltim', 'vaeltiejim'],
      'V+Ind+Prt+Sg2': ['veeltih', 'vaeltiejih'],
      'V+Ind+Prt+Sg3': ['veelti', 'vaeltieji'],
      'V+Ind+Prt+Du1': ['veeltimen', 'vaeltiejimen'],
      'V+Ind+Prt+Du2': ['veeltiden', 'vaeltiejiden'],
      'V+Ind+Prt+Du3': ['veeltigan', 'vaeltiejigan'],
      'V+Ind+Prt+Pl1': ['veeltimh', 'vaeltiejimh'],
      'V+Ind+Prt+Pl2': ['veeltidh', 'vaeltiejidh'],
      'V+Ind+Prt+Pl3': ['veeltin', 'vaeltiejin'],
      'V+ConNeg': ['vaeltieh'],
      'V+Imprt+Sg2': ['vaeltieh'],
      'V+Imprt+Du1': ['vaeltien'],
      'V+Imprt+Du2': ['vaelteden'],
      'V+Imprt+Pl1': ['vaeltijibie', 'vaeltebe'],
      'V+Imprt+Pl2': ['vaeltede'],
    },
  },
  smj: {
    analyses: {
      'V+Inf': ['válldet'],
      'V+Ind+ConNeg': ['válde'],
      'V+Ind+Prs+Sg1': ['váldáv'],
      'V+Ind+Prs+Sg2': ['váldá'],
      'V+Ind+Prs+Sg3': ['válldá'],
      'V+Ind+Prs+Du1': ['válldin'],
      'V+Ind+Prs+Du2': ['válldebihtte'],
      'V+Ind+Prs+Du3': ['válldeba'],
      'V+Ind+Prs+Pl1': ['válldep'],
      'V+Ind+Prs+Pl2': ['válldebihtit'],
      'V+Ind+Prs+Pl3': ['válldi'],
      'V+Ind+Prt+Sg1': ['válldiv'],
      'V+Ind+Prt+Sg2': ['válldi'],
      'V+Ind+Prt+Sg3': ['váldij'],
      'V+Ind+Prt+Du1': ['váldijma'],
      'V+Ind+Prt+Du2': ['váldijda'],
      'V+Ind+Prt+Du3': ['váldijga'],
      'V+Ind+Prt+Pl1': ['váldijma'],
      'V+Ind+Prt+Pl2': ['váldijda'],
      'V+Ind+Prt+Pl3': ['válldin'],
      'V+PrfPrc': ['válldám'],
    },
  },
  smn: {
    analyses: {
      'V+Inf': ['väzziđ'],
      'V+Ind+Prs+Sg1': ['váázám'],
      'V+Ind+Prs+Sg2': ['váázáh'],
      'V+Ind+Prs+Sg3': ['vázzá'],
      'V+Ind+Prs+Du1': ['väzzeen'],
      'V+Ind+Prs+Du2': ['väzzivettee'],
      'V+Ind+Prs+Du3': ['väzziv'],
      'V+Ind+Prs+Pl1': ['väzzip'],
      'V+Ind+Prs+Pl2': ['väzzivetteđ'],
      'V+Ind+Prs+Pl3': ['väzzih'],
      'V+Ind+Prs+ConNeg': ['vääzi'],
      'V+Ind+Prt+Sg1': ['vazzim'],
      'V+Ind+Prt+Sg2': ['vazzih'],
      'V+Ind+Prt+Sg3': ['vaazij'],
      'V+Ind+Prt+Du1': ['vazzijm'],
      'V+Ind+Prt+Du2': ['vazzijd'],
      'V+Ind+Prt+Du3': ['vazzijn'],
      'V+Ind+Prt+Pl1': ['vaazijm'],
      'V+Ind+Prt+Pl2': ['vaazijd'],
      'V+Ind+Prt+Pl3': ['vazzii'],
      'V+Ind+Prt+ConNeg': ['vázzám'],
      'V+PrfPrc': ['vázzám'],
    },
  },
  sms: {
    analyses: {
      'V+Inf': ['väʹʒʒed'],
      'V+Ind+Prs+Sg1': ['vääʒʒam'],
      'V+Ind+Prs+Sg2': ['vääʒʒak'],
      'V+Ind+Prs+Sg3': ['väʒʒ'],
      'V+Ind+Prs+Sg4': ['vääʹʒʒet'],
      'V+Ind+Prs+Pl1': ['väʹʒʒep'],
      'V+Ind+Prs+Pl2': ['väʹʒʒveʹted'],
      'V+Ind+Prs+Pl3': ['väʹʒʒe'],
      'V+Ind+Prs+ConNeg': ['vääʹʒʒ'],
      'V+Ind+Prt+Sg1': ['vaʹʒʒem'],
      'V+Ind+Prt+Sg2': ['vaʹʒʒiǩ'],
      'V+Ind+Prt+Sg3': ['vaaʹʒʒi'],
      'V+Ind+Prt+Sg4': ['vaʹʒʒeš'],
      'V+Ind+Prt+Pl1': ['vaaʹʒʒin', 'vaaʹʒʒiim', 'vaaʹʒʒim'],
      'V+Ind+Prt+Pl2': ['vaaʹʒʒid'],
      'V+Ind+Prt+Pl3': ['vaʹʒʒe'],
      'V+Ind+Prt+ConNeg': ['väʒʒam'],
    },
  },
  fin: {},
};

const čágadit = {
  analyses: {
    'V+Inf': ['čágadit'],
    'V+Ind+Prs+Sg3': ['čágada'],
    'V+Ind+Prs+Du3': ['čágadeaba'],
    'V+Ind+Prs+Pl3': ['čágadit'],
    'V+Ind+Prs+ConNeg': ['čágat'],
    'V+Ind+Prt+Sg3': ['čágadii'],
    'V+Ind+Prt+Du3': ['čágadeigga'],
    'V+Ind+Prt+Pl3': ['čágade', 'čágadedje'],
    'V+Ind+Prt+ConNeg': ['čágadan'],
    'V+PrfPrc': ['čágadan'],
  },
};

export default {
  title: 'VerbParadigm',
};

export const SouthSaamiVerbs = () => (
  <VerbParadigm paradigm={paradigm.sma} language="sma" />
);

SouthSaamiVerbs.story = {
  name: 'South saami verbs',
};

export const NorthSaamiVerbs = () => (
  <VerbParadigm paradigm={paradigm.sme} language="sme" />
);

NorthSaamiVerbs.story = {
  name: 'North saami verbs',
};

export const LuleSaamiVerbs = () => (
  <VerbParadigm paradigm={paradigm.smj} language="smj" />
);

LuleSaamiVerbs.story = {
  name: 'Lule saami verbs',
};

export const InariSaamiVerbs = () => (
  <VerbParadigm paradigm={paradigm.smn} language="smn" />
);

InariSaamiVerbs.story = {
  name: 'Inari saami verbs',
};

export const SkoltSaamiVerbs = () => (
  <VerbParadigm paradigm={paradigm.sms} language="sms" />
);

SkoltSaamiVerbs.story = {
  name: 'Skolt saami verbs',
};

export const Cagadit = () => <VerbParadigm paradigm={čágadit} language="sme" />;

Cagadit.story = {
  name: 'čágadit',
};
