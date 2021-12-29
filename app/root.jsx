import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
} from "remix";
import globalStylesCss from '~/styles/global.css'

export const links = () => [
  {
    rel: 'stylesheet',
    href: globalStylesCss
  }
]

export const meta = () => {
  const description = 'A blog for logging'
  const keywords = 'react, blog, words'

  return {
    description,
    keywords
  }
}

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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <title>{title ? title : 'Remix blog'}</title>
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
      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <Layout>
        <h1>Error</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}