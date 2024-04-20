import StealthLogo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <aside>
          <img
            className="w-12 h-12"
            src={StealthLogo}
            alt="Stealth on Docker"
          />
          <p>
            StealthOS
            <br />
            <span className="font-bold">
              The ultimate framework for your Cyber Security operations
            </span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/docs/"
          >
            Documentation
          </a>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/community/"
          >
            Community
          </a>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/blog/"
          >
            Blog
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">About Us</h6>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/team/"
          >
            Team
          </a>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/partners/"
          >
            Partners
          </a>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/donate/"
          >
            Donate
          </a>
          <a
            className="link link-hover"
            href="https://stealthos.khulnasoft.com/careers/"
          >
            Careers
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <a
            className="link link-hover"
            href="https://www.facebook.com/StealthOS/"
          >
            Facebook
          </a>
          <a className="link link-hover" href="https://twitter.com/stealthos">
            Twitter
          </a>
          <a
            className="link link-hover"
            href="https://www.instagram.com/stealthproject/"
          >
            Instagram
          </a>
          <a className="link link-hover" href="https://discord.gg/j7QTaCzAsm">
            Discord
          </a>
          <a className="link link-hover" href="https://t.me/stealthosgroup">
            Telegram
          </a>
          <a
            className="link link-hover"
            href="https://www.linkedin.com/company/stealthos/about/"
          >
            LinkedIn
          </a>
          <a
            className="link link-hover"
            href="https://www.reddit.com/r/StealthOS/"
          >
            Reddit
          </a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
