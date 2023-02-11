import '../styles/globals.css'
import React from "react";
import Sidebar from '../components/Sidebar';
import {SessionProvider} from "../components/SessionProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
      <SessionProvider session={pageProps.session}>
        <div className="flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
            <Sidebar />
          </div>
          <div className="bg-[#343541] flex-1">{children}</div>
        </div>
      </SessionProvider>
      </body>
    </html>
  )
}
