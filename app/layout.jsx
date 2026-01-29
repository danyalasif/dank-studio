import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | DANK Studio',
    default: 'DANK Studio'
  },
  description:
    'Branding, copywriting, and web development under one roof. We bring a cohesive brand to life for startups and established brands.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/dk_favicon.png" type="image/png" sizes="any" />
      </head>
      <body className="font-sans antialiased text-navy-black bg-off-white">
        <div className="flex min-h-screen flex-col">
          <div className="mx-auto flex w-full max-w-6xl grow flex-col px-6 sm:px-12">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
