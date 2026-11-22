import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <h1>404</h1>
      <h2>Page not found</h2>
      <p style={{ margin: '16px 0 24px' }}>
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>
      <Link to="/" style={{ textDecoration: 'underline' }}>
        Back to Main.
      </Link>
    </div>
  );
}
