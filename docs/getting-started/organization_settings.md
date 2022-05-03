---
sidebar_label: 'Organization Settings'
title: 'Organization Settings'
sidebar_position: 4
---
To manage your organization, security, billing, and team settings, click **Settings** from the menu.

## Security

SFTP To Go allows several authentication methods, which are ways to identify the client when they are logging into the server:

* Password authentication - identification based on username and password. This authentication method can be used with both SFTP and FTPS protocols.

* Public key authentication - identification based on username and a cryptographic system that uses pairs of keys. To use it, add a public SSH key to each one of the credentials. This form of authentication is only supported by the SFTP protocol.

## Inbound network rules

Inbound network rules define IP address ranges from which a user can connect to your storage using the SFTP or FTPS protocols.

The organization level rules define the IP ranges from which any set of credentials can be used to login to your cloud storage.

By default, there is a single rule that allows access from any IP address to both the SFTP and FTPS endpoints.

To restrict access to your storage, you may edit, disable, or delete this rule, and either add rules at the organization level or at the 
[credentials level](../getting-started/creating_and_modifying_users.md)
To add a new inbound rule:

1. Click **Add inbound rule**.
2. Select the protocols you'd like to give access to (All, SFTP or FTPS).
4. Fill out the source IP address or CIDR for IP address range.
5. Add an optional description.
6. Click 'Add inbound rule'.

You can also edit, disable, enable, and delete inbound network rules by clicking the menu button (...) on a specific network rule followed by the relevant menu item.

> Note: editing inbound network rules is only available with certain plans. Read more about our different plans [here](https://sftptogo.com/pricing)

## Organization

The organization is the top level object that holds the storage, credentials, webhook notifications, and billing information. 

Within the organization section, you may change your organization's name and obtain your organization's unique identifier, which we may request from you during support conversations.

## Billing

To change your organization's billing plan, Scroll to the billing section and click **Open your billing portal**.

In the billing portal, you can change your billing details (including credit card details), change or cancel your plan, and download your historical invoices.

If you are billed for SFTP To Go by a partner (e.g. Heroku), the billing section may not show up in your organization section. You can change your billing settings through the relevant partner's website.

> Note: if you'd like to change your plan during a trial, we ask that you please reach out to us via the live-chat button on the bottom-right corner of the screen and request that we modify it. Otherwise, you may be charged.

## Access - team management

The access section lists the accounts that have access to an organization's management dashboard.

