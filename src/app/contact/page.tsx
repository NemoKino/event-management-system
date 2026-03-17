import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import Accordion from '@/components/ui/Accordion';
import styles from './page.module.css';

export const metadata = {
    title: 'お問い合わせ | Event Recruiter',
    description: 'Event Recruiterへのお問い合わせ',
};

export default function ContactPage() {
    const adminTwitterId = process.env.NEXT_PUBLIC_ADMIN_TWITTER_ID || 'admin';
    const twitterUrl = `https://x.com/${adminTwitterId.replace('@', '')}`;

    return (
        <>
            <Header />
            <main className={styles.container}>
                <h1 className={styles.title}>お問い合わせ</h1>

                <div className={styles.card}>
                    <p className={styles.text}>
                        本サイトは制作実績（ポートフォリオ）用のデモサイトです。<br />
                        機能のデモンストレーションを目的としており、実際のお問い合わせやイベント掲載の受付は行っておりません。
                    </p>
                </div>

                <div className={styles.faqSection}>
                    <h2 className={styles.faqTitle}>よくある質問（デモ）</h2>
                    <Accordion items={[
                        {
                            question: 'イベントの掲載方法は？',
                            answer: '「イベントを掲載する」リンクから申請フォームのデモをお試しいただけます。\n申請後は管理画面（ADMIN VIEW）にて承認フローを確認することが可能です。'
                        },
                        {
                            question: '掲載期間やキャンセルについては？',
                            answer: 'デモ版では申請時に掲載期間を選択できますが、一定期間で自動的にリセットされる場合があります。'
                        },
                        {
                            question: '掲載に費用はかかりませんか？',
                            answer: 'はい、本サイトの全機能はデモとして無料で公開されています。'
                        },
                        {
                            question: '実際のイベントを掲載したいのですが',
                            answer: '申し訳ございません。本サイトはポートフォリオ用の展示作品であり、実運用は想定しておりません。'
                        },
                        {
                            question: 'トラブルが発生した場合は？',
                            answer: 'デモサイトの利用により生じたいかなる不利益についても、制作者は責任を負いかねます。'
                        }
                    ]} />
                </div>
            </main>
            <Footer />
        </>
    );
}
