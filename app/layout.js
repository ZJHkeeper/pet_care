import "../styles.css";

export const metadata = {
  title: "Paw Bloom 宠物洗护",
  description: "Paw Bloom 宠物洗护店，提供宠物洗澡、护理、造型、SPA 和会员预约服务。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
