import React,{useState} from 'react';
import {Modal,View,TouchableOpacity,Text,StyleSheet, BackHandler} from 'react-native';


const FilterOption=({active,Handler})=>{
    
    return(
    
            <Modal
                  animationType="slide"
                  transparent={true}
                  visible={active}
                  onRequestClose={() => {
                    console.warn("closed");
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.View}>
                      <Text style={styles.text}>Select the option</Text>
                      <View
                        style={{
                          flexDirection: "column",
                          justifyContent:'center',
                          alignItems:'center'
                        }}
                      >
                        <TouchableOpacity
                          style={{
                         
                        
                         
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                            margin:5,
                          }}
                          onPress={() => {
                             Handler('Price:Low to High')
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                              padding:6,
                            }}
                          >
                            Price:Low to High
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          title="No"
                          style={{
                       
                        
                          
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                            margin:5,
                          }}
                          onPress={() => {
                            Handler("Price:High to Low");
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                              padding:6,
                            }}
                          >
                            Price:High to Low
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          title="No"
                          style={{
                     
                        
                          
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                            margin:5,
                          }}
                          onPress={() => {
                            Handler('Customer Review')
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                              padding:6,
                            }}
                          >
                            Customer Review
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          title="No"
                          style={{
                          
                        
                           
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                            margin:5,
                          }}
                          onPress={() => {
                            Handler('New and popular')
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                              padding:6,
                            }}
                          >
                            New and popular
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          title="No"
                          style={{
                          
                        
                           
                            backgroundColor: "rgba(149, 112, 255, 0.7)",
                            borderRadius: 20,
                            margin:5,
                          }}
                          onPress={() => {
                            Handler('No filter')
                          }}
                        >
                          <Text
                            style={{
                              fontWeight: "400",
                              fontSize: 18,
                              lineHeight: 20.41,
                              textAlign: "center",
                              padding:6,
                            }}
                          >
                           Close
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
       
    )
}

export default FilterOption;

const styles = StyleSheet.create({
    fontstyle: {
      fontSize: 18,
      lineHeight: 20.48,
      margin: 10,
      fontWeight: "400",
      borderStyle: "dotted",
                borderBottomColor: "rgba(201, 201, 201, 1)",
                borderBottomWidth: 2,
    },
    container: {
      flex: 1,
  
      alignItems: "center",
      justifyContent: "center",
    },
    View: {
      backgroundColor: "white",
      height: 280,
      width: 250,
      borderRadius: 15,
      flexDirection: "column",
      justifyContent: "center",
      margin: 10,
      borderRadius: 8,
      borderWidth: 2,
      borderColor: "black",
    },
    text: {
      fontSize: 24,
      fontWeight: "400",
      lineHeight: 27.31,
      color: "black",
      marginBottom: 20,
      textAlign: "center",
      padding:6,
    },
    button: {
      margin: 20,
      width: 200,
    },
  });
  