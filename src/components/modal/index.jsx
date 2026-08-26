import { useNavigation } from '@react-navigation/native'
import * as DM from './style'

const DetailsModal = () => {
    const navigation = useNavigation()
    return (
        <DM.Overlay>
            <DM.Container>
                <DM.Title>Title</DM.Title>
                <DM.Description>Descripton</DM.Description>
                <DM.CloseBtn onPress={() => navigation.navigate("Forgot")}>
                    <DM.CloseBtnText>Close</DM.CloseBtnText>
                </DM.CloseBtn>
            </DM.Container>
        </DM.Overlay>
    )
}

export default DetailsModal