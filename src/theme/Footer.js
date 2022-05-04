import React from 'react';
import Link from '@docusaurus/Link';

// Default implementation, that you can customize
export default function Footer({children}) {
  const year = new Date().getFullYear();

  return <footer class="margin-bottom--md margin-top--md">
    <div class="container container--fluid">
      <div class="text--center">
        <a class="" href="/terms-of-service">Terms</a>
        <a class="margin-left--md" href="/privacy">Privacy</a>
        <a class="margin-left--md" href="/security">Security</a>
        <a class="margin-left--md" href="https://status.crazyantlabs.com/" rel="noopener noreferrer" target="_blank">Status</a>
        <a class="margin-left--md" href="/docs/" rel="noopener noreferrer" target="_blank">Docs</a>
        <a class="margin-left--md" href="mailto:support@crazyantlabs.com" rel="noopener noreferrer" target="_blank">Contact us</a>
        <a class="margin-left--md" href="/integrations/" rel="noopener noreferrer" target="_blank">Integrations</a>
        <a class="margin-left--md" href="/pricing">Pricing</a>
        <a class="margin-left--md" href="/blog/" rel="noopener noreferrer" target="_blank">Blog</a>
        <a class="margin-left--md" href="/about">About</a>
      </div>
      
    </div>
    <div class="text--center">
        <div class="copyright text-center text-muted">© {year} 
          <a href="https://crazyantlabs.com" rel="noopener noreferrer" target="_blank"> Crazy Ant Labs</a></div>
      </div>
  </footer>
}