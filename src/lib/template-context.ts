import type { Blueprint, Endpoint, Route } from '@seamapi/blueprint'

export interface EndpointTemplateContext {
  description: string
  title: string
  path: string
  request: {
    preferredMethod: string
    parameters: Array<{
      name: string
      required: boolean
      description: string
    }>
  }
  response: {
    description: string
    resourceType: string | null
    properties: null | Array<{
      name: string
      description: string
    }>
  }
  codeSamples: Array<{
    title: string
    description: string
    code: Record<
      string,
      {
        title: string
        request: string
        response: string
      }
    >
  }>
}

export function setEndpointTemplateContext(
  file: Partial<EndpointTemplateContext>,
  endpoint: Endpoint,
  blueprint: Blueprint,
): void {
  file.description = endpoint.description
  file.title = endpoint.title
  file.path = endpoint.path

  file.request = {
    preferredMethod: endpoint.request?.preferredMethod ?? '',
    parameters: endpoint.request.parameters.map((param) => ({
      name: param.name,
      required: param.isRequired,
      description: param.description,
    })),
  }

  file.response = {
    description: endpoint.response.description,
    properties: null,
    resourceType: null,
  }

  if (endpoint.response.responseType !== 'void') {
    const { resourceType } = endpoint.response
    file.response.resourceType = resourceType
    const resource = blueprint.resources[resourceType]
    file.response.properties =
      resource?.properties.map((property) => ({
        name: property.name,
        description: property.description,
      })) ?? null
  }

  file.codeSamples = endpoint.codeSamples.map((sample) => ({
    title: sample.title,
    description: sample.description,
    code: sample.code,
  }))
}

export interface ResourceTemplateContext {
  resource: {
    name: string
    properties: Array<{
      name: string
      type: string
      description: string
      format: string
      isDeprecated: boolean
    }>
  }
}

export function setApiResourceTemplateContext(
  file: Partial<ResourceTemplateContext>,
  route: Route,
  blueprint: Blueprint,
): void {
  const endpointWithResourceType = route.endpoints.find(
    (e) =>
      e.response.responseType === 'resource' ||
      e.response.responseType === 'resource_list',
  )

  if (
    endpointWithResourceType == null ||
    !('resourceType' in endpointWithResourceType.response)
  ) {
    return
  }

  const resourceName = endpointWithResourceType.response.resourceType
  const resource = blueprint.resources[resourceName]

  if (resource == null) return

  file.resource = {
    name: resourceName,
    properties: resource.properties.map(
      ({ name, jsonType, description, format, isDeprecated }) => ({
        name,
        type: jsonType,
        description,
        format,
        isDeprecated,
      }),
    ),
  }
}
