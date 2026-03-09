import '../styles/globals.css';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

export const metadata = {
  title: {
    template: '%s | DANK Studio',
    default: 'DANK Studio'
  },
  description:
    'Strategy, branding, and positioning under one roof. Copywriting, web development, social media management. We bring a cohesive brand to life for startups and established brands.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/dk_favicon.png" type="image/png" sizes="any" />
      </head>
      <body className="font-sans antialiased text-navy-black">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
