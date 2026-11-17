// Static export has no server, so the root redirect is done in plain HTML
// (meta refresh) plus a tiny script. English is always the default.
const redirectScript = `location.replace("/en/" + location.hash);`;

/* eslint-disable @next/next/no-html-link-for-pages -- plain anchors in the static redirect page */
export default function RootPage() {
  return (
    <>
      <meta httpEquiv="refresh" content="0;url=/en/" />
      <link rel="canonical" href="https://caglarcakmak.site/en/" />
      <script dangerouslySetInnerHTML={{ __html: redirectScript }} />
      <noscript>
        <a href="/en/">Continue to the site</a>
      </noscript>
    </>
  );
}
