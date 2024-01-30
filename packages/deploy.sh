#!/usr/bin/env sh

# 抛出异常信息
set -e

push_addr=`git remote get-url --push origin` # 推送地址
commit_info=`git describe --all --always --long` # 提交信息
dist_path=`docs\.vuepress\dist` # 打包地址
push_branch=gh-pages #github -> 具体项目 -> settings -> Pages -> Branch -> gh-pages 配置默认分支

npm run docs:build #生成静态资源站点

cd $dist_path

git init
git add -A
git commit -m "deploy: $commit_info"
git push -f $push_addr Head:$push_branch

cd -
rm -rf $dist_path