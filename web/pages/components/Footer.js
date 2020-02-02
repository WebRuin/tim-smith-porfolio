import '../scss/footer.scss';

const Footer = () => (
  <footer>
    <p>
      Tim Smith · <span>Front-End Developer</span> · &copy; 2020
    </p>
    <section className="wrapper">
      <div className="git">
        <pre>
          <span className="comment">// Git URL</span>
          <br />
          https://github.com/WebRuin/Tim-Smith
        </pre>
      </div>
      <div className="npm">
        <pre>
          <span className="comment">// A really nerdy resume</span>
          <br />
          npm i -g tim-web-dev-resume
          <br />
          npx tim-web-dev-resume
        </pre>
      </div>
    </section>
  </footer>
);

export default Footer;
