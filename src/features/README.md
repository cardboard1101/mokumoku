## featuresディレクトリ

**ロジック+コンポーネントのファイルは全てfeaturesディレクトリの中に記述。**
基本的にはappディレクトリから呼び出されることになる。

features
├── common
│   ├── forms
│   │   ├── components
│   │   │   ├── Input.tsx
│   │   │   └── Select.tsx
│   │   ├── hooks.ts
│   │   └── stores.ts
│   │
│   └── tags
│       ├── components
│       │   ├── TagItem.tsx
│       │   └── TagList.tsx
│       ├── hooks.ts
│       └── stores.ts
│
└── routes
    ├── post
    │   └── list
    │       ├── components
    │       │   ├── List.tsx
    │       │   ├── Search.tsx
    │       │   └── Tabs.tsx
    │       ├── endpoint.ts
    │       ├── hooks.ts
    │       └── stores.ts
    │
    └── profile
        ├── components
        │   ├── Email.tsx
        │   └── Password.tsx
        ├── endpoint.ts
        ├── hooks.ts
        └── stores.ts

## features内のディレクトリ・ファイルについて

**componentsディレクトリ**
見た目部分をまとめたディレクトリ
ロジックに関してはhooks.tsに記述する

**endpoint.tsファイル**
APIを実行エンドポイントを記載。
ここには基本的にfetchやaxiosといったものだけを記載する

**hooks.tsファイル**
コンポーネントの内、ロジックを記載

**stores.tsファイル**
ファイル間を跨いだstateを管理。
1ファイル内で完結するstate管理のみuseStateを使用する。