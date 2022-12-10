import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Title } from './styles';
import * as Data from './mock.json';

export default function Home() {
  const userData = Data;
  const name = userData.user.name;
  const dailyExercises = userData.exercises[0].upperBody[0];
  console.log(JSON.stringify(dailyExercises));

  return (
    <Container>
      <Title>Bom Dia {name} </Title>
      <Title>{dailyExercises.arms.name}</Title>
      <Title>{dailyExercises.shoulders.name}</Title>
      <Title>{dailyExercises.biceps.name}</Title>

      <StatusBar style="auto" />
    </Container>
  );
}
