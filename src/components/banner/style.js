import styled from "styled-components/native";

const Overlay = styled.View`
    flex: 1;
    justify-content: flex-end;
`

const Container = styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 24px;
`
const Container2 = styled.View`
    height: 40%;
    background-color: white;
    border-top-right-radius: 24px;
    border-top-left-radius: 24px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 64px;
    gap: 24px;
`

const banner = styled.Image`
    width: 350px;
    height: 350px;
    object-fit: contain;
    position: absolute;
    left: -170px;
    top: -590px;
    
    shadow-color: #000;
    shadow-offset: 0px -1px;
    shadow-opacity: 0.1;
    shadow-radius: 3px;

`

const Title = styled.Text`
    font-size: 32px;

`
const Btext = styled.Text`
    font-size: 12px;
    color: white;
`

const Description = styled.Text`
    font-size: 16px;
`
const CloseBtn = styled.TouchableOpacity`
    position: absolute;
    top: 12px;
    right: 12px;
`

const IconCircle = styled.View`
    width: 72px;
    height: 72px;
    border-radius: 72px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Butons = styled.TouchableOpacity`
    background-color: black;
    padding: 12px;
    border-radius: 20px;
`

const Container3 = styled.View`

`

const BannerMsg = styled.Text`
    font-size: 12px;
    position: absolute;
    top: -413px;
    left: -137px;
    font-weight: 300;
`

const BannerTitle = styled.Text`
    font-size: 12px;
    position: absolute;
    left: -137px;
    top: -435px;
    font-weight: 700;
    color: #147914;
    z-index: 1;
`

export { Container, Container3, Title,  BannerTitle, Description, BannerMsg ,CloseBtn, Overlay, IconCircle, Butons, Btext, Container2, banner }