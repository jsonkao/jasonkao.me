[Portfolio website](https://jasonkao.me). Built with SvelteKit.

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.

## SSL

To renew the SSL certificate, go to the AWS Certificate Manager, request a new public certificate on jasonkao.me and www.jasonkao.me, and create the records automatically with Route 53. Then, in CloudFront, change the SSL certificate to the new one.
