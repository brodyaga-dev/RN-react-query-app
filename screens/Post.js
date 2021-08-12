import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import usePost from '../hooks/usePost';

import { Text } from '../components/Text';
import colors from '../constants/colors';

export const Post = ({ route }) => {
	const { post } = route && route.params;
	const { data: comments, isSuccess, isLoading } = usePost(post.id);

	return (
		<ScrollView style={styles.container}>
			<Text style={styles.header}>{post.title}</Text>
			<View style={styles.post}>
				<Text>{post.body}</Text>
			</View>

			{isLoading && <Text style={{ textAlign: 'center' }}>Loading...</Text>}

			{isSuccess && (
				<React.Fragment>
					<Text style={styles.commentHeader}>Comments</Text>
					{comments.map((comment) => (
						<View key={comment.id} style={styles.post}>
							<Text>{comment.body}</Text>
							<Text>{comment.email}</Text>
						</View>
					))}
				</React.Fragment>
			)}
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		padding: 30
	},
	header: {
		textAlign: 'center',
		textTransform: 'capitalize',
		fontWeight: 'bold',
		fontSize: 40,
		color: colors.primary,
		paddingVertical: 10
	},
	commentHeader: {
		textAlign: 'center',
		textTransform: 'capitalize',
		fontWeight: 'bold',
		fontSize: 30,
		color: colors.primary,
		paddingVertical: 30
	},
	post: {
		flex: 1,
		paddingVertical: 10,
		alignItems: 'center'
	}
});
