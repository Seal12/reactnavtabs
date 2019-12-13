import {
  createAppContainer,
  NavigationContainer,
  NavigationNavigator,
  NavigationRouteConfigMap,
  NavigationSwitchProp,
  createSwitchNavigator
} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';

import {
  AuthNavigator,
  MainNavigator,
  RouteNames,
  NavigationScaffold
} from 'app/navigation';

export class AppNavigator implements NavigationScaffold {
  private static Routes: any;
  private static NavigationContainer: NavigationContainer;
  private static Navigator: NavigationNavigator<{}, NavigationSwitchProp>;

  static generateRoutes(): any {

    if (!!this.Routes) {

      return this.Routes;
    }

    this.Routes = {
      [RouteNames.AUTH.BASE]: AuthNavigator.getAuthNavigator(),
      [RouteNames.APP.BASE]: MainNavigator.getMainNavigator()
    };

    return this.Routes;
  }

  static getNavigator(initialRoute: string): NavigationNavigator<{}, NavigationSwitchProp> {

    if (!!this.Navigator) {

      return this.Navigator;
    }

    if (!this.Routes) {

      this.generateRoutes();
    }

    this.Navigator = createSwitchNavigator(
      this.Routes,
      {
        initialRouteName: initialRoute,
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: '#009FFD'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }
      });

    return this.Navigator;
  }

  static getNavigationContainer(initialRoute: string = null): NavigationContainer {

    if (!!this.NavigationContainer) {

      return this.NavigationContainer;
    }

    if (!this.Navigator) {
      this.getNavigator(initialRoute);
    }

    this.NavigationContainer = createAppContainer(this.Navigator);

    return this.NavigationContainer;
  }
  
}