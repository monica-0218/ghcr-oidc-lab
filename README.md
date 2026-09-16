# ghcr-oidc-lab

fork したリポジトリの Actions から OIDC トークンを取得し、fork 所有者の GHCR へイメージを push する挙動を確認する。

## 手順

1. このリポジトリを fork する
2. fork の Settings → Actions でワークフローを有効にする
3. fork へ push する
4. ワークフローのログで OIDC の claim を確認する
5. Packages からイメージの可視性を public にする

## 出力

`ghcr.io/<fork の所有者>/ghcr-oidc-lab:<commit sha>`

## 動作

`server.mjs` はポート 8080 で応答し、`BUILD_MARKER` 環境変数の値を返す。
イメージの入れ替わりを確認するために使う。

テストコミット
