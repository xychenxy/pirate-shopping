const { expressjwt: jwt } = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
	secret: jwks.expressJwtSecret({
		cache: true,
		rateLimit: true,
		jwksRequestsPerMinute: 5,
		jwksUri: `https://${process.env.auth0_domain}/.well-known/jwks.json`,
	}),
	audience: process.env.audience,
	issuer: `https://${process.env.auth0_domain}/`,
	algorithms: ["RS256"],
});

module.exports = { jwtCheck };
