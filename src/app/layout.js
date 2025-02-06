import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-full ">{children}</div>
      </body>
    </html>
  );
}
