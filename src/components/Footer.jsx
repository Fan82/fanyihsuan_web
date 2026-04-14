export default function Footer() {
  return (
    <footer className="py-2 flex justify-center items-center text-main gap-8">
      <a
        href="/files/FanYiH_resume.pdf"
        target="_blank"
        className="transition-colors hover:text-red-500"
      >
        Resume
      </a>
      <a
        href="mailto:fys840802@gmail.com"
        className="transition-colors hover:text-red-500"
      >
        Email
      </a>
      <a
        href="https://www.linkedin.com/in/fanyihsuan/"
        target="_blank"
        rel="noreferrer"
        className="transition-colors hover:text-red-500"
      >
        LinkedIn
      </a>
      <a
        href="https://www.behance.net/congee_88"
        target="_blank"
        rel="noreferrer"
        className="transition-colors hover:text-red-500"
      >
        Behance
      </a>
    </footer>
  );
}
