import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PostItem = ({ post }) => {
  const [isDetailsDisplayed, setIsDetailsDisplayed] = useState(false);

  const _toggleDisplayDetails = () => {
    setIsDetailsDisplayed(!isDetailsDisplayed);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.user}>Posté par {post.user}</Text>
      <Image source={{ uri: post.photoLink }} style={styles.image}/>
      {isDetailsDisplayed ? (<Text style={styles.description}>{post.description}</Text>) : null}
      <Button style={styles.Button} title={isDetailsDisplayed ? 'fermer' : 'infos'} onPress={_toggleDisplayDetails}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  description: {
    marginTop: 10,
  },
  button: {
    color: 'red',
  }
});

export default PostItem;
