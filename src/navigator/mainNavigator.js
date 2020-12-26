import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen216354Navigator from '../features/BlankScreen216354/navigator';
import BlankScreen116353Navigator from '../features/BlankScreen116353/navigator';
import BlankScreen014746Navigator from '../features/BlankScreen014746/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen216354: { screen: BlankScreen216354Navigator },
BlankScreen116353: { screen: BlankScreen116353Navigator },
BlankScreen014746: { screen: BlankScreen014746Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
