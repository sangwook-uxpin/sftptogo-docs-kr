import React from 'react';
import Link from '@docusaurus/Link';

// Default implementation, that you can customize
export default function Footer({children}) {
  const year = new Date().getFullYear();

  return <footer className="margin-bottom--md margin-top--md">
    <div className="container container--fluid">
      <div className="text--center">
        <a className="" href="/terms-of-service">Terms</a>
        <a className="margin-left--md" href="/privacy">Privacy</a>
        <a className="margin-left--md" href="/security">Security</a>
        <a className="margin-left--md" href="https://status.crazyantlabs.com/" rel="noopener noreferrer" target="_blank">Status</a>
        <a className="margin-left--md" href="/docs">Docs</a>
        <a className="margin-left--md" href="mailto:support@crazyantlabs.com" rel="noopener noreferrer" target="_blank">Contact us</a>
        <a className="margin-left--md" href="/integrations/" rel="noopener noreferrer" target="_blank">Integrations</a>
        <a className="margin-left--md" href="/pricing">Pricing</a>
        <a className="margin-left--md" href="/blog/" rel="noopener noreferrer" target="_blank">Blog</a>
        <a className="margin-left--md" href="/about">About</a>
      </div>
      
    </div>
    <div className="text--center">
        <div className="copyright text-center text-muted">© {year} 
          <a href="https://crazyantlabs.com" rel="noopener noreferrer" target="_blank"> Crazy Ant Labs</a></div>
      </div>
  </footer>
}