---
sidebar_label: 'Supported and unsupported file operations in SFTP'
title: 'Supported and unsupported file operations in SFTP'
sidebar_position: 4
---
All common commands to create, read, update, and delete files and directories are supported.

Files are stored as objects on Amazon S3 and directories are managed as folder objects in S3. Directory rename operations, file append operations, changing ownership, permissions, file timestamps, and the use of symbolic and hard links are not supported.
