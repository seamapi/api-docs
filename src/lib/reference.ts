import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type EndpointTemplateContext,
  setEndpointTemplateContext,
} from './template-context.js'

const sdks = ['javascript']

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = EndpointTemplateContext & { layout: string }

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = {
    title: '',
    routes: [],
    resources: {},
    ...(metalsmith.metadata() as Metadata),
  }

  for (const route of metadata.routes ?? []) {
    for (const endpoint of route.endpoints) {
      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as unknown as File
      file.layout = 'api-reference.hbs'
      setEndpointTemplateContext(file, endpoint, metadata)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as unknown as File
        file.layout = 'sdk-reference.hbs'
        setEndpointTemplateContext(file, endpoint, metadata)
      }
    }
  }
}

export const postprocess = (
  files: Metalsmith.Files,
  _metalsmith: Metalsmith,
): void => {
  for (const file of Object.values(files)) {
    const contents = file.contents.toString('utf-8')
    file.contents = Buffer.from(
      contents.replaceAll('https://docs.seam.co/latest/', '/'),
    )
  }
}
