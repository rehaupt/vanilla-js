import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";

import { Switcher, Notification, UserAvatar } from "@carbon/react/icons";

const TutorialHeader = () => {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Carbon Tutorial">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName href="/" prefix="WEEWX">
            Renton-Woodside
          </HeaderName>
          <HeaderNavigation aria-label="Weather-Carbon-Header">
            <HeaderMenuItem href="/">Today</HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem href="/">Today</HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
          <HeaderGlobalBar>
            <HeaderGlobalAction
              aria-label="Notifications"
              tooltipAlignment="center"
            >
              <Notification />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="User Avatar"
              tooltipAlignment="center"
            >
              <UserAvatar />
            </HeaderGlobalAction>
            <HeaderGlobalAction
              aria-label="App Switcher"
              tooltipAlignment="end"
            >
              <Switcher />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
      )}
    />
  );
};

export default TutorialHeader;
