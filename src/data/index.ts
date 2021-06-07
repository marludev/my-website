import { IDataQuestions, IDataCardsTechnology } from './type'

export const dataCardsTechnology: IDataCardsTechnology[] = [
  { title: 'React', icon: 'react' },
  { title: 'Node', icon: 'node' },
  { title: 'Graphql', icon: 'graphql' },
  { title: 'Wordpress', icon: 'wordpress' },
]

export const dataQuestions: IDataQuestions[] = [
  {
    title: 'Desarrollo del proyecto',
    icon: 'project',
    questions: [
      {
        question: '¿Cuál sería la duración de mi proyecto?',
        response:
          'El tiempo depende del tipo de proyecto y la plataforma, ya sea si es una landing page, un ecommerce con cierta cantidad de productos, o una aplicación móvil que puede llevar más trabajo. ',
      },
      {
        question:
          'Necesito una aplicación móvil ¿Desarrollas aplicaciones para android y ios?',
        response:
          'Por el momento desarrollo aplicaciones únicamente para Android.',
      },
      {
        question:
          'Ya tengo un proyecto ¿Solo desarrollas proyectos desde cero?',
        response:
          'No, también trabajo con proyectos que presenten algún tipo de falla en el website o que deseen restructurarla o actualizarla.',
      },
      {
        question: 'Tengo un proyecto ambicioso ¿trabajas solo?',
        response:
          'Depende del proyecto y los tiempos de desarrollo. ya que, cuando el proyectos es muy amplio y se necesita pronto, suelo trabajar en equipo.',
      },
      {
        question: '¿Qué necesitas para el desarrollo?',
        response:
          'Se necesitarían los textos de cada sección de la app o pagina web, como también el logo en formato PNG y/o vectorizado, y las imágenes oficiales del proyecto con buena resolución en caso de tenerlas.',
      },
      {
        question:
          'No tengo un diseño elaborado ¿igualmente puedo trabajar contigo?',
        response:
          'si claro, cuento con varios diseñadores que te pueden ayudar con algunas propuestas para tu aplicación o pagina web.',
      },
    ],
  },
  {
    title: 'Proceso de pago',
    icon: 'money',
    questions: [
      {
        question: '¿Mediante que plataforma te puedo pagar?',
        response:
          'Suelo trabajar con transferencia a bancos estadounidences o paypal.',
      },
      {
        question: '¿El pago debe ser abonado en su totalidad?',
        response:
          'No, trabajo por etapas. mientras vaya avanzando el desarrollo del proyecto, se va a ir abonando un porcentaje del mismo.',
      },
    ],
  },
]

export const aboutMe = [
  [
    1,
    'Como seguía diciendo, Desde muy joven me ha llamado la atención las computadoras, el hardware, software y como ambos se complementan para trabajar al unísono.',
  ],
  [
    2,
    'Muchos años atrás cuando aun existía Messenger de Microsoft, comencé experimentando con una vieja pc la cual dañe un par de veces (tal vez un poco mas que un par). experimentaba haciendo pequeños scripts en Windows. allí comencé a interactuar con la CMD.',
  ],
  [
    3,
    'En la secundaria, me llegue a destacar bastante en computación. allí me enseñaron un poco de protocolos http, diagramas de flujo, HTML y CSS.',
  ],
  [
    4,
    'Poco tiempo después de graduarme con la incertidumbre de no saber que estudiar, comencé a ver algunos videos que me parecían interesantes de programación, recuerdo que una persona me dio ese empujón para comenzar a estudiar programación y gracias a varios compañeros y esa persona hoy en día he incursionado como desarrollador web y móvil, trabajando tanto de backend como en frontend.',
  ],
]

export const routes = [
  { url: '/', name: 'Inicio' },
  { url: '/sobre-mi', name: ' Sobre mi' },
  { url: '/blog', name: 'Blog' },
  { url: '/contacto', name: 'Contacto' },
]

export const coursesPlatzi = [
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-algoritmos-pensamiento-logico-4b7a05c5-470a-41e6-bcd9-4693f4207a03.png',
    courseName: 'Curso Básico de Algoritmos y Pensamiento Lógico',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-basicojs-e2ead888-428e-4f55-962c-8894aeaeacda.png',
    courseName: 'Curso Básico de JavaScript',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-asincronismo-javascript-3f44d51e-209e-4e47-a228-4142d049525c.png',
    courseName: 'Curso de Asincronismo con JavaScript',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-ecmascript-6-d48e7bb7-a7a4-416d-a3b4-e11f0b13a229.png',
    courseName: 'Curso de ECMAScript 6+',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-aprender-ingles-online-a8141ccd-4aa3-4235-a897-5ad3a77fd6e8.png',
    courseName: 'Curso de Estrategias para Aprender Inglés Online',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badges-html-css-afa64acb-64a4-486d-96a5-f930fbb7ee32.png',
    courseName: 'Curso Definitivo de HTML y CSS',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-frontend-developer-8a49e681-3e22-408d-b886-2f47dfc9953a.png',
    courseName: 'Curso de Frontend Developer',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badges-html-css-b0a71550-d5e7-4e27-aca2-f09f1321a517.png',
    courseName: 'Curso de HTML y CSS 2019',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-ingles-para-principiantes-54931b71-2ddd-4d61-b214-49495e5e2c40.png',
    courseName: 'Curso de Inglés para Principiantes',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-intro-php-platzi-3508edb9-2e55-42d9-bbcc-e68bb9f8b78d.png',
    courseName: 'Curso de Introducción a PHP con Composer',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-nextjs-2259fc68-f86b-486e-bc09-95311a887985.png',
    courseName: 'Curso de Next.js',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-prework-configuracion-entorno-windows-8b168efb-2001-4f5e-938f-a333861ab31d.png',
    courseName:
      'Curso de Prework: Configuración de Entorno de Desarrollo en Windows',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-tailwind-css-2-0c5a963b-a978-4304-aa25-e24c834f624a.png',
    courseName: 'Curso de Tailwind CSS',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-webpack-3e3867f2-5bcf-4a7e-9af2-cf735850a791.png',
    courseName: 'Curso de Webpack',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-manos-final-1d5b2155-7bcc-4b6b-a2e2-e7dedcd13b81.png',
    courseName: 'Curso para Lavarse las Manos Correctamente',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-react-adec89d0-1c35-4c9c-847e-18c284dc79dd.png',
    courseName: 'Curso Práctico de React JS',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-profesional-javascript-13538df2-24ce-433f-9aa6-e34eed608e70.png',
    courseName: 'Curso Profesional de JavaScript',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-profesional-react-hooks-6b35d829-af8e-47e6-aef6-e4504db32bc4.png',
    courseName: 'Curso Profesional de React Hooks',
  },
  {
    courseImg:
      'https://static.platzi.com/media/achievements/badge-fundamentos-javascript-61c15bdf-0a83-4aed-8537-b4753e4071e1.png',
    courseName: 'Fundamentos de JavaScript 2018',
  },
]

export const summaryAboutMe =
  'Desde muy joven me ha llamado la atención las computadoras, el hardware, software y como ambos se complementan para trabajar al unísono.'

export const baseURL = 'https://marludev.com/'
