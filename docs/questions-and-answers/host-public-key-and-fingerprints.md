---
sidebar_label: 'How to get my host key and fingerprint'
title: 'How to get my host key and fingerprint'
sidebar_position: 6
---
To get your SFTP To Go's host public key, replace [hostname] with your hostname and run the following command:

```shell
ssh-keyscan [hostname]
```

To get your host fingerprint, replace [hostname] with your hostname and run the following command:

```shell
ssh-keyscan host | ssh-keygen -lf -
```
