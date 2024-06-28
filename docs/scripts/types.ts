export interface Property {
  name: string
  type: string
  required?: boolean
  description: string
}

export interface Method {
  methodName: string
  description: string
  swaggerSrc: string
  swaggerPath: string
  swaggerMethod: string
  parameters: Property[]
  responseProperties: Property[]
  sampleRequest: string
  sampleResponse: string
}

export interface BlueprintEndpoint {
  objectName: string
  objectDescription: string
  methods: Method[]
}
