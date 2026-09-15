import * as AB from './style'

const AlertBanner = ({type, message, title}) => {   

    const getBannerConfig = () => {
        switch (type) {
            case "danger":
                return require("../../assets/Danger.png")
                break;
            case "success":
                return {
                    image: require("../../assets/Success.png"),
                    color: "#147914",
                    title: "This is a success",
                    message: "This action was a success"
                }
                break;
            case "alert":
                return require("../../assets/Alert.png")
                break;
            
            default:
                return require("../../assets/Info.png")
                break;
        }
    }
    
    return (
        <AB.Container3>
            <AB.BannerTitle>{getBannerConfig().title}</AB.BannerTitle>
            <AB.banner source={getBannerConfig().image} />
            <AB.BannerMsg>{getBannerConfig().message}</AB.BannerMsg>
        </AB.Container3>
    )
}


export default AlertBanner