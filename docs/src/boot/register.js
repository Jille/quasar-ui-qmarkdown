import { boot } from 'quasar/wrappers'
import JsonApiViewer from 'quasar-ui-json-api-viewer/src/components/JsonApiViewer'
import MarkdownPage from '../components/MarkdownPage.vue'
import MarkdownLink from '../components/MarkdownLink.vue'
import ExampleViewer, { setDefaults } from 'quasar-ui-example-viewer/src'
import { version } from '@quasar/quasar-ui-qmarkdown/src/version.js'
// import { useQMarkdownGlobalProps } from '@quasar/quasar-ui-qmarkdown/src/QMarkdown.js'


setDefaults({
  locationUrl: 'https://github.com/quasarframework/quasar-ui-qmarkdown/tree/next/docs/src/examples',
  jsPaths: [`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@${ version }/dist/index.umd.min.js`],
  cssPaths: [
    `https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown@${ version }/dist/index.min.css`,
    'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css'
  ],
  noEdit: true
})

// defaults for QMarkdown - test
// useQMarkdownGlobalProps({
//   noAbbreviation: true,
//   noBlockquote: true
// })

export default boot(({ app }) => {
  app.use(ExampleViewer)
  app.component('JsonApiViewer', JsonApiViewer)
  app.component('MarkdownPage', MarkdownPage)
  app.component('MarkdownLink', MarkdownLink)
})
