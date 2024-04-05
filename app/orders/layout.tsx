
export default async function OrdersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="md:flex">
                
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gradient-to-br from-slate-100 to-stone-300 p-5">
                    {children}
                </main>
            </div>
        </>
    )
}