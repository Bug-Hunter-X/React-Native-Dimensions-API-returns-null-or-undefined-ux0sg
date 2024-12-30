import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const MyComponent = () => {
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {
    const getDimensions = () => {
      const { width, height } = Dimensions.get('window');
      setDimensions({ width, height });
    };

    getDimensions();
  }, []);

  if (dimensions === null) {
    return <Text>Loading dimensions...</Text>;
  }

  return (
    <View>
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
    </View>
  );
};

export default MyComponent;