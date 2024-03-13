import { Sidebar } from '@/components/side-bar/side-bar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <Sidebar>{children}</Sidebar>;
}
