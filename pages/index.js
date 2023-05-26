import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://v2.amp-cdn.net/images/480468a77ad0a1a6b1b2e773d9371249e13e3ca2aff757'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

