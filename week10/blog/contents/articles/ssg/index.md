---
title: What is a Static Site?
author: dan
date: 2017-11-27
template: article.jade
---

This is an intro text for my article please read more!

## What is a Static Site?

Think back to the first website you built. Most developers start by creating a series of pages contained within individual HTML files. Each will call in assets such as images, CSS and perhaps a sprinkling of JavaScript. You possibly launched these files directly from the file system without a web server. Life was simple.

Difficulties arise as your site becomes larger and more complex. Consider navigation: it may be similar in every file, but adding a new page requires updates to every other. Even references to CSS and images can become awkward as folder structures evolve. You may have considered options such as server-side includes or PHP, but an easier option can be a content management system (CMS) …

## What is a Content Management System?

A CMS typically provides administrative control panels — which allow authors to write content that’s stored in a back-end database. When a visitor requests a URL, the CMS:

1. determines which page is required
1. requests appropriate content from the database
1. loads an HTML template (normally from the file system)
1. renders the content within the template, and
1. returns a formatted HTML page to the visitor’s browser.

This occurs almost instantly. The template can include code to generate menus according to the navigation hierarchy. Life is sweet, and more than one in four people choose the *PHP/MySQL-powered* open source WordPress CMS to manage their website.

**Unfortunately**, a CMS raises a different set of issues:

* You need to adhere to the CMS’s way of working. It can be awkward to add custom text or components.
* The server is doing more work, and performance can be affected.
* There are additional points of failure. A software upgrade or database failure can bring your site down.

### What is a Static Site Generator?

An SSG is a compromise between using a hand-coded static site and a full CMS, while retaining the benefits of both. In essence, you generate a static HTML-only website using CMS-like concepts such as templates. The content can be extracted from a database but, more typically, Markdown files are used.

The site generation can occur on your development machine or staging server. The resulting HTML files are then deployed to a live web server. Users will never know the difference.

A related concept is a “Headless” or “Decoupled” CMS. These use an interface such as WordPress to handle content administration but allow other systems to access the data via a REST API. Therefore, an SSG could build a static website using WordPress page content extracted from an internal server. The resulting HTML files can be uploaded to a web server — but the WordPress installation need never be accessible from outside the organization.

Popular static site generators include Jekyll, Pelican, Hugo and Metalsmith — see StaticGen for many more. Let’s examine the benefits of using one …

## 1. Flexibility

CMSs normally constrain your options, because they’re tied to a database with specific fields. If you want to add a Twitter widget to some pages, you’ll normally require a plugin, a shortcode or some custom functionality.

In a static site, the widget can simply be inserted into a file directly or using a partial/snippet. There are few limits, because you’re unshackled by the those imposed by a CMS.

## 2. Better Performance

Most CMS applications offer built-in or plugin-powered cache systems to ensure pages are generated and reused when possible. This is effective, although the overhead of managing, validating and re-generating cached pages remains.

Static sites are pre-cached pages which never expire. Files can also be minified prior to deployment to guarantee the smallest load. A static site will always perform better than a CMS-powered version using a similar template.

## 3. Fewer Server-side Dependencies

A typical WordPress installation requires:

* a suitable operating system such as Ubuntu or CentOS
* a web server such as Apache or NGINX
* PHP with associated extensions and web server configurations
* MySQL
* the WordPress application
* any necessary plugins
* the theme/template code.

These dependencies must be installed and managed. *WordPress* requires less effort than some other applications, but it’s still possible for a single update to any part to cause chaos.

A static site is lightweight, and can be hosted by any web server able to return HTML files. There is nothing else to install, manage or update.

## 4. Improved Reliability

A CMS is complex, with many moving parts and points of failure. Run a WordPress site for any length of time and you’ll almost certainly encounter the dreaded “Failed to establish a database connection” error. Unforeseen CMS problems can arise from sudden traffic surges, which crash the database or restrict active connections.

Serving a static site is less intensive — the server just has to return flat files. It’s still possible to crash a web server, but it’ll take considerably more concurrent requests.

## 5. Superior Security

There are several reasons why someone may want to attack your website. Traffic hijacking, rogue advertising, linking, authenticity spoofing and malware hosting all permit an unauthorized user to make monetary and/or kudos gains.

A CMS opens a number of attack vectors. The most obvious is the login screen: it’s only as secure as the weakest user password. Be aware that any page running server-side code also offers potential exploits — for example, firing spam emails via your contact form. It may not be obvious that someone has gained access; the worst culprits want to stay hidden.

A static site has little or no server-side functionality. You cannot access it via scripting or database security holes. Someone could still gain access via SSH or FTP, but they would struggle to do much damage other than defacing pages or uploading files. A quick git status or folder check can reveal break-ins. It’s then simple to change passwords, wipe the whole site and regenerate it again.

## 6. Client Control Considerations

You spend weeks building attractive CMS themes for the client to trash their site within minutes of your hand-over. Using a CMS is not necessarily easy, and it offers considerable power to content editors. You can lock down rights such as plugin installation, but it won’t prevent someone changing fonts, adding weird colors, using poor photography or corrupting the layout.

A static site can use Markdown files. That limits the user’s options; they make fewer mistakes and cannot adversely affect the pages. Some will miss the CMS content administration panels, but you can either:

1. use their existing CMS and cleanse data before generation, or
1. provide simpler workflows such as editing Dropbox files in StackEdit.

## 7. Version Control and Testing

Database data is volatile. A CMS permits users to add, delete or change content on a whim. Wiping the whole site is a few clicks away. You can back up databases but, even if that’s done regularly, you’re still likely to lose some data.

A static site is safe presuming your content is defined in Markdown files and you use a version control system such as Git. Old files are retained, and changes can be undone quickly. Testing becomes easier because the site can be generated and previewed anywhere — even on a client’s PC.

With a little more effort, you can implement deployment systems to build the site on a staging server, then update the live server when new content has been reviewed and approved.
