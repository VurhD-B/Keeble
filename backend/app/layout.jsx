import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Keeble',
  description: 'Customize and build your own keyboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=' bg-titan-white '>
        <Provider>
        <main>
          <Nav />
          {children}
        </main>
        </Provider>
      </body>
    </html>
  )
}
