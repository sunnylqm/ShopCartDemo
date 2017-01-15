/**
 * Created by sunny on 15/01/2017.
 */
/**
 * Created by sunny on 15/01/2017.
 */
/**
 * Created by tdzl2003 on 12/17/16.
 */
import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    borderTopColor: '#f5f5f5',
    borderTopWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
  },
  selectWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  selectText: {
    marginLeft: 5,
  },
  checkout: {
    backgroundColor: '#f23030',
    paddingHorizontal: 20,
    height: 50,
    justifyContent: 'center',
  },
  checkoutText: {
    fontSize: 18,
    color: '#fff',
  }
});
import { observer } from 'mobx-react/native';

import Circle from '../components/Circle';

@observer
export default class Footer extends Component {
  goBack = () => {
    const { navigator } = this.props;
    navigator.pop();
  };
  selectAll = (checked) => {
    alert(checked);
  };
  render() {
    const { cartData } = this.props;
    return (
      <View style={styles.root}>
        <View style={styles.selectWrapper}>
          <Circle onPress={this.selectAll} />
          <Text style={styles.selectText}>全选</Text>
        </View>
        <Text>总计：￥{cartData.sum.get()}</Text>
        <TouchableOpacity
          style={styles.checkout}
          onPress={this.checkout}
        >
          <Text style={styles.checkoutText}>去结算({cartData.count.get()})</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
