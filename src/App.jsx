import { Route, Routes } from 'react-router-dom'
import { LoaderProvider } from './context/LoaderContext.jsx'
import ConstructionLoader from './components/ConstructionLoader.jsx'
import PageTransitionLoader from './components/PageTransitionLoader.jsx'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Products from './pages/Products.jsx'
import Projects from './pages/Projects.jsx'
import Quality from './pages/Quality.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <LoaderProvider>
      <ConstructionLoader />
      <PageTransitionLoader />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="projects" element={<Projects />} />
          <Route path="quality" element={<Quality />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LoaderProvider>
  )
}
