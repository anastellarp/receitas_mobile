import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import { Title, Paragraph, Button, Card } from "react-native-paper";

export default function ReceitaScreens({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: receita.imagem }}
        style={styles.recipeImage}
        resizeMode="cover"
      />
      <Title style={styles.title}>{receita.nome}</Title>
      <Card style={styles.infoCard}>
        <Card.Content>
          <Paragraph style={styles.infoText}>
            Tempo de Preparo: {receita.tempopreparo}
          </Paragraph>
          <Paragraph style={styles.infoText}>
            Porções: {receita.porcoes}
          </Paragraph>
        </Card.Content>
      </Card>

      <Title style={styles.sectionTitle}>Ingredientes</Title>
      <Card style={styles.sectionCard}>
        <Card.Content>
          {receita.ingredientes.map((ingrediente, index) => (
            <Paragraph key={index} style={styles.sectionText}>
              • {ingrediente}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Title style={styles.sectionTitle}>Modo de Preparo</Title>
      <Card style={styles.sectionCard}>
        <Card.Content>
          {receita.modopreparo.map((passo, index) => (
            <Paragraph key={index} style={styles.sectionText}>
              {passo}
            </Paragraph>
          ))}
        </Card.Content>
      </Card>

      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
        contentStyle={styles.buttonContent}
      >
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EDE7F6",
    padding: 20,
  },
  recipeImage: {
    height: 200,
    marginBottom: 20,
    borderRadius: 12,
    borderColor: "#FF0000",
    width: "100%",
    borderWidth: 1,
  },
  title: {
    fontWeight: "bold",
    color: "#1A1A1A",
    textShadowColor: "rgba(0, 0, 0, 0.15)",
    textAlign: "center",
    fontSize: 28,
    textShadowOffset: { height: 1, width: 1 },
    marginBottom: 20,
    textShadowRadius: 3,
  },
  infoCard: {
    padding: 10,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    elevation: 4,
    borderRadius: 10,
  },
  infoText: {
    color: "#4A4A4A",
    fontSize: 16,
    marginVertical: 6,
  },
  sectionTitle: {
    fontWeight: "600",
    marginVertical: 15,
    fontSize: 22,
    color: "#6B4EFF",
  },
  sectionCard: {
    elevation: 4,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionText: {
    fontSize: 16,
    marginVertical: 6,
    color: "#333333",
  },
  button: {
    backgroundColor: "#6B4EFF",
    elevation: 6,
    marginTop: 20,
    borderRadius: 10,
  },
  buttonContent: {
    paddingVertical: 10,
  },
});
    