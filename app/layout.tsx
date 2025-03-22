import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body> {/* ajout la fond inter au body, Inter sera la font principal de la plateform + antialiased Classe qui lisse la police  */}
    </html>
  );
}
