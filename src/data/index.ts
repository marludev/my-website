import { IDataQuestions, IDataCardsTechnology } from './type'

export const dataCardsTechnology: Array<IDataCardsTechnology> = [
  { title: 'React', technology: 'react' },
  { title: 'Node', technology: 'node' },
  { title: 'Graphql', technology: 'graphql' },
  { title: 'Wordpress', technology: 'wordpress' },
]

export const dataQuestions: Array<IDataQuestions> = [
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
    icon: 'project',
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
