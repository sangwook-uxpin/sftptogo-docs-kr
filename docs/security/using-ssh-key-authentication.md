---
sidebar_label: 'SSH 키 인증서 사용'
title: 'SSH 키 인증서 사용'
sidebar_position: 11
---
SSH 키 인증은 패스워드 없이 클라이언트와 서버간에 비공개 정보를 전달하지 않고 클라우드 스토리지에 연결할 수 있게 해줍니다.

비밀/공개 키 쌍이 없는 경우 로컬 컴퓨터에서 키 쌍을 생성하십시오 (도움말을 보려면 [여기](https://sftptogo.com/blog/how-to-create-ssh-keys-on-windows-10/)를 참조하세요).

공개 키 인증을 사용하여 연결하려면 먼저 사용된 인증정보에 공개 키를 추가하십시오:

1. 조직의 인증정보 목록으로 이동하십시오 (메뉴에서 **Credentials(인증정보)** 을 클릭하십시오).
2. 인증정보 목록에서 공개 키를 추가하고자 하는 인증정보를 엽니다.
3. **Import SSH key(SSH 키 가져오기)** 를 클릭합니다.
4. 공개 키를 붙여 넣으십시오. `ssh-rsa`로 시작하는지를 확인합니다.
5. **Import SSH key(SSH 키 가져오기)** 를 클릭합니다.

다음으로 SFTP 클라이언트가 비밀 키를 인식하고 패스워드 대신 비밀 키를 사용하도록 하십시오. 예를 들어 SFTP 명령 줄 인터페이스는 다음 구문을 사용합니다:

```shell
sftp -i [/path/to/your/private-key] user@hostname
```

공개 키를 삭제하려면 지정된 인증정보에 있는 'X'를 클릭하십시오.

또한, [조직 설정](../getting-started/organization-settings#security)에 따라 모든 사용자가 공개 키 인증 만 사용하도록 할 수 있습니다.
