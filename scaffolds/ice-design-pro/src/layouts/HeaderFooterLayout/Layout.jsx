/* eslint no-undef:0 */
import React, { PureComponent } from 'react';
import cx from 'classnames';
import Layout from '@icedesign/layout';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import './scss/light.scss';
import './scss/dark.scss';

const theme = typeof THEME === 'undefined' ? 'dark' : THEME;

export default class BasicLayout extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <Layout
        style={{ minHeight: '100vh' }}
        className={cx(`ice-design-${theme}`, {
          'ice-design-layout': true,
          'ice-design-header-footer-layout': true,
        })}
      >
        <Header theme={theme} />

        <Layout.Main>{this.props.children}</Layout.Main>

        <Footer />
      </Layout>
    );
  }
}
