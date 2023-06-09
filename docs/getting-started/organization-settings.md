---
sidebar_label: '조직 설정'
title: '조직 설정'
sidebar_position: 4
---
조직, 보안, 사용료청구 및 팀 설정을 관리하려면 메뉴에서 **Settings(설정)** 을 클릭하십시오.

## 보안

SFTP To Go에서는 서버에 로그인할 때 사용자를 식별하는 몇 가지 인증 방법이 있습니다:

* 패스워드 인증 - 사용자 이름 및 비밀번호를 기반으로 한 인증 방법. 이 인증 방법은 SFTP 및 FTPS 프로토콜 모두에서 사용할 수 있습니다.

* 공개 키 인증 - 사용자 이름과 키 쌍을 사용하는 암호화 시스템을 기반으로 식별합니다. 이를 사용하려면 각 인증정보에 SSH 공개 키를 추가하십시오. 이 방식의 인증은 SFTP 프로토콜에서만 지원됩니다.

## 인바운드 네트워크 규칙

인바운드 네트워크 규칙은 사용자가 SFTP 또는 FTPS 프로토콜을 사용하여 스토리지에 연결할 수있는 IP 주소 범위를 정의합니다.

조직 단위의 규칙은 클라우드 스토리지에 로그인하는 데 사용하는 일련의 인증정보에 대한 IP 범위를 정의합니다.

기본 디폴트 설정으로 IP 주소에서 SFTP 및 FTPS의 엔드 포인트로 액세스할 수 있는 하나의 규칙이 있습니다.

스토리지 액세스를 제한하려면 이 규칙을 편집, 무효화 또는 삭제하고, 조직 단위 또는 [인증정보 단위](../getting-started/creating-and-modifying-users.md)에 대한 규칙을 추가하십시오. 새 인바운드 규칙을 추가하십시오:

1. **Add inbound rule(인바운드 규칙 추가하기)** 를 클릭하십시오.
2. 액세스를 허용하고자 하는 프로토콜 (모두, SFTP, 또는 FTPS)을 선택하십시오.
4. IP 주소 범위에 소스 IP 주소 또는 CIDR을 입력하십시오.
5. 옵션으로 설명을 추가하십시오.
6. **Add inbound rule(인바운드 규칙 추가하기)** 를 클릭하십시오.

지정한 인바운드 네트워크 규칙의 메뉴버튼(...)을 클릭하고 관련 메뉴 항목을 클릭하여 인바운드 네트워크 규칙을 편집, 무효화 또는 삭제할 수 있습니다.

:::비고
인바운드 네트워크 규칙은 일부 플랜에서만 이용 가능합니다. 각 플랜에 대한 자세한 내용은 [여기](https://sftptogo.com/pricing)를 참조하세요.
:::

## 조직

조직은 스토리지, 인증정보, Webhook 알림 및 청구 정보를 보유하는 최상위 오브젝트입니다. 

조직 섹션에서는 조직 이름을 변경하거나 조직의 고유 식별자를 취득할 수 있습니다. ※저희 서포트팀에 문의하실 때 조직의 고유 식별자를 통해 확인하는 경우가 있습니다.

## 사용상황 / 청구에 대하여

스토리지 및 대역폭 메트릭을 사용하여 사용 상황 추적합니다. (메트릭은 일정 간격으로 갱신되기에 실시간 업데이트가 아니라는 점 주의하세요.)

조직의 청구 플랜을 변경하려면 결제 섹션으로 스크롤하여 **Open your billing portal(나의 청구 포털 열기)** 를 클릭하십시오.

청구 화면에서 청구 세부정보 (신용카드의 세부정보 포함)의 변경, 플랜의 변경 및 해지, 과거의 청구서 다운로드가 가능합니다.

파트너(Heroku등)로부터 SFPT To Go의 비용청구를 받고 있는 경우에는 조직 섹션에서 청구 섹션이 표시되지 않을 수 있습니다. 파트너의 웹사이트에서 청구 설정을 변경할 수 있습니다.

:::비고
트라이얼 중에 플랜을 변경하려면 화면 오른쪽 하단의 채팅 버튼을 통해 저희에게 연락하여 변경 사항을 문의하십시오. 변경하지 않을 경우 고객의 신용카드로 자동청구가 시작되는 경우가 있습니다.
:::

## 액세스 - 팀 관리

액세스 (Access) 섹션에는 조직의 관리 대시보드에 액세스할 수있는 계정이 나열되어 있으며 어카운트 오너는 더 많은 팀원을 초대하고, 팀원들의 이용상황이나 다중요소인증 상태 등을 확인할 수 있습니다.

새로운 팀원을 조직에 초대하려면 **액세스 (Access)** 섹션으로 스크롤하여 **Invite team member(팀원 초대하기)** 를 클릭하십시오. 팀원의 이름과 이메일 주소를 입력하고 새로운 팀원이 조직에 참여하도록 초대장을 보냅니다. 초대장 링크를 클릭하여 새 팀원의 비밀번호를 만듭니다. 로그인하면 새 팀원이 지정된 역할에 따라 조직에 액세스할 수 있습니다.

:::비고
SFTP To Go에의 액세스가 파트너(Heroku 등)에 의해 관리되고 있는 경우, 파트너의 액세스 관리를 통해 팀원을 추가하거나 삭제하십시오.
:::

조직에서 팀원를 삭제하려면 메뉴버튼(...)을 클릭하고 **Remove from team(팀에서 제거하기)** 를 클릭하십시오.

기존 팀원의 역할을 변경하려면 메뉴버튼(...)을 클릭 한 다음 **Change role(역할 변경하기)** 을 클릭하십시오.

:::비고
계정에는 적어도 하나 이상의 오너 계정이 필요합니다.
:::
