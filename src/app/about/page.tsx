
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import styles from './page.module.css';

export const metadata = {
    title: 'このサイトについて | Event Recruiter',
    description: 'Event Recruiterの運営目的と管理者について',
};

export default function AboutPage() {
    const adminName = process.env.NEXT_PUBLIC_ADMIN_DISPLAY_NAME || 'admin';
    const adminSnsId = process.env.NEXT_PUBLIC_ADMIN_TWITTER_ID || 'admin';
    const portfolioMode = process.env.NEXT_PUBLIC_PORTFOLIO_MODE === 'true';
    const adminImage = process.env.NEXT_PUBLIC_ADMIN_IMAGE_URL || '/images/admin-profile.png';

    return (
        <>
            <Header />
            <main className={styles.container}>
                <section className={styles.section}>
                    <h2 className={styles.subTitle}>管理者について</h2>
                    <div className={styles.profileCard}>
                        <div className={styles.adminImageWrapper}>
                            <Image
                                src={adminImage}
                                alt="Admin Avatar"
                                width={600}
                                height={338}
                                className={styles.adminImage}
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                        <div className={styles.adminInfo}>
                            <span className={styles.adminName}>管理者: {adminName}</span>
                        </div>

                        {!portfolioMode && (
                            <>
                                <div className={styles.avatarList}>
                                    <div className={styles.avatarTitle}>よく使うアバター</div>
                                    <div className={styles.avatars}>
                                        <span className={styles.avatarTag}>ルナト</span>
                                        <span className={styles.avatarTag}>墨惺</span>
                                        <span className={styles.avatarTag}>凪</span>
                                        <span className={styles.avatarTag}>彼方</span>
                                    </div>
                                </div>

                                <p className={styles.text} style={{ marginBottom: 0 }}>
                                    VRコミュニティで気ままに遊んでいます。<br />
                                    PublicやFriend+などで見かけたら、ぜひ気軽に話しかけてくださいね！
                                </p>
                            </>
                        )}
                        {portfolioMode && (
                            <p className={styles.text} style={{ marginBottom: 0 }}>
                                VRコミュニティの利便性向上を目指し、Next.jsやTypescriptを用いて開発を行っています。<br />
                                技術的な詳細やアーキテクチャについては、リポジトリのドキュメントをご参照ください。
                            </p>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
