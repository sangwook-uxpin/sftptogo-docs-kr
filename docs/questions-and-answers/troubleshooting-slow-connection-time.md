---
sidebar_label: '느린 연결 시간에 대한 해결책'
title: '느린 연결 시간에 대한 해결책'
sidebar_position: 1
---
SFTP To Go 호스트에 연결을 개시하는데 시간이 오래 걸리거나, 클라이언트에서 연결 시간 초과가 발생한다면, 다음 순서를 따라 해결해 보세요:

1. 다른 네트워크에서 SFTP To Go에 연결을 시도해 보세요. 로컬 네트워크에 이러한 연결 문제를 일으키는 경우가 있습니다. 새로운 네트워크에서 잘 작동하는 경우라면, 기존 네트워크에서 발견된 문제를 해결하는 것이 좋습니다.

1. 다른 컴퓨터에서 SFTP To Go에 연결을 시도해 보세요. 이러한 연결 문제를 유발하는 원인이 컴퓨터 또는 서비스(예: 바이러스 백신 소프트웨어)에 있을 수 있습니다. 새 컴퓨터에서 잘 작동하는 경우 해당 컴퓨터에서 원인을 찾아 해결하는 것이 좋습니다.

1. 위의 두 테스트를 실행 한 후에도 여전히 연결 시간이 느리거나 연결 시간 초과가 발생하면 Mac 콘솔에서 다음 명령 패턴을 사용하여 타임스탬프를 이용해 클라이언트측 로그를 취득해 보세요. `URL`을 조직의 URL(SFTP To Go 대시보드에서 복사한)로 바꾸십시오:

```shell
sftp -v URL 2>&1 | while read line; do echo "`date -u +"%Y-%m-%dT%H:%M:%SZ"` $line"; done
```
예제:

```shell
sftp -v sftp://a9fe70b82zbb94f7160dfcBfcd7@yellow-rectangle-14793.sftptogo.com 2>&1 | while read line; do echo "`date -u +"%Y-%m-%dT%H:%M:%SZ"` $line"; done
```
요청이 있을 때 패스워드를 넣은 다음 `enter/return`을 누릅니다.

`Connected to ... .sftptogo.com.`이 표시 될 때까지 기다린 다음 `quit`을 입력하고 `enter/return`을 누릅니다.

클라이언트 로그를 복사하여 화면 오른쪽 하단의 채팅 버튼을 통해 컴퓨터의 시간대(타임존 설정 정보)와 함께 서포트센터로 보내주시면 서버쪽에서 발생한 문제를 조사해 드립니다.
