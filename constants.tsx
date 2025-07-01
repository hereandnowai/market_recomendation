
import React from 'react';
// import { SocialLink } from './types'; // Removed: SocialLink is an interface and not a runtime export.

export const APP_NAME = "Marketing Recommendation Engine";
export const ORG_NAME = "HERE AND NOW AI – Artificial Intelligence Research Institute";
export const ORG_WEBSITE = "https://hereandnowai.com";
export const ORG_EMAIL = "info@hereandnowai.com";
export const ORG_PHONE = "+91 996 296 1000";
export const ORG_SLOGAN = "Designed with passion for innovation";
export const LOGO_URL = "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/HNAI%20Title%20-Teal%20%26%20Golden%20Logo%20-%20DESIGN%203%20-%20Raj-07.png";

export const CARAMEL_AI_FACE_URL = "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/caramel-face.jpeg";
export const CARAMEL_AI_DP_URL = "https://raw.githubusercontent.com/hereandnowai/images/refs/heads/main/logos/caramel.jpeg";
export const CARAMEL_AI_NAME = "Caramel AI";

export const GEMINI_CHAT_MODEL = "gemini-2.5-flash-preview-04-17";
export const GEMINI_CONTENT_MODEL = "gemini-2.5-flash-preview-04-17";

export function NewspaperIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: className },
    React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18V6.375c0-.621.504-1.125 1.125-1.125H9.75V4.5m3 3V4.5m0 3v3.75m0-3.75S13.5 7.5 15 7.5s1.5.75 1.5.75S18 7.5 19.5 7.5s1.5.75 1.5.75" })
  );
}

export function LinkedInIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
    React.createElement('path', { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.776 13.019H3.561V9h3.552v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" })
  );
}

export function InstagramIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
    React.createElement('path', { d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.258.056 2.083.344 2.784.986.744.686 1.053 1.505 1.126 2.784.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.073 1.279-.382 2.098-1.126 2.784-.701.643-1.526.93-2.784.986-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.258-.056-2.083-.344-2.784-.986-.744-.686-1.053-1.505-1.126-2.784-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.073-1.279.382-2.098 1.126-2.784.701-.643 1.526.93 2.784.986 1.266.058 1.646.07 4.85.07zm0-2.163C8.718 0 8.322.016 7.054.072 5.76.13 4.632.428 3.655 1.192c-.99.768-1.7 1.76-1.928 2.94C1.658 5.484 1.64 5.868 1.64 8.714v6.572c0 2.846.018 3.23.087 4.512.072 1.28.375 2.408 1.192 3.385.768.99 1.76 1.7 2.94 1.928 1.352.072 1.736.09 4.678.09s3.326-.018 4.678-.09c1.18-.072 2.172-.375 2.94-1.192.99-.768 1.7-1.76 1.928-2.94.072-1.352.09-1.736.09-4.678s-.018-3.326-.09-4.678c-.072-1.18-.375-2.172-1.192-2.94-.768-.99-1.76-1.7-2.94-1.928C16.516 1.658 16.132 1.64 13.286 1.64H10.714c-2.846 0-3.23.018-4.512.087z" }),
    React.createElement('path', { d: "M12 6.865A5.135 5.135 0 1 0 12 17.135a5.135 5.135 0 0 0 0-10.27zm0 8.27A3.135 3.135 0 1 1 12 8.865a3.135 3.135 0 0 1 0 6.27z" }),
    React.createElement('circle', { cx: "17.234", cy: "6.766", r: "1.25" })
  );
}

export function GitHubIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
    React.createElement('path', { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" })
  );
}

export function XTwitterIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
    React.createElement('path', { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
  );
}

export function YouTubeIcon({ className }) {
  return React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", className: className },
    React.createElement('path', { d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
  );
}

// Removed TypeScript type annotation ': SocialLink[]'
export const SOCIAL_LINKS = [
  { name: "Blog", url: "https://hereandnowai.com/blog", icon: React.createElement(NewspaperIcon, {className: "w-5 h-5"}) },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/hereandnowai/", icon: React.createElement(LinkedInIcon, {className: "w-5 h-5"}) },
  { name: "Instagram", url: "https://instagram.com/hereandnow_ai", icon: React.createElement(InstagramIcon, {className: "w-5 h-5"}) },
  { name: "GitHub", url: "https://github.com/hereandnowai", icon: React.createElement(GitHubIcon, {className: "w-5 h-5"}) },
  { name: "X (Twitter)", url: "https://x.com/hereandnow_ai", icon: React.createElement(XTwitterIcon, {className: "w-5 h-5"}) },
  { name: "YouTube", url: "https://youtube.com/@hereandnow_ai", icon: React.createElement(YouTubeIcon, {className: "w-5 h-5"}) },
];