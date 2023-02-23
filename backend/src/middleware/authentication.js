const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");
const cloud_key = require("../../auth/cloud_key.json");

const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${cloud_key.auth0_domain}/.well-known/jwks.json`,
	}),
	audience: cloud_key.auth0_audience,
	issuer: `https://${cloud_key.auth0_domain}/`,
	algorithms: ["RS256"],
});

module.exports = { jwtCheck };
