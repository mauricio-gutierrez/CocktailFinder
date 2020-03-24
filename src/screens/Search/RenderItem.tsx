import {Cocktail} from '../../helpers/cocktails';
import {ListItem} from 'react-native-elements';
import styles from './styles';

type RenderItemType = {
  item: Cocktail;
};
export const renderItem = ({item}: RenderItemType) => (
  <ListItem
    style={styles.item}
    chevron={false}
    title={item.strDrink}
    leftAvatar={{source: {uri: item.strDrinkThumb}}}
    bottomDivider
  />
);
