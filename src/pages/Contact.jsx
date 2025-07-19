import { useTheme } from "../context/themecontext";

export default function Contact() {
  const { isDarkMode } = useTheme();
    const url = `https://cal.com/dragon-god-jymexq${isDarkMode ? "?theme=dark" : ""}`;
  return (
    <div
      className={`min-h-screen px-4 py-12  ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold">Schedule a Meeting</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Let’s connect! Choose a time that works best for you.
        </p>

      
        <div className="w-full h-[650px] rounded-lg overflow-hidden shadow-lg border">
          <iframe
            src={url}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="Schedule with Me"
            allow="clipboard-write"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

