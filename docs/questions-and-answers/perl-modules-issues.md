---
sidebar_label: 'Perl 모듈 문제'
title: 'Perl 모듈 문제'
sidebar_position: 3
---
클라이언트에서 Perl 모듈을 사용할 때 손상된 파일 또는 빈 파일이 문제가 발생하는 것으로 알려져 있습니다. Perl 모듈을 사용하는 것이 불가피한 경우 다음 단계를 따르십시오:

1. 옵션 `backend` => `Net_SSH2`를 사용하십시오. 여기에 `%attr`을 추가하고 `QueueDepth=1`을 삭제하십시오. 
2. Metaspan웹사이트에 있는 CPAN모듈 `Net::SFTP::Foreign::Backend::Net_SSH2`에 액세스되었는지 확인하십시오. 
3. 배치 모드를 사용하여 Perl 스크립트에서 Plink를 사용하거나 `"SFTP"`를 실행하십시오. 명령 자체는 인터랙티브 하기 때문에 이 경우 배치 모드가 잘 작동할 것입니다. 

문제가 지속되는 경우 [Wireshark](https://support.metageek.com/hc/en-us/articles/200808940-Capturing-Packets-with-WiresharkWe're)를 실행하는 동안 문제를 재현하여 네트워크 패킷을 캡처하고, Wireshark의 결과물, 손상된 파일의 경로, SFTP 크라이언트의 이름과 버전을 SFTP To Go서포트에게 보내주십시오.
