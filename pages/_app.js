import '../styles/globals.css'
import '../design/common.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from 'react'
import '../design/navbar.css'
import '../design/about.css'
import '../design/whyus.css'
import '../design/newarrivals.css'
import '../design/info.css'
import '../design/footer.css'
import '../design/images.css'
import '../design/homepage.css'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />
}
export default MyApp