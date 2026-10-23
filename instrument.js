// Sentry must be initialized before any other module (e.g. express) is loaded
// so that its auto-instrumentation can hook into them.
if (process.env.SENTRY_ENABLED === "true") {
	const Sentry = require('@sentry/node');
	const { nodeProfilingIntegration } = require('@sentry/profiling-node');

	Sentry.init({
		dsn: process.env.SENTRY_DSN,
		integrations: [
			nodeProfilingIntegration(),
		],
		tracesSampleRate: 0.01,
		// Relative to tracesSampleRate
		profilesSampleRate: 1.0,
	});
}
