/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    // We haven't supported multiple languages...
    // const langPart = `${language ? `${language}/` : ''}`;
    const langPart = '';
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <a href={this.props.config.baseUrl} className="nav-home">
              {this.props.config.footerIcon && (
                <img
                  src={this.props.config.baseUrl + this.props.config.footerIcon}
                  alt={this.props.config.title}
                  width="66"
                  height="58"
                />
              )}
            </a>
          </div>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started/setup', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('#analysis-tools', this.props.language)}>
              Analysis Tools
            </a>
            <a href={this.docUrl('enterprise/resources', this.props.language)}>
              Enterprise
            </a>
          </div>
          <div>
            <h5>Sider</h5>
            <a href="https://sider.review/">
              Sider Top
            </a>
            <a href="https://sider.review/terms">
              Terms of Service
            </a>
            <a href="https://sider.review/">
              Privacy
            </a>
          </div>
          <div>
            <h5>Social</h5>
            <a href="https://blog.sideci.com">Blog</a>
            <a href="https://github.com/sider">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/sider/sider-docs/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
