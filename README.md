# emojiseed-line-before

CLI that reproduces:

```sh
head -n $(($(grep -n TERM english.txt | cut -f1 -d:) - 1)) emoji.txt | tail -n 1

