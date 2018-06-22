import Link from 'next/link';

const links = [
  { href: '/resume', label: 'Resume' },
  { href: '/note', label: 'Note' },
  { href: '/contact', label: 'Contact' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>Home</a>
        </Link>{' '}
      </li>

      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link prefetch href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(nav) {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
      }
      a:hover {
        color: #3db077;
        border-color: #3db077;
        transition: color 250ms 50ms ease-in-out;
      }
    `}</style>
  </nav>
);

export default Nav;
