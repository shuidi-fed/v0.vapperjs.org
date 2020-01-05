#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

echo 'v0.vapperjs.org' > CNAME

git init
git config user.name 'HcySunYang'
git config user.email 'HcySunYang@outlook.com'
git add -A
git commit -m 'deploy'

git push -f git@github.com:shuidi-fed/v0.vapperjs.org.git master:gh-pages

cd -

pwd

rm -rf docs/.vuepress/dist