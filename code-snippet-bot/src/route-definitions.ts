export const useless_lines = [
  "formData: {}",
  "commonParams: {}",
  "queryParams: {}",
  "jsonBody: {}",
  "jsonResponse: {}",
]

// TODO import this from live connect
export const routeDefinitions = `
export interface Routes {
  '/access_codes/create': {
    route: '/access_codes/create'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      name?: string | undefined
      starts_at?: string | undefined
      ends_at?: string | undefined
      code?: string | undefined
      sync?: boolean
      attempt_for_offline_device?: boolean
      common_code_key?: string | undefined
      prefer_native_scheduling?: boolean | undefined
      use_backup_access_code_pool?: boolean | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
      access_code: {
        common_code_key: string | null
        is_scheduled_on_device?: boolean | undefined
        type: 'time_bound' | 'ongoing'
        is_waiting_for_code_assignment?: boolean | undefined
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: true
        starts_at?: string | undefined
        ends_at?: string | undefined
        status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
        is_backup_access_code_available: boolean
        is_backup?: boolean | undefined
        pulled_backup_access_code_id?: (string | null) | undefined
      }
    }
  }
  '/access_codes/create_multiple': {
    route: '/access_codes/create_multiple'
    method: 'POST' | 'PUT'
    queryParams: {}
    jsonBody: {
      device_ids: string[]
      behavior_when_code_cannot_be_shared?: 'throw' | 'create_random_code'
      name?: string | undefined
      starts_at?: string | undefined
      ends_at?: string | undefined
      code?: string | undefined
      attempt_for_offline_device?: boolean
      prefer_native_scheduling?: boolean | undefined
      use_backup_access_code_pool?: boolean | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      access_codes: Array<{
        common_code_key: string | null
        is_scheduled_on_device?: boolean | undefined
        type: 'time_bound' | 'ongoing'
        is_waiting_for_code_assignment?: boolean | undefined
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: true
        starts_at?: string | undefined
        ends_at?: string | undefined
        status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
        is_backup_access_code_available: boolean
        is_backup?: boolean | undefined
        pulled_backup_access_code_id?: (string | null) | undefined
      }>
    }
  }
  '/access_codes/delete': {
    route: '/access_codes/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      access_code_id: string
      sync?: boolean
    }
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/access_codes/get': {
    route: '/access_codes/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      access_code_id?: string | undefined
      code?: string | undefined
    }
    formData: {}
    jsonResponse: {
      access_code: {
        common_code_key: string | null
        is_scheduled_on_device?: boolean | undefined
        type: 'time_bound' | 'ongoing'
        is_waiting_for_code_assignment?: boolean | undefined
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: true
        starts_at?: string | undefined
        ends_at?: string | undefined
        status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
        is_backup_access_code_available: boolean
        is_backup?: boolean | undefined
        pulled_backup_access_code_id?: (string | null) | undefined
      }
    }
  }
  '/access_codes/list': {
    route: '/access_codes/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
      access_code_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      access_codes: Array<{
        common_code_key: string | null
        is_scheduled_on_device?: boolean | undefined
        type: 'time_bound' | 'ongoing'
        is_waiting_for_code_assignment?: boolean | undefined
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: true
        starts_at?: string | undefined
        ends_at?: string | undefined
        status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
        is_backup_access_code_available: boolean
        is_backup?: boolean | undefined
        pulled_backup_access_code_id?: (string | null) | undefined
      }>
    }
  }
  '/access_codes/pull_backup_access_code': {
    route: '/access_codes/pull_backup_access_code'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      access_code_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      backup_access_code: {
        common_code_key: string | null
        is_scheduled_on_device?: boolean | undefined
        type: 'time_bound' | 'ongoing'
        is_waiting_for_code_assignment?: boolean | undefined
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: true
        starts_at?: string | undefined
        ends_at?: string | undefined
        status: 'setting' | 'set' | 'unset' | 'removing' | 'unknown'
        is_backup_access_code_available: boolean
        is_backup?: boolean | undefined
        pulled_backup_access_code_id?: (string | null) | undefined
      }
    }
  }
  '/access_codes/simulate/create_unmanaged_access_code': {
    route: '/access_codes/simulate/create_unmanaged_access_code'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      name: string
      code: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      access_code:
        | {
            access_code_id: string
            code: string | null
            status: 'set'
            created_at: string | Date
            is_managed: false
            type: 'ongoing'
            starts_at: null
            ends_at: null
          }
        | {
            access_code_id: string
            code: string | null
            status: 'set'
            created_at: string | Date
            is_managed: false
            type: 'time_bound'
            starts_at: string | null
            ends_at: string | null
          }
    }
  }
  '/access_codes/unmanaged/convert_to_managed': {
    route: '/access_codes/unmanaged/convert_to_managed'
    method: 'POST' | 'PATCH'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
      force?: boolean | undefined
      sync?: boolean
    }
    formData: {}
    jsonResponse: {}
  }
  '/access_codes/unmanaged/delete': {
    route: '/access_codes/unmanaged/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
      sync?: boolean
    }
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/access_codes/unmanaged/get': {
    route: '/access_codes/unmanaged/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      access_code_id?: string | undefined
      code?: string | undefined
    }
    formData: {}
    jsonResponse: {
      access_code: {
        type: 'time_bound' | 'ongoing'
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: false
        starts_at: string | null
        ends_at: string | null
        status: 'set'
      }
    }
  }
  '/access_codes/unmanaged/list': {
    route: '/access_codes/unmanaged/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {
      access_codes: Array<{
        type: 'time_bound' | 'ongoing'
        access_code_id: string
        device_id: string
        name: string | null
        code: string | null
        created_at: string
        errors?: any
        warnings?: any
        is_managed: false
        starts_at: string | null
        ends_at: string | null
        status: 'set'
      }>
    }
  }
  '/access_codes/unmanaged/update': {
    route: '/access_codes/unmanaged/update'
    method: 'POST' | 'PATCH'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      access_code_id: string
      is_managed: boolean
      force?: boolean | undefined
    }
    formData: {}
    jsonResponse: {}
  }
  '/access_codes/update': {
    route: '/access_codes/update'
    method: 'POST' | 'PUT'
    queryParams: {}
    jsonBody: {
      name?: string | undefined
      starts_at?: string | undefined
      ends_at?: string | undefined
      code?: string | undefined
      sync?: boolean
      attempt_for_offline_device?: boolean
      prefer_native_scheduling?: boolean | undefined
      use_backup_access_code_pool?: boolean | undefined
      access_code_id: string
      device_id?: string | undefined
      type?: ('ongoing' | 'time_bound') | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/action_attempts/get': {
    route: '/action_attempts/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      action_attempt_id: string
    }
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/action_attempts/list': {
    route: '/action_attempts/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      action_attempt_ids: string[]
    }
    formData: {}
    jsonResponse: {
      action_attempts: Array<
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
      >
    }
  }
  '/client_sessions/create': {
    route: '/client_sessions/create'
    method: 'POST' | 'PUT'
    queryParams: {}
    jsonBody:
      | any
      | {
          user_identifier_key: string
          connect_webview_ids?: string[] | undefined
          connected_account_ids?: string[] | undefined
        }
    commonParams: {}
    formData: {}
    jsonResponse: {
      client_session: {
        token: string
        client_session_id: string
        created_at: string
      }
    }
  }
  '/client_sessions/delete': {
    route: '/client_sessions/delete'
    method: 'POST' | 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      client_session_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  '/client_sessions/list': {
    route: '/client_sessions/list'
    method: 'POST' | 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      client_sessions: Array<{
        user_identifier_key: string | null
        client_session_id: string
        created_at: string
        device_count: number
        token: string
        workspace_id: string
      }>
    }
  }
  '/connect_webviews/create': {
    route: '/connect_webviews/create'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_selection_mode?: ('none' | 'single' | 'multiple') | undefined
      custom_redirect_url?: string | undefined
      custom_redirect_failure_url?: string | undefined
      accepted_providers?:
        | Array<
            | 'akuvox'
            | 'august'
            | 'avigilon_alta'
            | 'brivo'
            | 'butterflymx'
            | 'schlage'
            | 'smartthings'
            | 'yale'
            | 'genie'
            | 'doorking'
            | 'salto'
            | 'lockly'
            | 'ttlock'
            | 'linear'
            | 'noiseaware'
            | 'nuki'
            | 'seam_relay_admin'
            | 'igloo'
            | 'kwikset'
            | 'minut'
            | 'my_2n'
            | 'controlbyweb'
            | 'nest'
            | 'igloohome'
            | 'ecobee'
            | 'hubitat'
            | 'yale_access'
          >
        | undefined
      provider_category?: ('stable' | 'internal_beta') | undefined
      custom_metadata?:
        | Record<string, string | number | null | boolean>
        | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      connect_webview: {
        connect_webview_id: string
        connected_account_id?: string | undefined
        url: string
        workspace_id: string
        device_selection_mode: 'none' | 'single' | 'multiple'
        accepted_providers: string[]
        accepted_devices: string[]
        any_provider_allowed: boolean
        any_device_allowed: boolean
        created_at: string
        login_successful: boolean
        status: 'pending' | 'failed' | 'authorized'
      }
    }
  }
  '/connect_webviews/delete': {
    route: '/connect_webviews/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {
      connect_webview_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/connect_webviews/get': {
    route: '/connect_webviews/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      connect_webview_id: string
    }
    formData: {}
    jsonResponse: {
      connect_webview: {
        connect_webview_id: string
        connected_account_id?: string | undefined
        url: string
        workspace_id: string
        device_selection_mode: 'none' | 'single' | 'multiple'
        accepted_providers: string[]
        accepted_devices: string[]
        any_provider_allowed: boolean
        any_device_allowed: boolean
        created_at: string
        login_successful: boolean
        status: 'pending' | 'failed' | 'authorized'
      }
    }
  }
  '/connect_webviews/list': {
    route: '/connect_webviews/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      connect_webviews: Array<{
        connect_webview_id: string
        connected_account_id?: string | undefined
        url: string
        workspace_id: string
        device_selection_mode: 'none' | 'single' | 'multiple'
        accepted_providers: string[]
        accepted_devices: string[]
        any_provider_allowed: boolean
        any_device_allowed: boolean
        created_at: string
        login_successful: boolean
        status: 'pending' | 'failed' | 'authorized'
      }>
    }
  }
  '/connect_webviews/view': {
    route: '/connect_webviews/view'
    method: 'GET'
    queryParams: {
      connect_webview_id: string
      auth_token: string
    }
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/connected_accounts/delete': {
    route: '/connected_accounts/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {
      connected_account_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/connected_accounts/get': {
    route: '/connected_accounts/get'
    method: 'GET'
    queryParams:
      | {
          connected_account_id: string
        }
      | {
          email: string
        }
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      connected_account: {
        connected_account_id?: string | undefined
        created_at?: string | undefined
        user_identifier?:
          | {
              username?: string | undefined
              api_url?: string | undefined
              email?: string | undefined
              phone?: string | undefined
              exclusive?: boolean | undefined
            }
          | undefined
        account_type?: string | undefined
        errors?: any
        warnings?: any
        custom_metadata?:
          | Record<string, string | number | boolean | null>
          | undefined
      }
    }
  }
  '/connected_accounts/list': {
    route: '/connected_accounts/list'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      connected_accounts: Array<{
        connected_account_id?: string | undefined
        created_at?: string | undefined
        user_identifier?:
          | {
              username?: string | undefined
              api_url?: string | undefined
              email?: string | undefined
              phone?: string | undefined
              exclusive?: boolean | undefined
            }
          | undefined
        account_type?: string | undefined
        errors?: any
        warnings?: any
        custom_metadata?:
          | Record<string, string | number | boolean | null>
          | undefined
      }>
    }
  }
  '/devices/delete': {
    route: '/devices/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  '/devices/get': {
    route: '/devices/get'
    method: 'GET'
    queryParams: {
      device_id?: string | undefined
      name?: string | undefined
    }
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      device: {
        device_id: string
        device_type:
          | 'akuvox_lock'
          | 'august_lock'
          | 'brivo_access_point'
          | 'butterflymx_panel'
          | 'doorking_lock'
          | 'genie_door'
          | 'igloo_lock'
          | 'linear_lock'
          | 'lockly_lock'
          | 'kwikset_lock'
          | 'nuki_lock'
          | 'salto_lock'
          | 'schlage_lock'
          | 'seam_relay'
          | 'smartthings_lock'
          | 'yale_lock'
          | 'two_n_intercom'
          | 'controlbyweb_device'
          | 'ttlock_lock'
          | 'igloohome_lock'
          | 'hubitat_lock'
          | 'noiseaware_activity_zone'
          | 'minut_sensor'
          | 'ecobee_thermostat'
          | 'nest_thermostat'
        capabilities_supported: string[]
        properties: {
          online: boolean
          name: string
          model: {
            display_name: string
          }
        } & Record<string, any>
        location?: any
        connected_account_id: string
        workspace_id: string
        errors: Array<{
          error_code: string
          message: string
        }>
        warnings: Array<{
          warning_code: string
          message: string
        }>
        created_at: string
        is_managed: true
      }
    }
  }
  '/devices/list': {
    route: '/devices/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      connected_account_id?: string | undefined
      connected_account_ids?: string[] | undefined
      connect_webview_id?: string | undefined
      device_type?:
        | (
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          )
        | undefined
      device_types?:
        | Array<
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          >
        | undefined
      manufacturer?:
        | (
            | 'akuvox'
            | 'august'
            | 'brivo'
            | 'butterflymx'
            | 'doorking'
            | 'genie'
            | 'igloo'
            | 'keywe'
            | 'kwikset'
            | 'linear'
            | 'lockly'
            | 'nuki'
            | 'philia'
            | 'salto'
            | 'samsung'
            | 'schlage'
            | 'seam'
            | 'unknown'
            | 'yale'
            | 'minut'
            | 'two_n'
            | 'ttlock'
            | 'nest'
            | 'igloohome'
            | 'ecobee'
            | 'hubitat'
          )
        | undefined
      device_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      devices: Array<{
        device_id: string
        device_type:
          | 'akuvox_lock'
          | 'august_lock'
          | 'brivo_access_point'
          | 'butterflymx_panel'
          | 'doorking_lock'
          | 'genie_door'
          | 'igloo_lock'
          | 'linear_lock'
          | 'lockly_lock'
          | 'kwikset_lock'
          | 'nuki_lock'
          | 'salto_lock'
          | 'schlage_lock'
          | 'seam_relay'
          | 'smartthings_lock'
          | 'yale_lock'
          | 'two_n_intercom'
          | 'controlbyweb_device'
          | 'ttlock_lock'
          | 'igloohome_lock'
          | 'hubitat_lock'
          | 'noiseaware_activity_zone'
          | 'minut_sensor'
          | 'ecobee_thermostat'
          | 'nest_thermostat'
        capabilities_supported: string[]
        properties: {
          online: boolean
          name: string
          model: {
            display_name: string
          }
        } & Record<string, any>
        location?: any
        connected_account_id: string
        workspace_id: string
        errors: Array<{
          error_code: string
          message: string
        }>
        warnings: Array<{
          warning_code: string
          message: string
        }>
        created_at: string
        is_managed: true
      }>
    }
  }
  '/devices/list_device_providers': {
    route: '/devices/list_device_providers'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      provider_category?: 'stable' | undefined
    }
    formData: {}
    jsonResponse: {
      device_providers: Array<{
        device_provider_name: string
        display_name: string
        image_url: string
        provider_categories: Array<'stable'>
      }>
    }
  }
  '/devices/unmanaged/list': {
    route: '/devices/unmanaged/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      connected_account_id?: string | undefined
      connected_account_ids?: string[] | undefined
      connect_webview_id?: string | undefined
      device_type?:
        | (
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          )
        | undefined
      device_types?:
        | Array<
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          >
        | undefined
      manufacturer?:
        | (
            | 'akuvox'
            | 'august'
            | 'brivo'
            | 'butterflymx'
            | 'doorking'
            | 'genie'
            | 'igloo'
            | 'keywe'
            | 'kwikset'
            | 'linear'
            | 'lockly'
            | 'nuki'
            | 'philia'
            | 'salto'
            | 'samsung'
            | 'schlage'
            | 'seam'
            | 'unknown'
            | 'yale'
            | 'minut'
            | 'two_n'
            | 'ttlock'
            | 'nest'
            | 'igloohome'
            | 'ecobee'
            | 'hubitat'
          )
        | undefined
      device_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      devices: Array<{
        device_id: string
        device_type:
          | 'akuvox_lock'
          | 'august_lock'
          | 'brivo_access_point'
          | 'butterflymx_panel'
          | 'doorking_lock'
          | 'genie_door'
          | 'igloo_lock'
          | 'linear_lock'
          | 'lockly_lock'
          | 'kwikset_lock'
          | 'nuki_lock'
          | 'salto_lock'
          | 'schlage_lock'
          | 'seam_relay'
          | 'smartthings_lock'
          | 'yale_lock'
          | 'two_n_intercom'
          | 'controlbyweb_device'
          | 'ttlock_lock'
          | 'igloohome_lock'
          | 'hubitat_lock'
          | 'noiseaware_activity_zone'
          | 'minut_sensor'
          | 'ecobee_thermostat'
          | 'nest_thermostat'
        connected_account_id: string
        capabilities_supported: string[]
        workspace_id: string
        errors: Array<{
          error_code: string
          message: string
        }>
        warnings: Array<{
          warning_code: string
          message: string
        }>
        created_at: string
        is_managed: false
        properties: {
          name: string
          online: boolean
          manufacturer?: string | undefined
          image_url?: string | undefined
          image_alt_text?: string | undefined
          model: {
            display_name: string
          }
        }
      }>
    }
  }
  '/devices/unmanaged/update': {
    route: '/devices/unmanaged/update'
    method: 'POST' | 'PATCH'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
      is_managed: true
    }
    formData: {}
    jsonResponse: {}
  }
  '/devices/update': {
    route: '/devices/update'
    method: 'POST' | 'PATCH'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
      properties?:
        | {
            name?: (string | null) | undefined
          }
        | undefined
      name?: (string | null) | undefined
      location?: {} | undefined
      is_managed?: boolean
    }
    formData: {}
    jsonResponse: {}
  }
  '/events/get': {
    route: '/events/get'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      event_id?: string | undefined
      event_type?: string | undefined
      device_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      event?:
        | {
            event_id: string
            device_id?: string | undefined
            event_type: string
            workspace_id: string
            created_at: Date
            occurred_at: Date
          }
        | undefined
      message?: string | undefined
    }
  }
  '/events/list': {
    route: '/events/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      since?: string | undefined
      between?: Array<string | Date> | undefined
      device_id?: string | undefined
      device_ids?: string[] | undefined
      access_code_id?: string | undefined
      access_code_ids?: string[] | undefined
      event_type?:
        | (
            | 'device.connected'
            | 'device.unmanaged.connected'
            | 'device.disconnected'
            | 'device.unmanaged.disconnected'
            | 'device.converted_to_unmanaged'
            | 'device.unmanaged.converted_to_managed'
            | 'device.removed'
            | 'device.tampered'
            | 'device.low_battery'
            | 'device.battery_status_changed'
            | 'access_code.created'
            | 'access_code.changed'
            | 'access_code.scheduled_on_device'
            | 'access_code.set_on_device'
            | 'access_code.removed_from_device'
            | 'access_code.failed_to_set_on_device'
            | 'access_code.delay_in_setting_on_device'
            | 'access_code.failed_to_remove_from_device'
            | 'access_code.delay_in_removing_from_device'
            | 'access_code.unmanaged.converted_to_managed'
            | 'access_code.unmanaged.failed_to_convert_to_managed'
            | 'access_code.unmanaged.created'
            | 'access_code.unmanaged.removed'
            | 'lock.locked'
            | 'lock.unlocked'
            | 'connected_account.connected'
            | 'connected_account.created'
            | 'connected_account.disconnected'
            | 'connected_account.completed_first_sync'
            | 'noise_sensor.noise_threshold_triggered'
            | 'access_code.backup_access_code_pulled'
          )
        | undefined
      event_types?:
        | Array<
            | 'device.connected'
            | 'device.unmanaged.connected'
            | 'device.disconnected'
            | 'device.unmanaged.disconnected'
            | 'device.converted_to_unmanaged'
            | 'device.unmanaged.converted_to_managed'
            | 'device.removed'
            | 'device.tampered'
            | 'device.low_battery'
            | 'device.battery_status_changed'
            | 'access_code.created'
            | 'access_code.changed'
            | 'access_code.scheduled_on_device'
            | 'access_code.set_on_device'
            | 'access_code.removed_from_device'
            | 'access_code.failed_to_set_on_device'
            | 'access_code.delay_in_setting_on_device'
            | 'access_code.failed_to_remove_from_device'
            | 'access_code.delay_in_removing_from_device'
            | 'access_code.unmanaged.converted_to_managed'
            | 'access_code.unmanaged.failed_to_convert_to_managed'
            | 'access_code.unmanaged.created'
            | 'access_code.unmanaged.removed'
            | 'lock.locked'
            | 'lock.unlocked'
            | 'connected_account.connected'
            | 'connected_account.created'
            | 'connected_account.disconnected'
            | 'connected_account.completed_first_sync'
            | 'noise_sensor.noise_threshold_triggered'
            | 'access_code.backup_access_code_pulled'
          >
        | undefined
      connected_account_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      events?:
        | Array<{
            event_id: string
            device_id?: string | undefined
            event_type: string
            workspace_id: string
            created_at: Date
            occurred_at: Date
          }>
        | undefined
      message?: string | undefined
    }
  }
  '/health': {
    route: '/health'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      ok: boolean
      msg: 'I\u2019m one with the Force. The Force is with me.'
      last_service_evaluation_at: string
      service_health_statuses: Array<{
        service: string
        status: 'healthy' | 'degraded' | 'down'
        description: string
      }>
    }
  }
  '/health/get_health': {
    route: '/health/get_health'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      ok: boolean
      msg: 'I\u2019m one with the Force. The Force is with me.'
      last_service_evaluation_at: string
      service_health_statuses: Array<{
        service: string
        status: 'healthy' | 'degraded' | 'down'
        description: string
      }>
    }
  }
  '/health/get_service_health': {
    route: '/health/get_service_health'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      service: string
    }
    formData: {}
    jsonResponse: {
      ok: true
      last_service_evaluation_at: string
      service_health: {
        service: string
        status: 'healthy' | 'degraded' | 'down'
        description: string
      }
    }
  }
  '/health/service/[service_name]': {
    route: '/health/service/[service_name]'
    method: 'GET'
    queryParams: {
      service_name: string
    }
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      ok: true
      last_service_evaluation_at: string
      service_health: {
        service: string
        status: 'healthy' | 'degraded' | 'down'
        description: string
      }
    }
  }
  '/locks/get': {
    route: '/locks/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      name?: string | undefined
    }
    formData: {}
    jsonResponse: {
      lock?: any
      device?: any
    }
  }
  '/locks/list': {
    route: '/locks/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      connected_account_id?: string | undefined
      connected_account_ids?: string[] | undefined
      connect_webview_id?: string | undefined
      device_type?:
        | (
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          )
        | undefined
      device_types?:
        | Array<
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          >
        | undefined
      manufacturer?:
        | (
            | 'akuvox'
            | 'august'
            | 'brivo'
            | 'butterflymx'
            | 'doorking'
            | 'genie'
            | 'igloo'
            | 'keywe'
            | 'kwikset'
            | 'linear'
            | 'lockly'
            | 'nuki'
            | 'philia'
            | 'salto'
            | 'samsung'
            | 'schlage'
            | 'seam'
            | 'unknown'
            | 'yale'
            | 'minut'
            | 'two_n'
            | 'ttlock'
            | 'nest'
            | 'igloohome'
            | 'ecobee'
            | 'hubitat'
          )
        | undefined
      device_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      locks?: any
      devices?: any
    }
  }
  '/locks/lock_door': {
    route: '/locks/lock_door'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      sync?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/locks/unlock_door': {
    route: '/locks/unlock_door'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      sync?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/noise_sensors/noise_thresholds/create': {
    route: '/noise_sensors/noise_thresholds/create'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      sync?: boolean
      name?: string | undefined
      starts_daily_at: string
      ends_daily_at: string
      noise_threshold_decibels?: number | undefined
      noise_threshold_nrs?: number | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/noise_sensors/noise_thresholds/delete': {
    route: '/noise_sensors/noise_thresholds/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {
      noise_threshold_id: string
      device_id: string
      sync?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/noise_sensors/noise_thresholds/get': {
    route: '/noise_sensors/noise_thresholds/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      noise_threshold_id: string
    }
    formData: {}
    jsonResponse: {
      noise_threshold: {
        noise_threshold_id: string
        device_id: string
        name: string
        noise_threshold_nrs?: number | undefined
        starts_daily_at: string
        ends_daily_at: string
        noise_threshold_decibels: number
      }
    }
  }
  '/noise_sensors/noise_thresholds/list': {
    route: '/noise_sensors/noise_thresholds/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {
      noise_thresholds: Array<{
        noise_threshold_id: string
        device_id: string
        name: string
        noise_threshold_nrs?: number | undefined
        starts_daily_at: string
        ends_daily_at: string
        noise_threshold_decibels: number
      }>
    }
  }
  '/noise_sensors/noise_thresholds/update': {
    route: '/noise_sensors/noise_thresholds/update'
    method: 'PUT' | 'POST'
    queryParams: {}
    jsonBody: {
      noise_threshold_id: string
      device_id: string
      sync?: boolean
      name?: string | undefined
      starts_daily_at?: string | undefined
      ends_daily_at?: string | undefined
      noise_threshold_decibels?: number | undefined
      noise_threshold_nrs?: number | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      action_attempt:
        | {
            status: 'success'
            action_type: string
            action_attempt_id: string
            result?: any
            error: null
          }
        | {
            status: 'pending'
            action_type: string
            action_attempt_id: string
            result: null
            error: null
          }
        | {
            status: 'error'
            action_type: string
            action_attempt_id: string
            result: null
            error: {
              type: string
              message: string
            }
          }
    }
  }
  '/noise_sensors/simulate/trigger_noise_threshold': {
    route: '/noise_sensors/simulate/trigger_noise_threshold'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/thermostats/climate_setting_schedules/create': {
    route: '/thermostats/climate_setting_schedules/create'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      schedule_type?: 'time_bound'
      device_id: string
      name?: string | undefined
      schedule_starts_at: string
      schedule_ends_at: string
      automatic_heating_enabled?: boolean | undefined
      automatic_cooling_enabled?: boolean | undefined
      hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
      cooling_set_point_celsius?: (number | undefined) | undefined
      heating_set_point_celsius?: (number | undefined) | undefined
      cooling_set_point_fahrenheit?: (number | undefined) | undefined
      heating_set_point_fahrenheit?: (number | undefined) | undefined
      manual_override_allowed?: boolean | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      climate_setting_schedule: {
        climate_setting_schedule_id: string
        schedule_type: 'time_bound'
        device_id: string
        name?: string | undefined
        schedule_starts_at: string
        schedule_ends_at: string
        created_at: string
        automatic_heating_enabled?: boolean | undefined
        automatic_cooling_enabled?: boolean | undefined
        hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
        cooling_set_point_celsius?: (number | undefined) | undefined
        heating_set_point_celsius?: (number | undefined) | undefined
        cooling_set_point_fahrenheit?: (number | undefined) | undefined
        heating_set_point_fahrenheit?: (number | undefined) | undefined
        manual_override_allowed?: boolean | undefined
      }
    }
  }
  '/thermostats/climate_setting_schedules/delete': {
    route: '/thermostats/climate_setting_schedules/delete'
    method: 'PUT' | 'POST' | 'DELETE'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      climate_setting_schedule_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  '/thermostats/climate_setting_schedules/get': {
    route: '/thermostats/climate_setting_schedules/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      climate_setting_schedule_id?: string | undefined
      device_id?: string | undefined
    }
    formData: {}
    jsonResponse: {
      climate_setting_schedule: {
        climate_setting_schedule_id: string
        schedule_type: 'time_bound'
        device_id: string
        name?: string | undefined
        schedule_starts_at: string
        schedule_ends_at: string
        created_at: string
        automatic_heating_enabled?: boolean | undefined
        automatic_cooling_enabled?: boolean | undefined
        hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
        cooling_set_point_celsius?: (number | undefined) | undefined
        heating_set_point_celsius?: (number | undefined) | undefined
        cooling_set_point_fahrenheit?: (number | undefined) | undefined
        heating_set_point_fahrenheit?: (number | undefined) | undefined
        manual_override_allowed?: boolean | undefined
      }
    }
  }
  '/thermostats/climate_setting_schedules/list': {
    route: '/thermostats/climate_setting_schedules/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id: string
    }
    formData: {}
    jsonResponse: {
      climate_setting_schedules: Array<{
        climate_setting_schedule_id: string
        schedule_type: 'time_bound'
        device_id: string
        name?: string | undefined
        schedule_starts_at: string
        schedule_ends_at: string
        created_at: string
        automatic_heating_enabled?: boolean | undefined
        automatic_cooling_enabled?: boolean | undefined
        hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
        cooling_set_point_celsius?: (number | undefined) | undefined
        heating_set_point_celsius?: (number | undefined) | undefined
        cooling_set_point_fahrenheit?: (number | undefined) | undefined
        heating_set_point_fahrenheit?: (number | undefined) | undefined
        manual_override_allowed?: boolean | undefined
      }>
    }
  }
  '/thermostats/climate_setting_schedules/update': {
    route: '/thermostats/climate_setting_schedules/update'
    method: 'PUT' | 'POST'
    queryParams: {}
    jsonBody: {
      climate_setting_schedule_id: string
      schedule_type?: 'time_bound'
      name?: string | undefined
      schedule_starts_at?: string | undefined
      schedule_ends_at?: string | undefined
      automatic_heating_enabled?: boolean | undefined
      automatic_cooling_enabled?: boolean | undefined
      hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
      cooling_set_point_celsius?: (number | undefined) | undefined
      heating_set_point_celsius?: (number | undefined) | undefined
      cooling_set_point_fahrenheit?: (number | undefined) | undefined
      heating_set_point_fahrenheit?: (number | undefined) | undefined
      manual_override_allowed?: boolean | undefined
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      climate_setting_schedule: {
        climate_setting_schedule_id: string
        schedule_type: 'time_bound'
        device_id: string
        name?: string | undefined
        schedule_starts_at: string
        schedule_ends_at: string
        created_at: string
        automatic_heating_enabled?: boolean | undefined
        automatic_cooling_enabled?: boolean | undefined
        hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
        cooling_set_point_celsius?: (number | undefined) | undefined
        heating_set_point_celsius?: (number | undefined) | undefined
        cooling_set_point_fahrenheit?: (number | undefined) | undefined
        heating_set_point_fahrenheit?: (number | undefined) | undefined
        manual_override_allowed?: boolean | undefined
      }
    }
  }
  '/thermostats/get': {
    route: '/thermostats/get'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      device_id?: string | undefined
      name?: string | undefined
    }
    formData: {}
    jsonResponse: {
      thermostat: {
        device_id: string
        device_type:
          | 'akuvox_lock'
          | 'august_lock'
          | 'brivo_access_point'
          | 'butterflymx_panel'
          | 'doorking_lock'
          | 'genie_door'
          | 'igloo_lock'
          | 'linear_lock'
          | 'lockly_lock'
          | 'kwikset_lock'
          | 'nuki_lock'
          | 'salto_lock'
          | 'schlage_lock'
          | 'seam_relay'
          | 'smartthings_lock'
          | 'yale_lock'
          | 'two_n_intercom'
          | 'controlbyweb_device'
          | 'ttlock_lock'
          | 'igloohome_lock'
          | 'hubitat_lock'
          | 'noiseaware_activity_zone'
          | 'minut_sensor'
          | 'ecobee_thermostat'
          | 'nest_thermostat'
        capabilities_supported: string[]
        properties: {
          online: boolean
          name: string
          model: {
            display_name: string
          }
        } & Record<string, any>
        location?: any
        connected_account_id: string
        workspace_id: string
        errors: Array<{
          error_code: string
          message: string
        }>
        warnings: Array<{
          warning_code: string
          message: string
        }>
        created_at: string
        is_managed: true
      }
    }
  }
  '/thermostats/list': {
    route: '/thermostats/list'
    method: 'GET' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      connected_account_id?: string | undefined
      connected_account_ids?: string[] | undefined
      connect_webview_id?: string | undefined
      device_type?:
        | (
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          )
        | undefined
      device_types?:
        | Array<
            | 'akuvox_lock'
            | 'august_lock'
            | 'brivo_access_point'
            | 'butterflymx_panel'
            | 'doorking_lock'
            | 'genie_door'
            | 'igloo_lock'
            | 'linear_lock'
            | 'lockly_lock'
            | 'kwikset_lock'
            | 'nuki_lock'
            | 'salto_lock'
            | 'schlage_lock'
            | 'seam_relay'
            | 'smartthings_lock'
            | 'yale_lock'
            | 'two_n_intercom'
            | 'controlbyweb_device'
            | 'ttlock_lock'
            | 'igloohome_lock'
            | 'hubitat_lock'
            | 'noiseaware_activity_zone'
            | 'minut_sensor'
            | 'ecobee_thermostat'
            | 'nest_thermostat'
          >
        | undefined
      manufacturer?:
        | (
            | 'akuvox'
            | 'august'
            | 'brivo'
            | 'butterflymx'
            | 'doorking'
            | 'genie'
            | 'igloo'
            | 'keywe'
            | 'kwikset'
            | 'linear'
            | 'lockly'
            | 'nuki'
            | 'philia'
            | 'salto'
            | 'samsung'
            | 'schlage'
            | 'seam'
            | 'unknown'
            | 'yale'
            | 'minut'
            | 'two_n'
            | 'ttlock'
            | 'nest'
            | 'igloohome'
            | 'ecobee'
            | 'hubitat'
          )
        | undefined
      device_ids?: string[] | undefined
    }
    formData: {}
    jsonResponse: {
      thermostats: Array<{
        device_id: string
        device_type:
          | 'akuvox_lock'
          | 'august_lock'
          | 'brivo_access_point'
          | 'butterflymx_panel'
          | 'doorking_lock'
          | 'genie_door'
          | 'igloo_lock'
          | 'linear_lock'
          | 'lockly_lock'
          | 'kwikset_lock'
          | 'nuki_lock'
          | 'salto_lock'
          | 'schlage_lock'
          | 'seam_relay'
          | 'smartthings_lock'
          | 'yale_lock'
          | 'two_n_intercom'
          | 'controlbyweb_device'
          | 'ttlock_lock'
          | 'igloohome_lock'
          | 'hubitat_lock'
          | 'noiseaware_activity_zone'
          | 'minut_sensor'
          | 'ecobee_thermostat'
          | 'nest_thermostat'
        capabilities_supported: string[]
        properties: {
          online: boolean
          name: string
          model: {
            display_name: string
          }
        } & Record<string, any>
        location?: any
        connected_account_id: string
        workspace_id: string
        errors: Array<{
          error_code: string
          message: string
        }>
        warnings: Array<{
          warning_code: string
          message: string
        }>
        created_at: string
        is_managed: true
      }>
    }
  }
  '/thermostats/set_cooling_set_point': {
    route: '/thermostats/set_cooling_set_point'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      cooling_set_point_celsius?: number | undefined
      cooling_set_point_fahrenheit?: number | undefined
      sync?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/thermostats/set_mode': {
    route: '/thermostats/set_mode'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      automatic_heating_enabled?: boolean | undefined
      automatic_cooling_enabled?: boolean | undefined
      hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
      sync?: boolean
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/thermostats/update': {
    route: '/thermostats/update'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      device_id: string
      default_climate_setting: {
        automatic_heating_enabled?: boolean | undefined
        automatic_cooling_enabled?: boolean | undefined
        hvac_mode_setting?: ('off' | 'heat' | 'cool' | 'heat_cool') | undefined
        cooling_set_point_celsius?: (number | undefined) | undefined
        heating_set_point_celsius?: (number | undefined) | undefined
        cooling_set_point_fahrenheit?: (number | undefined) | undefined
        heating_set_point_fahrenheit?: (number | undefined) | undefined
        manual_override_allowed?: boolean | undefined
      }
    }
    commonParams: {}
    formData: {}
    jsonResponse: {}
  }
  '/webhooks/create': {
    route: '/webhooks/create'
    method: 'POST'
    queryParams: {}
    jsonBody: {
      url: string
      event_types?: string[]
    }
    commonParams: {}
    formData: {}
    jsonResponse: {
      webhook: {
        webhook_id: string
        url: string
        event_types?: string[] | undefined
        secret?: string | undefined
      }
    }
  }
  '/webhooks/delete': {
    route: '/webhooks/delete'
    method: 'DELETE' | 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {
      webhook_id: string
    }
    formData: {}
    jsonResponse: {}
  }
  '/webhooks/get': {
    route: '/webhooks/get'
    method: 'GET'
    queryParams: {
      webhook_id: string
    }
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      webhook: {
        webhook_id: string
        url: string
        event_types?: string[] | undefined
        secret?: string | undefined
      }
    }
  }
  '/webhooks/list': {
    route: '/webhooks/list'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      webhooks: Array<{
        webhook_id: string
        url: string
        event_types?: string[] | undefined
        secret?: string | undefined
      }>
    }
  }
  '/workspaces/get': {
    route: '/workspaces/get'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      workspace?:
        | {
            workspace_id: string
            name: string
            is_sandbox: boolean
            connect_partner_name: string | null
          }
        | undefined
    }
  }
  '/workspaces/list': {
    route: '/workspaces/list'
    method: 'GET'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      workspaces: Array<{
        workspace_id: string
        name: string
        is_sandbox: boolean
      }>
    }
  }
  '/workspaces/reset_sandbox': {
    route: '/workspaces/reset_sandbox'
    method: 'POST'
    queryParams: {}
    jsonBody: {}
    commonParams: {}
    formData: {}
    jsonResponse: {
      message: string
    }
  }
}
`
  // This is redundant since these lines are typically code?: string | undefined
  .replace(/string \| undefined/g, "string")
  .split("\n")
  .filter((l) => useless_lines.some((ul) => l.includes(ul)) === false)
  .join("\n")
