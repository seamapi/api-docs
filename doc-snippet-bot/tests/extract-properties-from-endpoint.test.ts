import test from "ava"
import getOpenapiPropertiesForEndpoint from "../src/get-openapi-properties-for-endpoint"

test("extractPropertiesFromEndpoint from /accces_codes/create should return expected properties", async (t) => {
  const expectedProperties = {
    device_id: {
      type: "string",
      format: "uuid",
    },
    name: {
      type: "string",
    },
    starts_at: {
      type: "string",
    },
    ends_at: {
      type: "string",
    },
    code: {
      type: "string",
      minLength: 4,
      maxLength: 8,
      pattern: "^\\d+$",
    },
    sync: {
      default: false,
      type: "boolean",
    },
    attempt_for_offline_device: {
      default: true,
      type: "boolean",
    },
    common_code_key: {
      type: "string",
    },
    prefer_native_scheduling: {
      type: "boolean",
    },
    use_backup_access_code_pool: {
      type: "boolean",
    },
    allow_external_modification: {
      type: "boolean",
    },
    is_external_modification_allowed: {
      type: "boolean",
    },
  }

  const endpoint = "/access_codes/create"

  const fetchedProperties = await getOpenapiPropertiesForEndpoint(endpoint)

  t.deepEqual(fetchedProperties, expectedProperties)
})

//* return only POST method properties

test("extractPropertiesFromEndpoint from /accces_codes/create_multiple should return expected properties from the POST method", async (t) => {
  const expectedProperties = {
    device_ids: { type: "array", items: { type: "string", format: "uuid" } },
    behavior_when_code_cannot_be_shared: {
      default: "throw",
      type: "string",
      enum: ["throw", "create_random_code"],
    },
    name: { type: "string" },
    starts_at: { type: "string" },
    ends_at: { type: "string" },
    code: { type: "string", minLength: 4, maxLength: 8, pattern: "^\\d+$" },
    attempt_for_offline_device: { default: true, type: "boolean" },
    prefer_native_scheduling: { type: "boolean" },
    use_backup_access_code_pool: { type: "boolean" },
    allow_external_modification: { type: "boolean" },
    is_external_modification_allowed: { type: "boolean" },
  }

  const endpoint = "/access_codes/create_multiple"

  const fetchedProperties = await getOpenapiPropertiesForEndpoint(endpoint)

  t.deepEqual(fetchedProperties, expectedProperties)
})

test("extractPropertiesFromEndpoint from /locks/list should return expected properties including the description of properties", async (t) => {
  const expectedProperties = {
    connected_account_id: {
      type: "string",
      format: "uuid",
      description: "List all devices owned by this connected account",
    },
    connected_account_ids: {
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
      minItems: 1,
    },
    connect_webview_id: {
      type: "string",
      format: "uuid",
    },
    device_type: {
      oneOf: [
        {
          type: "string",
          enum: [
            "akuvox_lock",
            "august_lock",
            "brivo_access_point",
            "butterflymx_panel",
            "avigilon_alta_entry",
            "doorking_lock",
            "genie_door",
            "igloo_lock",
            "linear_lock",
            "lockly_lock",
            "kwikset_lock",
            "nuki_lock",
            "salto_lock",
            "schlage_lock",
            "seam_relay",
            "smartthings_lock",
            "wyze_lock",
            "yale_lock",
            "two_n_intercom",
            "controlbyweb_device",
            "ttlock_lock",
            "igloohome_lock",
            "hubitat_lock",
            "four_suites_door",
            "dormakaba_oracode_door",
          ],
        },
        {
          type: "string",
          enum: ["noiseaware_activity_zone", "minut_sensor"],
        },
        {
          type: "string",
          enum: ["ecobee_thermostat", "nest_thermostat"],
        },
      ],
    },
    device_types: {
      type: "array",
      items: {
        oneOf: [
          {
            type: "string",
            enum: [
              "akuvox_lock",
              "august_lock",
              "brivo_access_point",
              "butterflymx_panel",
              "avigilon_alta_entry",
              "doorking_lock",
              "genie_door",
              "igloo_lock",
              "linear_lock",
              "lockly_lock",
              "kwikset_lock",
              "nuki_lock",
              "salto_lock",
              "schlage_lock",
              "seam_relay",
              "smartthings_lock",
              "wyze_lock",
              "yale_lock",
              "two_n_intercom",
              "controlbyweb_device",
              "ttlock_lock",
              "igloohome_lock",
              "hubitat_lock",
              "four_suites_door",
              "dormakaba_oracode_door",
            ],
          },
          {
            type: "string",
            enum: ["noiseaware_activity_zone", "minut_sensor"],
          },
          {
            type: "string",
            enum: ["ecobee_thermostat", "nest_thermostat"],
          },
        ],
      },
    },
    manufacturer: {
      type: "string",
      enum: [
        "akuvox",
        "august",
        "avigilon_alta",
        "brivo",
        "butterflymx",
        "doorking",
        "four_suites",
        "genie",
        "igloo",
        "keywe",
        "kwikset",
        "linear",
        "lockly",
        "nuki",
        "philia",
        "salto",
        "samsung",
        "schlage",
        "seam",
        "unknown",
        "wyze",
        "yale",
        "minut",
        "two_n",
        "ttlock",
        "nest",
        "igloohome",
        "ecobee",
        "hubitat",
        "controlbyweb",
        "smartthings",
        "dormakaba_oracode",
      ],
    },
    device_ids: {
      type: "array",
      items: {
        type: "string",
        format: "uuid",
      },
    },
    limit: {
      default: 500,
      type: "number",
      nullable: true,
    },
    created_before: {
      type: "string",
      format: "date-time",
    },
    user_identifier_key: {
      type: "string",
    },
  }

  const endpoint = "/locks/list"

  const fetchedProperties = await getOpenapiPropertiesForEndpoint(endpoint)
  t.deepEqual(fetchedProperties, expectedProperties)
})
