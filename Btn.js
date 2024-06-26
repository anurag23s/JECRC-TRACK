
import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
export default function Btn({ Press,btnLabel, bgColor, textColor }) {
    return (
        <TouchableOpacity  onPress= {Press}
        style={{ backgroundColor: bgColor, borderRadius: 100, alignItems: 'center', width: 350, paddingVertical: 10, marginVertical: 10,marginHorizontal: 18, marginRight: 70, width: '70%'}}
        >
           
            <Text style={{ color: textColor, fontSize: 26, fontWeight: 'bold'}}>{btnLabel}</Text>

        </TouchableOpacity>
    );
}




