import WebLinks from '../components/WebLinks';
import Seo from '../components/Seo';
import seoData from '../next-seo.config';


export default function Home() {
  const page = {
    title: seoData.openGraph.title,
    excerpt: 'home',
    slug: '/',
    coverImage: 'https://raw.githubusercontent.com/agheamusic/agheamusic.github.io/main/images/It%20Never%20Ends.png'
  };
  return (
    <>
      <Seo page={page} />
      <WebLinks />
    </>
  )
}

