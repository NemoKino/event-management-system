'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { usePathname, useRouter } from 'next/navigation';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isAdmin = pathname?.startsWith('/admin');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleAdminToggle = async () => {
        if (isAdmin) {
            // Already admin, go to home
            router.push('/');
        } else {
            // Switch to admin demo
            try {
                const res = await fetch('/api/auth/demo', { method: 'POST' });
                if (res.ok) {
                    router.push('/admin');
                    router.refresh(); // Refresh to ensure middleware/cookies are picked up
                } else {
                    alert('Demo mode is not enabled or failed to login');
                }
            } catch (err) {
                console.error(err);
                alert('An error occurred');
            }
        }
    };

    return (
        <header className={styles.header}>
            <div className={`container ${styles.inner}`}>
                <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
                    Event Recruiter
                </Link>

                <button
                    className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                    aria-label="Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <Link href="/list" className={styles.link} onClick={() => setIsOpen(false)}>
                        イベントを探す
                    </Link>
                    <Link href="/organizer" className={styles.link} onClick={() => setIsOpen(false)}>
                        イベントを掲載する
                    </Link>
                    <Link href="/about" className={styles.link} onClick={() => setIsOpen(false)}>
                        このサイトについて
                    </Link>
                    <Link href="/contact" className={styles.link} onClick={() => setIsOpen(false)}>
                        お問い合わせ
                    </Link>
                    
                    {/* Admin Toggle Button */}
                    <button 
                        className={`${styles.adminToggle} ${isAdmin ? styles.adminToggleActive : ''}`} 
                        onClick={handleAdminToggle}
                        title={isAdmin ? "ユーザー表示に切り替え" : "管理画面（デモ用）に切り替え"}
                    >
                        {isAdmin ? 'User View' : 'Admin View'}
                    </button>
                </nav>
            </div>
        </header>
    );
}
