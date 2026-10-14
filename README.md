# ghcr-oidc-lab

fork したリポジトリの Actions でイメージをビルドし、fork 所有者の GHCR へ push する。
続けて OIDC トークンを添えて外部の API へデプロイを要求する。

## 手順

1. このリポジトリを fork する
2. fork の Actions タブでワークフローを有効にする
3. fork の main へ push する

## 動作

`server.mjs` はポート 3000 で応答する。

- `/healthz` は `ok` を返す
- それ以外は `marker.txt` の内容を返す。イメージの入れ替わりの確認に使う
