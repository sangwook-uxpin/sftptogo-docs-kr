---
sidebar_label: 'SFTP 서비스의 브랜딩'
title: '사용자 지정 SFTP 서버 이름 설정 - SFTP의 브랜드화'
sidebar_position: 1
---
스토리지를 커스터마이즈하려면 SFTP To Go의 호스트 이름을 소유한 도메인 서브도메인으로 교체 할 수 있습니다. 이렇게 하려면 대시보드에서 SFTP To Go의 호스트 이름을 복사하여 그 호스트 이름으로 이동하도록 CNAME 레코드를 추가합니다. 예를 들어 다음과 같습니다:

| 레코드 | 이름 | 대상                               |
|--------|------|--------------------------------------|
| CNAME  | sftp | yellow-rectangle-14793.sftptogo.com. |

다음은 자주 사용되는 도메인 프로바이더의 DNS 레코드 편집에 관한 문서에 대한 링크입니다. DNS 프로바이더가 여기에 나열되지 않은 경우 제공자 웹사이트에 로그인하여 DNS 레코드 추가에 대한 도움말 문서를 검색하십시오.

| DNS 프로바이더 | 문서 |
|---|---|
| AWS Route53 | [지원하는 DNS 레코드 타입](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/ResourceRecordTypes.html#CNAMEFormat) |
| Cloudflare | [Cloudflare에서 DNS 레코드 관리하기](https://support.cloudflare.com/hc/en-us/articles/360019093151) |
| Digital Ocean | [DNS 레코드의 작성, 편집, 삭제 방법에 대하여](https://docs.digitalocean.com/products/networking/dns/how-to/manage-records/#cname-records) |
| Dreamhost | [사용자 정의 DNS 레코드 추가하기](https://help.dreamhost.com/hc/en-us/articles/360035516812-Adding-custom-DNS-records) |
| DNSimple | [CNAME 레코드의 관리](https://support.dnsimple.com/articles/manage-cname-record/) |
| GoDaddy | [CNAME 레코드 추가하기](https://www.godaddy.com/help/add-a-cname-record-19236) |
| Google Domains | [DNS의 기초지식](https://support.google.com/a/answer/48090) |
| Kinsta DNS | [DNS 레코드를 추가하는 방법](https://kinsta.com/knowledgebase/dns/#cname-record) |
| HostGator | [HostGator/eNom에서 DNS 레코드 관리하기](https://www.hostgator.com/help/article/manage-dns-records-with-hostgatorenom) |
| Namecheap | [도메인에서 CNAME 레코드를 작성하는 방법](https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/) |
| Names.co.uk | [도메인의 DNS 설정을 변경하기](https://www.names.co.uk/support/articles/changing-your-domains-dns-settings/) |
| Wordpress | [사용자 정의 DNS 레코드 추가하기](https://wordpress.com/support/domains/custom-dns/#adding-custom-dns-records) |
| Wix | [CNAME 레코드의 추가 및 갱신](https://support.wix.com/en/article/adding-or-updating-cname-records-in-your-wix-account) |

