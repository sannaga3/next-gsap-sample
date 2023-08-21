export default function Header() {
  return (
    <nav>
      <ul className="text-white text-2xl font-semibold flex space-x-5 px-5 pt-7 pb-7 ml-10">
        <li>
          <a href="/">
            <span className="tracking-widest">home</span>
          </a>
        </li>
        <li>
          <a href="/about" className="tracking-widest">
            about
          </a>
        </li>
      </ul>
    </nav>
  );
}
