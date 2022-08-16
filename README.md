# 💰 Crypto Tracker

## 📌 Skills

- React(CRA with TypeScript), react-router-dom, react-helmet-async, styled-components, react-query, [coin paprika API](https://api.coinpaprika.com/v1/coins), [Crypto Icon API](https://cryptocurrencyliveprices.com/), [JSON QuickType](https://app.quicktype.io/?l=ts), [APEX CHARTS](https://apexcharts.com)

## 📌 Deploy URL

- [https://dingunote.github.io/top100-crypto-tracker/](https://dingunote.github.io/top100-crypto-tracker/)

## 📌 Page Directory

- `/`: 메인 페이지 모든 코인 목록
- `/:id`: 해당 id를 가지고 있는 코인의 상세 정보
- `/:id/chart`: 해당 코인의 차트 정보
- `/:id/price`: 해당 코인의 가격 정보

## 📌 File Path

```bash
├── public                     Static Files
│
└── src
    ├── routes
    │   ├── Coins.tsx          Main Page
    │   ├── Coin.tsx           Detail Page
    │   ├── Chart.tsx          Detail/Chart Page
    │   └── Price.tsx          Detail/Price Page
    ├── api.tsx                API Source
    ├── App.tsx
    ├── index.tsx
    ├── GlobalStyle.tsx        Global Style Component
    ├── Router.tsx             Router Component
    └── theme.tsx             Theme Component
```

## 📌 Issue
- coin-paprika API가 유료화 되는 바람에 임시로 다른 API를 사용했지만 중간 중간 코인의 싱크가 맞지 않아 차트와 가격 정보를 확인할 때 데이터가 없어서 에러가 난다.
