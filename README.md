# episode1

## 教材動画【目次】

動画|セクション名|対応するブランチ名
----|-----|----
[00:00:00](https://www.youtube.com/watch?v=f55qeKGgB_M&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=19&t=0s) |  Introduction|  
[00:07:52](https://www.youtube.com/watch?v=f55qeKGgB_M&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=19&t=472s) |  Module 1: What is React? |  
[00:18:14](https://www.youtube.com/watch?v=f55qeKGgB_M&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=19&t=1094s) |  Module 2: JSX, Components, Props |  Mojule2-Jsx-Components-Props  
[00:38:02](https://www.youtube.com/watch?v=f55qeKGgB_M&list=PLpPqplz6dKxW5ZfERUPoYTtNUNvrEebAR&index=19&t=2282s) | Module 3: Ternary Operators, Lists and CSS | TernaryOperators<br>List-and-CSS  

### MarkdownkLinkのカスタマイズについて

Vscodeの拡張機能である「MarkDownLint」は便利だがチェックが厳密過ぎて使いにくい場合は下記の手順でチェックツールをカスタマイズできる。  

手順

1. プロジェクトのルートにある.vscodeディレクトリの中にsettings.jsonファイルを作成する
1. 次のようにsettings.jsonを編集する。ここでは、HTML要素の埋め込みを制限するルール「MD033」を解除するという例を揚げる。

    ```javascript
    {
        "markdownlint.congig: {
            "MD033": false
        }
    }

    ```
