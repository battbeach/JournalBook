import { h } from 'preact';
import { Link } from 'preact-router/match';
import { url } from '../../utils/date';

const today = url(new Date());

const Header = ({ onboarded = false }) => (
  <header class="header">
    <div class="wrap">
      <Link href="/">
        <svg width="27" height="20" xmlns="http://www.w3.org/2000/svg">
          <title>Home</title>
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24.9 19l-5.36-9 5.37-9H3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h21.9z"
              stroke="#FFF"
              stroke-width="2"
            />
            <path
              d="M8.74 11.89h1.36c0 .64.45 1.06 1.11 1.06.73 0 1.13-.44 1.13-1.28V6.25h1.38v5.44c0 1.59-.94 2.5-2.5 2.5-1.48 0-2.48-.9-2.48-2.3z"
              fill="#FFF"
            />
          </g>
        </svg>
      </Link>
      {onboarded && (
        <Link href={today}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <title>Write</title>
            <path
              d="M20 1h-13.5c-1.9 0-3.5 1.6-3.5 3.5v15c0 1.9 1.6 3.5 3.5 3.5h13.5c0.6 0 1-0.4 1-1v-20c0-0.6-0.4-1-1-1zM6.5 3h12.5v13h-12.5c-0.5 0-1 0.1-1.5 0.4v-11.9c0-0.8 0.7-1.5 1.5-1.5zM6.5 21c-0.8 0-1.5-0.7-1.5-1.5s0.7-1.5 1.5-1.5h12.5v3h-12.5z"
              fill="currentColor"
            />
          </svg>
        </Link>
      )}
      <Link href={onboarded ? '/settings/' : '/get-started/'}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <title>Settings</title>
          <path
            d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4zM12 14c-1.1 0-2-0.9-2-2s0.9-2 2-2c1.1 0 2 0.9 2 2s-0.9 2-2 2z"
            fill="currentColor"
          />
          <path
            d="M20.3 15.4c0.1-0.2 0.3-0.4 0.7-0.4 1.7 0 3-1.3 3-3s-1.3-3-3-3h-0.2c-0.2 0-0.4-0.1-0.5-0.3 0-0.1 0-0.1-0.1-0.2-0.1-0.2-0.1-0.5 0.2-0.8 1.2-1.2 1.2-3.1 0-4.2v0c0 0 0 0 0 0-0.6-0.6-1.3-0.9-2.1-0.9 0 0 0 0 0 0-0.8 0-1.6 0.3-2.2 0.9-0.2 0.2-0.5 0.2-0.7 0.1-0.2 0-0.4-0.3-0.4-0.6 0-1.7-1.3-3-3-3s-3 1.3-3 3v0.2c0 0.2-0.1 0.4-0.3 0.5-0.1 0-0.1 0-0.2 0.1-0.2 0.1-0.5 0-0.8-0.2-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0.1 4.3 0.2 0.2 0.2 0.5 0.1 0.8-0.1 0.2-0.4 0.4-0.7 0.4-1.7 0-3 1.3-3 3s1.3 3 3 3h0.2c0.3 0 0.5 0.2 0.6 0.4s0.1 0.5-0.2 0.8c-0.6 0.6-0.9 1.3-0.9 2.1s0.3 1.5 0.9 2.1c0 0 0 0 0 0 1.2 1.2 3.1 1.2 4.3-0.1 0.2-0.2 0.5-0.2 0.8-0.1s0.4 0.3 0.4 0.7c0 1.7 1.3 3 3 3s3-1.3 3-3v-0.2c0-0.3 0.2-0.5 0.4-0.6s0.5-0.1 0.8 0.2c1.2 1.2 3.1 1.2 4.2 0 1.2-1.2 1.2-3.1-0.1-4.3-0.1-0.2-0.2-0.5-0.1-0.7 0 0 0 0 0 0zM18.5 14.6c-0.4 1-0.2 2.1 0.6 3 0.2 0.2 0.3 0.4 0.3 0.7s-0.1 0.5-0.3 0.7c-0.2 0.2-0.4 0.3-0.7 0.3 0 0 0 0 0 0-0.3 0-0.5-0.1-0.8-0.4-0.8-0.8-1.9-1-2.9-0.5-1 0.4-1.6 1.4-1.6 2.4v0.2c0 0.6-0.4 1-1 1s-1-0.4-1-1c0 0 0-0.1 0-0.1 0-1.1-0.7-2-1.7-2.4-0.3-0.2-0.7-0.2-1.1-0.2-0.7 0-1.4 0.3-1.9 0.8-0.4 0.4-1 0.4-1.4 0 0 0 0 0 0 0v0c-0.2-0.2-0.3-0.4-0.3-0.7s0.1-0.5 0.4-0.8c0.8-0.8 1-1.9 0.5-2.9-0.4-1-1.4-1.6-2.4-1.6h-0.2c-0.6 0-1-0.4-1-1s0.4-1 1-1c0 0 0.1 0 0.1 0 1.1 0 2-0.7 2.4-1.7s0.2-2.1-0.6-3c-0.4-0.4-0.4-1 0-1.4s1-0.4 1.5 0.1c0.7 0.7 1.8 0.9 2.7 0.6 0.1 0 0.2 0 0.3-0.1 1-0.4 1.6-1.4 1.6-2.4v-0.2c0-0.6 0.4-1 1-1s1 0.4 1 1.1c0 1.1 0.6 2 1.6 2.4s2.1 0.2 3-0.6c0.2-0.2 0.4-0.3 0.7-0.3v0c0.3 0 0.5 0.1 0.7 0.3 0 0 0 0 0 0 0.4 0.4 0.4 1-0.1 1.5-0.7 0.7-0.9 1.8-0.6 2.7 0 0.1 0 0.2 0.1 0.3 0.4 1 1.4 1.6 2.4 1.6h0.2c0.6 0 1 0.4 1 1s-0.4 1-1.1 1c-1 0-2 0.6-2.4 1.6z"
            fill="currentColor"
          />
        </svg>
      </Link>
    </div>
  </header>
);

export default Header;
