export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="footer-title">ePortal</p>
        <p className="footer-note">Container for all functional apps B-K</p>
      </div>
      <div className="footer-actions">
        <button className="ghost-button" type="button">
          System health
        </button>
        <button className="secondary-button" type="button">
          Release notes
        </button>
      </div>
    </footer>
  );
}
