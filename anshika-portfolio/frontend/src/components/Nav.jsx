export default function Nav({ logoText }) {
  return (
    <nav>
      <div className="wrap">
        <div className="logo">✦ <span>{logoText}</span></div>
        <div className="navlinks">
          <a href="#about">about</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
          <a href="#achievements">achievements</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </nav>
  );
}
