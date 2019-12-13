import {
  NavigationRouteConfigMap
} from 'react-navigation';
import {
  createStackNavigator,
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack';

import { RouteNames, NavigationScaffold } from 'app/navigation';
import LoginScreen from 'app/screens/LoginScreen'
import RegisterScreen from 'app/screens/RegisterScreen';

const names = {
  Name: 'name'
}

export class AuthNavigator implements NavigationScaffold {
  private static Routes: NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp>;
  private static Navigator: any;

  static generateAuthRoutes(): NavigationRouteConfigMap<NavigationStackOptions, NavigationStackProp> {

    if (!!this.Routes) {

      return this.Routes;
    }

    this.Routes = {
      [RouteNames.AUTH.LOGIN]: {
        screen: LoginScreen,
        path: '',
        navigationOptions: () => ({
          headerBackTitle: null,
          headerShown: false
        })
      },
      [RouteNames.AUTH.REGISTER]: RegisterScreen
    };

    return this.Routes;
  }
  
  static getAuthNavigator() {

    if (!!this.Navigator) {
      
      return this.Navigator;
    }

    if (!this.Routes) {

      this.generateAuthRoutes();
    }

    this.Navigator = createStackNavigator(this.Routes);

    return this.Navigator;
  }
}