const fs = require("fs")
const ejs = require("ejs")
const path = require("path")

// Sample data conforming to the updated types
const data = {
  objectName: "Get a Client Session",
  objectDescription: "Get a specified client session.",
  methods: [
    {
      methodName: "GetClientSession",
      description:
        "Returns a specified [client session](../../core-concepts/authentication/client-session-tokens/).",
      swaggerSrc: "https://connect.getseam.com/openapi.json",
      swaggerPath: "/client_sessions/get",
      swaggerMethod: "post",
      parameters: [
        {
          name: "client_session_id",
          type: "String",
          required: false,
          description: "ID of the desired client session.",
        },
        {
          name: "user_identifier_key",
          type: "String",
          required: false,
          description:
            "Your own internal user ID for the user associated with the client session to retrieve.",
        },
      ],
      responseProperties: [
        {
          name: "workspace_id",
          description: "ID of the workspace that contains the client session",
        },
        {
          name: "token",
          description:
            "Client session token associated with the client session",
        },
        {
          name: "user_identifier_key",
          description: "Your own internal user ID for the user",
        },
        {
          name: "created_at",
          description: "Date and time at which the client session was created",
        },
        { name: "client_session_id", description: "ID of the client session" },
        {
          name: "device_count",
          description:
            "Number of devices to which the client session grants access",
        },
        {
          name: "connected_account_ids",
          description:
            "Array of connected account IDs associated with this client session",
        },
        {
          name: "connect_webview_ids",
          description:
            "Array of Connect Webview IDs associated with the client session",
        },
        {
          name: "user_identity_ids",
          description:
            "Array of user identity IDs on behalf of which the client session may act",
        },
      ],
      sampleRequest: `const clientSession = await seam.clientSessions.get({
    client_session_id: "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168",
  })`,
      sampleResponse: `{
    "workspace_id": "398d80b7-3f96-47c2-b85a-6f8ba21d07be",
    "token": "seam_cst1271Q3JUh_A3ECdSrrqgYp98SmB9qY2NGp",
    "user_identifier_key": "internal user ID 1",
    "created_at": "2023-12-26T04:23:46.829Z",
    "client_session_id": "c75d4330-ae01-4dfd-b6c5-f3e94e0d8168",
    "device_count": 4,
    "connected_account_ids": [
      "3ea0b67f-649f-4131-bfe3-f2035e77a3f9",
      "6e1cad57-b244-40ca-b4f3-30a46c8000d4"
    ],
    "connect_webview_ids": [],
    "user_identity_ids": []
  }`,
    },
  ],
}

// Path to the template file
const templatePath = path.join(__dirname, "templates", "template.ejs")

// Read the template file
fs.readFile(templatePath, "utf8", (err, templateSource) => {
  if (err) {
    console.error("Error reading template file:", err)
    return
  }

  // Render the template
  const markdownContent = ejs.render(templateSource, data)

  // Write the content to a .md file
  fs.writeFileSync("output.md", markdownContent, "utf8")

  console.log("Markdown file generated successfully.")
})
