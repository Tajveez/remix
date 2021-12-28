import {
  Link,
  LiveReload,
  Outlet,
} from "remix";


export default function App() {
  return (
    <Document title="Tajlogs">

      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({ title, children }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'Remix blog'}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className='logo'>Home</Link>
        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>

  )
}