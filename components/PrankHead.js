import Head from 'next/head'

export default function PrankHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.jpg" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://chicag0tribune.netlify.app" />
      <meta property="og:image" content="/icon.png" />
      <meta property="og:description" content="See the latest news from the Chicag0 Tribune" />
      <meta property="og:site_name" content="Chicag0 Tribune" />
      <meta name="monetization" content="$ilp.uphold.com/rEgHHBQGDUDP" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content="See the latest news from the Chicag0 Tribune." />
      <meta name="twitter:creator" content="@cassidoo" />
      <meta name="twitter:image" content="https://chicag0tribune.netlify.app/icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    </Head>
  )
}
