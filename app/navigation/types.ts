import {
  NavigationContainer,
  NavigationNavigator,
  NavigationRouteConfigMap
} from "react-navigation";

export class NavigationScaffold {
  private static Routes: NavigationRouteConfigMap<any, any>;
  private static NavigationContainer?: NavigationContainer;
  private static Navigator: NavigationNavigator<any, any>;

  public static generateRoutes: () => NavigationRouteConfigMap<any, any>;
  public static getNavigator: () => any;
  public static getNavigationContainer?: () => NavigationContainer;
}
