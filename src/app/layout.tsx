import "./globals.css";

import { Inter, Press_Start_2P } from "next/font/google";

const inter = Inter({
  subsets:["latin"],
});

const pixel = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--pixel",
});

export default function RootLayout({
 children,
}:{
 children:React.ReactNode
}) {
 return (
  <html lang="ru">
<body className={`${inter.className} ${pixel.className}`} >
  {children}
</body>
  </html>
 )
}