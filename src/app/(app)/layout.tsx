"use client"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body>
                <div
                    className="mx-auto max-w-screen-lg"
                >
                    <div
                        className="flex min-h-screen flex-col"
                    >
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}