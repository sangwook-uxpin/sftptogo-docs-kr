---
sidebar_label: 'FileZilla 연결의 시간 초과 처리 방법'
title: 'FileZilla 연결의 시간 초과 처리 방법'
sidebar_position: 2
---
FileZilla를 사용하여 SFTP To Go에 연결할 때 20초 동안 비활성화 된 후 'Connection timed out'과 같은 오류 메시지가 표시되는 경우 다음 단계에 따라 클라이언트 측의 구성를 변경하십시오:

* Windows의 경우, 【편집】을 클릭 → 【설정】
* Mac의 경우, 【FileZilla】를 클릭 → 【설정】
* 【연결(Connection)】에서 타임아웃의 값(초)을 600으로 늘린다 (디폴트는 20초).
* 【확인(OK)】을 클릭하여 변경 사항을 저장하고 다시 연결합니다.

![Filezilla settings screenshot](https://devcenter2.assets.heroku.com/article-images/5192-imported-1562776507-fz_settings.b2df2047.png)
