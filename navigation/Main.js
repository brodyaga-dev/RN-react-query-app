import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Posts } from '../screens/Posts';
import { Post } from '../screens/Post';

const MainStack = createStackNavigator();

export const Main = () => (
	<MainStack.Navigator>
		<MainStack.Screen name="Home" component={Posts} />
		<MainStack.Screen name="Post" component={Post} />
	</MainStack.Navigator>
);
