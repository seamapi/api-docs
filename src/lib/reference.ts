import type { Blueprint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import {
  type EndpointTemplateContext,
  type ResourceTemplateContext,
  setApiResourceTemplateContext,
  setEndpointTemplateContext,
} from './template-context.js'

const sdks = ['javascript']

const baseUrl = 'https://docs.seam.co/latest/'

type Metadata = Partial<Pick<Blueprint, 'routes' | 'resources'>>

type File = EndpointTemplateContext &
  ResourceTemplateContext & { layout: string }

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
    const k = `api-clients${route.path.replace('acs', 'access-control-systems')}/README.md`
    files[k] = {
      contents: Buffer.from('\n'),
    }
    const file = files[k] as unknown as File
    file.layout = 'api-resource.hbs'
    setApiResourceTemplateContext(file, route, metadata)

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
  for (const [name, file] of Object.entries(files)) {
    const contents = file.contents.toString('utf-8')
    file.contents = Buffer.from(
      contents
        .replaceAll(new RegExp(`(${baseUrl}[^)]+)`, 'g'), '$1.md')
        .replaceAll(
          baseUrl,
          new Array(name.split('/').length).fill('').join('../'),
        ),
    )
  }
}
