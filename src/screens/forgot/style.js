import styled from 'styled-components/native'

const Input = styled.TextInput`
    height: 40px;
    margin: 5px;
    border-width: 1px;
    padding: 10px;
    width: 300px;
    border-radius: 12px;
`
const Container = styled.View`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
`
const Button = styled.TouchableOpacity`
    padding: 10px;
    border-radius: 15px;
    width: 200px;
    background-color: black
`

export { Container, Input, Button }