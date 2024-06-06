import "./globals.css";
import NavBar from "@/components/Navbar";
import { montserrat } from './font'
import React from 'react'
import Provider from "../components/Provider";


export const metadata = {
  title: 'Mega store'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-300 ${montserrat.className}`}>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  )
}


// function layout({ children }) {

//   return (
//     <html lang="en">

//       <body className={`bg-gray-300 ${montserrat.className}`}>
//         <NavBar />

//         {children}
//       </body>
//     </html>
//   );

// }

// export default layout