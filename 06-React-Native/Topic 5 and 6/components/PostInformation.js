import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/postInformationStyle';
import { SocialIcon, Icon } from 'react-native-elements'

export class PostInformation extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (            
                <View style={styles.articuleContainer} >
                    <View style={styles.articuleInformationArea}>
                        <View style={styles.titleContainer}>
                            <Text style={[styles.header, styles.title]}>{this.props.title}</Text>
                        </View>
                        <View style={styles.autorContainer}>
                            <Text style={styles.header}>
                                <Text>by </Text>
                                <Text style={styles.autorName}> {this.props.autorName}</Text>
                            </Text>
                        </View>
                        <View style={styles.articuleContentContainer}>
                            <Text style={styles.articuleContent}>
                                {this.props.articuleContent}
                            </Text>
                        </View>
                        <View style={styles.iconsContainer}>
                            <View style={styles.commentsContainer}>
                                <Icon name='comment'
                                    type='evilicon'
                                    style={styles.socialIcons}
                                />
                                <Text style={styles.commentCounter}>{this.props.commentsCount}</Text>
                            </View>

                            <SocialIcon
                                type='twitter'
                                style={styles.socialIcons}
                            />
                            <SocialIcon
                                type='facebook'
                                style={styles.socialIcons}

                            />
                            <SocialIcon
                                type='linkedin'
                                style={styles.socialIcons}

                            />
                            <SocialIcon
                                type='pinterest'
                                style={styles.socialIcons}
                            />

                        </View>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.smallSize}
                            resizeMode="contain"
                            source={{uri: this.props.imageUrl}}
                        />
                    </View>
                </View>
                
        )
    }
}
const borderLimits = (color) => {
    return {
        borderColor: color,
        borderWidth: 7
    }
}