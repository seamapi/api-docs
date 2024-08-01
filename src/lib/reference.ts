import type { Blueprint, Endpoint } from '@seamapi/blueprint'
import type Metalsmith from 'metalsmith'

import { setFileContext } from './context.js'

const sdks = ['javascript']

export const reference = (
  files: Metalsmith.Files,
  metalsmith: Metalsmith,
): void => {
  const metadata = metalsmith.metadata()

  for (const route of (metadata as Blueprint).routes ?? []) {
    for (const endpoint of route.endpoints) {
      const k = `api${endpoint.path}.md`
      files[k] = {
        contents: Buffer.from('\n'),
      }
      const file = files[k] as Partial<TemplateContext>
      file.layout = 'api-reference.hbs'
      file.endpoint = endpoint
      setFileContext(file, metadata)

      for (const sdk of sdks) {
        const k = `sdk/${sdk}${endpoint.path}.md`
        files[k] = {
          contents: Buffer.from('\n'),
        }
        const file = files[k] as Partial<TemplateContext>
        file.layout = 'sdk-reference.hbs'
        file.endpoint = endpoint
        setFileContext(file, metadata)
      }
    }
  }
}

interface TemplateContext {
  layout: string
  endpoint: Endpoint
  endpointJson?: string
  description?: string
  title?: string
  path?: string
  request?: {
    preferredMethod?: string
    parameters?: Array<{
      name: string
      required?: boolean
      description?: string
    }>
  }
  response?: {
    description: string
    properties: Array<{
      name: string
      description: string
    }>
  }
  codeSamples?: Array<{
    title: string
    description: string
    code: Record<
      string,
      {
        request: string
        response: string
      }
    >
  }>
}
