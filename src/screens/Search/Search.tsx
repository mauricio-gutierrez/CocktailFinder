import React, {useState} from 'react';
import {SafeAreaView, View, FlatList, StatusBar} from 'react-native';
import State from '../../reducers';
import {SearchBar} from 'react-native-elements';
import {connect} from 'react-redux';
import * as coctailActions from '../../actions/cocktail';
import styles from './styles';
import {Cocktail} from '../../helpers/cocktails';
import {renderItem} from './RenderItem'

const keyExtractor = (item: Cocktail, index: any) => index.toString();


type Props = {
  search: (search: string) => void;
  clean: () => void;
  searching: boolean;
  cocktails: [];
};

const Search: React.FC<Props> = ({search, clean, searching, cocktails}) => {
  const [searchStr, setSearchStr] = useState('');

  const updateSearch = (searchInput: string) => {
    setSearchStr(searchInput);

    if (searchInput.length > 2) {
      search(searchInput);
    } else {
      clean();
    }
  };

  return (
    <SafeAreaView style={styles.safeAerea}>
      <StatusBar backgroundColor="#fafafa" barStyle="dark-content" />
      <SearchBar
        inputContainerStyle={styles.input}
        containerStyle={styles.searchbar}
        lightTheme={true}
        showCancel={true}
        cancelButtonTitle="Cancel"
        placeholder="Search..."
        onChangeText={updateSearch}
        value={searchStr}
        showLoading={searching}
      />
      <View style={styles.main}>
        <FlatList
          keyExtractor={keyExtractor}
          data={cocktails}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: State) => {
  return state.cocktailReducer;
};

export default connect(mapStateToProps, coctailActions)(Search);
