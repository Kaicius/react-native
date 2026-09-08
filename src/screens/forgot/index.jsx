import { Text } from "react-native"
import { Button, Container, Input } from "./style.js"
import { useNavigation } from "@react-navigation/native"
import AlertBanner from "@/components/banner"

const Forgot = () => {
    const navigation = useNavigation()
    return (
        <Container>
            <Text style={{fontSize: 30}}>Esqueci a senha</Text>
                <Input placeholder="Email:" keyboardType="Email-address"></Input>
            <Button onPress={() => navigation.navigate("DetailsModal", {type:"success", title:"Feito", description:"senha alterada com sucesso"})}>
                <Text style={{color: "white", alignSelf: "center", fontSize: 15}}>Confirmar</Text>
            </Button>
            <AlertBanner />
        </Container>
    )
}

export default Forgot