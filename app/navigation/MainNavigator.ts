import React from 'react';
import {
  NavigationNavigator,
  NavigationRouteConfigMap
} from 'react-navigation';
import {
  createBottomTabNavigator,
  NavigationBottomTabOptions,
  NavigationTabProp
} from 'react-navigation-tabs';

import HomeScreen from 'app/screens/HomeScreen';
import ProfileScreen from 'app/screens/ProfileScreen';
import { RouteNames } from 'app/navigation';

export class MainNavigator {
  private static Routes: NavigationRouteConfigMap<NavigationBottomTabOptions, NavigationTabProp>;
  private static Navigator: any;

  static generateMainRoutes(): NavigationRouteConfigMap<NavigationBottomTabOptions, NavigationTabProp> {

    if (!!this.Routes) {

      return this.Routes;
    }

    this.Routes = {
      [RouteNames.APP.HOME]: HomeScreen,
      [RouteNames.APP.PROFILE]: ProfileScreen
    };

    return this.Routes
  }

  static getMainNavigator(initialRoute: string = '') {

    if (!!this.Navigator) {

      return this.Navigator;
    }

    if (!this.Routes) {
      
      this.generateMainRoutes();
    }

    this.Navigator = createBottomTabNavigator(
      this.Routes,
      {
        initialRouteName: RouteNames.APP.DEFAULT,
      });

    return this.Navigator;
  }
}
