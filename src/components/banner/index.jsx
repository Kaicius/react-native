import * as AB from './style'

const AlertBanner = () => {
    const { type } = tpe    

    function BannerType(type) {
        switch (type) {
            case "danger":
                return "../../assets/Danger.png"
                break;
            case "success":
                return "../../assets/Success.png"
                break;
            case "alert":
                return "../../assets/Alert.png"
                break;
            
            default:
                return "../../assets/Info.png"
                break;
        }
    }
    return (
        <AB.Container>
            <AB.banner source={BannerType()} />
        </AB.Container>
    )
}


export default AlertBanner