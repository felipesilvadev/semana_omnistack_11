import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Incidents" component={Incidents} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
}