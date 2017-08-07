/* TODO flow */
import React, { PureComponent } from 'react';
import { DrawerNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import ConversationsContainer from '../conversations/ConversationsContainer';
import StreamSidebar from '../nav/StreamSidebar';
import PeopleTabs from '../nav/PeopleTabs';

export const StreamsDrawer = DrawerNavigator(
  {
    main: {
      screen: props => <UsersDrawer screenProps={{ streamsNavigation: props.navigation }} />,
    },
  },
  {
    contentComponent: StreamSidebar,
    initialRouteName: 'main',
  },
);

export const UsersDrawer = DrawerNavigator(
  {
    main: {
      screen: props =>
        <MainScreen
          streamsNavigation={props.screenProps.streamsNavigation}
          usersNavigation={props.navigation}
        />,
    },
  },
  {
    contentComponent: props => <PeopleTabs usersNavigation={props.navigation} />,
    initialRouteName: 'main',
    drawerPosition: 'right',
  },
);

export default class MainScreenWithDrawers extends PureComponent {
  render() {
    return <StreamsDrawer />;
  }
}
