'use client'

import NavigationBar from "@/components/navigation-bar"

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="h-full">
            <NavigationBar />
            {children}
        </main>
    )
}

export default Layout;