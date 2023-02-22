import {
  json,
  type LinksFunction,
  type MetaFunction,
  type LoaderFunction,
  type HeadersFunction,
} from '@remix-run/server-runtime';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from '@remix-run/react';
import { Partytown } from '@builder.io/partytown/react';
import appStyles from '~/styles/app.css';

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: appStyles },
  ];
};
export const meta: MetaFunction = () => {
  return {
    viewport: 'width=device-width, initial-scale=1',
  };
};

export const headers: HeadersFunction = () => {
  return {
    'Cross-Origin-Embedder-Policy': 'credentialless',
    'Cross-Origin-Opener-Policy': 'same-origin',
  };
};

export const loader: LoaderFunction = async ({}) => {
  return json({ date: new Date() });
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{'Jish.Dev'}</title>
        <Partytown debug={process.env.NODE_ENV === 'development'} forward={['dataLayer.push', '__cfBeacon']} />
        <Meta />
        <Links />
      </head>
      <body className="w-full h-full overflow-x-hidden bg-[rgba(21,16,25)] m-0 p-0 overflow-hidden;">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'production' && <script
          defer
          type="text/partytown"
          src={'/scripts/cfa.js'}
          data-cf-beacon={JSON.stringify({ token: '60176af6d4724c15a9bc6f4e1dcbc259', version: '2023.2.0', si: 100})}
        />}
        {process.env.NODE_ENV === 'development' && <LiveReload port={Number(8002)} />}
      </body>
    </html>
  );
}
