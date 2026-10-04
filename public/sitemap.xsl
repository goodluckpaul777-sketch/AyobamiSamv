<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Ayobami SAM Ventures</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
            color: #1e1b18;
            background: #faf8f5;
            margin: 0;
            padding: 16px;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            border: 1px solid #e5e0d8;
            overflow: hidden;
          }
          .header {
            background: #0b2419;
            color: #ffffff;
            padding: 20px 24px;
            border-bottom: 2px solid #d4af37;
          }
          .header h1 {
            margin: 0 0 6px 0;
            font-size: 20px;
            font-weight: 800;
          }
          .header p {
            margin: 0;
            font-size: 12px;
            color: #d4af37;
          }
          .content {
            padding: 20px;
          }
          .info {
            background: #f4efe6;
            border-left: 4px solid #0b2419;
            padding: 12px 14px;
            font-size: 12px;
            color: #4a453e;
            margin-bottom: 20px;
            border-radius: 4px;
            line-height: 1.5;
          }
          .table-wrapper {
            overflow-x: auto;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 12px;
          }
          th {
            background: #f9f8f6;
            text-align: left;
            padding: 10px 12px;
            border-bottom: 2px solid #e5e0d8;
            color: #0b2419;
            font-weight: 700;
            text-transform: uppercase;
            font-size: 11px;
            letter-spacing: 0.5px;
          }
          td {
            padding: 10px 12px;
            border-bottom: 1px solid #eee8df;
            vertical-align: middle;
          }
          tr:hover td {
            background: #faf6f0;
          }
          a {
            color: #0b2419;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
            color: #c5a059;
          }
          .priority-badge {
            background: #e8f5e9;
            color: #2e7d32;
            font-weight: 700;
            font-size: 11px;
            padding: 2px 7px;
            border-radius: 10px;
            display: inline-block;
          }
          .changefreq {
            color: #757575;
            font-size: 10px;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Ayobami SAM Ventures — XML Sitemap</h1>
            <p>Official Search Engine Index for Google Search Console, Bing &amp; Crawlers</p>
          </div>
          <div class="content">
            <div class="info">
              This XML Sitemap lists the active public web pages for Ayobami SAM Ventures (37/39 Balogun West, Molake House, Lagos Island). It is actively submitted to Google Search Console.
            </div>
            <div class="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Page URL</th>
                    <th>Priority</th>
                    <th>Change Frequency</th>
                    <th>Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <xsl:variable name="itemURL">
                          <xsl:value-of select="sitemap:loc"/>
                        </xsl:variable>
                        <a href="{$itemURL}" target="_blank">
                          <xsl:value-of select="sitemap:loc"/>
                        </a>
                      </td>
                      <td>
                        <span class="priority-badge">
                          <xsl:value-of select="sitemap:priority"/>
                        </span>
                      </td>
                      <td>
                        <span class="changefreq">
                          <xsl:value-of select="sitemap:changefreq"/>
                        </span>
                      </td>
                      <td>
                        <xsl:value-of select="sitemap:lastmod"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
