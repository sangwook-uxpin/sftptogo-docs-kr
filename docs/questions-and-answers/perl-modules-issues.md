---
sidebar_label: 'Perl modules issues'
title: 'Perl modules Issues'
sidebar_position: 3
---
There are known issues of corrupted or empty files that are the result of using clients with Perl modules. If you can't avoid using Perl modules, please make sure to take the following steps:

1. Use the option `backend => 'Net_SSH2'`. Add this to `%attr` and remove `QueueDepth=1`.
2. Make sure that you have access to the CPAN module `Net::SFTP::Foreign::Backend::Net_SSH2`, located on the metacpan website.
3. Use plink or run `"sftp"` within your Perl script using batch mode. Batch mode works well in this case because the command itself is interactive.

If the problem persists, try to reproduce the issue while running [Wireshark](https://support.metageek.com/hc/en-us/articles/200808940-Capturing-Packets-with-WiresharkWe're) to capture network packets and send us Wireshark's output, the paths to your corrupted files, and the name and version of your SFTP client.