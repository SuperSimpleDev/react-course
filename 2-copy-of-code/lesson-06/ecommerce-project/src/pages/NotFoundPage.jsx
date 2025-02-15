import { Header } from '../components/Header';
import './NotFoundPage.css';

export function NotFoundPage() {
  return (
    <>
      {/* You can choose whatever title and favicon you want. */}
      <title>404 Page Not Found</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />

      {/* Remember to add the <Header> so it looks like it's
      on the same website. */}
      <Header />

      {/* You can style this message however you want. */}
      <div className="not-found-message">
        Page not found
      </div>
    </>
  );
}