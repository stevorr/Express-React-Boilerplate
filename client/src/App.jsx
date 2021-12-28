import { Routes, Route, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import About from './components/routes/About'
import Contact from './components/routes/Contact'
import PageNotFound from './components/routes/PageNotFound'
import Home from './components/routes/Home'
import GlobalNav from './components/GlobalNav'

export default function App() {

  //test API call to backend and log response. express proxy address is set in client/package.json
  useEffect(() => {
    fetch('/test')
      .then(response => response.text())
      .then(data => console.log({ data }))
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> {/* "index" here marks the default component which gets rendered in the "<Outlet />" component below when no child route is specified */}
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div>
      <GlobalNav />
      <main>
        <Outlet />
      </main>
    </div>
  );
}