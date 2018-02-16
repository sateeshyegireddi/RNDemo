
/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import ComponentProperty from '../ComponentProperty.js';
import ComponentDescription from '../ComponentDescription.js';

export default class UIImage extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title,
  });

  render() {
    const { params } = this.props.navigation.state;
    let sampleCode = 
    '<Image\n\t' +
    'style={styles.image}\n\t' +
    'source={require(\'/img/reactImage.png\')}\n' +
    '/>\n\n' +
    '<Image\n\t' +
    'style={styles.image}\n\t' +
    'source={{ uri: \'http://premium-templates.org/ecommerce/reactnative/images/reactjsicon.png\' }}\n' +
    '/>'
    return (
      <ScrollView>
        <ComponentDescription
            title={'Description'}
            description={'A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.\n' +
                'This example shows fetching and displaying an image from local storage as well as one from network and even from data provided in the \'data:\' uri scheme.\n' +
                'Note that for network and data images, you will need to manually specify the dimensions of your image!'}
        />
        <View style={styles.containerUI}>
                <Image
                    style={styles.image}
                    source={require('../../../img/reactImage.png')}
                />
                <Image
                    style={styles.image}
                    source={{ uri: 'http://premium-templates.org/ecommerce/reactnative/images/reactjsicon.png' }}
                />
        </View>
        <Text style={styles.heading}>
          Props
        </Text>
        <ComponentProperty
          status = {'optional'}
          type = {'style'}
          name = {'style'}
          description = {'\'ImageResizeMode\' is an \'Enum\' for different image resizing modes, set via the \'resizeMode\' style property on \'Image\' components. The values are \'contain, cover, stretch, center, repeat\'.\n\t' +
          '* borderTopRightRadius: number\n\t' + 
          '* backfaceVisibility: enum(\'visible\', \'hidden\')\n\t' +    
          '* borderBottomLeftRadius: number\n\t' + 
          '* borderBottomRightRadius: number\n\t' +          
          '* borderColor: color\n\t' +           
          '* borderRadius: number\n\t' +           
          '* borderTopLeftRadius: number\n\t' +           
          '* backgroundColor: color\n\t' +           
          '* borderWidth: number\n\t' +           
          '* opacity: number\n\t' +           
          '* overflow: enum(\'visible\', \'hidden\')\n\t' +           
          '* resizeMode: Object.keys(ImageResizeMode)\n\t' +          
          '* tintColor: color\n\t\t' + 
          'Changes the color of all the non-transparent pixels to the tintColor.\n\t' + 
          '* overlayColor: string (Android)\n\t\t' +           
          'When the image has rounded corners, specifying an overlayColor will cause the remaining space in the corners to be filled with a solid color. This is useful in cases which are not supported by the Android implementation of rounded corners:\n\t\t' +
          'Certain resize modes, such as \'contain\'\n\t\t' + 
          'Animated GIFs\n\t' + 
          'A typical way to use this prop is with images displayed on a solid background and setting the overlayColor to the same color as the background.'
        }
        />
        <ComponentProperty
          status = {'optional'}
          type = {'number'}
          name = {'blurRadius'}
          description = {'blurRadius: the blur radius of the blur filter added to the image'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'function'}
          name = {'onLayout'}
          description = {'Invoked on mount and layout changes with {nativeEvent: {layout: {x, y, width, height}}}.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'function'}
          name = {'onLoad'}
          description = {'Invoked when load completes successfully.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'function'}
          name = {'onLoadEnd'}
          description = {'Invoked when load either succeeds or fails..'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'function'}
          name = {'onLoadStart'}
          description = {'Invoked on load start.\ne.g., onLoadStart={(e) => this.setState({loading: true})}'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'enum(\'cover\', \'contain\', \'stretch\', \'repeat\', \'center\')'}
          name = {'resizeMode'}
          description = {'Determines how to resize the image when the frame doesn\'t match the raw image dimensions.\n\t' +
          '* cover: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or larger than the corresponding dimension of the view (minus padding).\n\t' +       
          '* contain: Scale the image uniformly (maintain the image\'s aspect ratio) so that both dimensions (width and height) of the image will be equal to or less than the corresponding dimension of the view (minus padding).\n\t' +      
          '* stretch: Scale width and height independently, This may change the aspect ratio of the src.\n\t' +       
          '* repeat: Repeat the image to cover the frame of the view. The image will keep it\'s size and aspect ratio. (iOS only)'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'ImageSourcePropType'}
          name = {'source'}
          description = {'The image source (either a remote URL or a local file resource).\n' + 
          'This prop can also contain several remote URLs, specified together with their width and height and potentially with scale/other URI arguments. The native side will then choose the best \'uri\' to display based on the measured size of the image container. A \'cache\' property can be added to control how networked request interacts with the local cache.\n' + 
          'The currently supported formats are \'png, jpg, jpeg, bmp, gif, webp (Android only), psd (iOS only)\'.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'function'}
          name = {'onError'}
          description = {'Invoked on load error with {nativeEvent: {error}}.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'string'}
          name = {'testID'}
          description = {'A unique identifier for this element to be used in UI Automation testing scripts.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'enum(\'auto\', \'resize\', \'scale\')'}
          name = {'resizeMethod'}
          description = {'The mechanism that should be used to resize the image when the image\'s dimensions differ from the image view\'s dimensions. Defaults to auto.\n\t' + 
          '* auto: Use heuristics to pick between resize and scale.\n\t' +      
          '* resize: A software operation which changes the encoded image in memory before it gets decoded. This should be used instead of scale when the image is much larger than the view.\n\t' +       
          '* scale: The image gets drawn downscaled or upscaled. Compared to resize, scale is faster (usually hardware accelerated) and produces higher quality images. This should be used if the image is smaller than the view. It should also be used if the image is slightly bigger than the view.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'node'}
          name = {'accessibilityLabel (iOS)'}
          description = {'The text that\'s read by the screen reader when the user interacts with the image.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'bool'}
          name = {'accessible (iOS)'}
          description = {'When true, indicates the image is an accessibility element.'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'object: {top: number, left: number, bottom: number, right: number}'}
          name = {'capInsets (iOS)'}
          description = {'When the image is resized, the corners of the size specified by \'capInsets\' will stay a fixed size, but the center content and borders of the image will be stretched. This is useful for creating resizable rounded buttons, shadows, and other resizable assets'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'object: {uri: string,width: number,height: number,scale: number}, ,number'}
          name = {'defaultSource (iOS)'}
          description = {'A static image to display while loading the image source.\n\t' +
          '* uri - a string representing the resource identifier for the image, which should be either a local file path or the name of a static image resource (which should be wrapped in the require(\'./path/to/image.png\') function).\n\t' +
          '* width, height - can be specified if known at build time, in which case these will be used to set the default <Image/> component dimensions.\n\t' +
          '* scale - used to indicate the scale factor of the image. Defaults to 1.0 if unspecified, meaning that one image pixel equates to one display point / DIP.\n\t' +
          '* number - Opaque type returned by something like require(\'./image.jpg\').'}
        />
        <ComponentProperty
          status = {'optional'}
          type = {'object: {top: number, left: number, bottom: number, right: number}'}
          name = {'onProgress (iOS)'}
          description = {'Invoked on download progress with {nativeEvent: {loaded, total}}.'}
        />
        <Text style={styles.heading}>
            Methods
        </Text>
        <ComponentProperty
            status={''}
            type={''}
            name={'getSize()\nstatic getSize(uri: string, success: function, [failure]: function):'}
            description={'Retrieve the width and height (in pixels) of an image prior to displaying it. This method can fail if the image cannot be found, or fails to download.\n' +
            'In order to retrieve the image dimensions, the image may first need to be loaded or downloaded, after which it will be cached. This means that in principle you could use this method to preload images, however it is not optimized for that purpose, and may in future be implemented in a way that does not fully load/download the image data. A proper, supported way to preload images will be provided as a separate API.\n' +            
            'Does not work for static image resources.'}
        />
        <ComponentProperty
          status = {''}
          type = {''}
          name = {'prefetch()\nstatic prefetch(url: string):'}
          description = {'Prefetches a remote image for later use by downloading it to the disk cache'}
        />
        <Text style={styles.heading}> Sample Code </Text>
        <Text style={styles.text}> {sampleCode} </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerUI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    padding: 10,
    fontSize: 20,
    fontStyle: 'normal',
    color: '#005068',
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  image: {
    width: 150,
    height: 150,
  },
});