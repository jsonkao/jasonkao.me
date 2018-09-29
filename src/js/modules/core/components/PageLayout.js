import React, { PureComponent } from 'react';
import { FixedNavbar, Navbar, CelestialCircle } from './';

class PageLayout extends PureComponent {
  state = {
    isFixedNavVisible: false,
    isContentVisible: true,
  };

  showContent = () => this.setState({ isContentVisible: true });

  hideContent = () => this.setState({ isContentVisible: false });

  render() {
    const { children } = this.props;
    const { isFixedNavVisible, isContentVisible } = this.state;

    return (
      <div>
        {isFixedNavVisible ? <FixedNavbar /> : <Navbar />}
        <CelestialCircle
          hideContent={this.hideContent}
          showContent={this.showContent}
        />
        <div style={{ visibility: isContentVisible ? 'visible' : 'hidden' }}>
          {children}
        </div>
      </div>
    );
  }
}

export default PageLayout;
