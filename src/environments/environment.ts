// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

class Config {
  static ServerAuth = "http://192.168.1.66:5566";
  static ApiServiceUrl = "http://192.168.1.66:50341";
}

export const environment = {
	production: false,

	mpassRequestEndpoint: `${Config.ApiServiceUrl}/api/identity/generatempassr`,

	ServerAuth: Config.ServerAuth,

	ApiServiceUrl: Config.ApiServiceUrl,

	openId: `${Config.ServerAuth}/.well-known/openid-configuration`,

	TOKEN_ENDPOINT: `${Config.ServerAuth}/connect/token`,

	USERINFO_ENDPOINT: `${Config.ServerAuth}/connect/userinfo`,

	GRANT_TYPE: "password",

	REVOCATION_ENDPOINT: `${Config.ServerAuth}/connect/revocation`,

	SCOPE: "PIGDWebAPI offline_access openid profile email",

	CLIENT_ID: "PIGD Angular SPA"
};
