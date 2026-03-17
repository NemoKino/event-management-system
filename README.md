# Event Recruiter Platform

仮想空間（VR等）のコミュニティ向けに設計された、イベントスタッフ・キャスト募集管理プラットフォームです。
Next.js (App Router) と TypeScript を使用して構築されており、実用性とパフォーマンスを重視しています。

## 🚀 主な機能

- **3ステップ申請システム**: 入力（画像処理含む）→ プレビュー → 本人確認 のスムーズな公開フロー。
- **動的スケジューリング**: 繰り返しイベントや特定日時の柔軟な設定。
- **管理ダッシュボード**: 申請の承認・非承認、DMテンプレートによる連絡、掲載状況の一括管理。
- **SEO & OGP 最適化**: 検索結果やSNSシェア時に最適な情報を表示。
- **レスポンシブ対応**: PC・モバイル双方で最適化されたプレミアムなUIデザイン。

## 🛠 技術スタック

- **Frontend**: Next.js 14 (App Router), CSS Modules
- **Backend**: Next.js Server Actions / API Routes
- **Database**: Vercel Postgres (SQL)
- **Validation**: Zod
- **Email**: Resend
- **Images**: Cloudinary, react-easy-crop

## 🏁 セットアップ

### 1. 環境変数の設定
`.env.local` ファイルを作成し、以下の項目を設定してください：

```env
POSTGRES_URL=
CLOUDINARY_URL=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
ADMIN_EMAIL=
```

### 2. インストールと実行
```bash
npm install
npm run dev

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
