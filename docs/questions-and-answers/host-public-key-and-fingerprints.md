---
sidebar_label: '호스트 키와 지문을 취득하는 방법'
title: '호스트 키와 지문을 취득하는 방법'
sidebar_position: 6
---
SFTP To Go의 호스트의 공개 키를 얻으려면 [hostname]을 자신의 호스트 이름으로 바꾸고 다음 명령을 실행하십시오.:

```shell
ssh-keyscan [hostname]
```

호스트 지문 (fingerprint)을 얻으려면 [hostname]을 자신의 호스트 이름으로 바꾸고 다음 명령을 실행하십시오:

```shell
ssh-keyscan host | ssh-keygen -lf -
```
