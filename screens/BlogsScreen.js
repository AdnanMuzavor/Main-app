import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');
import {useDispatch, useSelector} from 'react-redux';
import {AddToLikedBlogs, RemoveLikedBlog} from '../actions/SavedActions';
const BlogScreen = props => {
  const dispatch = useDispatch();
  const saved = useSelector(state => state.saved);
  const {savedblogs} = saved;

  useEffect(() => {
    console.log(props);
    console.log(props.route.params);

    console.log('reload');
  }, [savedblogs]);
  const AddTosaveBlogs = () => {
    dispatch(
      AddToLikedBlogs(
        props.route.params.name,
        props.route.params.reads,
        props.route.params.img,
        props.route.params.body,
      ),
    );
  };
  const RemoveFromSavedBlogs = () => {
    dispatch(RemoveLikedBlog(props.route.params.name));
  };
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <View style={{marginLeft: 18, marginRight: 18, marginTop: 5}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          {savedblogs ? (
            savedblogs.find(e => e.name === props.route.params.name) ? (
              <>
                <TouchableOpacity onPress={RemoveFromSavedBlogs}>
                  <MaterialCommunityIcons
                    name="heart"
                    size={30}
                    style={{color: 'red'}}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity onPress={AddTosaveBlogs}>
                  <MaterialCommunityIcons
                    name="heart"
                    style={{color: 'black'}}
                    size={30}
                  />
                </TouchableOpacity>
              </>
            )
          ) : (
            <>
              <TouchableOpacity onPress={AddTosaveBlogs}>
                <MaterialCommunityIcons
                  name="heart"
                  style={{color: 'black'}}
                  size={30}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View
          style={{
            flexDirection: 'column',

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 26,
              fontWeight: '700',
              textAlign: 'center',
              marginTop: 10,
              lineHeight: 33.23,
              marginBottom: 10,
              color: 'black',
            }}>
            {props.route.params.name}
          </Text>
          <Text
            style={{
              width: 115,
              padding: 4,
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 14.79,
              borderRadius: 7,
              backgroundColor: '#E6F2F4',
              textAlign: 'center',
              marginBottom: 10,
              left: 0,
            }}>
            No. of reads:{props.route.params.reads}
          </Text>
          <Image
            style={{
              flex: 2,
              width: (80 * width) / 100,
              height: (30 * height) / 100,
              borderRadius: 10,
            }}
            source={props.route.params.img}></Image>

          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 20,
              lineHeight: 23,
              color: 'black',
            }}>
            {props.route.params.body}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BlogScreen;
