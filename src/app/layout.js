import "./globals.css";

export const metadata = {
  title:"Social Profile Card",
  description: "My First Frontend Mentor Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );

}
