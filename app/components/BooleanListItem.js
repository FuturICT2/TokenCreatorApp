// https://whatdidilearn.info/2018/12/23/how-to-make-instagram-like-language-selector-in-react-native.html
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';


class BooleanListItem extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.listItem}
        onPress={this.props.onChange}>
        <View style={styles.textWrapper}>
          <Text
            style={[styles.title, (this.props.isActive && styles.active)]
          }>
            {this.props.label}
          </Text>
          {
            this.props.description &&
              <Text style={styles.subtitle}>{this.props.description}</Text>
          }
        </View>
        {
          this.props.isActive &&
            <Icon
              style={styles.active}
              name="ios-checkmark-circle-outline"
              size={30}
            />
        }
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'center',
    padding: 10
  },
  textWrapper: {
    width: '90%',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    color: '#434343'
  },
  subtitle: {
    color: '#AAAAAA'
  },
  active: {
    color: '#03a87c'
  }
});

export default BooleanListItem;
