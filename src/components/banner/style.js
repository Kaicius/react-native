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

export { Container, Title, Description, CloseBtn, Overlay, IconCircle, Butons, Btext, Container2, banner }