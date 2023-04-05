---
sidebar_label: 'Webhook 통지'
title: 'Webhook 통지를 이용한 특정 처리를 트리거하기'
sidebar_position: 1
---
Webhook은 SFTP To Go 조직의 스토리지 내의 특정 이벤트가 발생할 때 통지를 받게 할 수 있습니다. 다음 이벤트에 대해 통지를 설정할 수 있습니다:

* 파일 / 디렉토리 작성
* 파일 / 디렉토리 삭제

WebHook 통지는 선택한 URL에 대한 HTTP POST 요청으로 전송됩니다. WebHook과 통합하려면 이러한 요청을 수신하고 처리 할 수있는 서버 엔드 포인트를 구현해야 합니다.

:::참고
당사의 Webhook은 자체 서명된 인증서에서는 작동하지 않습니다. WebHook이 자체 서명 인증서를 감지하면 오류가 발생하고 요청이 전송되지 않습니다.
:::

Webhook을 구독하려면 메뉴에서 **Webhooks** 를 클릭하고 `Add webhook` 버튼을 클릭하십시오.

열린 대화 상자에서 다음과 같이 입력하십시오:

* 별명 (선택 사항) - Webhook의 설명 이름입니다.
* 엔드포인트  
  * URL - 모든 webhook 알림을 받는 엔드포인트의 HTTPS URL
  * 유형 - 지원되는 엔드포인트 유형 중 하나를 선택하십시오:  
    * Webhook - 엔드포인트 URL에 HTTP POST 요청을 송신합니다.
    * Slack - 유효한 [Slack 착신 webhook URL](https://slack.com/oauth/v2/authorize?client_id=754603809072.3867924020054&scope=incoming-webhook&user_scope=)인 엔드포인트 URL로 Slack 메시지를 보냅니다.  
* 인증 헤더 (선택사항) - 모든 Webhook 통지에 포함된 커스텀 Authorization 헤더입니다.
* 토픽 - 알림을 받고자 하는 통지 유형을 선택하십시오. 하나 이상의 토픽을 포함해야 합니다.
* 필터 - 필터링 규칙을 적용하여 지정된 조건을 충족하는, 즉 특정 속성을 갖는(또는 갖지 않는) 통지를 트리거합니다.

`Add webhook` 를 클릭하여 완료합니다.

### Webhook의 안전성 확보

Webhook을 만들 때 서명의 비밀이 생성되어 단 한 번만 표시됩니다. 

각 요청은 X-Hub-Signature 헤더를 통해 SFTP To Go로 서명됩니다. 요청의 신뢰성을 확인하려면 서명의 비밀을 복사하여 Webhook 서명을 인증하면 됩니다. 서명의 비밀은 항상 갱신하여 새롭게 할당할 수 있습니다.

또한 인증 헤더를 사용하여 요청이 실제로 SFTP To Go에서 진행되는지 확인할 수 있습니다. 올바르게 설정되면 인증 헤더가 요청의 `인증` 헤더로 전달됩니다. 이 헤더는 서버에서 선택한 인증 메커니즘을 사용하여 검증되어야 합니다.

### Webhook 관리

Webhook을 만든 후 다음 작업을 수행할 수 있습니다:

* 일시정지 / 재개 - Webhook 통지를 일시 정지하거나 재개합니다.
* 비밀 회전 - 새로운 사인 비밀 (signing secret)을 요청합니다. [Webhook 안정성](#securing-webhooks)을 참조하십시오.
* Ping Webhook - 엔드포인트로 테스트 이벤트를 수동으로 보냅니다.
* 송신로그 표시 - SFTP To Go가 송신한 통지의 로그를 보여줍니다. 각 통지는 상태 (`Succeeded`, `Failed`, `Pending` 중 하나), `Created` 타임 스탬프, `ID`, `Topic` (`file.created`, `file.delete`, `webhook.ping` 중 하나) 및 `Duration`이 포함됩니다. 또한 `Request payload`, `Response code`, 및 `Response body`을 표시하고 Webhook 배포 대화상자에서 수동으로 Webhook 페이로드를 수동으로 보낼 수도 있습니다. 

### Webhook 받기

등록한 Webhook 이벤트가 발생하면 SFTP To Go는 서버 엔드포인트에 POST 요청을 보냅니다.

이 요청의 진위는 다음 방법 중 하나에서 확인할 수 있습니다:

* 요청의 인증 헤더는 통지에 가입할 때 제공된 값과 일치하는가.
* 요청된 X-Hub-Signature 헤더에는 요청 본문의 HMAC SHA256 서명 (구독 시점에 제공된 규정된 비밀값으로 서명)이 포함됩니다.

결과는 다음과 같은 Webhook 통지 요청입니다:

```
POST https://webhook.site/394f2074-e56f-4110-7bf7-ca14a1f48b7c
Authorization: Bearer 01234567-89ab-cdef-0123-456789abcdef
X-Hub-Signature: cLcN5U5x+jHEkANnVaaRwBw7yE4uv4pXdjcY9Cajc7M=
```

```json
{
  "Id": "2e579289-4c4a-4085-9b43-74020865cdda",
  "Topic": "webhook.ping",
  "UpdatedAt": 1590911947688,
  "CreatedAt": 1590911947688,
  "Actor": {
    "Type": "IAM",
    "Id": "AIDAIKEQXZMPCW5OVTUWU"
  },
  "Resource": "webhook",
  "PreviousData": null,
  "Data": {
    "Topics": [
      "file.deleted"
    ],
    "State": "enabled",
    "Alias": "Test Webhook",
    "CreatedAt": 1590501031122,
    "Id": "6b1c6f0c-52c1-47a6-9344-57a4579ced68",
    "OrganizationId": "d57060b1-23fe-2d59-afd0-7f56d9e1fc55",
    "UpdatedAt": 1590911941179,
    "Url": "https://webhook.site/394f2074-e56f-4110-7bf7-ca14a1f48b7c"
  },
  "Metadata": {
    "Webhook": {
      "Id": "6b1c6f0c-52c1-47a6-9344-57a4579ced68"
    },
    "Delivery": {
      "Id": "c7ce90e6-5708-43b1-a052-13991f45c771"
    },
    "Attempt": {
      "Id": "2e241efe-d22f-4fe7-aab9-adcde63fca6d"
    },
    "Event": {
      "Id": "2e579289-4c4a-4085-9b43-74020865cdda",
      "Topic": "webhook.ping"
    }
  } 
}
```

알림을 받았음을 보여 주려면 항상 200 레벨 상태 코드로 응답해야 합니다. SFTP To Go는 응답의 본문을 무시하기 때문에 빈 204 상태가 이상적입니다:

```
204 No Content
```

:::비고
200 레벨 상태 코드를 반환하지 않으면 SFTP To Go는 실패라고 기록합니다. 실패의 내용은 송신로그에서 확인할 수 있습니다.
:::

`Actor` 키에는 작업을 실행 한 사용자에 대한 정보가 포함되어 있습니다. 작업이 SFTP 사용자에 의해 실행될 경우 `Type` 은 `User` 이고, `Id` 는 사용자 이름입니다. IAM 사용자 (S3 API를 통해)에 의해 작업이 실행되면 `Type` 은 `IAM` 이고 `Id` 는 IAM의 사용자 ID입니다.

### file.created 이벤트 형식

```json
{
  "Id": "36cd78bc-0662-43b1-a7aa-0cde4876ab2a",
  "Topic": "file.created",
  "CreatedAt": 1591106805970,
  "UpdatedAt": 1591106805970,
  "Actor": {
    "Type": "User",
    "Id": "4ddb9e1265b8edb7685b4e1a5d129f"
  },
  "Resource": "File",
  "PreviousData": null,
  "Data": {
    "Path": "dir/file1.txt",
    "Size": 357464
  },
  "Metadata": {
    "Organization": {
      "Id": "d57060b1-23fe-2d59-afd0-7f56d9e1fc55"
    },
    "Webhook": {
      "Id": "7f3c5b1d-5df4-409f-bbbd-3ac6a72d8b5a"
    },
    "Delivery": {
      "Id": "0a4ed750-fbb8-4718-8a6c-86c35c9b6348"
    },
    "Attempt": {
      "Id": "2cb02803-b3a4-4ccd-bd19-ad769c51b291"
    },
    "Event": {
      "Id": "36cd78bc-0662-43b1-a7aa-0cde4876ab2a",
      "Topic": "file.created"
    }
  }
}
```

:::활용팁
Data.Path의 값이 `/`로 끝나면 디렉토리가 생성되었음을 나타냅니다. 그렇지 않으면 파일이 생성되었음을 나타냅니다.
:::


### file.deleted 이벤트 형식

```json
{
  "Id": "f63ad40e-711d-482b-979a-dca97281d8b7",
  "Topic": "file.deleted",
  "CreatedAt": 1591106814353,
  "UpdatedAt": 1591106814353,
  "Actor": {
    "Type": "IAM",
    "Id": "AIDAIKEQXZMPCW5OVTUWU"
  },
  "Resource": "File",
  "PreviousData": null,
  "Data": {
    "Path": "dir/file1.txt",
    "Size": null
  },
  "Metadata": {
    "Organization": {
      "Id": "d57060b1-23fe-2d59-afd0-7f56d9e1fc55"
    },
    "Webhook": {
      "Id": "7f3c5b1d-5df4-409f-bbbd-3ac6a72d8b5a"
    },
    "Delivery": {
      "Id": "aecd305e-f080-4c87-b40b-6b3d5d0d17db"
    },
    "Attempt": {
      "Id": "7dc9f0dc-06ad-4585-a9fd-5ac36d73f817"
    },
    "Event": {
      "Id": "f63ad40e-711d-482b-979a-dca97281d8b7",
      "Topic": "file.deleted"
    }
  }
}
```

:::활용팁
Data.Path의 값이 `/`로 끝나면 디렉토리가 생성되었음을 나타냅니다. 그렇지 않으면 파일이 생성되었음을 나타냅니다.
:::


### webhook.ping 이벤트 형식

```json
{
  "Id": "2e579289-4c4a-4085-9b43-74020865cdda",
  "Topic": "webhook.ping",
  "CreatedAt": 1590911947688,
  "UpdatedAt": 1590911947688,
  "Resource": "webhook",
  "PreviousData": null,
  "Data": {
    "Topics": [
      "file.created",
      "file.deleted"
    ],
    "State": "paused",
    "Alias": "Test Webhook",
    "CreatedAt": 1590501031122,
    "Id": "6b1c6f0c-52c1-47a6-9344-57a4579ced68",
    "OrganizationId": "d57060b1-23fe-2d59-afd0-7f56d9e1fc55",
    "UpdatedAt": 1590911941179,
    "Url": "https://webhook.site/394f2074-e56f-4110-7bf7-ca14a1f48b7c"
  },
  "Metadata": {
    "Webhook": {
      "Id": "6b1c6f0c-52c1-47a6-9344-57a4579ced68"
    },
    "Delivery": {
      "Id": "c7ce90e6-5708-43b1-a052-13991f45c771"
    },
    "Attempt": {
      "Id": "2e241efe-d22f-4fe7-aab9-adcde63fca6d"
    },
    "Event": {
      "Id": "2e579289-4c4a-4085-9b43-74020865cdda",
      "Topic": "webhook.ping"
    }
  }
}
```
